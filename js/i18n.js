/* ============================================================
   MedBridge · i18n  (zh / en / ru / ar / ja)
   Usage: t('plan.doctor')  ->  current language string
   ============================================================ */
(function (global) {
  'use strict';

  var LANGS = [
    { code: 'zh', label: '中文',       dir: 'ltr' },
    { code: 'en', label: 'English',    dir: 'ltr' },
    { code: 'ru', label: 'Русский',    dir: 'ltr' },
    { code: 'ar', label: 'العربية',    dir: 'rtl' },
    { code: 'ja', label: '日本語',      dir: 'ltr' }
  ];

  var DICT = {

    /* ---------------------------------------------------- zh */
    zh: {
      brand: { tagline: '跨境医疗行程平台' },
      nav: { home: '首页', intake: '需求评估', plans: '行程方案', pricing: '解锁核实方案', trips: '我的行程' },
      common: {
        demoBadge: '演示原型 · 示例数据', next: '下一步', back: '返回', confirm: '确认', cancel: '取消',
        close: '关闭', viewDetail: '查看详情', select: '选择', optional: '可选', perPerson: '/人',
        total: '合计', from: '起', included: '已含', notIncluded: '未含', days: '天', night: '晚',
        loading: '处理中…', continue: '继续', currency: '¥', save: '保存', edit: '修改', per: '每位'
      },
      footer: { disclaimer: '本页为产品沟通用可点击原型，所有医院、医师、价格、疗效数据均为示例，不构成医疗建议或要约。', demo: 'Prototype v0.9' },

      backend: {
        patientRole: '患者端', hospitalRole: '医院端', opsRole: '运营后台', switchRole: '切换身份',
        hubTitle: '后台工作台', hubSub: '医院与运营人员入口。下方三块对应「订单、医院核实工作台、案例库管理」。',
        hubPatientNote: '当前为前台患者视图。切换到「医院端 / 运营后台」即可进入管理界面。',
        cardOrders: '订单', cardOrdersDesc: '查看患者端生成的所有行程订单，跟踪核实与支付状态。',
        cardVerify: '医院核实工作台', cardVerifyDesc: '逐条核实 AI 生成的方案：医师档期、床位、准确报价与医师署名。',
        cardCases: '案例库管理', cardCasesDesc: '维护脱敏历史案例——AI 匹配与组合的来源。支持增删改与发布控制。',
        ordersTitle: '订单', ordersSub: '患者端生成的行程订单，按状态跟踪核实与支付。',
        colRef: '订单号', colPatient: '患者', colDept: '科室', colCity: '城市', colHospital: '医院', colTier: '方案', colCreated: '创建时间', colStatus: '状态', colAmount: '预估金额',
        statusPending: '待核实', statusVerifying: '核实中', statusVerified: '已核实', statusRejected: '已退回',
        viewOrder: '查看订单', noOrders: '暂无订单', resetOrders: '重置示例订单',
        orderDetail: '订单详情', orderAmounts: '金额明细',
        verifyTitle: '医院核实工作台', verifySub: '逐条核实 AI 方案，给出医师署名、床位预留号与准确报价。',
        verifyQueue: '待核实队列', verifyDetail: '核实详情', verifyNoteLabel: '核实备注', verifyNotePh: '填写核实结论，如「已确认主刀档期与床位」',
        markVerifying: '标记核实中', markVerified: '标记已核实', markRejected: '退回补充资料',
        verifiedInfo: '核实完成', bedHold: '床位预留号', doctorSign: '医师署名', verifiedAt: '核实时间',
        casesTitle: '案例库管理', casesSub: '脱敏历史案例，是 AI 匹配与组合的来源。',
        colCase: '案例编号', colOutcome: '疗效指标', colCost: '费用区间', colTags: '标签', colUsage: '被引用', colState: '状态',
        published: '已发布', draft: '草稿',
        addCase: '新增案例', editCase: '编辑', deleteCase: '删除', togglePublish: '发布 / 转草稿',
        caseFormTitle: '案例信息', caseDept: '科室', caseCity: '城市', caseHospital: '医院', caseOutcome: '疗效指标', caseLow: '费用下限', caseHigh: '费用上限', caseTags: '标签（逗号分隔）', caseStatus: '状态',
        noCases: '案例库为空', resetCases: '重置案例库', confirmDelete: '确认删除该案例？'
      },

      dept: {
        oncology:  { name: '肿瘤精准治疗', desc: '靶向 / 免疫 / MDT 多学科会诊' },
        ortho:     { name: '骨科与关节置换', desc: '机器人辅助髋膝关节置换' },
        cardio:    { name: '心血管介入', desc: '冠脉造影 / 支架 / 心脏康复' },
        ivf:       { name: '辅助生殖', desc: '三代试管 PGT-A / 个体化促排' },
        aesthetic: { name: '医美与抗衰', desc: '面部年轻化 / 光电抗衰联合' },
        checkup:   { name: '深度早筛体检', desc: 'PET-MR / 基因 / 心脑血管全景' }
      },

      home: {
        heroTitle: '用你的语言，把一次跨境治疗安排得清清楚楚',
        heroSub: '输入病名与检查结果，几分钟内得到 3 套完整治疗行程方案——机票、接送、住宿、挂号、病房、主治医师、治疗方案与费用，一次给全。先免费看 AI 模拟方案，满意后再解锁医院核实版。',
        ctaPrimary: '免费生成我的方案', ctaSecondary: '看看平台怎么运作',
        stat1: '合作医院', stat2: '可匹配真实案例', stat3: '支持语言',
        howTitle: '三步，从“我不知道该去哪”到“行程已确认”',
        howSub: '患者全程使用母语，平台负责翻译、核价与协调。',
        step1Title: '母语描述病情', step1Body: '用本国语言填写病名、上传检查报告与影像。系统自动翻译为标准化病历摘要，交给医院国际部。', step1Lock: '免费',
        step2Title: 'AI 生成 3 套行程方案', step2Body: '平台在已有真实案例中检索匹配，输出 3 套方案：医院、主刀医师、疗程、住院天数、机票酒店与逐项费用。', step2Lock: '免费',
        step3Title: '解锁医院核实版并预定', step3Body: '付费后由医院国际部逐项核实治疗方案、医生档期与床位，并给出准确报价。机票酒店在携程 / Booking 等第三方平台支付。', step3Lock: '付费',
        deptTitle: '覆盖六大科室', deptSub: '每个科室都积累了一批可公开检索的脱敏真实案例，AI 在这些案例基础上做匹配与组合。',
        cases: '{n} 例可匹配案例', casesUnit: '例',
        trustTitle: '为什么医院愿意接入', trustSub: '平台不卖流量，只做结构化需求与前置翻译，帮医院国际部降低沟通成本。',
        trust1t: '需求已结构化', trust1d: '患者带来的是翻译好、字段完整的病历摘要与检查清单，不是一堆看不懂的外文报告。',
        trust2t: '先筛后接', trust2d: 'AI 预匹配阶段过滤掉不适配的病例，医院只处理真正有治疗指征的询单。',
        trust3t: '支付留在平台外', trust3d: '机票酒店由第三方 OTA 收款，医院只收自己的医疗服务费，避免资金池与合规风险。',
        trust4t: '疗效可沉淀', trust4d: '治疗结束后的随访数据回填案例库，形成可检索的成功率与真实费用区间。',
        ctaTitle: '现在就用一个真实场景试试', ctaBody: '不需要注册。选一个科室，填上病名，几分钟看完整个流程。', ctaBtn: '开始需求评估'
      },

      intake: {
        title: '需求评估', sub: '全部用你的语言填写，我们负责翻译给医院。带 * 的是必填项。',
        secBasic: '基本信息', secMedical: '病情与资料', secPref: '行程偏好',
        origin: '出发国家 / 城市', originHint: '用于估算航班时长与机票费用',
        dept: '选择科室', deptHint: '不确定可以先选最接近的一个',
        disease: '病名 / 诊断', diseaseHint: '可以用本国语言填写，例如 "рак желудка"、"Gastric cancer"、"胃癌"',
        diseasePh: '例如：胃腺癌 T3N1M0',
        reports: '检查结果', reportsHint: '可上传 CT / MRI / 病理 / 血液报告（演示原型不会真正上传文件）',
        uploadTitle: '点击上传检查报告或影像', uploadDesc: '支持 PDF / JPG / DICOM · 单个文件最大 200MB',
        city: '意向目的地城市', cityHint: '影响医院、酒店与航班成本',
        budget: '预算区间（人民币）', date: '期望出发时间', companions: '同行家属人数',
        travelPref: '是否需要旅游附加选项', travelHint: '治疗结束后安排疗养、观光或中医康复',
        sideTitle: '接下来会发生什么', sideStep1t: 'AI 检索匹配案例', sideStep1d: '在你的科室里找出最相近的历史案例',
        sideStep2t: '生成 3 套行程方案', sideStep2d: '每套包含完整治疗行程 + 后勤 + 费用',
        sideStep3t: '你挑一套解锁核实', sideStep3d: '医院逐项核实后给出准确报价与床位预留',
        sideStep4t: '第三方平台完成支付', sideStep4d: '机票酒店在携程 / Booking 等平台付款',
        submit: '免费生成行程方案', mobility: '接驳需求分级', mobilityHint: '用于匹配最合适的接驳车型与护理配置（不影响医疗方案）', disclaimer: '演示原型，提交后使用示例数据模拟生成，不会真实上传或外发任何信息。'
      },

      gen: { title: '正在为你生成行程方案', sub: 'AI 正在检索历史案例并组合行程', s1: '翻译并标准化病历摘要', s2: '检索科室历史案例库', s3: '匹配医院与主治医师档期', s4: '组合机票、住宿与接送', s5: '生成逐项费用估算' },

      plans: {
        title: '为你生成的 3 套治疗行程方案', sub: '基于历史真实案例的 AI 模拟组合。关键字段在解锁医院核实版后才会显示真实值。',
        match: '匹配度', matchSub: '与你的病情、预算与时间的综合匹配', resultsFor: '胃癌 · 上海 · 预算 20-30 万',
        regenerate: '重新生成', tierA: '优选尊享', tierB: '均衡之选', tierC: '经济可行',
        tierADesc: '顶级三甲国际部，主刀医师为科室主任', tierBDesc: '同城实力三甲，性价比与质量平衡', tierCDesc: '新一线城市名院，费用最低',
        recommend: '推荐', popular: '最多人选', value: '最省钱',
        hospital: '医院', doctor: '主治医师', stay: '住院', ward: '病房', duration: '行程', success: '疗效',
        viewPlan: '查看完整方案', pickPlan: '选定此方案', picked: '已选定',
        priceNote: 'AI 估算区间', exactPrice: '医院报价', aiBadge: 'AI 模拟', verifiedBadge: '医院已核实',
        freeNote: '当前为免费 AI 模拟方案：医生姓名、准确费用、床位与疗效数据均为占位值。',
        unlockCta: '解锁医院核实版', costHint: '费用为估算区间，解锁后显示逐项准确报价'
      },

      plan: {
        tabOverview: '概览', tabTimeline: '行程时间轴', tabMedical: '治疗方案', tabCost: '费用明细', tabTravel: '旅游附加',
        backToList: '返回方案列表', itineraryTitle: '完整行程时间轴', itinerarySub: '从出发到返程，每一天的安排',
        hospitalInfo: '医院信息', city: '城市', level: '等级', accred: '认证', beds: '开放床位',
        medicalTeam: '医疗团队', chief: '主治医师', specialty: '专长', experience: '从业年限', languages: '问诊语言', casesDone: '完成例数',
        treatmentPlan: '治疗方案', procedure: '核心术式 / 方案', stages: '疗程阶段', stage: '阶段', successRate: '疗效指标',
        stayDays: '住院天数', wardType: '病房类型', registration: '挂号方式',
        logistics: '后勤安排', flight: '国际航班', airline: '承运', cabin: '舱位', duration: '飞行时长', tripDays: '行程天数',
        transfer: '地面交通', transferGrade: '接驳分级', transferVehicle: '推荐车型', transferNurse: '含护士随车', transferPerTrip: '单趟', transferRound: '往返（接机 + 送机）', transferSelfBook: '自理预订 · 平台建议车型', transferPlatformBook: '平台代订', transferSource: '运力说明：商务车平台自营；救护车按框架协议外包、按趟结算。', transferKm: '机场 → 医院约 {n} 公里', transferAccessible: '无障碍踏板车', transferBook: '预订方式', hotel: '住宿', room: '房型', distance: '距医院',
        costTitle: '费用明细', medicalFee: '医疗服务费', flightFee: '国际机票', hotelFee: '住宿', transferFee: '地面交通',
        serviceFee: '平台服务费', travelAddon: '旅游附加', total: '合计', estimate: 'AI 估算', exact: '医院报价',
        perCompanion: '含 {n} 名家属',
        travelTitle: '旅游与疗养附加选项', travelAdd: '加入行程', travelAdded: '已加入',
        lockedTitle: '这些字段需要医院核实后才显示真实值',
        lockedBody: '免费版展示的是 AI 基于历史案例的模拟结果：医师姓名、逐项费用、床位预留号、疗效数据均为占位。解锁后由医院国际部逐项确认并署名。',
        lockedBtn: '解锁医院核实版',
        verifiedTitle: '医院已核实', verifiedBy: '核实机构', verifiedAt: '核实时间', bedHold: '床位预留号',
        doctorSign: '医师署名', hospitalRef: '医院询单编号', confidence: '方案置信度',
        confidenceNote: '基于 {n} 例相近历史案例'
      },

      pricing: {
        title: '解锁医院核实版方案', sub: '免费拿到的是方向，付费拿到的是可以预约的真实档期与准确报价。',
        t1Name: 'AI 模拟方案', t1Desc: '先看清方向与费用量级', t1Price: '免费', t1Unit: '永久免费，无需注册',
        t2Name: '医院核实版', t2Desc: '医院逐项核实，可预约', t2Unit: '一次性 · 按方案计费',
        t3Name: '全程陪诊套餐', t3Desc: '核实 + 签证翻译接送全包', t3Unit: '一次性 · 含核实版全部权益',
        pay: '立即解锁', paid: '已解锁', current: '当前', upgrade: '升级', popular: '最多人选',
        payTitle: '确认支付', paySub: '解锁后医院国际部将在 1-2 个工作日内完成核实', payMethod: '支付方式',
        pmCard: '国际信用卡', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: '电子钱包', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: '银行电汇', pmBankSub: '适合大额医疗付费 · 1-3 个工作日',
        successTitle: '支付成功，核实请求已提交', successBody: '医院国际部已收到你的病历摘要，将在 1-2 个工作日内逐项核实治疗方案、医生档期与床位，核实完成后方案页会自动更新。',
        successBtn: '查看已核实方案',
        noteRefund: '若医院判断无治疗指征或无法接收，全额退款。',
        noteScope: '本费用仅覆盖方案核实与协调服务，不含机票、酒店与医院治疗费——那部分在第三方平台支付。',
        pkgAName: '自理版', pkgADesc: '医院核实治疗方案，机票 / 酒店 / 接机自行预订', pkgBName: '全包版', pkgBDesc: '医院核实 + 机票 / 接机 / 住宿一站式代订', pkgCName: '私人助理版', pkgCDesc: '全包 + 专属私人助理全程顶配服务',

        feat: {
          flightBook: '机票代订（携程）', pickup: '专车接机 / 送机', hotelBook: '住宿代订（Booking）', assistant: '专属私人助理全程', vip: 'VIP 绿色通道',
          ai3: '3 套 AI 模拟行程方案', range: '费用区间估算', verify: '医院官方核实治疗方案',
          doctor: '主治医师署名 + 资质档案', bed: '床位 / 手术档期预留号', exact: '逐项准确报价（医院定价）',
          visa: '医疗签证邀请函 + 材料指导', interp: '全程医疗翻译（门诊 + 住院）', airport: '专车接送机 + 陪诊',
          accompany: '1 名家属行程统筹', insurance: '并发症医疗险（保额 100 万）'
        }
      },

      booking: {
        title: '预定与支付', sub: '机票、酒店与医院挂号均在各自的第三方平台完成支付，平台不代收、不碰资金池。',
        noteTitle: '为什么分开支付', noteBody: '机票酒店受航司与 OTA 的退改规则约束，医院挂号费属于医疗服务。分开支付可以让每一笔都有独立凭证与独立的退改通道，也避免平台形成资金池。',
        itemFlight: '国际机票', itemHotel: '住宿', itemReg: '医院挂号与床位', itemTransfer: '专车接送', itemTravel: '旅游附加',
        provider: '支付平台', goPay: '去支付', payOnPartner: '在 {p} 完成支付',
        redirectTitle: '即将跳转到 {p}', redirectBody: '你将被带到第三方平台完成这笔支付。支付与退改均由该平台负责，MedBridge 不代收这笔款项。',
        redirectBtn: '知道了，去支付',
        summary: '支付清单', platformFee: '平台服务费', platformFeeNote: '已在上一步解锁时支付',
        doneTitle: '全部预定提交完成', doneBody: '每一笔支付都有独立凭证。行程确认后，行程单、接机信息与就诊提醒会同步到「我的行程」。',
        itemsPending: '{n} 项待支付', itemsPaid: '{n} 项已支付'
      },

      trips: {
        title: '我的行程', sub: '在这里追踪每一笔预定的状态与凭证。',
        empty1: '还没有进行中的行程', empty2: '完成需求评估后，生成的方案会出现在这里。',
        emptyBtn: '开始需求评估',
        orderNo: '行程编号', created: '创建时间', viewPlan: '查看方案', payNow: '去支付',
        s1: '需求已提交', s2: 'AI 方案已生成', s3: '医院已核实', s4: '待第三方支付', s5: '预定已确认', s6: '行程进行中',
        pipeline: '进度', booking: '预定项'
      },

      partners: { ctrip: '携程国际机票', booking: 'Booking.com', hospital: '医院官方挂号系统', didi: '专车接送服务', airbnb: '民宿 / 公寓' }
    },

    /* ---------------------------------------------------- en */
    en: {
      brand: { tagline: 'Cross-border Treatment Planner' },
      nav: { home: 'Home', intake: 'Assessment', plans: 'Treatment Plans', pricing: 'Unlock Verified', trips: 'My Trips' },
      common: {
        demoBadge: 'Prototype · Sample data', next: 'Next', back: 'Back', confirm: 'Confirm', cancel: 'Cancel',
        close: 'Close', viewDetail: 'View detail', select: 'Select', optional: 'Optional', perPerson: '/person',
        total: 'Total', from: 'from', included: 'Included', notIncluded: 'Not included', days: 'days', night: 'nights',
        loading: 'Working…', continue: 'Continue', currency: '¥', save: 'Save', edit: 'Edit', per: 'per'
      },
      footer: { disclaimer: 'Clickable prototype for product discussion. All hospitals, physicians, prices and outcome figures are illustrative and do not constitute medical advice or an offer.', demo: 'Prototype v0.9' },

      backend: {
        patientRole: 'Patient', hospitalRole: 'Hospital', opsRole: 'Operations', switchRole: 'Switch role',
        hubTitle: 'Backend workbench', hubSub: 'Entry for hospital and operations staff. The three tiles below are Orders, Hospital verification workbench, and Case-library management.',
        hubPatientNote: 'You are on the patient front-end. Switch to Hospital or Operations to enter the management console.',
        cardOrders: 'Orders', cardOrdersDesc: 'See every trip order created from the patient side and track verification & payment status.',
        cardVerify: 'Hospital verification', cardVerifyDesc: 'Verify AI-generated plans line by line: physician availability, bed, exact pricing and physician sign-off.',
        cardCases: 'Case library', cardCasesDesc: 'Maintain the anonymised historical cases the AI matches and recombines. Full CRUD with publish control.',
        ordersTitle: 'Orders', ordersSub: 'Trip orders created from the patient side, tracked by verification & payment status.',
        colRef: 'Order #', colPatient: 'Patient', colDept: 'Dept', colCity: 'City', colHospital: 'Hospital', colTier: 'Plan', colCreated: 'Created', colStatus: 'Status', colAmount: 'Est. total',
        statusPending: 'Awaiting verify', statusVerifying: 'Verifying', statusVerified: 'Verified', statusRejected: 'Returned',
        viewOrder: 'View order', noOrders: 'No orders yet', resetOrders: 'Reset sample orders',
        orderDetail: 'Order detail', orderAmounts: 'Cost breakdown',
        verifyTitle: 'Hospital verification workbench', verifySub: 'Verify AI plans one by one, giving physician sign-off, bed-hold number and exact pricing.',
        verifyQueue: 'Queue', verifyDetail: 'Verification detail', verifyNoteLabel: 'Verification note', verifyNotePh: 'e.g. "Confirmed surgeon slot and bed hold"',
        markVerifying: 'Mark verifying', markVerified: 'Mark verified', markRejected: 'Return for info',
        verifiedInfo: 'Verification complete', bedHold: 'Bed hold no.', doctorSign: 'Physician sign-off', verifiedAt: 'Verified at',
        casesTitle: 'Case library', casesSub: 'Anonymised historical cases — the source the AI matches and recombines.',
        colCase: 'Case #', colOutcome: 'Outcome', colCost: 'Cost band', colTags: 'Tags', colUsage: 'Cited', colState: 'State',
        published: 'Published', draft: 'Draft',
        addCase: 'Add case', editCase: 'Edit', deleteCase: 'Delete', togglePublish: 'Publish / draft',
        caseFormTitle: 'Case details', caseDept: 'Department', caseCity: 'City', caseHospital: 'Hospital', caseOutcome: 'Outcome', caseLow: 'Cost floor', caseHigh: 'Cost ceiling', caseTags: 'Tags (comma-sep)', caseStatus: 'State',
        noCases: 'Case library is empty', resetCases: 'Reset case library', confirmDelete: 'Delete this case?'
      },

      dept: {
        oncology:  { name: 'Precision Oncology', desc: 'Targeted / immuno / MDT board' },
        ortho:     { name: 'Orthopaedics & Joint', desc: 'Robotic hip & knee replacement' },
        cardio:    { name: 'Cardiovascular', desc: 'Angiography / stent / rehab' },
        ivf:       { name: 'Fertility (IVF)', desc: 'PGT-A / personalised stimulation' },
        aesthetic: { name: 'Aesthetics & Anti-aging', desc: 'Facial rejuvenation / energy devices' },
        checkup:   { name: 'Executive Screening', desc: 'PET-MR / genomics / cardiovascular' }
      },

      home: {
        heroTitle: 'Plan an entire treatment trip abroad — in your own language',
        heroSub: 'Enter a diagnosis and your test results. Within minutes you get three complete treatment itineraries: flights, transfers, hotel, registration, ward, attending physician, treatment protocol and itemised costs. Start free with AI-simulated plans; unlock the hospital-verified version when you are ready to book.',
        ctaPrimary: 'Generate my plans free', ctaSecondary: 'How the platform works',
        stat1: 'Partner hospitals', stat2: 'Matchable real cases', stat3: 'Languages supported',
        howTitle: 'Three steps: from "I have no idea where to go" to "trip confirmed"',
        howSub: 'Patients stay in their native language. The platform handles translation, price verification and coordination.',
        step1Title: 'Describe the condition in your language', step1Body: 'Fill in the diagnosis and upload scans or lab reports in your own language. The system produces a standardised, translated medical summary for the hospital international desk.', step1Lock: 'Free',
        step2Title: 'AI builds three itineraries', step2Body: 'The platform searches its library of real past cases and returns three options — hospital, surgeon, protocol, length of stay, flights, hotel and itemised costs.', step2Lock: 'Free',
        step3Title: 'Unlock the verified version and book', step3Body: 'After payment, the hospital international desk verifies the protocol, physician availability and bed, then issues exact pricing. Flights and hotels are paid on third-party platforms.', step3Lock: 'Paid',
        deptTitle: 'Six departments covered', deptSub: 'Each department has a library of anonymised real cases that the AI matches and recombines.',
        cases: '{n} matchable cases', casesUnit: 'cases',
        trustTitle: 'Why hospitals join', trustSub: 'We do not sell traffic. We deliver structured demand and front-loaded translation, cutting the international desk\'s communication cost.',
        trust1t: 'Demand arrives structured', trust1d: 'Hospitals receive a translated, field-complete medical summary — not a pile of unreadable foreign reports.',
        trust2t: 'Screen before accepting', trust2d: 'The AI pre-matching stage filters out unsuitable cases, so hospitals only handle enquiries with real treatment indications.',
        trust3t: 'Payments stay off-platform', trust3d: 'Flights and hotels are collected by third-party OTAs; hospitals bill only their own medical fees. No pooled funds, no compliance exposure.',
        trust4t: 'Outcomes compound', trust4d: 'Post-treatment follow-up data flows back into the case library, building searchable success rates and real price bands.',
        ctaTitle: 'Try it on a realistic scenario', ctaBody: 'No registration. Pick a department, enter a diagnosis, and walk through the whole flow in minutes.', ctaBtn: 'Start assessment'
      },

      intake: {
        title: 'Medical assessment', sub: 'Answer in your own language — we translate for the hospital. Fields marked * are required.',
        secBasic: 'Basics', secMedical: 'Condition & documents', secPref: 'Trip preferences',
        origin: 'Departing country / city', originHint: 'Used to estimate flight duration and airfare',
        dept: 'Department', deptHint: 'Pick the closest match if unsure',
        disease: 'Diagnosis', diseaseHint: 'You may write it in your own language.',
        diseasePh: 'e.g. Gastric adenocarcinoma T3N1M0',
        reports: 'Test results', reportsHint: 'Upload CT / MRI / pathology / blood reports (this prototype does not actually upload files)',
        uploadTitle: 'Click to upload reports or imaging', uploadDesc: 'PDF / JPG / DICOM · up to 200MB per file',
        city: 'Preferred destination city', cityHint: 'Affects hospital, hotel and flight cost',
        budget: 'Budget range (CNY)', date: 'Preferred departure', companions: 'Accompanying family members',
        travelPref: 'Add tourism options', travelHint: 'Recovery retreat, sightseeing or TCM rehab after treatment',
        sideTitle: 'What happens next', sideStep1t: 'AI searches similar cases', sideStep1d: 'Finds the closest historical cases in your department',
        sideStep2t: 'Three itineraries generated', sideStep2d: 'Each with full treatment plan, logistics and costs',
        sideStep3t: 'You unlock one for verification', sideStep3d: 'The hospital verifies each line and issues exact pricing plus a bed hold',
        sideStep4t: 'Pay on third-party platforms', sideStep4d: 'Flights and hotels are paid on Trip.com / Booking and similar',
        submit: 'Generate itineraries free', mobility: 'Transfer needs grading', mobilityHint: 'Matches the right vehicle and care setup — does not change the medical plan', disclaimer: 'Prototype: submission uses sample data for simulation. Nothing is uploaded or transmitted.'
      },

      gen: { title: 'Building your itineraries', sub: 'AI is searching past cases and assembling the trip', s1: 'Translating and standardising the medical summary', s2: 'Searching the department case library', s3: 'Matching hospital and physician availability', s4: 'Assembling flights, hotel and transfers', s5: 'Generating itemised cost estimates' },

      plans: {
        title: 'Three treatment itineraries for you', sub: 'AI-simulated combinations built on real past cases. Key fields show true values only after you unlock the hospital-verified version.',
        match: 'Match', matchSub: 'Against your condition, budget and timing', resultsFor: 'Gastric cancer · Shanghai · CNY 200k-300k',
        regenerate: 'Regenerate', tierA: 'Premium', tierB: 'Balanced', tierC: 'Economy',
        tierADesc: 'Top-tier tertiary international wing, department chair operating', tierBDesc: 'Strong tertiary hospital in the same city, balanced value', tierCDesc: 'Leading hospital in a lower-cost city',
        recommend: 'Recommended', popular: 'Most chosen', value: 'Best value',
        hospital: 'Hospital', doctor: 'Attending physician', stay: 'Inpatient', ward: 'Ward', duration: 'Duration', success: 'Outcome',
        viewPlan: 'View full plan', pickPlan: 'Select this plan', picked: 'Selected',
        priceNote: 'AI estimate', exactPrice: 'Hospital quote', aiBadge: 'AI simulated', verifiedBadge: 'Hospital verified',
        freeNote: 'You are viewing free AI-simulated plans: physician names, exact costs, bed holds and outcome data are placeholders.',
        unlockCta: 'Unlock hospital-verified', costHint: 'Costs are estimated ranges; unlocking shows exact itemised pricing'
      },

      plan: {
        tabOverview: 'Overview', tabTimeline: 'Itinerary', tabMedical: 'Treatment', tabCost: 'Costs', tabTravel: 'Add-ons',
        backToList: 'Back to plans', itineraryTitle: 'Full day-by-day itinerary', itinerarySub: 'Every day, from departure to return',
        hospitalInfo: 'Hospital', city: 'City', level: 'Tier', accred: 'Accreditation', beds: 'Beds',
        medicalTeam: 'Medical team', chief: 'Attending physician', specialty: 'Specialty', experience: 'Years practising', languages: 'Consult languages', casesDone: 'Cases performed',
        treatmentPlan: 'Treatment plan', procedure: 'Core procedure', stages: 'Protocol stages', stage: 'Stage', successRate: 'Outcome metric',
        stayDays: 'Inpatient days', wardType: 'Ward type', registration: 'Registration',
        logistics: 'Logistics', flight: 'International flight', airline: 'Carrier', cabin: 'Cabin', duration: 'Flight time', tripDays: 'Trip length',
        transfer: 'Ground transport', transferGrade: 'Transfer grade', transferVehicle: 'Recommended vehicle', transferNurse: 'RN on board', transferPerTrip: 'Per trip', transferRound: 'Round trip (pickup + drop-off)', transferSelfBook: 'Self-book · platform suggests', transferPlatformBook: 'Platform-booked', transferSource: 'Fleet note: business vans are self-operated by the platform; ambulances are outsourced on a framework agreement, billed per trip.', transferKm: 'Airport → hospital ~{n} km', transferAccessible: 'Wheelchair-accessible ramp', transferBook: 'Booking', hotel: 'Accommodation', room: 'Room type', distance: 'To hospital',
        costTitle: 'Itemised costs', medicalFee: 'Medical fees', flightFee: 'Airfare', hotelFee: 'Accommodation', transferFee: 'Ground transport',
        serviceFee: 'Platform service fee', travelAddon: 'Tourism add-ons', total: 'Total', estimate: 'AI estimate', exact: 'Hospital quote',
        perCompanion: 'Incl. {n} family member(s)',
        travelTitle: 'Tourism & recovery add-ons', travelAdd: 'Add to trip', travelAdded: 'Added',
        lockedTitle: 'These fields show real values only after hospital verification',
        lockedBody: 'The free version is an AI simulation based on past cases: physician names, itemised costs, bed-hold numbers and outcome data are placeholders. Unlocking has the hospital international desk confirm and sign off on every line.',
        lockedBtn: 'Unlock hospital-verified',
        verifiedTitle: 'Verified by hospital', verifiedBy: 'Verified by', verifiedAt: 'Verified at', bedHold: 'Bed hold no.',
        doctorSign: 'Physician sign-off', hospitalRef: 'Hospital enquiry no.', confidence: 'Plan confidence',
        confidenceNote: 'Based on {n} similar past cases'
      },

      pricing: {
        title: 'Unlock the hospital-verified plan', sub: 'Free gives you direction. Paid gives you bookable dates and exact pricing.',
        t1Name: 'AI simulated', t1Desc: 'See direction and cost magnitude first', t1Price: 'Free', t1Unit: 'Always free, no registration',
        t2Name: 'Hospital verified', t2Desc: 'Verified line by line, ready to book', t2Unit: 'One-off · per plan',
        t3Name: 'Full concierge', t3Desc: 'Verification + visa, interpreters, transfers', t3Unit: 'One-off · includes all verified-tier benefits',
        pay: 'Unlock now', paid: 'Unlocked', current: 'Current', upgrade: 'Upgrade', popular: 'Most chosen',
        payTitle: 'Confirm payment', paySub: 'After unlocking, the hospital desk completes verification within 1-2 business days', payMethod: 'Payment method',
        pmCard: 'International card', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'E-wallet', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'Bank transfer', pmBankSub: 'For larger medical payments · 1-3 business days',
        successTitle: 'Payment received — verification requested', successBody: 'The hospital international desk has your medical summary and will verify the protocol, physician availability and bed within 1-2 business days. This page updates automatically once verified.',
        successBtn: 'View verified plan',
        noteRefund: 'Full refund if the hospital finds no treatment indication or cannot accept the case.',
        noteScope: 'This fee covers verification and coordination only — not flights, hotels or hospital treatment, which are paid on third-party platforms.',
        pkgAName: 'DIY plan', pkgADesc: 'Verified medical plan; book your own flights / hotel / transfer', pkgBName: 'All-inclusive', pkgBDesc: 'Verified plan + flights / pickup / hotel booked for you', pkgCName: 'Private assistant', pkgCDesc: 'All-inclusive + dedicated private assistant, top tier',

        feat: {
          ai3: '3 AI-simulated itineraries', range: 'Cost range estimate', verify: 'Protocol verified by the hospital',
          doctor: 'Physician sign-off + credentials', bed: 'Bed / operating-slot hold number', exact: 'Exact itemised hospital pricing',
          visa: 'Medical visa invitation letter + guidance', interp: 'Full medical interpreting (clinic + ward)', airport: 'Airport transfers + appointment escort',
          accompany: 'Trip coordination for 1 family member', insurance: 'Complication cover (CNY 1M limit)',
          flightBook: 'Flight booking (Trip.com)', pickup: 'Private airport pickup / drop-off', hotelBook: 'Hotel booking (Booking.com)', assistant: 'Dedicated private assistant', vip: 'VIP fast-track channel'
        }
      },

      booking: {
        title: 'Booking & payment', sub: 'Flights, hotels and hospital registration are each paid on their own platform. MedBridge never collects or holds these funds.',
        noteTitle: 'Why payments are split', noteBody: 'Flights and hotels follow airline and OTA change rules; hospital registration is a medical service. Splitting them gives each transaction its own receipt and its own refund channel, and keeps MedBridge from operating a pooled account.',
        itemFlight: 'International flights', itemHotel: 'Accommodation', itemReg: 'Registration & bed', itemTransfer: 'Private transfers', itemTravel: 'Tourism add-ons',
        provider: 'Payment platform', goPay: 'Pay now', payOnPartner: 'Complete payment on {p}',
        redirectTitle: 'Redirecting to {p}', redirectBody: 'You will be taken to a third-party platform to complete this payment. Payment, changes and refunds are handled entirely by that platform.',
        redirectBtn: 'Got it, continue',
        summary: 'Payment list', platformFee: 'Platform service fee', platformFeeNote: 'Already paid when you unlocked',
        doneTitle: 'All bookings submitted', doneBody: 'Each payment carries its own receipt. Once the trip is confirmed, the itinerary, pickup details and appointment reminders appear under My Trips.',
        itemsPending: '{n} pending', itemsPaid: '{n} paid'
      },

      trips: {
        title: 'My trips', sub: 'Track the status and receipt of every booking.',
        empty1: 'No trips in progress yet', empty2: 'Plans you generate will appear here after the assessment.',
        emptyBtn: 'Start assessment',
        orderNo: 'Trip no.', created: 'Created', viewPlan: 'View plan', payNow: 'Pay now',
        s1: 'Request submitted', s2: 'AI plans generated', s3: 'Hospital verified', s4: 'Awaiting payment', s5: 'Booking confirmed', s6: 'Trip in progress',
        pipeline: 'Progress', booking: 'Bookings'
      },

      partners: { ctrip: 'Trip.com flights', booking: 'Booking.com', hospital: 'Hospital registration system', didi: 'Private transfer service', airbnb: 'Apartments & stays' }
    },

    /* ---------------------------------------------------- ru */
    ru: {
      brand: { tagline: 'Платформа медицинского туризма' },
      nav: { home: 'Главная', intake: 'Анкета', plans: 'Планы лечения', pricing: 'Проверенный план', trips: 'Мои поездки' },
      common: {
        demoBadge: 'Прототип · демоданные', next: 'Далее', back: 'Назад', confirm: 'Подтвердить', cancel: 'Отмена',
        close: 'Закрыть', viewDetail: 'Подробнее', select: 'Выбрать', optional: 'Опция', perPerson: '/чел',
        total: 'Итого', from: 'от', included: 'Включено', notIncluded: 'Не включено', days: 'дней', night: 'ночей',
        loading: 'Загрузка…', continue: 'Продолжить', currency: '¥', save: 'Сохранить', edit: 'Изменить', per: 'за'
      },
      footer: { disclaimer: 'Кликабельный прототип для обсуждения продукта. Все клиники, врачи, цены и показатели эффективности приведены для примера и не являются медицинской рекомендацией.', demo: 'Prototype v0.9' },

      backend: {
        patientRole: 'Пациент', hospitalRole: 'Клиника', opsRole: 'Операции', switchRole: 'Сменить роль',
        hubTitle: 'Рабочая панель', hubSub: 'Вход для персонала клиник и операций. Три блока ниже — Заказы, Стол верификации, База кейсов.',
        hubPatientNote: 'Сейчас вы на пациентской стороне. Переключитесь на «Клиника / Операции», чтобы войти в консоль.',
        cardOrders: 'Заказы', cardOrdersDesc: 'Все заказы поездок из пациентской части; статус верификации и оплаты.',
        cardVerify: 'Стол верификации', cardVerifyDesc: 'Проверка ИИ-планов по пунктам: график врача, койка, точная цена и подпись врача.',
        cardCases: 'База кейсов', cardCasesDesc: 'Обезличенные исторические кейсы, на которых ИИ строит подбор. CRUD и публикация.',
        ordersTitle: 'Заказы', ordersSub: 'Заказы поездок из пациентской части, по статусу верификации и оплаты.',
        colRef: '№ заказа', colPatient: 'Пациент', colDept: 'Отдел', colCity: 'Город', colHospital: 'Клиника', colTier: 'План', colCreated: 'Создан', colStatus: 'Статус', colAmount: 'Сумма',
        statusPending: 'Ожидает', statusVerifying: 'Проверка', statusVerified: 'Проверено', statusRejected: 'Возврат',
        viewOrder: 'Открыть заказ', noOrders: 'Заказов пока нет', resetOrders: 'Сбросить заказы',
        orderDetail: 'Детали заказа', orderAmounts: 'Смета',
        verifyTitle: 'Стол верификации клиники', verifySub: 'Проверяйте ИИ-планы по пунктам: подпись врача, номер койки и точная цена.',
        verifyQueue: 'Очередь', verifyDetail: 'Детали верификации', verifyNoteLabel: 'Заметка верификации', verifyNotePh: 'напр. «Подтверждены слот врача и койка»',
        markVerifying: 'В проверку', markVerified: 'Отметить проверенным', markRejected: 'Вернуть на доработку',
        verifiedInfo: 'Верификация завершена', bedHold: 'Номер койки', doctorSign: 'Подпись врача', verifiedAt: 'Проверено в',
        casesTitle: 'База кейсов', casesSub: 'Обезличенные исторические кейсы — основа подбора ИИ.',
        colCase: '№ кейса', colOutcome: 'Результат', colCost: 'Диапазон цен', colTags: 'Теги', colUsage: 'Ссылок', colState: 'Состояние',
        published: 'Опубликован', draft: 'Черновик',
        addCase: 'Добавить кейс', editCase: 'Изменить', deleteCase: 'Удалить', togglePublish: 'Опубл. / черновик',
        caseFormTitle: 'Данные кейса', caseDept: 'Отдел', caseCity: 'Город', caseHospital: 'Клиника', caseOutcome: 'Результат', caseLow: 'Нижняя цена', caseHigh: 'Верхняя цена', caseTags: 'Теги (через запятую)', caseStatus: 'Состояние',
        noCases: 'База кейсов пуста', resetCases: 'Сбросить базу', confirmDelete: 'Удалить этот кейс?'
      },

      dept: {
        oncology:  { name: 'Онкология', desc: 'Таргетная / иммунотерапия / консилиум' },
        ortho:     { name: 'Ортопедия и суставы', desc: 'Робот-ассист. эндопротезирование' },
        cardio:    { name: 'Кардиология', desc: 'Ангиография / стент / реабилитация' },
        ivf:       { name: 'Репродуктология (ЭКО)', desc: 'ПГТ-А / индивидуальная стимуляция' },
        aesthetic: { name: 'Эстетика и анти-эйдж', desc: 'Омоложение / аппаратные методики' },
        checkup:   { name: 'Глубокая диагностика', desc: 'ПЭТ-МРТ / генетика / сердце' }
      },

      home: {
        heroTitle: 'Спланируйте всю поездку на лечение — на своём языке',
        heroSub: 'Укажите диагноз и результаты обследований. Через несколько минут вы получите три готовых плана: перелёт, трансфер, отель, запись, палата, лечащий врач, протокол лечения и подробная смета. Начните бесплатно с ИИ-планов, затем откройте проверенный клиникой вариант.',
        ctaPrimary: 'Получить планы бесплатно', ctaSecondary: 'Как работает платформа',
        stat1: 'Клиник-партнёров', stat2: 'Реальных кейсов', stat3: 'Языков поддержки',
        howTitle: 'Три шага: от «не знаю, куда ехать» до «поездка подтверждена»',
        howSub: 'Пациент общается на родном языке — платформа берёт на себя перевод, проверку цен и координацию.',
        step1Title: 'Опишите диагноз на своём языке', step1Body: 'Заполните диагноз и загрузите снимки или анализы на родном языке. Система сформирует переведённую стандартизированную выписку для международного отдела клиники.', step1Lock: 'Бесплатно',
        step2Title: 'ИИ формирует три плана', step2Body: 'Платформа ищет похожие реальные кейсы и предлагает три варианта: клиника, хирург, протокол, срок госпитализации, перелёт, отель и смета.', step2Lock: 'Бесплатно',
        step3Title: 'Откройте проверенную версию и бронируйте', step3Body: 'После оплаты международный отдел клиники проверяет протокол, занятость врача и койку и даёт точную смету. Перелёт и отель оплачиваются на сторонних платформах.', step3Lock: 'Платно',
        deptTitle: 'Шесть направлений', deptSub: 'По каждому направлению накоплена библиотека обезличенных реальных кейсов, на основе которых ИИ подбирает решения.',
        cases: '{n} кейсов в базе', casesUnit: 'кейсов',
        trustTitle: 'Почему клиники подключаются', trustSub: 'Мы не продаём трафик — мы приносим структурированный спрос и готовый перевод, снижая нагрузку на международный отдел.',
        trust1t: 'Спрос уже структурирован', trust1d: 'Клиника получает переведённую выписку с заполненными полями, а не стопку непонятных иностранных документов.',
        trust2t: 'Отбор до приёма', trust2d: 'Этап ИИ-подбора отсеивает неподходящие случаи: клиника работает только с реальными показаниями.',
        trust3t: 'Платежи вне платформы', trust3d: 'Перелёты и отели оплачиваются сторонним сервисам, клиника берёт плату только за лечение. Никакого общего счёта и комплаенс-рисков.',
        trust4t: 'Результаты накапливаются', trust4d: 'Данные наблюдения после лечения возвращаются в базу кейсов, формируя измеримую статистику успеха и реальный уровень цен.',
        ctaTitle: 'Попробуйте на реалистичном сценарии', ctaBody: 'Без регистрации. Выберите направление, укажите диагноз и пройдите весь путь за несколько минут.', ctaBtn: 'Начать анкету'
      },

      intake: {
        title: 'Медицинская анкета', sub: 'Заполняйте на своём языке — мы переведём для клиники. Поля со * обязательны.',
        secBasic: 'Основное', secMedical: 'Диагноз и документы', secPref: 'Пожелания к поездке',
        origin: 'Страна / город вылета', originHint: 'Нужно для расчёта времени перелёта и стоимости билетов',
        dept: 'Направление', deptHint: 'Если не уверены — выберите наиболее близкое',
        disease: 'Диагноз', diseaseHint: 'Можно написать на своём языке.',
        diseasePh: 'напр. Аденокарцинома желудка T3N1M0',
        reports: 'Результаты обследований', reportsHint: 'Загрузите КТ / МРТ / гистологию / анализы (прототип не загружает файлы по-настоящему)',
        uploadTitle: 'Нажмите, чтобы загрузить снимки или заключения', uploadDesc: 'PDF / JPG / DICOM · до 200 МБ на файл',
        city: 'Желаемый город', cityHint: 'Влияет на клинику, отель и стоимость перелёта',
        budget: 'Бюджет (CNY)', date: 'Желаемая дата вылета', companions: 'Сопровождающие родственники',
        travelPref: 'Добавить туристические опции', travelHint: 'Восстановление, экскурсии или реабилитация после лечения',
        sideTitle: 'Что будет дальше', sideStep1t: 'ИИ ищет похожие кейсы', sideStep1d: 'Находит ближайшие исторические случаи по вашему направлению',
        sideStep2t: 'Сформировано три плана', sideStep2d: 'В каждом — лечение, логистика и смета',
        sideStep3t: 'Вы открываете один для проверки', sideStep3d: 'Клиника проверяет каждую позицию, даёт точную цену и бронирует койку',
        sideStep4t: 'Оплата на сторонних платформах', sideStep4d: 'Перелёт и отель оплачиваются в Trip.com / Booking и подобных сервисах',
        submit: 'Получить планы бесплатно', mobility: 'Грейд трансфера', mobilityHint: 'Подбирает подходящий автомобиль и уход — не влияет на медицинский план', disclaimer: 'Прототип: используется демонстрационная симуляция, файлы не загружаются и не передаются.'
      },

      gen: { title: 'Формируем ваши планы', sub: 'ИИ ищет похожие кейсы и собирает поездку', s1: 'Перевод и стандартизация выписки', s2: 'Поиск в базе кейсов направления', s3: 'Подбор клиники и занятости врача', s4: 'Сборка перелёта, отеля и трансфера', s5: 'Расчёт подробной сметы' },

      plans: {
        title: 'Три плана лечения для вас', sub: 'ИИ-комбинации на основе реальных кейсов. Реальные значения ключевых полей появятся после открытия проверенной версии.',
        match: 'Совпадение', matchSub: 'По диагнозу, бюджету и срокам', resultsFor: 'Рак желудка · Шанхай · 200-300 тыс. CNY',
        regenerate: 'Сформировать заново', tierA: 'Премиум', tierB: 'Баланс', tierC: 'Эконом',
        tierADesc: 'Ведущая клиника, оперирует заведующий отделением', tierBDesc: 'Сильная клиника в том же городе, баланс цены и качества', tierCDesc: 'Ведущая клиника в городе с более низкими ценами',
        recommend: 'Рекомендуем', popular: 'Выбирают чаще всего', value: 'Лучшая цена',
        hospital: 'Клиника', doctor: 'Лечащий врач', stay: 'Стационар', ward: 'Палата', duration: 'Срок', success: 'Результат',
        viewPlan: 'Смотреть план', pickPlan: 'Выбрать план', picked: 'Выбрано',
        priceNote: 'Оценка ИИ', exactPrice: 'Цена клиники', aiBadge: 'ИИ-симуляция', verifiedBadge: 'Проверено клиникой',
        freeNote: 'Бесплатная версия — ИИ-симуляция: имена врачей, точные цены, бронь койки и показатели эффективности заменены заполнителями.',
        unlockCta: 'Открыть проверенную версию', costHint: 'Цены ориентировочные; после открытия — точная смета'
      },

      plan: {
        tabOverview: 'Обзор', tabTimeline: 'Расписание', tabMedical: 'Лечение', tabCost: 'Стоимость', tabTravel: 'Опции',
        backToList: 'К списку планов', itineraryTitle: 'Расписание по дням', itinerarySub: 'Каждый день — от вылета до возвращения',
        hospitalInfo: 'Клиника', city: 'Город', level: 'Уровень', accred: 'Аккредитация', beds: 'Койки',
        medicalTeam: 'Команда', chief: 'Лечащий врач', specialty: 'Специализация', experience: 'Стаж, лет', languages: 'Языки приёма', casesDone: 'Проведено случаев',
        treatmentPlan: 'План лечения', procedure: 'Основная методика', stages: 'Этапы протокола', stage: 'Этап', successRate: 'Показатель эффективности',
        stayDays: 'Дней в стационаре', wardType: 'Тип палаты', registration: 'Запись',
        logistics: 'Логистика', flight: 'Международный перелёт', airline: 'Авиакомпания', cabin: 'Класс', duration: 'Время в пути', tripDays: 'Длительность поездки',
        transfer: 'Трансфер', transferGrade: 'Класс трансфера', transferVehicle: 'Рекомендуемый автомобиль', transferNurse: 'Медсестра в машине', transferPerTrip: 'За поездку', transferRound: 'Туда и обратно (встреча + проводы)', transferSelfBook: 'Самостоятельно · рекомендует платформа', transferPlatformBook: 'Бронирует платформа', transferSource: 'Парк: бизнес-авто — собственные платформы; скорая — по рамочному договору, оплата за поездку.', transferKm: 'Аэропорт → клиника ~{n} км', transferAccessible: 'Аппарель для коляски', transferBook: 'Бронирование', hotel: 'Проживание', room: 'Тип номера', distance: 'До клиники',
        costTitle: 'Смета', medicalFee: 'Медицинские услуги', flightFee: 'Авиабилеты', hotelFee: 'Проживание', transferFee: 'Трансфер',
        serviceFee: 'Сервисный сбор', travelAddon: 'Туристические опции', total: 'Итого', estimate: 'Оценка ИИ', exact: 'Цена клиники',
        perCompanion: 'Вкл. {n} сопровождающих',
        travelTitle: 'Туризм и восстановление', travelAdd: 'Добавить', travelAdded: 'Добавлено',
        lockedTitle: 'Эти поля показывают реальные значения только после проверки клиникой',
        lockedBody: 'Бесплатная версия — симуляция ИИ на основе прошлых кейсов: имена врачей, смета, номер брони койки и показатели эффективности — заполнители. После открытия международный отдел подтверждает и подписывает каждую позицию.',
        lockedBtn: 'Открыть проверенную версию',
        verifiedTitle: 'Проверено клиникой', verifiedBy: 'Проверил', verifiedAt: 'Дата проверки', bedHold: 'Номер брони койки',
        doctorSign: 'Подпись врача', hospitalRef: 'Номер запроса', confidence: 'Уверенность плана',
        confidenceNote: 'На основе {n} похожих кейсов'
      },

      pricing: {
        title: 'Открыть проверенный клиникой план', sub: 'Бесплатно вы получаете направление, платно — реальные даты и точную цену.',
        t1Name: 'ИИ-симуляция', t1Desc: 'Понять направление и порядок цен', t1Price: 'Бесплатно', t1Unit: 'Всегда бесплатно, без регистрации',
        t2Name: 'Проверено клиникой', t2Desc: 'Каждая позиция проверена, можно бронировать', t2Unit: 'Разово · за план',
        t3Name: 'Полное сопровождение', t3Desc: 'Проверка + виза, переводчики, трансферы', t3Unit: 'Разово · включает всё из «Проверено»',
        pay: 'Открыть', paid: 'Открыто', current: 'Текущий', upgrade: 'Повысить', popular: 'Выбирают чаще всего',
        payTitle: 'Подтвердите оплату', paySub: 'После оплаты клиника проведёт проверку в течение 1-2 рабочих дней', payMethod: 'Способ оплаты',
        pmCard: 'Международная карта', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'Электронный кошелёк', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'Банковский перевод', pmBankSub: 'Для крупных медицинских платежей · 1-3 рабочих дня',
        successTitle: 'Оплата получена, запрос на проверку отправлен', successBody: 'Международный отдел клиники получил вашу выписку и в течение 1-2 рабочих дней проверит протокол, занятость врача и койку. Страница обновится автоматически.',
        successBtn: 'Открыть проверенный план',
        noteRefund: 'Полный возврат, если клиника не найдёт показаний или не сможет принять случай.',
        noteScope: 'Этот сбор покрывает только проверку и координацию — не перелёт, отель и лечение, которые оплачиваются на сторонних платформах.',
        pkgAName: 'Самостоятельный', pkgADesc: 'Проверенный план лечения, перелёт / отель / трансфер сами', pkgBName: 'Всё включено', pkgBDesc: 'Проверка + перелёт / трансфер / отель за вас', pkgCName: 'Личный ассистент', pkgCDesc: 'Всё включено + личный ассистент, высший уровень',

        feat: {
          ai3: '3 плана поездки от ИИ', range: 'Оценка стоимости', verify: 'Протокол проверен клиникой',
          doctor: 'Подпись врача + данные о квалификации', bed: 'Номер брони койки / операционной', exact: 'Точная смета клиники по позициям',
          visa: 'Приглашение для медвизы + помощь с документами', interp: 'Медпереводчик (приём + стационар)', airport: 'Трансфер из/в аэропорт + сопровождение',
          accompany: 'Координация поездки 1 родственника', insurance: 'Страховка осложнений (лимит 1 млн)',
          flightBook: 'Авиабилеты (Trip.com)', pickup: 'Встреча / проводы на машине', hotelBook: 'Отель (Booking.com)', assistant: 'Личный ассистент', vip: 'VIP-канал'
        }
      },

      booking: {
        title: 'Бронирование и оплата', sub: 'Перелёт, отель и запись в клинику оплачиваются на своих платформах. MedBridge не собирает и не хранит эти средства.',
        noteTitle: ' Почему оплата разделена', noteBody: 'Перелёты и отели подчиняются правилам авиакомпаний и OTA, запись в клинику — это медицинская услуга. Разделение даёт каждой операции отдельный чек и отдельный канал возврата и не создаёт общего счёта.',
        itemFlight: 'Международный перелёт', itemHotel: 'Проживание', itemReg: 'Запись и койка', itemTransfer: 'Трансфер', itemTravel: 'Туристические опции',
        provider: 'Платёжная платформа', goPay: 'Оплатить', payOnPartner: 'Оплатить в {p}',
        redirectTitle: 'Перенаправление в {p}', redirectBody: 'Вы перейдёте на стороннюю платформу для оплаты. Оплата, изменения и возвраты полностью на стороне этой платформы.',
        redirectBtn: 'Понятно, продолжить',
        summary: 'Список платежей', platformFee: 'Сервисный сбор', platformFeeNote: 'Уже оплачен при открытии плана',
        doneTitle: 'Все бронирования отправлены', doneBody: 'У каждого платежа свой чек. После подтверждения поездки маршрут, данные трансфера и напоминания появятся в «Моих поездках».',
        itemsPending: '{n} ожидают оплаты', itemsPaid: '{n} оплачено'
      },

      trips: {
        title: 'Мои поездки', sub: 'Отслеживайте статус и чеки каждого бронирования.',
        empty1: 'Активных поездок пока нет', empty2: 'Планы появятся здесь после заполнения анкеты.',
        emptyBtn: 'Начать анкету',
        orderNo: 'Номер поездки', created: 'Создано', viewPlan: 'Смотреть план', payNow: 'Оплатить',
        s1: 'Заявка отправлена', s2: 'ИИ-планы готовы', s3: 'Проверено клиникой', s4: 'Ожидает оплаты', s5: 'Бронь подтверждена', s6: 'Поездка идёт',
        pipeline: 'Прогресс', booking: 'Бронирования'
      },

      partners: { ctrip: 'Trip.com авиа', booking: 'Booking.com', hospital: 'Система записи клиники', didi: 'Трансфер', airbnb: 'Апартаменты' }
    },

    /* ---------------------------------------------------- ar */
    ar: {
      brand: { tagline: 'منصة رحلات العلاج الخارجية' },
      nav: { home: 'الرئيسية', intake: 'التقييم الطبي', plans: 'خطط العلاج', pricing: 'فتح الخطة الموثّقة', trips: 'رحلاتي' },
      common: {
        demoBadge: 'نموذج أولي · بيانات تجريبية', next: 'التالي', back: 'رجوع', confirm: 'تأكيد', cancel: 'إلغاء',
        close: 'إغلاق', viewDetail: 'عرض التفاصيل', select: 'اختيار', optional: 'اختياري', perPerson: '/شخص',
        total: 'الإجمالي', from: 'ابتداءً من', included: 'مشمل', notIncluded: 'غير مشمول', days: 'يوم', night: 'ليلة',
        loading: 'جارٍ المعالجة…', continue: 'متابعة', currency: '¥', save: 'حفظ', edit: 'تعديل', per: 'لكل'
      },
      footer: { disclaimer: 'نموذج أولي قابل للنقر لمناقشة المنتج. جميع المستشفيات والأطباء والأسعار ونتائج العلاج للعرض فقط ولا تمثل نصيحة طبية أو عرضاً ملزماً.', demo: 'Prototype v0.9' },

      backend: {
        patientRole: 'المريض', hospitalRole: 'المستشفى', opsRole: 'العمليات', switchRole: 'تبديل الدور',
        hubTitle: 'منصة الإدارة', hubSub: 'مدخل للمستشفى والعمليات. الأقسام الثلاثة أدناه: الطلبات، ومكتب التحقق، وإدارة مكتبة الحالات.',
        hubPatientNote: 'أنت الآن في الواجهة الأمامية للمريض. بدّل إلى «المستشفى / العمليات» لدخول وحدة الإدارة.',
        cardOrders: 'الطلبات', cardOrdersDesc: 'عرض كل طلبات الرحلات الواردة من المريض وتتبّع حالة التحقق والدفع.',
        cardVerify: 'مكتب التحقق بالمستشفى', cardVerifyDesc: 'تحقق من خطط الذكاء الاصطناعي بنداً بنداً: مواعيد الطبيب والسرير والتسعير الدقيق وتوقيع الطبيب.',
        cardCases: 'مكتبة الحالات', cardCasesDesc: 'إدارة الحالات التاريخية المجهّلة التي يطابق الذكاء الاصطناعي منها. تحكم كامل مع نشر.',
        ordersTitle: 'الطلبات', ordersSub: 'طلبات الرحلات الواردة من المريض، حسب حالة التحقق والدفع.',
        colRef: 'رقم الطلب', colPatient: 'المريض', colDept: 'القسم', colCity: 'المدينة', colHospital: 'المستشفى', colTier: 'الخطة', colCreated: 'أُنشئ', colStatus: 'الحالة', colAmount: 'الإجمالي المقدّر',
        statusPending: 'بانتظار التحقق', statusVerifying: 'قيد التحقق', statusVerified: 'موثّق', statusRejected: 'مُعاد',
        viewOrder: 'عرض الطلب', noOrders: 'لا توجد طلبات', resetOrders: 'إعادة ضبط الطلبات',
        orderDetail: 'تفاصيل الطلب', orderAmounts: 'تفصيل التكلفة',
        verifyTitle: 'مكتب التحقق بالمستشفى', verifySub: 'تحقق من خطط الذكاء الاصطناعي واحدة واحدة مع توقيع الطبيب ورقم السرير والتسعير الدقيق.',
        verifyQueue: 'القائمة', verifyDetail: 'تفاصيل التحقق', verifyNoteLabel: 'ملاحظة التحقق', verifyNotePh: 'مثال: «تم تأكيد موعد الجرّاح والسرير»',
        markVerifying: 'وضع قيد التحقق', markVerified: 'تحديد كموثّق', markRejected: 'إعادة لاستكمال البيانات',
        verifiedInfo: 'اكتمل التحقق', bedHold: 'رقم حجز السرير', doctorSign: 'توقيع الطبيب', verifiedAt: 'وُثّق في',
        casesTitle: 'مكتبة الحالات', casesSub: 'حالات تاريخية مجهّلة — مصدر مطابقة الذكاء الاصطناعي.',
        colCase: 'رقم الحالة', colOutcome: 'المؤشر', colCost: 'نطاق التكلفة', colTags: 'الوسوم', colUsage: 'مرات الاستخدام', colState: 'الحالة',
        published: 'منشورة', draft: 'مسودة',
        addCase: 'إضافة حالة', editCase: 'تعديل', deleteCase: 'حذف', togglePublish: 'نشر / مسودة',
        caseFormTitle: 'بيانات الحالة', caseDept: 'القسم', caseCity: 'المدينة', caseHospital: 'المستشفى', caseOutcome: 'المؤشر', caseLow: 'الحد الأدنى', caseHigh: 'الحد الأعلى', caseTags: 'الوسوم (مفصولة بفاصلة)', caseStatus: 'الحالة',
        noCases: 'مكتبة الحالات فارغة', resetCases: 'إعادة ضبط المكتبة', confirmDelete: 'حذف هذه الحالة؟'
      },

      dept: {
        oncology:  { name: 'علاج الأورام الدقيق', desc: 'موجّه / مناعي / لجنة متعددة التخصصات' },
        ortho:     { name: 'العظام والمفاصل', desc: 'استبدال الورك والركبة بالروبوت' },
        cardio:    { name: 'القلب والأوعية', desc: 'قسطرة / دعامات / إعادة تأهيل' },
        ivf:       { name: 'الخصوبة وأطفال الأنابيب', desc: 'فحص PGT-A / تحفيز مخصص' },
        aesthetic: { name: 'التجميل ومكافحة الشيخوخة', desc: 'تجديد الوجه / أجهزة الطاقة' },
        checkup:   { name: 'الفحص الشامل المبكر', desc: 'PET-MR / الجينات / القلب' }
      },

      home: {
        heroTitle: 'خطّط رحلة علاجك بالكامل — بلغتك',
        heroSub: 'أدخل التشخيص ونتائج الفحوصات، وخلال دقائق تحصل على ثلاث خطط علاج كاملة: الطيران، المواصلات، الفندق، التسجيل، الغرفة، الطبيب المعالج، بروتوكول العلاج والتكاليف المفصّلة. ابدأ مجاناً بالخطط المحاكاة، ثم افتح النسخة الموثّقة من المستشفى.',
        ctaPrimary: 'أنشئ خططي مجاناً', ctaSecondary: 'كيف تعمل المنصة',
        stat1: 'مستشفى شريك', stat2: 'حالة حقيقية قابلة للمطابقة', stat3: 'لغة مدعومة',
        howTitle: 'ثلاث خطوات: من «لا أعرف أين أذهب» إلى «الرحلة مؤكدة»',
        howSub: 'يتواصل المريض بلغته الأم، والمنصة تتولى الترجمة والتحقق من الأسعار والتنسيق.',
        step1Title: 'صف حالتك بلغتك', step1Body: 'أدخل التشخيص وارفع صور الأشعة أو التحاليل بلغتك. يُنشئ النظام ملخصاً طبياً موحّداً ومترجماً للمكتب الدولي في المستشفى.', step1Lock: 'مجاناً',
        step2Title: 'يولّد الذكاء الاصطناعي ثلاث خطط', step2Body: 'تبحث المنصة في سجل الحالات الحقيقية وتقدّم ثلاثة خيارات: المستشفى، الجرّاح، البروتوكول، مدة الإقامة، الطيران، الفندق والتكاليف.', step2Lock: 'مجاناً',
        step3Title: 'افتح النسخة الموثّقة واحجز', step3Body: 'بعد الدفع يتحقق المكتب الدولي من البروتوكول وجدول الطبيب والسرير ويصدر تسعيراً دقيقاً. تُدفع تذاكر الطيران والفنادق على منصات خارجية.', step3Lock: 'مدفوع',
        deptTitle: 'ستة أقسام طبية', deptSub: 'لكل قسم مكتبة من حالات حقيقية مجهّلة المصدر، يعتمد عليها الذكاء الاصطناعي في المطابقة.',
        cases: '{n} حالة قابلة للمطابقة', casesUnit: 'حالة',
        trustTitle: 'لماذا تنضم المستشفيات', trustSub: 'نحن لا نبيع زيارات، بل نقدّم طلباً منظّماً ومترجماً يقلّل تكلفة التواصل على المكتب الدولي.',
        trust1t: 'الطلب وارد منظّماً', trust1d: 'تستلم المستشفى ملخصاً مترجماً ومكتمل الحقول، لا كومة تقارير أجنبية غير مفهومة.',
        trust2t: 'فرز قبل القبول', trust2d: 'تُصفّي مرحلة المطابقة الآلية الحالات غير المناسبة، فتتعامل المستشفى فقط مع الحالات ذات الدواعي العلاجية الحقيقية.',
        trust3t: 'المدفوعات خارج المنصة', trust3d: 'تستوفي منصات السفر تكاليف الطيران والفنادق، والمستشفى يتقاضى رسومه الطبية فقط. لا حساب مُجمّع ولا مخاطر امتثال.',
        trust4t: 'النتائج تتراكم', trust4d: 'تعود بيانات المتابعة بعد العلاج إلى مكتبة الحالات، فتبني معدلات نجاح ونطاقات أسعار قابلة للبحث.',
        ctaTitle: 'جرّبها على سيناريو واقعي', ctaBody: 'بدون تسجيل. اختر قسماً، أدخل تشخيصاً، واستعرض المسار كاملاً خلال دقائق.', ctaBtn: 'ابدأ التقييم'
      },

      intake: {
        title: 'التقييم الطبي', sub: 'أجب بلغتك — نحن نترجم للمستشفى. الحقول المعلّمة بـ * مطلوبة.',
        secBasic: 'المعلومات الأساسية', secMedical: 'الحالة والمستندات', secPref: 'تفضيلات الرحلة',
        origin: 'بلد / مدينة المغادرة', originHint: 'لتقدير مدة الطيران وتكلفة التذاكر',
        dept: 'القسم الطبي', deptHint: 'اختر الأقرب إن لم تكن متأكداً',
        disease: 'التشخيص', diseaseHint: 'يمكنك كتابته بلغتك.',
        diseasePh: 'مثال: سرطان غدّي في المعدة T3N1M0',
        reports: 'نتائج الفحوصات', reportsHint: 'ارفع CT / MRI / علم الأنسجة / تحاليل الدم (النموذج لا يرفع الملفات فعلياً)',
        uploadTitle: 'اضغط لرفع التقارير أو صور الأشعة', uploadDesc: 'PDF / JPG / DICOM · حتى 200 ميغابايت للملف',
        city: 'المدينة المفضّلة', cityHint: 'تؤثر على المستشفى والفندق وتكلفة الطيران',
        budget: 'الميزانية (يوان صيني)', date: 'تاريخ السفر المفضّل', companions: 'عدد المرافقين',
        travelPref: 'إضافة خيارات سياحية', travelHint: 'نقاهة أو جولات أو إعادة تأهيل بعد العلاج',
        sideTitle: 'ماذا يحدث لاحقاً', sideStep1t: 'يبحث الذكاء الاصطناعي عن حالات مشابهة', sideStep1d: 'يجد أقرب الحالات السابقة في قسمك',
        sideStep2t: 'تم إنشاء ثلاث خطط', sideStep2d: 'كل خطة تتضمن العلاج واللوجستيات والتكاليف',
        sideStep3t: 'تفتح خطة واحدة للتحقق', sideStep3d: 'تتحقق المستشفى من كل بند وتعطي تسعيراً دقيقاً وحجز سرير',
        sideStep4t: 'الدفع على منصات خارجية', sideStep4d: 'تُدفع تذاكر الطيران والفنادق عبر Trip.com / Booking وأمثالها',
        submit: 'أنشئ الخطط مجاناً', mobility: 'تصنيف احتياجات التوصيل', mobilityHint: 'يطابق أنسب سيارة وإعداد رعاية — لا يؤثر على الخطة العلاجية', disclaimer: 'نموذج أولي: تُستخدم بيانات تجريبية للمحاكاة ولا تُرفع أو تُرسل أي معلومات.'
      },

      gen: { title: 'جارٍ إنشاء خططك', sub: 'يبحث الذكاء الاصطناعي في الحالات السابقة ويجمع الرحلة', s1: 'ترجمة الملخص الطبي وتوحيده', s2: 'البحث في مكتبة حالات القسم', s3: 'مطابقة المستشفى وجدول الطبيب', s4: 'تجميع الطيران والفندق والمواصلات', s5: 'إنشاء التكاليف التفصيلية' },

      plans: {
        title: 'ثلاث خطط علاج لك', sub: 'تركيبات محاكاة مبنية على حالات حقيقية سابقة. تظهر القيم الحقيقية للحقول الرئيسية بعد فتح النسخة الموثّقة.',
        match: 'المطابقة', matchSub: 'مقابل حالتك وميزانيتك وتوقيتك', resultsFor: 'سرطان المعدة · شنغهاي · 200-300 ألف يوان',
        regenerate: 'إعادة التوليد', tierA: 'ممتاز', tierB: 'متوازن', tierC: 'اقتصادي',
        tierADesc: 'جناح دولي في مستشفى من الدرجة الأولى، يترأس الجراحة رئيس القسم', tierBDesc: 'مستشفى قوي في المدينة نفسها، توازن بين الجودة والسعر', tierCDesc: 'مستشفى رائد في مدينة أقل تكلفة',
        recommend: 'موصى به', popular: 'الأكثر اختياراً', value: 'أفضل سعر',
        hospital: 'المستشفى', doctor: 'الطبيب المعالج', stay: 'الإقامة', ward: 'الغرفة', duration: 'المدة', success: 'النتائج',
        viewPlan: 'عرض الخطة', pickPlan: 'اختيار الخطة', picked: 'مختارة',
        priceNote: 'تقدير آلي', exactPrice: 'سعر المستشفى', aiBadge: 'محاكاة آلية', verifiedBadge: 'موثّقة من المستشفى',
        freeNote: 'تعرض النسخة المجانية محاكاة آلية: أسماء الأطباء والتكاليف الدقيقة وحجز السرير وبيانات النتائج كلها قيم بديلة.',
        unlockCta: 'افتح النسخة الموثّقة', costHint: 'التكاليف تقديرية؛ بعد الفتح تظهر الأسعار الدقيقة لكل بند'
      },

      plan: {
        tabOverview: 'نظرة عامة', tabTimeline: 'الجدول الزمني', tabMedical: 'العلاج', tabCost: 'التكاليف', tabTravel: 'إضافات',
        backToList: 'رجوع للخطط', itineraryTitle: 'الجدول اليومي الكامل', itinerarySub: 'كل يوم، من المغادرة إلى العودة',
        hospitalInfo: 'المستشفى', city: 'المدينة', level: 'الدرجة', accred: 'الاعتماد', beds: 'الأسرّة',
        medicalTeam: 'الفريق الطبي', chief: 'الطبيب المعالج', specialty: 'التخصص', experience: 'سنوات الخبرة', languages: 'لغات الاستشارة', casesDone: 'حالات أجراها',
        treatmentPlan: 'خطة العلاج', procedure: 'الإجراء الأساسي', stages: 'مراحل البروتوكول', stage: 'مرحلة', successRate: 'مؤشر النتائج',
        stayDays: 'أيام الإقامة', wardType: 'نوع الغرفة', registration: 'التسجيل',
        logistics: 'اللوجستيات', flight: 'الرحلة الدولية', airline: 'الناقل', cabin: 'الدرجة', duration: 'مدة الطيران', tripDays: 'مدة الرحلة',
        transfer: 'المواصلات الأرضية', transferGrade: 'درجة التوصيل', transferVehicle: 'السيارة الموصى بها', transferNurse: 'ممرضة على متنها', transferPerTrip: 'للرحلة', transferRound: 'ذهاب وإياب (استقبال + وداع)', transferSelfBook: 'حجز ذاتي · المنصة تقترح', transferPlatformBook: 'تحجزها المنصة', transferSource: 'أسطول: السيارات الفان تديرها المنصة ذاتياً؛ سيارات الإسعاف وفق اتفاق إطاري وتُحسب بالرحلة.', transferKm: 'المطار ← المستشفى ~{n} كم', transferAccessible: 'منحدر للكرسي المتحرك', transferBook: 'طريقة الحجز', hotel: 'الإقامة', room: 'نوع الغرفة', distance: 'إلى المستشفى',
        costTitle: 'التكاليف التفصيلية', medicalFee: 'الخدمات الطبية', flightFee: 'تذاكر الطيران', hotelFee: 'الإقامة', transferFee: 'المواصلات',
        serviceFee: 'رسوم المنصة', travelAddon: 'إضافات سياحية', total: 'الإجمالي', estimate: 'تقدير آلي', exact: 'سعر المستشفى',
        perCompanion: 'يشمل {n} مرافقاً',
        travelTitle: 'خيارات السياحة والنقاهة', travelAdd: 'أضف للرحلة', travelAdded: 'مُضافة',
        lockedTitle: 'هذه الحقول تُظهر القيم الحقيقية بعد تحقق المستشفى',
        lockedBody: 'النسخة المجانية محاكاة آلية مبنية على حالات سابقة: أسماء الأطباء والتكاليف ورقم حجز السرير وبيانات النتائج كلها قيم بديلة. بعد الفتح يتحقق المكتب الدولي ويوقّع على كل بند.',
        lockedBtn: 'افتح النسخة الموثّقة',
        verifiedTitle: 'موثّقة من المستشفى', verifiedBy: 'تحقّق منها', verifiedAt: 'تاريخ التحقق', bedHold: 'رقم حجز السرير',
        doctorSign: 'توقيع الطبيب', hospitalRef: 'رقم الطلب', confidence: 'مستوى الثقة',
        confidenceNote: 'بناءً على {n} حالة مشابهة'
      },

      pricing: {
        title: 'افتح الخطة الموثّقة من المستشفى', sub: 'المجاني يعطيك الاتجاه، والمدفوع يعطيك مواعيد قابلة للحجز وتسعيراً دقيقاً.',
        t1Name: 'محاكاة آلية', t1Desc: 'تعرف على الاتجاه وحجم التكلفة', t1Price: 'مجاناً', t1Unit: 'مجاناً دائماً، بدون تسجيل',
        t2Name: 'موثّقة من المستشفى', t2Desc: 'تحقّق بنداً ببنداً، جاهزة للحجز', t2Unit: 'مرة واحدة · لكل خطة',
        t3Name: 'مرافقة كاملة', t3Desc: 'التحقق + التأشيرة والترجمة والمواصلات', t3Unit: 'مرة واحدة · تشمل كل مزايا «الموثّقة»',
        pay: 'افتح الآن', paid: 'مفتوحة', current: 'الحالية', upgrade: 'ترقية', popular: 'الأكثر اختياراً',
        payTitle: 'تأكيد الدفع', paySub: 'بعد الفتح يكمل المكتب الدولي التحقق خلال 1-2 يوم عمل', payMethod: 'طريقة الدفع',
        pmCard: 'بطاقة دولية', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'محفظة إلكترونية', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'حوالة بنكية', pmBankSub: 'للمبالغ الطبية الكبيرة · 1-3 أيام عمل',
        successTitle: 'تم الدفع وأُرسل طلب التحقق', successBody: 'استلم المكتب الدولي ملخصك الطبي وسيتحقق من البروتوكول وجدول الطبيب والسرير خلال 1-2 يوم عمل. تُحدَّث الصفحة تلقائياً بعد التحقق.',
        successBtn: 'عرض الخطة الموثّقة',
        noteRefund: 'استرداد كامل إذا رأت المستشفى عدم وجود داعٍ للعلاج أو تعذّر قبول الحالة.',
        noteScope: 'هذه الرسوم تغطي التحقق والتنسيق فقط — لا تشمل الطيران والفندق والعلاج، وهي تُدفع على منصات خارجية.',
        pkgAName: 'بترتيب ذاتي', pkgADesc: 'خطة علاج موثّقة، الحجوزات الأخرى بنفسك', pkgBName: 'شامل بالكامل', pkgBDesc: 'التحقق + الطيران / الاستقبال / الإقامة بترتيب المنصة', pkgCName: 'مساعد خاص', pkgCDesc: 'شامل + مساعد خاص مخصص، أعلى مستوى',

        feat: {
          ai3: '3 خطط سفر محاكاة', range: 'تقدير نطاق التكلفة', verify: 'تحقق المستشفى من البروتوكول',
          doctor: 'توقيع الطبيب المعالج + بيانات الاعتماد', bed: 'رقم حجز السرير / غرفة العمليات', exact: 'تسعير دقيق لكل بند',
          visa: 'خطاب دعوة لتأشيرة علاجية + إرشاد', interp: 'ترجمة طبية كاملة (عيادة + جناح)', airport: 'توصيل من وإلى المطار + مرافقة',
          accompany: 'تنسيق الرحلة لمرافق واحد', insurance: 'تأمين مضاعفات (بحدود مليون)',
          flightBook: 'حجز الطيران (Trip.com)', pickup: 'استقبال / وداع بالسيارة', hotelBook: 'حجز الإقامة (Booking)', assistant: 'مساعد خاص', vip: 'ممر سريع VIP'
        }
      },

      booking: {
        title: 'الحجز والدفع', sub: 'تُدفع تذاكر الطيران والفندق والتسجيل في المستشفى على منصاتها الخاصة. MedBridge لا يستلم ولا يحتفظ بهذه الأموال.',
        noteTitle: 'لماذا الدفع منفصل', noteBody: 'تخضع تذاكر الطيران والفنادق لقواعد التغيير لدى شركات الطيران ومنصات السفر، بينما التسجيل في المستشفى خدمة طبية. الفصل يمنح كل عملية إيصالاً وقناة استرداد مستقلة، ويمنع المنصة من إدارة حساب مُجمّع.',
        itemFlight: 'الرحلات الدولية', itemHotel: 'الإقامة', itemReg: 'التسجيل والسرير', itemTransfer: 'التوصيل الخاص', itemTravel: 'إضافات سياحية',
        provider: 'منصة الدفع', goPay: 'ادفع', payOnPartner: 'أكمل الدفع عبر {p}',
        redirectTitle: 'جارٍ التحويل إلى {p}', redirectBody: 'ستنتقل إلى منصة خارجية لإتمام هذا الدفع. الدفع والتعديل والاسترداد مسؤولية تلك المنصة بالكامل.',
        redirectBtn: 'فهمت، تابع',
        summary: 'قائمة المدفوعات', platformFee: 'رسوم المنصة', platformFeeNote: 'دُفعت مسبقاً عند فتح الخطة',
        doneTitle: 'أُرسلت جميع الحجوزات', doneBody: 'لكل دفعة إيصال مستقل. بعد تأكيد الرحلة تظهر الخطة ومعلومات الاستقبال وتذكيرات المواعيد تحت «رحلاتي».',
        itemsPending: '{n} بانتظار الدفع', itemsPaid: '{n} مدفوعة'
      },

      trips: {
        title: 'رحلاتي', sub: 'تابع حالة وإيصال كل حجز.',
        empty1: 'لا توجد رحلات جارية', empty2: 'ستظهر الخطط التي تنشئها هنا بعد التقييم.',
        emptyBtn: 'ابدأ التقييم',
        orderNo: 'رقم الرحلة', created: 'تاريخ الإنشاء', viewPlan: 'عرض الخطة', payNow: 'ادفع الآن',
        s1: 'أُرسل الطلب', s2: 'جاهزة خطط الذكاء', s3: 'وثّقتها المستشفى', s4: 'بانتظار الدفع', s5: 'الحجز مؤكد', s6: 'الرحلة جارية',
        pipeline: 'التقدّم', booking: 'الحجوزات'
      },

      partners: { ctrip: 'Trip.com للطيران', booking: 'Booking.com', hospital: 'نظام تسجيل المستشفى', didi: 'خدمة التوصيل', airbnb: 'شقق وإقامات' }
    },

    /* ---------------------------------------------------- ja */
    ja: {
      brand: { tagline: '越境医療トリップ・プラットフォーム' },
      nav: { home: 'ホーム', intake: '事前ヒアリング', plans: '治療プラン', pricing: '病院確認版を開く', trips: 'マイトリップ' },
      common: {
        demoBadge: 'プロトタイプ・サンプルデータ', next: '次へ', back: '戻る', confirm: '確定', cancel: 'キャンセル',
        close: '閉じる', viewDetail: '詳細を見る', select: '選択', optional: 'オプション', perPerson: '/名',
        total: '合計', from: '〜', included: '含まれる', notIncluded: '含まれない', days: '日', night: '泊',
        loading: '処理中…', continue: '続ける', currency: '¥', save: '保存', edit: '編集', per: '1名あたり'
      },
      footer: { disclaimer: '製品検討用のクリック可能なプロトタイプです。掲載されている病院・医師・価格・治療成績はすべて例示であり、医療上の助言や申し込みではありません。', demo: 'Prototype v0.9' },

      backend: {
        patientRole: '患者', hospitalRole: '病院', opsRole: '運営', switchRole: '役割を切替',
        hubTitle: 'バックオフィス', hubSub: '病院・運営スタッフ向け入口。下の 3 つのタイルは「注文」「病院確認デスク」「症例ライブラリ」です。',
        hubPatientNote: '現在は患者フロント画面です。「病院 / 運営」に切り替えると管理コンソールへ入ります。',
        cardOrders: '注文', cardOrdersDesc: '患者側で作られた渡航注文を一覧し、確認・決済状況を追跡します。',
        cardVerify: '病院確認デスク', cardVerifyDesc: 'AI 生成案を項目ごとに確認：医師の空き・病室・正確な価格・医師署名。',
        cardCases: '症例ライブラリ', cardCasesDesc: 'AI がマッチングのもとにする匿名化歴史症例。CRUD と公開管理に対応。',
        ordersTitle: '注文', ordersSub: '患者側で作られた渡航注文。確認・決済状況で追跡。',
        colRef: '注文番号', colPatient: '患者', colDept: '診療科', colCity: '都市', colHospital: '病院', colTier: 'プラン', colCreated: '作成日', colStatus: '状態', colAmount: '見積合計',
        statusPending: '確認待ち', statusVerifying: '確認中', statusVerified: '確認済み', statusRejected: '差戻し',
        viewOrder: '注文を見る', noOrders: '注文はまだありません', resetOrders: 'サンプル注文を初期化',
        orderDetail: '注文詳細', orderAmounts: '費用内訳',
        verifyTitle: '病院確認デスク', verifySub: 'AI 案を一つずつ確認し、医師署名・病室枠番号・正確な価格を付与します。',
        verifyQueue: '確認待ち行列', verifyDetail: '確認詳細', verifyNoteLabel: '確認メモ', verifyNotePh: '例：「執刀医の枠と病室を確保済み」',
        markVerifying: '確認中にする', markVerified: '確認済みにする', markRejected: '情報補足で差戻し',
        verifiedInfo: '確認完了', bedHold: '病室枠番号', doctorSign: '医師署名', verifiedAt: '確認日時',
        casesTitle: '症例ライブラリ', casesSub: '匿名化された歴史症例——AI マッチングの源です。',
        colCase: '症例番号', colOutcome: '治療成績', colCost: '費用レンジ', colTags: 'タグ', colUsage: '参照数', colState: '状態',
        published: '公開中', draft: '下書き',
        addCase: '症例を追加', editCase: '編集', deleteCase: '削除', togglePublish: '公開 / 下書き',
        caseFormTitle: '症例情報', caseDept: '診療科', caseCity: '都市', caseHospital: '病院', caseOutcome: '治療成績', caseLow: '費用下限', caseHigh: '費用上限', caseTags: 'タグ（カンマ区切り）', caseStatus: '状態',
        noCases: '症例ライブラリは空です', resetCases: 'ライブラリを初期化', confirmDelete: 'この症例を削除しますか？'
      },

      dept: {
        oncology:  { name: 'がん精密医療', desc: '分子標的・免疫・MDT カンファレンス' },
        ortho:     { name: '整形外科・関節置換', desc: 'ロボット支援 股・膝関節置換' },
        cardio:    { name: '循環器インターベンション', desc: '冠動脈造影・ステント・心臓リハビリ' },
        ivf:       { name: '生殖医療（体外受精）', desc: 'PGT-A・個別化排卵誘発' },
        aesthetic: { name: '美容・アンチエイジング', desc: '顔の若返り・光/高周波治療' },
        checkup:   { name: '高精度ドック', desc: 'PET-MR・遺伝子・心脳血管' }
      },

      home: {
        heroTitle: '治療のための海外渡航を、あなたの言葉でまるごと手配',
        heroSub: '病名と検査結果を入力するだけ。数分で 3 つの完全な治療行程プランが届きます——航空券、送迎、ホテル、受付、病室、主治医、治療方針、費用の内訳まで一度に。まずは無料の AI シミュレーション版を確認し、納得してから病院確認版へ。',
        ctaPrimary: '無料でプランを作成', ctaSecondary: '仕組みを見る',
        stat1: '提携病院', stat2: '照会可能実症例', stat3: '対応言語',
        howTitle: '3 ステップ：「どこへ行けばいいか分からない」から「渡航確定」へ',
        howSub: '患者は母語のままで大丈夫。翻訳・価格確認・調整はプラットフォームが担います。',
        step1Title: '母語で症状を入力', step1Body: '病名を記入し、画像や検査結果を母語のままアップロード。システムが標準化された翻訳済みサマリーを作成し、病院の国際部へ送ります。', step1Lock: '無料',
        step2Title: 'AI が 3 プランを生成', step2Body: '過去の実症例を検索し、病院・執刀医・治療方針・入院日数・航空券・ホテル・費用内訳まで含む 3 案を提示します。', step2Lock: '無料',
        step3Title: '確認版を開いて予約', step3Body: '支払い後、病院国際部が治療方針・医師の空き・病室を確認し、正確な見積りを発行。航空券とホテルは外部プラットフォームで決済します。', step3Lock: '有料',
        deptTitle: '対応する 6 診療科', deptSub: '各診療科には匿名化された実症例のライブラリがあり、AI はそこからマッチングと組み立てを行います。',
        cases: '照会可能 {n} 例', casesUnit: '例',
        trustTitle: '病院が参加する理由', trustSub: '集客ではなく、構造化された需要と事前翻訳を届けることで、国際部のコミュニケーションコストを下げます。',
        trust1t: '需要が構造化されている', trust1d: '病院に届くのは翻訳済みで項目の揃ったサマリー。読めない外国語書類の束ではありません。',
        trust2t: '受ける前にふるい分け', trust2d: 'AI の事前マッチングで不適応例を除外し、病院は治療適応のある問い合わせだけを扱えます。',
        trust3t: '決済はプラットフォーム外', trust3d: '航空券・ホテルは OTA が収受し、病院は自院の医療費のみ。資金プールもコンプライアンスリスクも生じません。',
        trust4t: '成果が蓄積する', trust4d: '治療後のフォローデータが症例ライブラリへ還流し、検索可能な成功率と実費用レンジが育ちます。',
        ctaTitle: '現実的なシナリオで試してみてください', ctaBody: '登録は不要です。診療科を選んで病名を入れるだけで、全体の流れを数分で確認できます。', ctaBtn: 'ヒアリングを始める'
      },

      intake: {
        title: '事前ヒアリング', sub: '母語で記入して構いません。病院向けに翻訳します。* は必須項目です。',
        secBasic: '基本情報', secMedical: '症状と資料', secPref: '渡航の希望',
        origin: '出発 国 / 都市', originHint: '飛行時間と航空券費用の算出に使用します',
        dept: '診療科', deptHint: '迷う場合は近いものを選んでください',
        disease: '病名・診断', diseaseHint: '母語での記入で構いません。',
        diseasePh: '例：胃腺がん T3N1M0',
        reports: '検査結果', reportsHint: 'CT / MRI / 病理 / 血液検査をアップロード（このプロトタイプは実際にはファイルを送信しません）',
        uploadTitle: 'クリックして検査結果・画像をアップロード', uploadDesc: 'PDF / JPG / DICOM · 1 ファイル 200MB まで',
        city: '希望都市', cityHint: '病院・ホテル・航空券の費用に影響します',
        budget: '予算レンジ（人民元）', date: '希望出発時期', companions: '同伴家族の人数',
        travelPref: '観光オプションを追加', travelHint: '治療後の療養・観光・中医リハビリ',
        sideTitle: 'この後に起きること', sideStep1t: 'AI が類似症例を検索', sideStep1d: '診療科内の過去症例から最も近いものを抽出',
        sideStep2t: '3 プランを生成', sideStep2d: 'それぞれ治療・手配・費用が一式揃っています',
        sideStep3t: '1 つ選んで確認を依頼', sideStep3d: '病院が項目ごとに確認し、正確な価格と病室枠を発行',
        sideStep4t: '外部プラットフォームで決済', sideStep4d: '航空券とホテルは Trip.com / Booking などで支払います',
        submit: '無料で行程プランを作成', mobility: '送迎ニーズの分級', mobilityHint: '最適な車両と看護体制を決定します（医療プランには影響しません）', disclaimer: 'プロトタイプのためサンプルデータでシミュレーションします。ファイルのアップロードや外部送信は行われません。'
      },

      gen: { title: '行程プランを作成しています', sub: 'AI が過去症例を検索し、渡航を組み立てています', s1: '病歴サマリーを翻訳・標準化', s2: '診療科の症例ライブラリを検索', s3: '病院と医師の空き枠を照合', s4: '航空券・ホテル・送迎を手配', s5: '項目別の費用を見積り' },

      plans: {
        title: 'あなた向けの 3 つの治療行程プラン', sub: '過去の実症例に基づく AI シミュレーションです。主要項目の実値は、病院確認版を開いた後に表示されます。',
        match: '適合度', matchSub: '症状・予算・時期に対する総合的な一致度', resultsFor: '胃がん · 上海 · 予算 20〜30 万元',
        regenerate: '再生成', tierA: 'プレミアム', tierB: 'バランス', tierC: 'エコノミー',
        tierADesc: '最高峰の三次病院・国際部、科主任が執刀', tierBDesc: '同都市の有力三次病院、品質と価格のバランス', tierCDesc: '費用を抑えられる都市の有力病院',
        recommend: 'おすすめ', popular: '一番人気', value: '最安',
        hospital: '病院', doctor: '主治医', stay: '入院', ward: '病室', duration: '行程', success: '治療成績',
        viewPlan: 'プラン詳細', pickPlan: 'このプランを選ぶ', picked: '選択中',
        priceNote: 'AI 見積り', exactPrice: '病院提示価格', aiBadge: 'AI シミュレーション', verifiedBadge: '病院確認済み',
        freeNote: '現在は無料の AI シミュレーション版です。医師名・正確な費用・病室枠・治療成績はプレースホルダーです。',
        unlockCta: '病院確認版を開く', costHint: '費用は概算レンジです。開錠後に項目別の正確な価格が表示されます'
      },

      plan: {
        tabOverview: '概要', tabTimeline: '行程タイムライン', tabMedical: '治療方針', tabCost: '費用内訳', tabTravel: '観光オプション',
        backToList: 'プラン一覧へ戻る', itineraryTitle: '日別の行程タイムライン', itinerarySub: '出発から帰国まで、一日ずつ',
        hospitalInfo: '病院情報', city: '都市', level: '等級', accred: '認証', beds: '病床数',
        medicalTeam: '医療チーム', chief: '主治医', specialty: '専門', experience: '経験年数', languages: '診察言語', casesDone: '実施件数',
        treatmentPlan: '治療方針', procedure: '中心となる術式・治療', stages: '治療の段階', stage: '段階', successRate: '治療成績指標',
        stayDays: '入院日数', wardType: '病室タイプ', registration: '受付方法',
        logistics: '手配', flight: '国際線', airline: '航空会社', cabin: 'クラス', duration: '飛行時間', tripDays: '行程日数',
        transfer: '陸路移動', transferGrade: '送迎グレード', transferVehicle: '推奨車両', transferNurse: '看護師同乗', transferPerTrip: '片道', transferRound: '往復（送迎＋見送り）', transferSelfBook: '自己手配・プラットフォームが提案', transferPlatformBook: 'プラットフォーム手配', transferSource: '車両体制：ビジネスバンは自社運行、救急車は枠組み契約で外注・1回ごと精算。', transferKm: '空港→病院 約{n}km', transferAccessible: '車いす対応リフト', transferBook: '手配方法', hotel: '宿泊', room: '部屋タイプ', distance: '病院まで',
        costTitle: '費用内訳', medicalFee: '医療費', flightFee: '航空券', hotelFee: '宿泊費', transferFee: '陸路移動',
        serviceFee: 'プラットフォーム手数料', travelAddon: '観光オプション', total: '合計', estimate: 'AI 見積り', exact: '病院提示',
        perCompanion: '同伴 {n} 名を含む',
        travelTitle: '観光・療養オプション', travelAdd: '行程に追加', travelAdded: '追加済み',
        lockedTitle: 'これらの項目は病院確認後に実値が表示されます',
        lockedBody: '無料版は過去症例に基づく AI シミュレーションです。医師名・項目別費用・病室枠番号・治療成績はいずれもプレースホルダーです。開錠すると病院国際部が項目ごとに確認し署名します。',
        lockedBtn: '病院確認版を開く',
        verifiedTitle: '病院確認済み', verifiedBy: '確認機関', verifiedAt: '確認日時', bedHold: '病室枠番号',
        doctorSign: '医師署名', hospitalRef: '病院問い合わせ番号', confidence: 'プラン信頼度',
        confidenceNote: '類似する過去症例 {n} 件に基づく'
      },

      pricing: {
        title: '病院確認版を開く', sub: '無料版は方向性、有料版は予約可能な日程と正確な価格です。',
        t1Name: 'AI シミュレーション', t1Desc: '方向性と費用感を把握する', t1Price: '無料', t1Unit: '登録不要・ずっと無料',
        t2Name: '病院確認版', t2Desc: '項目ごとに確認済み、予約可能', t2Unit: '都度払い・プランごと',
        t3Name: 'フルコンシェルジュ', t3Desc: '確認 + ビザ・通訳・送迎込み', t3Unit: '都度払い・確認版の全特典を含む',
        pay: '今すぐ開く', paid: '開錠済み', current: '現在のプラン', upgrade: 'アップグレード', popular: '一番人気',
        payTitle: 'お支払いの確認', paySub: '開錠後、病院国際部が 1〜2 営業日で確認を行います', payMethod: '支払い方法',
        pmCard: '国際クレジットカード', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: '電子ウォレット', pmWalletSub: 'Alipay / 微信支付 / Apple Pay',
        pmBank: '銀行振込', pmBankSub: '高額な医療費向け · 1〜3 営業日',
        successTitle: '決済完了・確認依頼を送信しました', successBody: '病院国際部が病歴サマリーを受領しました。1〜2 営業日以内に治療方針・医師の空き・病室を確認し、完了後このページは自動更新されます。',
        successBtn: '確認済みプランを見る',
        noteRefund: '治療適応がない、または受け入れ不可と病院が判断した場合は全額返金します。',
        noteScope: 'この料金は確認・調整サービスのみを対象とし、航空券・ホテル・治療費（外部プラットフォームで決済）は含まれません。',
        pkgAName: '自己手配版', pkgADesc: '病院確認済み治療方針、航空券・ホテル・送迎はご自身で', pkgBName: '全包版', pkgBDesc: '確認 + 航空券 / 送迎 / 宿泊を一括代行', pkgCName: '専属アシスタント版', pkgCDesc: '全包 + 専属アシスタント付き最上位',

        feat: {
          ai3: 'AI シミュレーション行程 3 案', range: '費用レンジの見積り', verify: '病院による治療方針の確認',
          doctor: '主治医の署名 + 資格情報', bed: '病室 / 手術枠の確保番号', exact: '項目別の正確な病院見積り',
          visa: '医療ビザ招聘状 + 書類サポート', interp: '通訳フル同伴（外来 + 入院）', airport: '空港送迎 + 受付付き添い',
          accompany: '同伴家族 1 名の行程調整', insurance: '合併症医療保険（限度額 100 万元）',
          flightBook: '航空券代行（Trip.com）', pickup: '専用車送迎', hotelBook: '宿泊代行（Booking.com）', assistant: '専属アシスタント', vip: 'VIP 優先チャネル'
        }
      },

      booking: {
        title: '予約とお支払い', sub: '航空券・ホテル・受付はいずれも各プラットフォームで決済します。MedBridge はこれらの資金を預かりません。',
        noteTitle: 'なぜ決済を分けるのか', noteBody: '航空券とホテルは航空会社・OTA の変更規定に従い、受付費は医療サービスです。分けることで各取引に独立した領収書と返金窓口が生まれ、プラットフォームが資金プールを持たずに済みます。',
        itemFlight: '国際線航空券', itemHotel: '宿泊', itemReg: '受付・病室', itemTransfer: '専用送迎', itemTravel: '観光オプション',
        provider: '決済プラットフォーム', goPay: '支払う', payOnPartner: '{p} で支払う',
        redirectTitle: '{p} に遷移します', redirectBody: 'この支払いは外部プラットフォームで完了します。支払い・変更・返金はすべてそのプラットフォームの責任となります。',
        redirectBtn: '了解して進む',
        summary: '支払い一覧', platformFee: 'プラットフォーム手数料', platformFeeNote: '開錠時にお支払い済み',
        doneTitle: 'すべての予約を送信しました', doneBody: '各支払いに独立した領収書が発行されます。行程確定後、行程表・送迎情報・受診リマインドが「マイトリップ」に反映されます。',
        itemsPending: '{n} 件 未払い', itemsPaid: '{n} 件 支払い済み'
      },

      trips: {
        title: 'マイトリップ', sub: '各予約のステータスと領収書をここで管理します。',
        empty1: '進行中の行程はまだありません', empty2: 'ヒアリングを完了すると、生成されたプランがここに表示されます。',
        emptyBtn: 'ヒアリングを始める',
        orderNo: '行程番号', created: '作成日', viewPlan: 'プランを見る', payNow: '支払う',
        s1: 'リクエスト送信済み', s2: 'AI プラン生成済み', s3: '病院確認済み', s4: '支払い待ち', s5: '予約確定', s6: '行程進行中',
        pipeline: '進捗', booking: '予約項目'
      },

      partners: { ctrip: 'Trip.com 航空券', booking: 'Booking.com', hospital: '病院公式受付システム', didi: '専用送迎サービス', airbnb: '民泊・アパートメント' }
    }
  };

  /* ---------------- resolver ---------------- */
  var current = (function () {
    try {
      var s = localStorage.getItem('mb.lang');
      if (s && DICT[s]) return s;
    } catch (e) {}
    return 'zh';
  })();

  function get(obj, path) {
    var parts = path.split('.');
    var node = obj;
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return (typeof node === 'string') ? node : undefined;
  }

  /** Translate with {n} / {p} interpolation. Falls back en -> zh -> key. */
  function t(key, vars) {
    var s = get(DICT[current], key);
    if (s === undefined) s = get(DICT.en, key);
    if (s === undefined) s = get(DICT.zh, key);
    if (s === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        s = s.split('{' + k + '}').join(vars[k]);
      });
    }
    return s;
  }

  function setLang(code) {
    if (!DICT[code]) return;
    current = code;
    try { localStorage.setItem('mb.lang', code); } catch (e) {}
    var l = LANGS.filter(function (x) { return x.code === code; })[0];
    document.documentElement.lang = code;
    document.documentElement.dir = l ? l.dir : 'ltr';
    document.dispatchEvent(new CustomEvent('mb:langchange'));
  }

  global.I18N = { t: t, LANGS: LANGS, setLang: setLang, getLang: function () { return current; } };
})(window);
