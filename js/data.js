/* ============================================================
   MedBridge · sample data & plan engine
   NOTE: hospital / physician / protocol content is bilingual
   (zh + en) exactly as a Chinese hospital international desk
   issues it. All UI chrome is fully translated in i18n.js.
   ============================================================ */
(function (global) {
  'use strict';

  /* ---------------- cities (fully translated) ---------------- */
  /* transferKm = typical airport -> hospital distance for the airport-transfer leg */
  var CITIES = [
    { id: 'shanghai',  name: { zh: '上海',     en: 'Shanghai',  ru: 'Шанхай',    ja: '上海',     ar: 'شنغهاي'   }, airport: 'PVG / SHA', transferKm: 48 },
    { id: 'beijing',   name: { zh: '北京',     en: 'Beijing',   ru: 'Пекин',     ja: '北京',     ar: 'بكين'     }, airport: 'PEK / PKX', transferKm: 40 },
    { id: 'guangzhou', name: { zh: '广州',     en: 'Guangzhou', ru: 'Гуанчжоу',  ja: '広州',     ar: 'قوانغتشو' }, airport: 'CAN',        transferKm: 35 },
    { id: 'chengdu',   name: { zh: '成都',     en: 'Chengdu',   ru: 'Чэнду',     ja: '成都',     ar: 'تشنغدو'   }, airport: 'CTU / TFU',  transferKm: 28 },
    { id: 'hangzhou',  name: { zh: '杭州',     en: 'Hangzhou',  ru: 'Ханчжоу',   ja: '杭州',     ar: 'هانغتشو'  }, airport: 'HGH',        transferKm: 30 },
    { id: 'boao',      name: { zh: '海南博鳌', en: 'Boao, Hainan', ru: 'Боао, Хайнань', ja: '海南博鰲', ar: 'بوآو، هاينان' }, airport: 'HAK / SYX', transferKm: 90 }
  ];

  /* lower-cost cities used for the economy tier — tertiary general hospitals only */
  var VALUE_CITIES = ['chengdu', 'hangzhou'];

  /* ---------------- origins ---------------- */
  var ORIGINS = [
    { id: 'ru-mow', label: 'Россия · Москва',        carrier: 'SU / China Eastern', carrierName: 'Aeroflot + China Eastern', code: 'SU208 · MU592', hours: 9.2,  price: 4380 },
    { id: 'kz-ala', label: 'Қазақстан · Алматы',     carrier: 'China Southern',     carrierName: 'China Southern Airlines',  code: 'CZ6052',        hours: 5.4,  price: 3260 },
    { id: 'ae-dxb', label: 'UAE · Dubai',            carrier: 'Emirates',           carrierName: 'Emirates',                 code: 'EK306',         hours: 8.4,  price: 5680 },
    { id: 'sa-ruh', label: 'Saudi Arabia · Riyadh',  carrier: 'Saudia',             carrierName: 'Saudia',                   code: 'SV884 · MU270', hours: 9.6,  price: 6240 },
    { id: 'us-lax', label: 'USA · Los Angeles',      carrier: 'China Eastern',      carrierName: 'China Eastern Airlines',   code: 'MU586',         hours: 13.6, price: 8860 },
    { id: 'th-bkk', label: 'Thailand · Bangkok',     carrier: 'Thai Airways',       carrierName: 'Thai Airways',             code: 'TG664',         hours: 3.5,  price: 2640 },
    { id: 'jp-tyo', label: 'Japan · Tokyo',          carrier: 'ANA',                carrierName: 'All Nippon Airways',       code: 'NH959',         hours: 3.2,  price: 3480 },
    { id: 'de-ber', label: 'Germany · Berlin',       carrier: 'Lufthansa',          carrierName: 'Lufthansa',                code: 'LH7202 · CA932', hours: 11.2, price: 7480 }
  ];

  var BUDGETS = [
    { id: 'b1', zh: '10 万以下',   en: 'Under 100k',   min: 0,      max: 100000 },
    { id: 'b2', zh: '10 - 20 万',  en: '100k – 200k',  min: 100000, max: 200000 },
    { id: 'b3', zh: '20 - 30 万',  en: '200k – 300k',  min: 200000, max: 300000 },
    { id: 'b4', zh: '30 - 50 万',  en: '300k – 500k',  min: 300000, max: 500000 },
    { id: 'b5', zh: '50 万以上',   en: 'Above 500k',   min: 500000, max: 99999999 }
  ];

  /* ---------------- hospitals (bilingual, as issued by intl desk) ---------------- */
  var HOSPITALS = {
    shanghai: [
      { tier: 'A', zh: '上海交通大学医学院附属瑞金医院 · 国际医疗中心', en: 'Ruijin Hospital, SJTU · International Medical Center', level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: 'JCI · 三甲', beds: 2143 },
      { tier: 'B', zh: '上海市第一人民医院 · 国际医疗部',              en: 'Shanghai General Hospital · International Division',  level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 1580 },
      { tier: 'C', zh: '上海中医药大学附属曙光医院 · 国际部',          en: 'Shuguang Hospital, SHUTCM · International Division', level: { zh: '三级甲等 / 中西医结合', en: 'Tertiary Grade A / Integrated' }, acc: '三甲', beds: 1200 }
    ],
    beijing: [
      { tier: 'A', zh: '中国医学科学院北京协和医院 · 国际医疗部',      en: 'PUMC Hospital · International Medical Service',      level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: 'JCI · 三甲', beds: 2000 },
      { tier: 'B', zh: '首都医科大学宣武医院 · 国际医疗部',            en: 'Xuanwu Hospital, Capital Medical University · Intl.', level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 1300 },
      { tier: 'C', zh: '首都医科大学附属北京友谊医院 · 国际医疗中心',  en: 'Beijing Friendship Hospital · International Center', level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 1450 }
    ],
    guangzhou: [
      { tier: 'A', zh: '中山大学附属第一医院 · 国际医疗中心',          en: 'First Affiliated Hospital of SYSU · IMC',            level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 2450 },
      { tier: 'B', zh: '广东省人民医院 · 国际医疗中心',                en: "Guangdong Provincial People's Hospital · IMC",      level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 1900 },
      { tier: 'C', zh: '广州市第一人民医院 · 国际医疗部',              en: "Guangzhou First People's Hospital · International", level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 1100 }
    ],
    chengdu: [
      { tier: 'A', zh: '四川大学华西医院 · 国际医疗中心',              en: 'West China Hospital, SCU · International Center',   level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 4300 },
      { tier: 'B', zh: '四川省人民医院 · 国际医疗中心',                en: "Sichuan Provincial People's Hospital · IMC",        level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 2000 },
      { tier: 'C', zh: '成都市第三人民医院 · 国际医疗部',              en: "Chengdu Third People's Hospital · International",   level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 1250 }
    ],
    hangzhou: [
      { tier: 'A', zh: '浙江大学医学院附属邵逸夫医院 · 国际医疗部',    en: 'Sir Run Run Shaw Hospital, ZJU · International',    level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: 'JCI · 三甲', beds: 1400 },
      { tier: 'B', zh: '浙江省人民医院 · 国际医疗中心',                en: "Zhejiang Provincial People's Hospital · IMC",       level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 1800 },
      { tier: 'C', zh: '杭州市第一人民医院 · 国际医疗部',              en: "Hangzhou First People's Hospital · International",  level: { zh: '三级甲等 / 综合', en: 'Tertiary Grade A / General' }, acc: '三甲',      beds: 1050 }
    ],
    boao: [
      { tier: 'A', zh: '博鳌乐城 · 瑞金海南医院',                      en: 'Boao Lecheng · Ruijin Hainan Hospital',            level: { zh: '医疗旅游先行区', en: 'Pilot Medical-Tourism Zone' }, acc: '先行区特许', beds: 500 },
      { tier: 'B', zh: '博鳌超级医院 · 国际医疗部',                    en: 'Boao Super Hospital · International Division',      level: { zh: '医疗旅游先行区', en: 'Pilot Medical-Tourism Zone' }, acc: '先行区特许', beds: 460 },
      { tier: 'C', zh: '博鳌一龄生命养护中心 · 国际部',                en: 'Boao Yiling Life Care Center · International',      level: { zh: '康复疗养', en: 'Rehabilitation & Wellness' }, acc: '先行区特许', beds: 380 }
    ]
  };

  /* ---------------- physicians — three per department ---------------- */
  var DOCTORS = {
    oncology: [
      { id: 'd1', zh: '陈志远', en: 'Chen Zhiyuan', tz: '主任医师 / 教授 / 博导', te: 'Chief Physician / Professor', spec: { zh: '消化道肿瘤多学科治疗', en: 'GI oncology, multimodal therapy' }, exp: 28, lang: '中文 / English', cases: 2400 },
      { id: 'd7', zh: '罗建平', en: 'Luo Jianping', tz: '主任医师 / 教授', te: 'Chief Physician / Professor', spec: { zh: '胸部肿瘤靶向与免疫治疗', en: 'Thoracic oncology, targeted & immuno' }, exp: 31, lang: '中文 / English / Русский', cases: 2900 },
      { id: 'd10', zh: '韩叙白', en: 'Han Xubai', tz: '副主任医师 / 肿瘤内科', te: 'Associate Chief / Medical Oncology', spec: { zh: '消化道肿瘤免疫联合治疗', en: 'GI oncology, immuno-combination' }, exp: 17, lang: '中文 / English', cases: 1100 }
    ],
    ortho: [
      { id: 'd9', zh: '孟书桓', en: 'Meng Shuhuan', tz: '主任医师 / 骨科机器人中心', te: 'Chief Physician / Robotic Surgery Center', spec: { zh: '机器人辅助关节置换', en: 'Robotic-assisted arthroplasty' }, exp: 22, lang: '中文 / English', cases: 2600 },
      { id: 'd2', zh: '林嘉禾', en: 'Lin Jiahe', tz: '主任医师 / 科室副主任', te: 'Chief Physician / Deputy Chair', spec: { zh: '关节外科与运动医学', en: 'Joint surgery & sports medicine' }, exp: 24, lang: '中文 / English', cases: 3100 },
      { id: 'd11', zh: '邵允', en: 'Shao Yun', tz: '副主任医师 / 创伤骨科', te: 'Associate Chief / Trauma & Orthopaedics', spec: { zh: '复杂关节翻修与畸形矫正', en: 'Complex revision & deformity correction' }, exp: 18, lang: '中文 / English', cases: 1400 }
    ],
    cardio: [
      { id: 'd3', zh: '沈亦舟', en: 'Shen Yizhou', tz: '主任医师 / 心血管介入中心主任', te: 'Chief Physician / Director of Cath Lab', spec: { zh: '复杂冠脉介入治疗', en: 'Complex coronary intervention' }, exp: 26, lang: '中文 / English', cases: 5200 },
      { id: 'd12', zh: '江砚秋', en: 'Jiang Yanqiu', tz: '主任医师 / 心内科', te: 'Chief Physician / Cardiology', spec: { zh: '结构性心脏病介入', en: 'Structural heart intervention' }, exp: 23, lang: '中文 / English / العربية', cases: 3400 },
      { id: 'd13', zh: '温霁', en: 'Wen Ji', tz: '副主任医师 / 心脏康复', te: 'Associate Chief / Cardiac Rehabilitation', spec: { zh: '介入术后心脏康复', en: 'Post-intervention cardiac rehab' }, exp: 16, lang: '中文 / English', cases: 1600 }
    ],
    ivf: [
      { id: 'd14', zh: '卫清和', en: 'Wei Qinghe', tz: '主任医师 / 生殖医学中心主任', te: 'Chief Physician / Director of Fertility Centre', spec: { zh: '高龄与卵巢低反应', en: 'Advanced age & poor ovarian response' }, exp: 27, lang: '中文 / English', cases: 5300 },
      { id: 'd4', zh: '苏怀瑾', en: 'Su Huaijin', tz: '副主任医师 / 生殖医学', te: 'Associate Chief / Reproductive Medicine', spec: { zh: '反复种植失败与 PGT-A', en: 'Recurrent implantation failure & PGT-A' }, exp: 19, lang: '中文 / English / Русский', cases: 4100 },
      { id: 'd15', zh: '池未晞', en: 'Chi Weixi', tz: '主治医师 / 胚胎实验室', te: 'Attending / IVF Laboratory', spec: { zh: '胚胎培养与基因筛查', en: 'Embryo culture & genetic screening' }, exp: 14, lang: '中文 / English', cases: 2600 }
    ],
    aesthetic: [
      { id: 'd5', zh: '叶明轩', en: 'Ye Mingxuan', tz: '主任医师 / 医学美容科主任', te: 'Chief Physician / Chair of Aesthetics', spec: { zh: '面部年轻化与光电治疗', en: 'Facial rejuvenation & energy devices' }, exp: 21, lang: '中文 / English', cases: 6800 },
      { id: 'd16', zh: '关雪吟', en: 'Guan Xueyin', tz: '副主任医师 / 皮肤美容', te: 'Associate Chief / Dermatologic Aesthetics', spec: { zh: '色素性疾病与激光治疗', en: 'Pigmentary disorders & laser therapy' }, exp: 18, lang: '中文 / English / 日本語', cases: 5200 },
      { id: 'd17', zh: '骆亭', en: 'Luo Ting', tz: '主治医师 / 注射美容', te: 'Attending / Injectable Aesthetics', spec: { zh: '面部注射与线雕', en: 'Facial injectables & thread lifting' }, exp: 12, lang: '中文 / English', cases: 3100 }
    ],
    checkup: [
      { id: 'd6', zh: '傅承宇', en: 'Fu Chengyu', tz: '主任医师 / 健康管理中心主检医师', te: 'Chief Physician / Lead Reading Physician', spec: { zh: '肿瘤早筛与慢病管理', en: 'Early cancer screening & chronic care' }, exp: 23, lang: '中文 / English / 日本語', cases: 12000 },
      { id: 'd18', zh: '简牧', en: 'Jian Mu', tz: '副主任医师 / 全科医学', te: 'Associate Chief / Family Medicine', spec: { zh: '心脑血管风险评估', en: 'Cardiovascular & cerebrovascular risk' }, exp: 20, lang: '中文 / English', cases: 7400 },
      { id: 'd19', zh: '白露微', en: 'Bai Luwei', tz: '主治医师 / 影像诊断', te: 'Attending / Diagnostic Imaging', spec: { zh: 'PET-MR 与早期肿瘤影像', en: 'PET-MR & early oncologic imaging' }, exp: 15, lang: '中文 / English', cases: 6200 }
    ]
  };

  /* ---------------- medical protocols per department ---------------- */
  var MEDICAL = {
    oncology: {
      procedure: { zh: '精准靶向治疗 + 免疫联合方案（PD-1 抑制剂）', en: 'Precision targeted therapy + PD-1 immunotherapy', ru: 'Точная таргетная терапия + иммунотерапия (ингибиторы PD-1)', ja: '精密標的治療＋免疫療法（PD-1 阻害薬）', ar: 'علاج موجه دقيق + علاج مناعي (مثبطات PD-1)' },
      stages: [
        { zh: '远程病历预评估与病理切片会诊', en: 'Remote records review + pathology slide consultation', ru: 'Дистанционный разбор истории болезни + консилиум по стёклам', ja: '遠隔カルテ評価＋病理スライドカンファレンス', ar: 'مراجعة السجلات عن بُعد + استشارة شرائح الأنسجة' },
        { zh: 'PET-CT 全身分期 + 二代基因测序 (NGS)', en: 'PET-CT staging + next-generation sequencing', ru: 'Стадирование ПЭТ-КТ + секвенирование нового поколения (NGS)', ja: 'PET-CT 全身病期分類＋次世代シーケンス (NGS)', ar: 'تصوير PET-CT لتحديد المرحلة + التسلسل الجيني الجيل الثاني (NGS)' },
        { zh: 'MDT 多学科会诊确定一线方案', en: 'MDT board to confirm first-line protocol', ru: 'Мультидисциплинарный консилиум (MDT) для выбора первой линии', ja: 'MDT（多職種合同）カンファレンスで第一選択方針を決定', ar: 'اجتماع فريق متعدد التخصصات (MDT) لاعتماد البروتوكول الأول' },
        { zh: '靶向 + 免疫联合治疗 第 1 周期', en: 'Targeted + immuno combination, cycle 1', ru: 'Комбинированная таргетная + иммунотерапия, цикл 1', ja: '標的＋免疫 併用療法 第 1 コース', ar: 'علاج موجه + مناعي مشترك، الدورة الأولى' },
        { zh: '不良反应监测与支持治疗', en: 'Adverse-event monitoring & supportive care', ru: 'Мониторинг нежелательных реакций + поддерживающая терапия', ja: '有害事象モニタリング＋支持療法', ar: 'مراقبة الآثار الجانبية + رعاية داعمة' },
        { zh: '影像学疗效评估（RECIST 1.1）', en: 'Response assessment by imaging (RECIST 1.1)', ru: 'Оценка ответа по данным визуализации (RECIST 1.1)', ja: '画像検査での効果判定（RECIST 1.1）', ar: 'تقييم الاستجابة بالأشعة (RECIST 1.1)' },
        { zh: '出院带药、输注排期与回国随访', en: 'Discharge medication, infusion schedule, home follow-up', ru: 'Выписка с препаратами, график инфузий, наблюдение на родине', ja: '退院時処方・輸注スケジュール・帰国後フォロー', ar: 'أدوية الخروج + جدول التسريب + متابعة بعد العودة' }
      ],
      outcome: { zh: '客观缓解率 (ORR) 约 62%', en: 'Objective response rate ~62%', ru: 'Объективный ответ (ORR) ≈ 62%', ja: '客観的奏効率 (ORR) 約 62%', ar: 'معدل الاستجابة الموضوعية (ORR) ~62%' },
      ward:    { zh: '肿瘤科单人间（含独立陪护床）', en: 'Oncology single room (with companion bed)', ru: 'Одноместная палата онкологии (с койкой для сопровождающего)', ja: '腫瘍内科個室（同伴者用ベッド付き）', ar: 'غرفة فردية للأورام (بسرير مرافق)' },
      reg:     { zh: '特需专家门诊 · 国际部绿色通道', en: 'Specialist VIP clinic · international fast track', ru: 'VIP-приём у профильного специалиста · быстрый канал международного отдела', ja: '特別専門外来・国際部グリーンチャネル', ar: 'عيادة خبير VIP · مسار سريع للقسم الدولي' },
      stay: 14, base: 186000, conf: 1280
    },
    ortho: {
      procedure: { zh: '机器人辅助微创膝 / 髋关节置换', en: 'Robotic-assisted minimally invasive knee / hip replacement', ru: 'Робот-ассистированная малотравматичная замена коленного / тазобедренного сустава', ja: 'ロボット支援低侵襲 膝／股関節置換術', ar: 'استبدال مفصل الركبة / الورك بالمنظار بدعم روبوتي' },
      stages: [
        { zh: '术前影像与下肢力线 / 步态评估', en: 'Pre-op imaging, alignment & gait analysis', ru: 'Предоперационная визуализация, оценка оси конечности и походки', ja: '術前画像検査・下肢アライメント／歩行評価', ar: 'تصوير ما قبل الجراحة + تقييم محور الطرف والمشية' },
        { zh: '麻醉评估与术前血液检查', en: 'Anaesthesia assessment & pre-op bloods', ru: 'Оценка анестезии и предоперационные анализы крови', ja: '麻酔評価・術前血液検査', ar: 'تقييم التخدير + فحوص دم ما قبل الجراحة' },
        { zh: '机器人辅助关节置换手术（约 90 分钟）', en: 'Robotic-assisted arthroplasty (~90 min)', ru: 'Робот-ассистированное эндопротезирование (~90 мин)', ja: 'ロボット支援関節置換手術（約 90 分）', ar: 'جراحة استبدال المفصل بروبوت (نحو 90 دقيقة)' },
        { zh: '术后 24 小时监护与多模式镇痛', en: '24h monitoring & multimodal analgesia', ru: 'Мониторинг 24 ч + мультимодальное обезболивание', ja: '術後 24 時間モニタリング＋多鎮痛法', ar: 'مراقبة 24 ساعة + تسكين متعدد الوسائط' },
        { zh: '每日 2 次康复训练（CPM + 步态训练）', en: 'Rehab twice daily (CPM + gait training)', ru: 'Реабилитация 2 раза в день (CPM + тренировка походки)', ja: 'リハビリ 1 日 2 回（CPM＋歩行訓練）', ar: 'تأهيل مرتين يومياً (CPM + تدريب المشي)' },
        { zh: '助行器独立行走评估与出院前复查', en: 'Walker independence assessment & pre-discharge review', ru: 'Оценка самостоятельной ходьбы с рамой и предвыписная проверка', ja: '歩行器での独歩評価・退院前再検査', ar: 'تقييم المشي المستقل بمشاية + مراجعة ما قبل الخروج' },
        { zh: '出院康复计划与远程随访', en: 'Home rehab plan & tele-follow-up', ru: 'Домашняя программа реабилитации и дистанционное наблюдение', ja: '退院リハビリ計画・遠隔フォロー', ar: 'خطة تأهيل منزلي + متابعة عن بُعد' }
      ],
      outcome: { zh: '术后 10 年假体存活率 > 95%', en: '10-year implant survival > 95%', ru: 'Выживаемость имплантата через 10 лет > 95%', ja: '術後 10 年インプラント生存率 > 95%', ar: 'بقاء الطعم بعد 10 سنوات > 95%' },
      ward:    { zh: '骨科单人间 · 无障碍卫浴', en: 'Orthopaedic single room · accessible bathroom', ru: 'Одноместная ортопедическая палата · доступная ванная', ja: '整形外科個室・バリアフリー浴室', ar: 'غرفة فردية للعظام · حمام ملائم لذوي الاحتياجات' },
      reg:     { zh: '关节外科专家门诊 · 手术排期', en: 'Joint surgery specialist clinic · OR scheduling', ru: 'Приём специалиста по суставной хирургии · планирование операции', ja: '関節外科専門外来・手術日程調整', ar: 'عيادة جراحة المفاصل · جدولة العمليات' },
      stay: 12, base: 128000, conf: 940
    },
    cardio: {
      procedure: { zh: '冠脉造影 + 药物球囊 / 可吸收支架介入', en: 'Coronary angiography + drug-coated balloon / bioresorbable scaffold', ru: 'Коронарография + лекарственный баллон / рассасывающийся стент', ja: '冠動脈造影＋薬剤コーティングバルーン／吸収性ステント', ar: 'قسطرة شرايين القلب + بالون دوائي / دعامة قابلة للامتصاص' },
      stages: [
        { zh: '心脏超声 + 冠脉 CTA 评估', en: 'Echocardiography + coronary CTA', ru: 'Эхокардиография + КТ-ангиография коронарных артерий', ja: '心エコー＋冠動脈 CTA', ar: 'تخطيط صدى القلب + تصوير CT للشرايين التاجية' },
        { zh: '心内科专家会诊与风险评估', en: 'Cardiology consultation & risk stratification', ru: 'Консультация кардиолога и стратификация риска', ja: '循環器専門医の診察・リスク層別', ar: 'استشارة أخصائي قلب + تحديد مستوى الخطورة' },
        { zh: '冠脉造影 + 介入治疗（经桡动脉）', en: 'Angiography + intervention (radial access)', ru: 'Коронарография + вмешательство (через лучевую артерию)', ja: '冠動脈造影＋カテーテル治療（橈骨動脈アプローチ）', ar: 'قسطرة + تدخل علاجي (عبر الشريان الكعبري)' },
        { zh: 'CCU 监护 48 小时', en: '48h CCU monitoring', ru: 'Мониторинг в ПИТ (CCU) 48 ч', ja: 'CCU で 48 時間モニタリング', ar: 'مراقبة في وحدة العناية القلبية 48 ساعة' },
        { zh: '心脏康复 I 期训练', en: 'Phase I cardiac rehabilitation', ru: 'Кардиореабилитация I фазы', ja: '心臓リハビリ第 I 期', ar: 'تأهيل قلبي المرحلة الأولى' },
        { zh: '运动耐量试验复查', en: 'Exercise tolerance re-test', ru: 'Повторный тест на переносимость нагрузки', ja: '運動負荷試験で再評価', ar: 'إعادة اختبار قدرة التحمل البدني' },
        { zh: '出院双抗用药方案与随访', en: 'Dual antiplatelet regimen & follow-up', ru: 'Схема двойной антиагрегантной терапии и наблюдение', ja: '二剤抗血小板療法・フォロー', ar: 'بروتوكول مضادات الصفيحات المزدوجة + متابعة' }
      ],
      outcome: { zh: '介入成功率 98%+, 30 天再入院率 < 2%', en: 'Procedural success 98%+, 30-day readmission < 2%', ru: 'Успех вмешательства 98%+, повторная госпитализация за 30 дней < 2%', ja: '手技成功率 98% 以上、30 日再入院率 < 2%', ar: 'نجاح التدخل 98%+، إعادة دخول خلال 30 يوماً < 2%' },
      ward:    { zh: 'CCU 过渡 + 心内科单人间', en: 'CCU step-down + cardiology single room', ru: 'Перевод из ПИТ + одноместная палата кардиологии', ja: 'CCU 経過観察＋循環器個室', ar: 'انتقال من العناية القلبية + غرفة فردية للقلب' },
      reg:     { zh: '心血管专家门诊 · 心导管室排期', en: 'Cardiology specialist clinic · cath lab scheduling', ru: 'Приём кардиолога · планирование катетеризации', ja: '循環器専門外来・カテーテル室日程', ar: 'عيادة أمراض القلب · جدولة القسطرة' },
      stay: 10, base: 156000, conf: 1120
    },
    ivf: {
      procedure: { zh: '三代试管 PGT-A · 个体化拮抗剂促排方案', en: 'PGT-A IVF · individualised antagonist stimulation', ru: 'ЭКО с PGT-A · индивидуальная антагонистная стимуляция', ja: 'PGT-A を用いた体外受精・個別化拮抗剤刺激法', ar: 'تلقيح صناعي مع PGT-A · بروتوكول تنشيط فردي بمضادات' },
      stages: [
        { zh: '夫妻双方生育力评估（AMH / 精液分析）', en: 'Couple fertility workup (AMH / semen analysis)', ru: 'Обследование фертильности пары (АМГ / спермограмма)', ja: 'ご夫婦の不妊検査（AMH／精液分析）', ar: 'تقييم الخصوبة للزوجين (AMH / تحليل السائل)' },
        { zh: '个体化促排方案制定', en: 'Individualised stimulation protocol', ru: 'Составление индивидуального протокола стимуляции', ja: '個別化刺激プロトコルの作成', ar: 'وضع بروتوكول تنشيط فردي' },
        { zh: '促排卵与卵泡监测（10-12 天）', en: 'Stimulation & follicle monitoring (10-12 days)', ru: 'Стимуляция и мониторинг фолликулов (10-12 дней)', ja: '排卵誘発・卵胞モニタリング（10〜12 日）', ar: 'تنشيط + متابعة الجريبات (10-12 يوماً)' },
        { zh: '取卵术 + 单精子注射 (ICSI)', en: 'Oocyte retrieval + ICSI', ru: 'Пункция яичников + ИКСИ', ja: '採卵＋顕微受精 (ICSI)', ar: 'سحب البويضات + حقن الحيوان المنوي (ICSI)' },
        { zh: '囊胚培养 + PGT-A 染色体筛查', en: 'Blastocyst culture + PGT-A screening', ru: 'Культивирование бластоцисты + скрининг PGT-A', ja: '胚盤胞培養＋PGT-A 染色体スクリーニング', ar: 'زراعة الكيسة الأريمية + فحص PGT-A' },
        { zh: '冻融胚胎移植 (FET)', en: 'Frozen-thawed embryo transfer', ru: 'Перенос размороженного эмбриона (FET)', ja: '凍結胚移植 (FET)', ar: 'نقل جنين مجمد ومذاب (FET)' },
        { zh: '妊娠确认（HCG + 阴道 B 超）', en: 'Pregnancy confirmation (hCG + transvaginal US)', ru: 'Подтверждение беременности (ХГЧ + УЗИ влагалищным датчиком)', ja: '妊娠判定（HCG＋経膣エコー）', ar: 'تأكيد الحمل (HCG + موجات صوتية مهبلية)' }
      ],
      outcome: { zh: '临床妊娠率约 58%（< 35 岁）', en: 'Clinical pregnancy rate ~58% (age < 35)', ru: 'Частота клинической беременности ~58% (возраст < 35)', ja: '臨床妊娠率 約 58%（35 歳未満）', ar: 'معدل الحمل السريري ~58% (أقل من 35 عاماً)' },
      ward:    { zh: '日间病房 · 取卵术后观察 6 小时', en: 'Day ward · 6h post-retrieval observation', ru: 'Дневной стационар · 6 ч наблюдения после пункции', ja: '日帰り病棟・採卵後 6 時間観察', ar: 'جناح نهاري · مراقبة 6 ساعات بعد سحب البويضات' },
      reg:     { zh: '生殖医学中心专家门诊 · 建档', en: 'Fertility centre specialist clinic · file setup', ru: 'Приём специалиста центра репродукции · заведение дела', ja: '生殖医療センター専門外来・カルテ作成', ar: 'عيادة مركز الإخصاب · فتح ملف' },
      stay: 21, base: 96000, conf: 1620
    },
    aesthetic: {
      procedure: { zh: '面部综合年轻化 · 光电 + 填充 + 线雕联合', en: 'Comprehensive facial rejuvenation · energy device + filler + thread lift', ru: 'Комплексное омоложение лица · энергетические методы + филлеры + нитевой лифтинг', ja: '顔の総合若返り・光・電気機器＋フィラー＋糸リフト', ar: 'تجديد شباب الوجه الشامل · أجهزة الطاقة + الفيلر + رفع بالخيوط' },
      stages: [
        { zh: '皮肤影像检测与 3D 美学设计', en: 'Skin imaging & 3D aesthetic design', ru: 'Визуальная диагностика кожи и 3D-дизайн', ja: '皮膚画像診断・3D 美容設計', ar: 'تصوير الجلد + تصميم جمالي ثلاثي الأبعاد' },
        { zh: '光电抗衰治疗 第 1 次（超声/射频）', en: 'Energy-based treatment session 1 (HIFU / RF)', ru: 'Аппаратное омоложение, сеанс 1 (УЗ-лифтинг / РЧ)', ja: '光・電気若返り治療 第 1 回（HIFU／RF）', ar: 'علاج بالطاقة الجلسة 1 (HIFU / تردد راديوي)' },
        { zh: '面部填充与线雕方案实施', en: 'Filler & thread lift procedure', ru: 'Введение филлеров и нитевой лифтинг', ja: 'フィラー注入＋糸リフト実施', ar: 'حقن الفيلر + رفع بالخيوط' },
        { zh: '术后修复护理与冷敷管理', en: 'Post-procedure repair care & cooling', ru: 'Постпроцедурный уход и охлаждение', ja: '術後ケア・冷却管理', ar: 'رعاية ما بعد الإجراء + تبريد' },
        { zh: '光电抗衰治疗 第 2 次', en: 'Energy-based treatment session 2', ru: 'Аппаратное омоложение, сеанс 2', ja: '光・電気若返り治療 第 2 回', ar: 'علاج بالطاقة الجلسة 2' },
        { zh: '效果评估与居家护理方案', en: 'Outcome review & home-care plan', ru: 'Оценка результата и домашний уход', ja: '効果評価・自宅ケア計画', ar: 'تقييم النتيجة + خطة عناية منزلية' },
        { zh: '6 个月线上随访', en: '6-month online follow-up', ru: 'Онлайн-наблюдение через 6 месяцев', ja: '6 か月後オンラインフォロー', ar: 'متابعة عبر الإنترنت بعد 6 أشهر' }
      ],
      outcome: { zh: '6 个月随访满意度 96%', en: '96% satisfaction at 6-month follow-up', ru: 'Удовлетворённость 96% при осмотре через 6 месяцев', ja: '6 か月後フォローでの満足度 96%', ar: 'رضا 96% عند المتابعة بعد 6 أشهر' },
      ward:    { zh: '日间观察室（无需住院）', en: 'Day observation (no overnight stay)', ru: 'Дневная палата наблюдения (без ночёвки)', ja: '日帰り観察室（入院不要）', ar: 'غرفة ملاحظة نهارية (بلا إقامة ليلية)' },
      reg:     { zh: '医学美容科专家门诊', en: 'Aesthetic medicine specialist clinic', ru: 'Приём специалиста по эстетической медицине', ja: '美容医療専門外来', ar: 'عيادة الطب التجميلي' },
      stay: 8, base: 58000, conf: 780
    },
    checkup: {
      procedure: { zh: '全景深度早筛 · 肿瘤 + 心脑血管 + 基因', en: 'Full-body deep screening · oncology + cardiovascular + genomics', ru: 'Глубокий скрининг всего тела · онкология + сердечно-сосудистая + геномика', ja: '全身ディープ健診・がん＋心脳血管＋ゲノム', ar: 'فحص مبكر شامل · أورام + قلب وأوعية + جينات' },
      stages: [
        { zh: '健康问卷与家族史风险评估', en: 'Health questionnaire & family-history risk', ru: 'Анкета о здоровье и риск по семейному анамнезу', ja: '健康アンケート・家族歴リスク評価', ar: 'استبيان صحي + تقييم خطر بالتاريخ العائلي' },
        { zh: '全天深度体检（影像 + 内镜 + 化验）', en: 'Full-day workup (imaging + endoscopy + labs)', ru: 'Полный день обследования (визуализация + эндоскопия + анализы)', ja: '終日人間ドック（画像＋内視鏡＋検査）', ar: 'فحص يوم كامل (تصوير + تنظير + مختبر)' },
        { zh: 'PET-MR 肿瘤早筛', en: 'PET-MR early cancer screening', ru: 'Раннее выявление рака ПЭТ-МРТ', ja: 'PET-MR がん早期スクリーニング', ar: 'فحص PET-MR المبكر للسرطان' },
        { zh: '基因与代谢组学检测', en: 'Genomic & metabolomic profiling', ru: 'Геномный и метаболомный профиль', ja: 'ゲノム・メタボローム解析', ar: 'تحليل جينومي وأيضي' },
        { zh: '主检医师一对一面谈解读', en: 'One-on-one results consultation', ru: 'Индивидуальная беседа с врачом по результатам', ja: '担当医との一对一面談・結果説明', ar: 'استشارة مباشرة مع الطبيب لشرح النتائج' },
        { zh: '专科二次会诊（如发现异常）', en: 'Specialist second opinion (if abnormal)', ru: 'Консилиум узкого специалиста (при отклонениях)', ja: '専門医セカンドオピニオン（異常があれば）', ar: 'رأي ثانٍ من مختص (عند وجود خلل)' },
        { zh: '健康干预方案与回国随访', en: 'Intervention plan & home follow-up', ru: 'План оздоровления и наблюдение на родине', ja: '健康介入計画・帰国後フォロー', ar: 'خطة تدخل صحي + متابعة بعد العودة' }
      ],
      outcome: { zh: '早期病变检出率提升约 3.2 倍', en: '~3.2x higher early lesion detection', ru: 'Выявляемость ранних изменений выше ≈ в 3,2 раза', ja: '早期病変の発見率 約 3.2 倍', ar: 'اكتشاف الآفات المبكرة أعلى بنحو 3.2 ضعفاً' },
      ward:    { zh: '健康管理中心贵宾套房', en: 'Health management VIP suite', ru: 'VIP-люкс центра управления здоровьем', ja: '健康管理センター VIP スイート', ar: 'جناح VIP لإدارة الصحة' },
      reg:     { zh: '健康管理中心 VIP 预约', en: 'Health management VIP booking', ru: 'VIP-запись в центр управления здоровьем', ja: '健康管理センター VIP 予約', ar: 'حجز VIP في مركز إدارة الصحة' },
      stay: 5, base: 32000, conf: 2100
    }
  };

  var DEPT_IDS = ['oncology', 'ortho', 'cardio', 'ivf', 'aesthetic', 'checkup'];

  /* ---------------- tier economics ---------------- */
  var TIERS = [
    { id: 'A', key: 'tierA', mult: 1.00, hotel: 1280, service: 12800, flightClass: { zh: '公务舱', en: 'Business' }, score: 94 },
    { id: 'B', key: 'tierB', mult: 0.66, hotel: 820,  service: 8800,  flightClass: { zh: '超级经济舱', en: 'Premium economy' }, score: 88 },
    { id: 'C', key: 'tierC', mult: 0.44, hotel: 540,  service: 5800,  flightClass: { zh: '经济舱', en: 'Economy' }, score: 81 }
  ];

  /* ---------------- tourism add-ons ---------------- */
  var ADDONS = [
    { id: 'a1', zh: '中医康复理疗包（6 次）', en: 'TCM rehabilitation package (6 sessions)',
      desc: { zh: '针灸 + 推拿 + 中药调理，术后恢复期每日 1 次', en: 'Acupuncture + tuina + herbal medicine, once daily during recovery' }, price: 4200 },
    { id: 'a2', zh: '家属陪同文化半日游 × 2', en: 'Companion half-day city tours × 2',
      desc: { zh: '中文导游 + 专车，行程强度按术后耐受度设计', en: 'Local guide + private car, paced for post-treatment tolerance' }, price: 3600 },
    { id: 'a3', zh: '疗养酒店延长 3 晚（含三餐与理疗）', en: 'Recovery hotel extension, 3 nights',
      desc: { zh: '出院后就近入住疗养酒店，含三餐、每日体征监测与基础理疗', en: 'Nearby recovery hotel after discharge: meals, daily vitals check, basic physiotherapy' }, price: 6800 },
    { id: 'a4', zh: '全程医疗翻译升级', en: 'Full-time medical interpreter upgrade',
      desc: { zh: '门诊与住院之外时段也配备翻译，含用药指导与家属沟通', en: 'Interpreter beyond clinic hours: medication guidance and family communication' }, price: 5400 },
    { id: 'a5', zh: '温泉 / 海滨静养 3 日', en: 'Hot spring / seaside retreat, 3 days',
      desc: { zh: '治疗结束后的低强度疗养行程，随行护理人员 1 名', en: 'Low-intensity retreat after treatment, one accompanying nurse' }, price: 7600 }
  ];

  /* ---------------- payment partners ---------------- */
  var PARTNERS = {
    flight:   { key: 'ctrip',   color: '#1E6FD9', mark: 'Trip' },
    hotel:    { key: 'booking', color: '#003580', mark: 'Booking' },
    reg:      { key: 'hospital', color: '#0E7C86', mark: 'HIS' },
    transfer: { key: 'didi',    color: '#E0821B', mark: 'Car' },
    travel:   { key: 'ctrip',   color: '#1E6FD9', mark: 'Trip' }
  };

  /* ---------------- airport-transfer vehicle tiers ----------------
     Model ported from the transfer-economics.html study. Pricing follows the
     study's RATES: per-trip price = base + max(0, km - incl) * perKm + toll,
     plus a RN add-on (NURSE_FEE) when an ambulance carries a nurse. */
  var NURSE_FEE = 400;
  var TRANSFER_MODELS = [
    { id: 'van_gl8', kind: 'van', base: 380, incl: 30, perKm: 8, toll: 50, color: '#0E7C86',
      name: { zh: 'GL8 商务车（带司机）', en: 'GL8 business van (with driver)', ru: 'Минивэн GL8 (с водителем)', ja: 'GL8 ビジネスバン（運転手付き）', ar: 'سيارة GL8 فان (مع سائق)' } },
    { id: 'amb_c', kind: 'amb', base: 480, incl: 20, perKm: 8, toll: 50, color: '#E0821B',
      name: { zh: '救护车 · C 级普通型', en: 'Ambulance · Class C (basic)', ru: 'Скорая · класс C', ja: '救急車・C 級標準型', ar: 'سيارة إسعاف · الفئة C' } },
    { id: 'amb_b', kind: 'amb', base: 680, incl: 20, perKm: 8, toll: 50, color: '#D63B45',
      name: { zh: '救护车 · B 级诊疗型', en: 'Ambulance · Class B (treatment)', ru: 'Скорая · класс B', ja: '救急車・B 級診療型', ar: 'سيارة إسعاف · الفئة B' } },
    { id: 'amb_a', kind: 'amb', base: 980, incl: 50, perKm: 12, toll: 50, color: '#8F2230',
      name: { zh: '救护车 · A 级监护型', en: 'Ambulance · Class A (ICU)', ru: 'Скорая · класс A', ja: '救急車・A 級監護型', ar: 'سيارة إسعاف · الفئة A' } },
    { id: 'van_alph', kind: 'van', base: 900, incl: 30, perKm: 12, toll: 50, color: '#6B4FE0',
      name: { zh: '丰田埃尔法（带司机）', en: 'Toyota Alphard (with driver)', ru: 'Toyota Alphard (с водителем)', ja: 'トヨタ アルファード（運転手付き）', ar: 'تويوتا ألفارد (مع سائق)' } }
  ];
  /* Passenger grading -> recommended vehicle (front-loaded in the intake form).
     Shares the study's A/B/C/D matrix. */
  var TRANSFER_GRADES = {
    A: { vehicle: 'van_gl8', nurse: false, accessibility: false,
      label: { zh: '可自主行走', en: 'Ambulatory', ru: 'Самостоятельно передвигается', ja: '自力歩行可', ar: 'يمشي بمفرده' },
      desc:  { zh: '体检、复查、门诊、医美、辅助生殖、轻症陪诊', en: 'Check-up, follow-up, outpatient, aesthetics, IVF, mild cases', ru: 'Чекап, повторный приём, амбулатория, косметология, ЭКО', ja: '健診・再診・外来・美容・不妊治療・軽症', ar: 'فحص، متابعة، عيادات خارجية، تجميل، إخصاب' } },
    B: { vehicle: 'van_gl8', nurse: false, accessibility: true,
      label: { zh: '需搀扶 / 轮椅', en: 'Needs support / wheelchair', ru: 'Нужна поддержка / коляска', ja: '介助・車いす必要', ar: 'يحتاج مساعدة / كرسي متحرك' },
      desc:  { zh: '术后恢复期、行动不便、生命体征平稳', en: 'Post-op recovery, limited mobility, stable vitals', ru: 'Восстановление, ограниченная подвижность', ja: '術後回復・移動制限・バイタル安定', ar: 'تعافٍ بعد العملية، حركة محدودة' } },
    C: { vehicle: 'amb_b', nurse: true, accessibility: false,
      label: { zh: '担架 / 需吸氧', en: 'Stretcher / oxygen', ru: 'Носилки / кислород', ja: '担架・酸素必要', ar: 'نقالة / أكسجين' },
      desc:  { zh: '术后回国、卧床、带引流管、持续吸氧、需心电监护', en: 'Post-op return, bedridden, drainage, oxygen, ECG monitoring', ru: 'Лёжачий, дренаж, кислород, мониторинг', ja: '術後帰国・寝たきり・ドレーン・酸素・モニター', ar: 'راقد، تصريف، أكسجين، مراقبة قلب' } },
    D: { vehicle: 'amb_a', nurse: true, accessibility: false,
      label: { zh: '危重 / ICU 转院', en: 'Critical / ICU transfer', ru: 'Тяжёлый / перевод в ОРИТ', ja: '重篤・ICU 転院', ar: 'حرج / نقل للعناية المركزة' },
      desc:  { zh: '需呼吸机、微量泵等生命支持，或跨境重症转院', en: 'Ventilator, infusion pump, cross-border critical transfer', ru: 'ИВЛ, насосы, трансграничный перевод', ja: '人工呼吸器・输注ポンプ・跨境重症転院', ar: 'جهاز تنفس، مضخة، نقل حرج عبر الحدود' } }
  };
  function transferModel(id) { return TRANSFER_MODELS.filter(function (m) { return m.id === id; })[0] || TRANSFER_MODELS[0]; }
  function tripPrice(m, km, nurse) {
    var extra = Math.max(0, km - m.incl) * m.perKm;
    var rn = (m.kind === 'amb' && nurse) ? NURSE_FEE : 0;
    return m.base + extra + m.toll + rn;
  }
  /* Build the transfer object for a plan: recommended vehicle by patient grade,
     per-trip and round-trip (arrival pickup + departure drop-off) pricing. */
  function buildTransfer(grade, city, included) {
    var g = TRANSFER_GRADES[grade] || TRANSFER_GRADES.A;
    var m = transferModel(g.vehicle);
    var km = (city && city.transferKm) || 40;
    var perTrip = tripPrice(m, km, g.nurse);
    return {
      grade: grade,
      vehicleId: m.id,
      vehicleName: m.name,
      kind: m.kind,
      color: m.color,
      nurse: g.nurse,
      accessibility: !!g.accessibility,
      label: g.label,
      desc: g.desc,
      km: km,
      perTrip: perTrip,
      trips: 2,
      total: perTrip * 2,
      included: !!included
    };
  }

  /* ---------------- sample uploaded files ---------------- */
  var SAMPLE_FILES = [
    { name: 'CT_Abdomen_2026-08-12.pdf', size: '4.2 MB' },
    { name: 'Pathology_Report.pdf',      size: '1.1 MB' },
    { name: 'Blood_Panel_CBC.pdf',       size: '386 KB' }
  ];

  /* ---------------- helpers ---------------- */
  function city(id) { return CITIES.filter(function (c) { return c.id === id; })[0] || CITIES[0]; }
  function origin(id) { return ORIGINS.filter(function (o) { return o.id === id; })[0] || ORIGINS[0]; }
  function budget(id) { return BUDGETS.filter(function (b) { return b.id === id; })[0] || BUDGETS[2]; }
  /** pick the department-matched physician; falls back to oncology */
  function doctorFor(dept, hIdx, dIdx) {
    var arr = DOCTORS[dept] || DOCTORS.oncology;
    return arr[(hIdx + dIdx) % arr.length];
  }

  function fmt(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /** Jitter to make the three plans feel distinct but stable */
  function seeded(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  /**
   * Build the three plans.
   * @param {Object} inp  { dept, origin, city, budget, date, companions, travel, files }
   */
  function buildPlans(inp) {
    var dIdx = Math.max(0, DEPT_IDS.indexOf(inp.dept));
    var med = MEDICAL[inp.dept] || MEDICAL.oncology;
    var org = origin(inp.origin);
    var companions = parseInt(inp.companions || 1, 10);
    var heads = 1 + companions;
    var cityIdx = CITIES.map(function (c) { return c.id; }).indexOf(inp.city);
    if (cityIdx < 0) cityIdx = 0;

    return TIERS.map(function (tier, i) {
      var useCityId = (tier.id === 'C') ? VALUE_CITIES[(cityIdx + i) % VALUE_CITIES.length] : inp.city;
      var c = city(useCityId);
      var bank = HOSPITALS[useCityId];
      var hIdx = bank.findIndex(function (h) { return h.tier === tier.id; });
      if (hIdx < 0) hIdx = 0;
      var hosp = bank[hIdx];
      var doc = doctorFor(inp.dept, hIdx + cityIdx, i);
      var jitter = seeded(cityIdx * 13 + i * 7 + dIdx) * 0.08 - 0.04;  // ±4%

      var medicalFee = Math.round(med.base * tier.mult * (1 + jitter) / 100) * 100;
      var flightFee = Math.round(org.price * (tier.id === 'A' ? 2.6 : tier.id === 'B' ? 1.35 : 1) / 10) * 10 * heads;
      var grade = inp.mobility || 'A';
      var transfer = buildTransfer(grade, c, tier.id !== 'A');

      var plan = {
        id: 'P' + (i + 1),
        tier: tier.id,
        tierKey: tier.key,
        score: tier.score - i * 2 + Math.round(seeded(dIdx + i) * 4),
        city: c,
        hospital: hosp,
        doctor: doc,
        medical: med,
        dept: inp.dept,
        companions: companions,
        heads: heads,
        stayDays: med.stay,
        cabin: tier.flightClass,
        origin: org,
        hotelName: (tier.id === 'A')
          ? { zh: c.name.zh + '国际医院配套酒店 · 行政套房', en: 'Partner hotel · executive suite, ' + c.name.en, ru: 'Партнёрский отель · люкс, ' + c.name.ru, ja: '提携ホテル・エグゼクティブスイート、' + c.name.ja, ar: 'فندق شريك · جناح تنفيذي، ' + c.name.ar }
          : (tier.id === 'B')
            ? { zh: c.name.zh + '医院周边四星酒店 · 家庭房', en: '4-star hotel near hospital · family room, ' + c.name.en, ru: 'Отель 4* у клиники · семейный номер, ' + c.name.ru, ja: '病院近くの4つ星ホテル・ファミリールーム、' + c.name.ja, ar: 'فندق 4 نجوم قرب المستشفى · غرفة عائلية، ' + c.name.ar }
            : { zh: c.name.zh + '医院周边精选酒店 · 标准房', en: 'Selected hotel near hospital · standard room, ' + c.name.en, ru: 'Отобранный отель у клиники · стандарт, ' + c.name.ru, ja: '病院近くの選りすぐりホテル・スタンダードルーム、' + c.name.ja, ar: 'فندق مختار قرب المستشفى · غرفة قياسية، ' + c.name.ar },
        distance: tier.id === 'A' ? '0.3 km' : tier.id === 'B' ? '1.2 km' : '2.4 km',
        costs: {
          medical: medicalFee,
          flight: flightFee,
          hotel: 0,
          transfer: transfer.total,
          service: tier.service,
          travel: 0
        },
        confidence: med.conf,
        cases: Math.round(med.conf * (tier.id === 'A' ? 0.42 : tier.id === 'B' ? 0.33 : 0.25)),
        bedHold: tier.id.toUpperCase() + '-' + useCityId.slice(0, 3).toUpperCase() + '-' + (4100 + hIdx * 37 + dIdx * 11 + i * 5),
        refNo: 'MB-2026-' + (8800 + cityIdx * 40 + i * 7 + dIdx),
        verifiedAt: '2026-08-2' + (i + 1) + ' 14:0' + i + ' (GMT+8)',
        transfer: transfer,
        addons: []
      };

      var itin = buildItinerary(plan);
      plan.itinerary = itin.items;
      plan.durationDays = itin.days;
      plan.nights = itin.days - 1;
      plan.costs.hotel = tier.hotel * plan.nights;

      plan.total = plan.costs.medical + plan.costs.flight + plan.costs.hotel +
                   plan.costs.transfer + plan.costs.service;
      plan.lowTotal = Math.round(plan.total * 0.92 / 100) * 100;
      plan.highTotal = Math.round(plan.total * 1.14 / 100) * 100;
      return plan;
    });
  }

  function buildItinerary(p) {
    var out = [];
    var day = 1;

    /* Per-language airport-transfer clause, driven by the chosen vehicle tier.
       dir 'in' = arrival pickup, 'out' = departure drop-off. */
    var t = p.transfer;
    function vName(lang) { return t.vehicleName[lang] || t.vehicleName.en || t.vehicleName.zh; }
    function tClause(dir, lang) {
      var v = vName(lang);
      var verb = dir === 'in'
        ? { zh: '由' + v + '专车接机', en: 'private pickup by ' + v, ru: 'индивидуальный трансфер на ' + v, ja: v + 'で専車お出迎え', ar: 'استقبال بسيارة خاصة ' + v }
        : { zh: '由' + v + '专车送机', en: 'private drop-off by ' + v, ru: 'трансфер на ' + v + ' в аэропорт', ja: v + 'で専車お見送り', ar: 'توديع بسيارة خاصة ' + v };
      var extra = t.nurse
        ? { zh: '（含护士随车）', en: '(nurse on board)', ru: '(медсестра в машине)', ja: '（看護師同乗）', ar: '(مع ممرضة على متنها)' }
        : (t.accessibility
            ? { zh: '（含无障碍踏板车）', en: '(wheelchair-accessible ramp)', ru: '(аппарель для коляски)', ja: '（車いす対応リフト付き）', ar: '(معدات نقل الكرسي المتحرك)' }
            : { zh: '（含轮椅/担架通道预约）', en: '(wheelchair/stretcher channel on request)', ru: '(кресло-каталка/носилки по запросу)', ja: '（車椅子／ストレッチャー対応可）', ar: '(كرسي متحرك/نقالة عند الطلب)' });
      return (verb[lang] || verb.en) + (extra[lang] || extra.en);
    }
    out.push({
      kind: 'flight', d: 'D' + (day++),
      zh: '出发 · ' + p.origin.carrierName + ' ' + p.origin.code + ' 飞往 ' + p.city.name.zh,
      en: 'Departure · ' + p.origin.carrierName + ' ' + p.origin.code + ' to ' + p.city.name.en,
      ru: 'Вылет · ' + p.origin.carrierName + ' ' + p.origin.code + ' в ' + p.city.name.ru,
      ja: '出発 · ' + p.origin.carrierName + ' ' + p.origin.code + ' で ' + p.city.name.ja + ' へ',
      ar: 'المغادرة · ' + p.origin.carrierName + ' ' + p.origin.code + ' إلى ' + p.city.name.ar,
      zhBody: '飞行时长约 ' + p.origin.hours + ' 小时，' + p.cabin.zh + '。抵达后' + tClause('in', 'zh') + '，办理酒店入住。',
      enBody: 'Approx. ' + p.origin.hours + ' h flight, ' + p.cabin.en.toLowerCase() + '. On arrival ' + tClause('in', 'en') + ', then hotel check-in.',
      ruBody: 'Перелёт около ' + p.origin.hours + ' ч, ' + p.cabin.en + '. По прибытии ' + tClause('in', 'ru') + ', заселение в отеле.',
      jaBody: '飛行時間約 ' + p.origin.hours + ' 時間、' + p.cabin.en + '。到着後' + tClause('in', 'ja') + '、ホテルへチェックイン。',
      arBody: 'رحلة حوالي ' + p.origin.hours + ' ساعة، ' + p.cabin.en + '. عند الوصول ' + tClause('in', 'ar') + ' ثم تسجيل الدخول للفندق.',
      chips: ['flight']
    });
    out.push({
      kind: 'medical', d: 'D' + (day++),
      zh: '医院挂号 · 专家初诊 · 术前/治疗前检查',
      en: 'Registration · specialist consultation · pre-treatment workup',
      ru: 'Регистрация · консультация специалиста · обследование до лечения',
      ja: '受付 · 専門医初診 · 治療前検査',
      ar: 'التسجيل · استشارة الخبير · فحص ما قبل العلاج',
      zhBody: p.medical.reg.zh + '。国际部协调员全程陪同翻译，当日完成血液、影像与麻醉/耐受性评估。',
      enBody: p.medical.reg.en + '. An international-desk coordinator interprets throughout; labs, imaging and tolerance assessment completed same day.',
      ruBody: p.medical.reg.ru + '. Координатор международного отдела сопровождает и переводит; анализы, визуализация и оценка переносимости — в тот же день.',
      jaBody: p.medical.reg.ja + '。国際部コーディネーターが通訳に同行；血液検査・画像・麻酔／耐容性評価を当日完了。',
      arBody: p.medical.reg.ar + '. يرافقك ويتولى الترجمة منسق القسم الدولي؛ وتُنجز التحاليل والأشعة وتقييم التحمل في اليوم نفسه.',
      chips: ['reg']
    });

    /* Distribute the protocol stages across exactly `stayDays` inpatient days.
       If there are more stages than days, several stages share a day;
       if there are fewer stages than days, each stage spans multiple days. */
    var stages = p.medical.stages;
    var g = Math.min(stages.length, p.stayDays);
    var base = Math.floor(p.stayDays / g);
    var rem = p.stayDays - base * g;
    var buckets = [];
    for (var b = 0; b < g; b++) buckets.push({ idx: [], days: base + (b < rem ? 1 : 0) });
    stages.forEach(function (s, i) { buckets[i % g].idx.push(i); });

    buckets.forEach(function (bk, bi) {
      var span = bk.days > 1 ? ('D' + day + '–D' + (day + bk.days - 1)) : ('D' + day);
      var names = bk.idx.map(function (i) { return p.medical.stages[i]; });
      var stageNo = bk.idx.length > 1
        ? (bk.idx[0] + 1) + '–' + (bk.idx[bk.idx.length - 1] + 1)
        : String(bk.idx[0] + 1);
      var isFirst = bi === 0, isLast = bi === buckets.length - 1;

      var w = p.medical.ward;
      var firstTail = { zh: '入院办理，' + w.zh + '。主管医师查房并确认最终方案。', ru: 'Поступление, ' + w.ru + '. Обход лечащего врача и подтверждение протокола.', ja: '入院手続き、' + w.ja + '。担当医の回診と最終方針の確認。', ar: 'إجراءات الدخول، ' + w.ar + '. جولة الطبيب المعالج وتأكيد البروتوكول النهائي.' };
      var lastTail = { zh: '出院前复查与疗效评估。出院小结、用药清单与回国随访安排（含英文病历）。', ru: 'Предвыписная проверка и оценка ответа. Выписной эпикриз, список препаратов и план наблюдения (на английском).', ja: '退院前再評価と効果判定。退院サマリー、処方リスト、帰国後フォロー（英文カルテ付き）。', ar: 'مراجعة ما قبل الخروج وتقييم الاستجابة. ملخص الخروج وقائمة الأدوية ومتابعة العودة (سجلات إنجليزية).' };
      var midTail = { zh: '按方案执行，每日查房并根据耐受度调整用药 / 训练强度。', ru: 'Протокол выполняется по плану; ежедневные обходы с коррекцией дозы/нагрузки.', ja: '方針通りに実施。毎日回診し、耐容性に合わせて用量／強度を調整。', ar: 'تنفيذ البروتوكول كما هو مخطط؛ جولات يومية مع تعديل الجرعة/الشدة حسب التحمل.' };
      var tail = isFirst ? firstTail : (isLast ? lastTail : midTail);
      var titleTail = names.length > 1
        ? { zh: ' 等 ' + names.length + ' 项', ru: ' и др. (' + names.length + ')', ja: ' 他' + names.length + '件', ar: ' + ' + (names.length - 1) + ' أخرى' }
        : { zh: '', ru: '', ja: '', ar: '' };
      out.push({
        kind: 'medical', d: span,
        zh: '阶段 ' + stageNo + ' · ' + names[0].zh + titleTail.zh,
        en: 'Stage' + (bk.idx.length > 1 ? 's' : '') + ' ' + stageNo + ' · ' + names[0].en + titleTail.en,
        ru: 'Этап ' + stageNo + ' · ' + names[0].ru + titleTail.ru,
        ja: 'ステージ ' + stageNo + ' · ' + names[0].ja + titleTail.ja,
        ar: 'المرحلة ' + stageNo + ' · ' + names[0].ar + titleTail.ar,
        zhBody: tail.zh, ruBody: tail.ru, jaBody: tail.ja, arBody: tail.ar,
        chips: isFirst ? ['ward'] : (isLast ? ['discharge'] : ['treatment']),
        more: names.slice(1).map(function (s) { return { zh: s.zh, en: s.en, ru: s.ru, ja: s.ja, ar: s.ar }; })
      });
      day += bk.days;
    });

    out.push({
      kind: 'hotel', d: 'D' + (day++),
      zh: '出院 · 转入酒店休整与复查随访',
      en: 'Discharge · hotel recovery & follow-up',
      ru: 'Выписка · восстановление в отеле и наблюдение',
      ja: '退院 · ホテルでの回復とフォロー',
      ar: 'الخروج · نقاهة في الفندق ومتابعة',
      zhBody: '入住 ' + p.hotelName.zh + '（距医院 ' + p.distance + '）。24 小时呼叫医生通道，伤口/管路护理每日 1 次上门。',
      enBody: 'Move to ' + p.hotelName.en + ' (' + p.distance + ' from hospital). 24h doctor-on-call line; daily wound/line care at the hotel.',
      ruBody: 'Размещение в ' + p.hotelName.ru + ' (' + p.distance + ' от клиники). Круглосуточная связь с врачом; ежедневный уход за раной/катетером в отеле.',
      jaBody: p.hotelName.ja + 'へ移動（病院から' + p.distance + '）。24時間オンコール、ホテルで毎日の創部／ラインケア。',
      arBody: 'الانتقال إلى ' + p.hotelName.ar + ' (' + p.distance + ' من المستشفى). خط طبي على مدار الساعة؛ رعاية الجرح/القسطرة يومياً في الفندق.',
      chips: ['hotel']
    });
    out.push({
      kind: 'flight', d: 'D' + (day++),
      zh: '返程 · ' + tClause('out', 'zh') + ' + 协助办理退税与机场轮椅服务',
      en: 'Return · ' + tClause('out', 'en') + ' & airport assistance',
      zhBody: tClause('out', 'zh') + '至机场，协助办理医疗器材携带证明与轮椅通道。回国后 7 / 30 / 90 天远程随访。',
      enBody: tClause('out', 'en') + ' to the airport with assistance on medical-device documentation and wheelchair channel. Remote follow-up at 7 / 30 / 90 days after returning home.',
      ruBody: tClause('out', 'ru') + ' в аэропорт с помощью в оформлении документов на медицинские приборы и кресло-каталку. Дистанционное наблюдение на 7 / 30 / 90 день после возвращения.',
      jaBody: tClause('out', 'ja') + 'で空港へ。医療機器携帯証明と車椅子チャンネルの手配を支援。帰国後 7 / 30 / 90 日で遠隔フォロー。',
      arBody: tClause('out', 'ar') + ' إلى المطار مع مساعدة في أوراق الأجهزة الطبية وقناة الكرسي المتحرك. متابعة عن بُعد بعد 7 / 30 / 90 يوماً من العودة.',
      chips: ['flight']
    });
    return { items: out, days: day - 1 };
  }

  /* ---------------- backend seed data ----------------
     Sample orders and the anonymised case library. These mirror what a real
     hospital / operations console would manage; the prototype persists them in
     its own localStorage key (see app.js) and seeds from these generators. */
  function seedOrders() {
    var samples = [
      { dept: 'oncology',  city: 'shanghai',  origin: 'ru-mow', tier: 'A', patient: 'Ivan Petrov',   days: 14 },
      { dept: 'ortho',     city: 'beijing',   origin: 'kz-ala', tier: 'B', patient: 'Aigerim S.',      days: 12 },
      { dept: 'cardio',    city: 'shanghai',  origin: 'ae-dxb', tier: 'A', patient: 'Omar A.',         days: 10 },
      { dept: 'ivf',       city: 'guangzhou', origin: 'sa-ruh', tier: 'B', patient: 'Layla H.',        days: 21 },
      { dept: 'aesthetic', city: 'chengdu',   origin: 'us-lax', tier: 'C', patient: 'Emily C.',        days: 8 },
      { dept: 'checkup',   city: 'hangzhou',  origin: 'jp-tyo', tier: 'A', patient: 'Kenji T.',        days: 5 },
      { dept: 'oncology',  city: 'boao',      origin: 'ru-mow', tier: 'B', patient: 'Sergey K.',       days: 14 },
      { dept: 'ivf',       city: 'shanghai',  origin: 'th-bkk', tier: 'A', patient: 'Pim P.',          days: 21 }
    ];
    var statuses = ['pending', 'verifying', 'verified', 'rejected', 'pending', 'pending', 'verifying', 'verified'];
    return samples.map(function (s, i) {
      var c = city(s.city);
      var med = MEDICAL[s.dept];
      var h = HOSPITALS[s.city].filter(function (x) { return x.tier === s.tier; })[0] || HOSPITALS[s.city][0];
      var org = origin(s.origin);
      var mult = s.tier === 'A' ? 1 : (s.tier === 'B' ? 0.66 : 0.44);
      var medicalFee = Math.round(med.base * mult / 100) * 100;
      var flightFee = Math.round(org.price * (s.tier === 'A' ? 2.6 : 1.35) * 1.5 / 10) * 10;
      var transfer = buildTransfer(s.tier === 'A' ? 'A' : 'B', c, false);
      var ref = 'MB-2026-' + (9000 + i * 7);
      var verified = statuses[i] === 'verified';
      return {
        id: 'O' + (i + 1), refNo: ref, dept: s.dept, city: s.city, cityName: c.name,
        origin: s.origin, tier: s.tier, hospital: h, patient: s.patient,
        createdAt: '2026-09-0' + ((i % 8) + 1) + ' 1' + (i % 9) + ':2' + (i % 6),
        status: statuses[i],
        amounts: { medical: medicalFee, flight: flightFee, hotel: 820 * s.days, transfer: transfer.total, service: s.tier === 'A' ? 12800 : 8800 },
        notes: statuses[i] === 'rejected' ? '需补充近 3 个月内的病理复核报告。' : '',
        verifiedAt: verified ? '2026-09-1' + (i % 9) + ' 10:0' + (i % 9) + ' (GMT+8)' : '',
        bedHold: verified ? (s.tier.toUpperCase() + '-' + s.city.slice(0, 3).toUpperCase() + '-' + (4100 + i * 37)) : '',
        doctorSign: verified ? ('Dr. ' + DOCTORS[s.dept][0].en) : ''
      };
    });
  }

  function seedCases() {
    var rows = [
      { dept: 'oncology',  city: 'shanghai',  hospital: 'Ruijin Hospital · IMC',        outcome: 'ORR ~62% · 中位 PFS 13.2 月',   low: 172000, high: 204000, tags: ['PD-1', '一线', 'MDT'],          status: 'published', usage: 341 },
      { dept: 'oncology',  city: 'boao',      hospital: 'Boao Lecheng · Ruijin Hainan', outcome: 'ORR ~58% · 特许药械',          low: 158000, high: 186000, tags: ['特许', '二线'],                status: 'published', usage: 122 },
      { dept: 'ortho',     city: 'beijing',   hospital: 'PUMC Hospital · IMS',          outcome: '10 年假体存活 > 95%',          low: 118000, high: 138000, tags: ['机器人', '膝关节'],            status: 'published', usage: 208 },
      { dept: 'ortho',     city: 'chengdu',   hospital: 'West China Hospital · IC',     outcome: '10 年假体存活 > 96%',          low: 96000,  high: 112000, tags: ['机器人', '髋关节', '性价比'],  status: 'published', usage: 176 },
      { dept: 'cardio',    city: 'shanghai',  hospital: 'Ruijin Hospital · IMC',        outcome: '介入成功率 98%+',              low: 146000, high: 168000, tags: ['冠脉', '桡动脉'],            status: 'published', usage: 254 },
      { dept: 'ivf',       city: 'guangzhou', hospital: "Guangdong Provincial · IMC",   outcome: '临床妊娠率 ~58% (<35)',       low: 88000,  high: 104000, tags: ['PGT-A', '拮抗剂'],           status: 'published', usage: 312 },
      { dept: 'ivf',       city: 'shanghai',  hospital: 'Ruijin Hospital · IMC',        outcome: '临床妊娠率 ~60% (<35)',       low: 92000,  high: 108000, tags: ['PGT-A', '反复失败'],          status: 'draft',     usage: 47 },
      { dept: 'aesthetic', city: 'chengdu',   hospital: "Sichuan Provincial · IMC",     outcome: '6 月满意度 96%',               low: 52000,  high: 64000,  tags: ['抗衰', '光电'],              status: 'published', usage: 401 },
      { dept: 'checkup',   city: 'hangzhou',  hospital: 'Sir Run Run Shaw · Intl',      outcome: '早癌检出 +3.2 倍',             low: 30000,  high: 36000,  tags: ['PET-MR', '早筛'],            status: 'published', usage: 528 },
      { dept: 'oncology',  city: 'guangzhou', hospital: 'First Affiliated SYSU · IMC',  outcome: 'ORR ~60% · 胃肠',            low: 166000, high: 196000, tags: ['胃肠', '一线'],              status: 'published', usage: 263 },
      { dept: 'cardio',    city: 'beijing',   hospital: 'Xuanwu Hospital · Intl',      outcome: 'CCU 再入院 < 2%',            low: 138000, high: 158000, tags: ['结构性心脏病'],             status: 'draft',     usage: 38 },
      { dept: 'checkup',   city: 'shanghai',  hospital: 'Ruijin Hospital · IMC',        outcome: '早癌检出 +3.0 倍',            low: 34000,  high: 42000,  tags: ['基因', '代谢组'],            status: 'published', usage: 419 }
    ];
    return rows.map(function (r, i) {
      return {
        id: 'C' + (i + 1), dept: r.dept, city: r.city, hospital: r.hospital, outcome: r.outcome,
        low: r.low, high: r.high, tags: r.tags.slice(), status: r.status, usage: r.usage,
        updatedAt: '2026-08-' + (10 + (i % 15)) + ' 09:0' + (i % 6)
      };
    });
  }

  global.DATA = {
    CITIES: CITIES, ORIGINS: ORIGINS, BUDGETS: BUDGETS, DOCTORS: DOCTORS,
    MEDICAL: MEDICAL, DEPT_IDS: DEPT_IDS, TIERS: TIERS, ADDONS: ADDONS,
    PARTNERS: PARTNERS, SAMPLE_FILES: SAMPLE_FILES, HOSPITALS: HOSPITALS,
    TRANSFER_MODELS: TRANSFER_MODELS, TRANSFER_GRADES: TRANSFER_GRADES, NURSE_FEE: NURSE_FEE,
    city: city, origin: origin, budget: budget, buildPlans: buildPlans, fmt: fmt,
    seedOrders: seedOrders, seedCases: seedCases
  };
})(window);
