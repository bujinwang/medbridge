/* ============================================================
   MedBridge · extra data strings  (ms / id / vi / tl / lo / km)
   Augments the live window.DATA objects at load time.
   NOTE: AI-generated first-pass. ms/id/vi/tl solid; lo/km
   best-effort — needs native medical review before production.
   ============================================================ */
(function () {
  'use strict';
  if (!window.DATA) return;
  var D = window.DATA;

  /* ---------------- CITIES ---------------- */
  var CN = {
    shanghai:  { ms: 'Shanghai', in: 'Shanghai', vi: 'Thượng Hải', tl: 'Shanghai', lo: 'ຊຽງໄຮ', km: 'សាងហៃ' },
    beijing:   { ms: 'Beijing', in: 'Beijing', vi: 'Bắc Kinh', tl: 'Beijing', lo: 'ປັກກິ່ງ', km: 'ប៉េកាំង' },
    guangzhou: { ms: 'Guangzhou', in: 'Guangzhou', vi: 'Quảng Châu', tl: 'Guangzhou', lo: 'ກວງໂຈວ', km: 'ក្វាងចូវ' },
    chengdu:   { ms: 'Chengdu', in: 'Chengdu', vi: 'Thành Đô', tl: 'Chengdu', lo: 'ເຈິງຕູ', km: 'ឈុងទូ' },
    hangzhou:  { ms: 'Hangzhou', in: 'Hangzhou', vi: 'Hàng Châu', tl: 'Hangzhou', lo: 'ຮາງຈົວ', km: 'ហ្សឺចូវ' },
    boao:      { ms: 'Boao, Hainan', in: 'Boao, Hainan', vi: 'Boao, Hải Nam', tl: 'Boao, Hainan', lo: 'ບໍໂຢວ, ໄຫໜ້າ', km: 'បូអាវ ហៃណាន' }
  };
  D.CITIES.forEach(function (c) { if (CN[c.id]) Object.assign(c.name, CN[c.id]); });

  /* ---------------- TIERS flightClass ---------------- */
  var FL = {
    A: { ms: 'Kelas Perniagaan', in: 'Bisnis', vi: 'Hạng Thương gia', tl: 'Business', lo: 'ຊັ້ນທຸລະກິດ', km: 'ថ្នាក់ពាណិជ' },
    B: { ms: 'Kelas Ekonomi Premium', in: 'Ekonomi Premium', vi: 'Hạng Phổ thông đặc biệt', tl: 'Premium Economy', lo: 'ຊັ້ນເສດຖືວະພິເສດ', km: 'អេកូណូមីពិសេស' },
    C: { ms: 'Kelas Ekonomi', in: 'Ekonomi', vi: 'Hạng Phổ thông', tl: 'Economy', lo: 'ຊັ້ນເສດຖືວະ', km: 'អេកូណូមី' }
  };
  D.TIERS.forEach(function (t) { if (FL[t.id]) Object.assign(t.flightClass, FL[t.id]); });

  /* ---------------- TRANSFER_MODELS ---------------- */
  var TM = {
    van_gl8:  { ms: 'Van perniagaan GL8 (dengan pemandu)', in: 'Van bisnis GL8 (dengan sopir)', vi: 'Xe van GL8 (có tài xế)', tl: 'GL8 business van (with driver)', lo: 'ລົດຕູ້ທຸລະກິດ GL8 (ມີຄົນຂັບ)', km: 'រថយន្តធាន GL8 (មានអ្នកបើក)' },
    amb_c:    { ms: 'Ambulans · Kelas C', in: 'Ambulans · Kelas C', vi: 'Xe cứu thương · Hạng C', tl: 'Ambulans · Class C', lo: 'ລົດເຂັນ · ຊັ້ນ C', km: 'រថយន្តពេទ្យ · ថ្នាក់ C' },
    amb_b:    { ms: 'Ambulans · Kelas B', in: 'Ambulans · Kelas B', vi: 'Xe cứu thương · Hạng B', tl: 'Ambulans · Class B', lo: 'ລົດເຂັນ · ຊັ້ນ B', km: 'រថយន្តពេទ្យ · ថ្នាក់ B' },
    amb_a:    { ms: 'Ambulans · Kelas A', in: 'Ambulans · Kelas A', vi: 'Xe cứu thương · Hạng A', tl: 'Ambulans · Class A', lo: 'ລົດເຂັນ · ຊັ້ນ A', km: 'រថយន្តពេទ្យ · ថ្នាក់ A' },
    van_alph: { ms: 'Toyota Alphard (dengan pemandu)', in: 'Toyota Alphard (dengan sopir)', vi: 'Toyota Alphard (có tài xế)', tl: 'Toyota Alphard (with driver)', lo: 'Toyota Alphard (ມີຄົນຂັບ)', km: 'Toyota Alphard (មានអ្នកបើក)' }
  };
  D.TRANSFER_MODELS.forEach(function (m) { if (TM[m.id]) Object.assign(m.name, TM[m.id]); });

  /* ---------------- TRANSFER_GRADES ---------------- */
  var TG = {
    A: {
      label: { ms: 'Boleh berjalan sendiri', in: 'Dapat berjalan', vi: 'Tự đi lại', tl: 'Nakakalakad nang sarili', lo: 'ສາມາດຍ່າງເອງ', km: 'ដើរដោយខ្លួនឯង' },
      desc:  { ms: 'Pemeriksaan, lawatan susulan, pesakit luar, estetik, kesuburan, kes ringan', in: 'Pemeriksaan, kunjungan lanjutan, rawat jalan, estetika, kesuburan, kasus ringan', vi: 'Khám, tái khám, ngoại trú, thẩm mỹ, sinh sản, ca nhẹ', tl: 'Check-up, follow-up, outpatient, aesthetics, IVF, mild cases', lo: 'ກວດ, ຕິດຕາມ, ຜູ້້ນອກ, ສວຍງາມ, ການມີບຸດ, ກໍລະນີເລັກນ້ອຍ', km: 'ពិនិត្យ, តាមដាន, អ្នកជំងឺក្រៅ, សោភ៍សម្ផស្ស, ភាពមានកូន, ករណីស្រាល' }
    },
    B: {
      label: { ms: 'Perlu sokongan / kerusi roda', in: 'Perlu bantuan / kursi roda', vi: 'Cần hỗ trợ / xe lăn', tl: 'Nangangailangan ng alalay / wheelchair', lo: 'ຕ້ອງການຊ່ວຍ / ລົດເຂັນ', km: 'ត្រូវការជំនួយ / រូរុង' },
      desc:  { ms: 'Pemulihan pasca-operasi, pergerakan terhad, tanda vital stabil', in: 'Pemulihan pasca-operasi, mobilitas terbatas, tanda vital stabil', vi: 'Hồi phục sau mổ, di chuyển hạn chế, dấu hiệu sinh tồn ổn', tl: 'Recovery pagkatapos ng operasyon, limitadong galaw, stable ang vital signs', lo: 'ຟື້ນຟູຫຼັງຜ່າຕັດ, ການເຄື່ອນໄຫວຈຳກັດ, ສັນຍານຊີວິດຄົງທີ່', km: 'ស្តារក្រោយវះ, ចលនាមានកម្រិត, សញ្ញាណជីវិតស្ថិតស្ថេរ' }
    },
    C: {
      label: { ms: 'Pengusung / oksigen', in: 'Tandu / oksigen', vi: 'Cáng / cần oxy', tl: 'Stretcher / oxygen', lo: 'ເຕຍ / ຕ້ອງການອອກຊິເຈນ', km: 'តំរង់ / ត្រូវការអុកស៊ីសែន' },
      desc:  { ms: 'Pulang pasca-operasi, terbaring, tiub saliran, oksigen berterusan, pemantauan jantung', in: 'Pulang pasca-operasi, terbaring, selang drainase, oksigen terus-menerus, pemantauan jantung', vi: 'Về nước sau mổ, nằm liệt giường, dẫn lưu, thở oxy, cần theo dõi tim', tl: 'Uwi pagkatapos ng operasyon, nakahiga, may drain tube, oxygen, ECG monitoring', lo: 'ກັບບ້ານຫຼັງຜ່າຕັດ, ນອນຕຽງ, ທໍ່ລະບາຍນ້ຳ, ອອກຊິເຈນຕິດຕໍ່ເນື່ອງ, ຕ້ອງການຕິດຕາມຫົວໃຈ', km: 'ត្រឡប់ក្រោយវះ, ដេកលក់, បំពង់រំដាំ, អុកស៊ីសែនជាប់, ត្រូវការត្រួតពិនិត្យបេះដូង' }
    },
    D: {
      label: { ms: 'Kritikal / pemindahan ICU', in: 'Kritis / transfer ICU', vi: 'Nặng / chuyển viện ICU', tl: 'Critical / ICU transfer', lo: 'ຮ້າຍແຮງ / ຍ້າຍ ICU', km: 'ធ្ងន់ធ្ងរ / ផ្ទេរ ICU' },
      desc:  { ms: 'Sokongan hayat (ventilator, pam infusi) atau pemindahan kritikal merentas sempadan', in: 'Dukungan hidup (ventilator, pompa infus) atau transfer kritis lintas batas', vi: 'Hỗ trợ sự sống (máy thở, bơm truyền), chuyển viện nặng xuyên biên giới', tl: 'Life support (ventilator, infusion pump), cross-border critical transfer', lo: 'ການສະໜັບສະໜູນຊີວິດ (ເຄື່ອງຫາຍໃຈ, ປໍ້າອ៊ິນຟິວຊັນ), ຫຼືຍ້າຍຂ້າມແດນທີ່ຮ້າຍແຮງ', km: 'ការគាំទ្រជីវិត (ម៉ាស៊ីនផ្លុំខ្យល់, បំពង់ចាក់), ឬផ្ទេរធ្ងន់ធ្ងរឆ្លងដែន' }
    }
  };
  Object.keys(TG).forEach(function (g) {
    if (D.TRANSFER_GRADES[g]) { Object.assign(D.TRANSFER_GRADES[g].label, TG[g].label); Object.assign(D.TRANSFER_GRADES[g].desc, TG[g].desc); }
  });

  /* ---------------- BUDGETS ---------------- */
  var BD = {
    b1: { ms: 'Bawah 100k', in: 'Di bawah 100k', vi: 'Dưới 100k', tl: 'Below 100k', lo: 'ຕ່ຳກວ່າ 100k', km: 'ក្រោម 100k' },
    b2: { ms: '100k – 200k', in: '100k – 200k', vi: '100k – 200k', tl: '100k – 200k', lo: '100k – 200k', km: '100k – 200k' },
    b3: { ms: '200k – 300k', in: '200k – 300k', vi: '200k – 300k', tl: '200k – 300k', lo: '200k – 300k', km: '200k – 300k' },
    b4: { ms: '300k – 500k', in: '300k – 500k', vi: '300k – 500k', tl: '300k – 500k', lo: '300k – 500k', km: '300k – 500k' },
    b5: { ms: 'Lebih 500k', in: 'Di atas 500k', vi: 'Trên 500k', tl: 'Above 500k', lo: 'ສູງກວ່າ 500k', km: 'លើស 500k' }
  };
  D.BUDGETS.forEach(function (b) { if (BD[b.id]) Object.assign(b, BD[b.id]); });

  /* ---------------- ADDONS ---------------- */
  var AD = {
    a1: {
      zh: '中医康复理疗包（6 次）', ms: 'Pakej pemulihan TCM (6 sesi)', in: 'Paket rehabilitasi TCM (6 sesi)', vi: 'Gói phục hồi Đông y (6 buổi)', tl: 'TCM rehabilitation package (6 sessions)', lo: 'ຊຸດຟື້ນຟູການແພດຈີນ (6 ຄັ້ງ)', km: 'កញ្ចប់ស្តារវេជ្ជសាស្ត្រចិន (6 ដង)',
      desc_zh: '针灸 + 推拿 + 中药调理，术后恢复期每日 1 次',
      desc_ms: 'Acupuncture + tuina + ubat herba, sekali sehari semasa pemulihan',
      desc_id: 'Acupuncture + tuina + ramuan herbal, sekali sehari saat pemulihan',
      desc_vi: 'Châm cứu + xoa bóp + thuốc thảo dược, mỗi ngày một lần khi hồi phục',
      desc_tl: 'Acupuncture + tuina + herbal medicine, once daily during recovery',
      desc_lo: 'ຝັງເຂັມ + ນວດ + ສັງຢາຈີນ, ມື້ລະ 1 ຄັ້ງໃນຊ່ວງຟື້ນຟູ',
      desc_km: 'ចាក់ម្ជុល + ថតនវត្តី + ថ្នាំស្លឹក, ម្តងក្នុងមួយថ្ងៃពេលស្តារ'
    },
    a2: {
      zh: '家属陪同文化半日游 × 2', ms: 'Lawatan separuh hari bandar untuk pengiring × 2', in: 'Tur kota setengah hari pendamping × 2', vi: 'Tham quan thành phố nửa ngày cho người thân × 2', tl: 'Companion half-day city tours × 2', lo: 'ທ່ອງທ່ຽວເມືອງຄື້ນວັນສຳລັບຜູ້ຕິດຕາມ × 2', km: 'ដើរកម្សាន្តក្រុងពាក់កណ្តាលថ្ងៃសម្រាប់អ្នកអម × 2',
      desc_zh: '中文导游 + 专车，行程强度按术后耐受度设计',
      desc_ms: 'Pemandu + kereta persendirian, disesuaikan dengan toleransi pasca-rawatan',
      desc_id: 'Pemandu + mobil pribadi, disesuaikan dengan toleransi pasca-perawatan',
      desc_vi: 'Hướng dẫn viên + xe riêng, nhịp độ theo mức chịu đựng sau điều trị',
      desc_tl: 'Local guide + private car, paced for post-treatment tolerance',
      desc_lo: 'ມົນລະຍະການ + ລົດສ່ວນຕົວ, ປັບຕາມການທົດທົນຫຼັງປິ່ນປົວ',
      desc_km: 'មគ្គុទេសក៍ + រថយន្តឯកជន, រៀបចំតាមការអត់ធ្មត់ក្រោយព្យាបាល'
    },
    a3: {
      zh: '疗养酒店延长 3 晚（含三餐与理疗）', ms: 'Pemanjangan hotel pemulihan 3 malam', in: 'Perpanjangan hotel pemulihan 3 malam', vi: 'Gia hạn khách sạn phục hồi 3 đêm', tl: 'Recovery hotel extension, 3 nights', lo: 'ຂະຫຍາຍໂຮງແຮມຟື້ນຟູ 3 ຄືນ', km: 'ពន្យារសណ្ឋាគារស្តារ 3 យប់',
      desc_zh: '出院后就近入住疗养酒店，含三餐、每日体征监测与基础理疗',
      desc_ms: 'Hotel pemulihan berdekatan selepas discaj: makanan, pemeriksaan tanda vital harian, fisioterapi asas',
      desc_id: 'Hotel pemulihan dekat setelah pulang: makan, cek tanda vital harian, fisioterapi dasar',
      desc_vi: 'Khách sạn phục hồi gần sau xuất viện: ăn uống, theo dõi sinh hiệu hàng ngày, vật lý trị liệu cơ bản',
      desc_tl: 'Nearby recovery hotel after discharge: meals, daily vitals check, basic physiotherapy',
      desc_lo: 'ໂຮງແຮມຟື້ນຟູໃກ້ບ້ານຫຼັງອອກໂຮງໝໍ: ອາຫານ, ກວດສັນຍານຊີວິດລາຍວັນ, ການຟື້ນຟູພក',
      desc_km: 'សណ្ឋាគារស្តារក្បែរនោះក្រោយចេញពីមន្ទីរពេទ្យ: អាហារ, ពិនិត្យសញ្ញាណជីវិតរាល់ថ្ងៃ, ការព្យាបាលរំលីង'
    },
    a4: {
      zh: '全程医疗翻译升级', ms: 'Naik taraf jurubahasa perubatan sepenuh masa', in: 'Peningkatan juru bahasa medis penuh waktu', vi: 'Nâng cấp thông dịch viên y tế toàn thời gian', tl: 'Full-time medical interpreter upgrade', lo: 'ອັບເກຣດລາມານການແພດເຕັມເວລາ', km: 'កំណើនអ្នកបកប្រែវេជ្ជសាស្ត្រពេញម៉ោង',
      desc_zh: '门诊与住院之外时段也配备翻译，含用药指导与家属沟通',
      desc_ms: 'Jurubahasa di luar waktu klinik: panduan ubat dan komunikasi keluarga',
      desc_id: 'Juru bahasa di luar jam klinik: panduan obat dan komunikasi keluarga',
      desc_vi: 'Thông dịch ngoài giờ phòng khám: hướng dẫn dùng thuốc và liên lạc gia đình',
      desc_tl: 'Interpreter beyond clinic hours: medication guidance and family communication',
      desc_lo: 'ລາມານນອກເວລາຄລິນິກ: ຄຳແນະນຳຢາ ແລະການສື່ສານຄອບຄົວ',
      desc_km: 'អ្នកបកប្រែក្រៅម៉ោងគ្លីនិក: ការណែនាំថ្នាំ និងទំនាក់ទំនងគ្រួសារ'
    },
    a5: {
      zh: '温泉 / 海滨静养 3 日', ms: 'Retret air panas / tepi laut, 3 hari', in: 'Retret pemandian air panas / tepi laut, 3 hari', vi: 'Nghỉ dưỡng suối nước nóng / biển 3 ngày', tl: 'Hot spring / seaside retreat, 3 days', lo: 'ພັກຜ່ອນນ້ຳພຸລົນ / ຊາຍຫາດ 3 ມື້', km: 'សម្រាកឋម្សនទឹកក្តៅ / ឆ្នេរ 3 ថ្ងៃ',
      desc_zh: '治疗结束后的低强度疗养行程，随行护理人员 1 名',
      desc_ms: 'Retret intensiti rendah selepas rawatan, satu jururawat pengiring',
      desc_id: 'Retret intensitas rendah setelah perawatan, satu perawat pendamping',
      desc_vi: 'Hành trình dưỡng bệnh cường độ thấp sau điều trị, một điều dưỡng đi cùng',
      desc_tl: 'Low-intensity retreat after treatment, one accompanying nurse',
      desc_lo: 'ການພັກຜ່ອນຄວາມເຂັ້ມປ້ອນຫຼັງປິ່ນປົວ, ພະຍາບານຕິດຕາມ 1 ຄົນ',
      desc_km: 'ដំណើរស្តារកម្រិតទាបបន្ទាប់ពីព្យាបាល, គិលានុបដ្ឋាយិកាអម 1 នាក់'
    }
  };
  D.ADDONS.forEach(function (a) {
    var t = AD[a.id];
    if (t) {
      // NB: 'in' is the Indonesian language code (not 'id', which collides with the
      // structural addon id 'a1'..'a5' used for selection). Never clobber a.id.
      Object.assign(a, { ms: t.ms, in: t.in, vi: t.vi, tl: t.tl, lo: t.lo, km: t.km });
      if (a.desc) Object.assign(a.desc, { ms: t.desc_ms, in: t.desc_id, vi: t.desc_vi, tl: t.desc_tl, lo: t.desc_lo, km: t.desc_km });
    }
  });

  /* ---------------- MEDICAL (oncology + ortho) ---------------- */
  var MED = {
    oncology: {
      procedure: { ms: 'Terapi sasaran tepat + imunoterapi PD-1', in: 'Terapi target presisi + imunoterapi PD-1', vi: 'Liệu pháp nhắm mục tiêu chính xác + miễn dịch PD-1', tl: 'Precision targeted therapy + PD-1 immunotherapy', lo: 'ການປິ່ນປົວເປົ້າໝາຍຢ້າງຢັດ + ພາບາວະພູມຄຸ້ມກັນ PD-1', km: 'ការព្យាបាលគោលដៅធានាកំណត់ + ភាសាសុទ្ធការពារកូន PD-1' },
      outcome:   { ms: 'Kadar tindak balas objektif ~62%', in: 'Tingkat respons objektif ~62%', vi: 'Tỷ lệ đáp ứng khách quan ~62%', tl: 'Objective response rate ~62%', lo: 'ອັດຕາຕອບສະໜອງວັດຖາວະ ~62%', km: 'អត្រាឆ្លើយតបវត្ថុវិស័យ ~62%' },
      ward:      { ms: 'Bilik single onkologi (dengan katil pengiring)', in: 'Kamar single onkologi (dengan tempat tidur pendamping)', vi: 'Phòng đơn ung thư (có giường người thân)', tl: 'Oncology single room (with companion bed)', lo: 'ຫ້ອງຄົນໄຂ້ມະເຮັງ (ມີຕຽງຜູ້ຕິດຕາມ)', km: 'បន្ទប់ឯកជនមហារីក (មានគ្រែអ្នកអម)' },
      reg:       { ms: 'Klinik pakar VIP · lorong laju antarabangsa', in: 'Klinik spesialis VIP · jalur cepat internasional', vi: 'Phòng khám chuyên gia VIP · luồng xanh quốc tế', tl: 'Specialist VIP clinic · international fast track', lo: 'ຄລິນິກຜູ້ຊ່ຽວຊານ VIP · ທາງດ່ວນລະຫວ່າງປະເທດ', km: 'គ្លីនិកឯកទេព VIP · ច្រកលឿនអន្តរជាតិ' },
      stages: [
        { ms: 'Semakan rekod jarak jauh + konsultasi slide patologi', in: 'Tinjauan rekam medis jarak jauh + konsultasi slide patologi', vi: 'Xem xét hồ sơ từ xa + hội chẩn lát cắt bệnh lý', tl: 'Remote records review + pathology slide consultation', lo: 'ການກວດທົບວຽກລ່ວງໄກ + ການປຶກສາສໄລດ໌ພະຍາດທາດ', km: 'ពិនិត្យកំណត់ហេតុពីចម្ងាយ + ពិគ្រោះស្លាយជំងឺមហារីក' },
        { ms: 'Peringkat PET-CT + penjujukan gen generasi kedua (NGS)', in: 'Staging PET-CT + sekuensing generasi kedua (NGS)', vi: 'Phân giai PET-CT + giải trình tự gen hệ hai (NGS)', tl: 'PET-CT staging + next-generation sequencing', lo: 'ຂັ້ນຕອນ PET-CT ທົ່ວຕົວ + ຖະແຫຼງພັນທຸກຳຕົ້ນຮຸ່ງ (NGS)', km: 'ដំណាក់កាល PET-CT + ការអានលំដាប់ហ្សែនជំនាន់ទីពីរ (NGS)' },
        { ms: 'Lembaga MDT mengesahkan protokol barisan hadapan', in: 'Tim MDT menetapkan protokol lini pertama', vi: 'Hội chẩn MDT xác định phác đồ tuyến đầu', tl: 'MDT board to confirm first-line protocol', lo: 'ຄະນະ MDT ຢືນຢັນວິທີການສາຍດ້ານໜ້າ', km: 'ក្រុម MDT បញ្ជាក់វិធីសាស្ត្របន្ទាត់ទី 1' },
        { ms: 'Gabungan sasaran + imuno, kitaran 1', in: 'Kombinasi target + imuno, siklus 1', vi: 'Phác đồ kết hợp nhắm mục tiêu + miễn dịch, chu kỳ 1', tl: 'Targeted + immuno combination, cycle 1', lo: 'ລວມເປົ້າໝາຍ + ພາບາວະພູມຄຸ້ມກັນ, ວົງຈັກ 1', km: 'បញ្ចូលគោលដៅ + ភាសាសុទ្ធ, វដ្ដទី 1' },
        { ms: 'Pemantauan kesan buruk & penjagaan sokongan', in: 'Pemantauan efek samping & perawatan suportif', vi: 'Theo dõi tác dụng phụ & chăm sóc hỗ trợ', tl: 'Adverse-event monitoring & supportive care', lo: 'ການຕິດຕາມຜົນຂ້າງເຄັງ & ການດູແລສະໜັບສະໜູນ', km: 'ត្រួតពិនិត្យផលរំខាន & ថែទាំគាំទ្រ' },
        { ms: 'Penilaian tindak balas melalui pengimejan (RECIST 1.1)', in: 'Penilaian respons dengan pencitraan (RECIST 1.1)', vi: 'Đánh giá đáp ứng bằng hình ảnh (RECIST 1.1)', tl: 'Response assessment by imaging (RECIST 1.1)', lo: 'ການປະເມີນຕອບສະໜອງດ້ວຍພາບຖ່າຍ (RECIST 1.1)', km: 'វាយតម្លៃឆ្លើយតបតាមរូបភាព (RECIST 1.1)' },
        { ms: 'Ubat discaj, jadual infusi, susulan di rumah', in: 'Obat pulang, jadwal infus, tindak lanjut di rumah', vi: 'Thuốc xuất viện, lịch truyền, theo dõi khi về nước', tl: 'Discharge medication, infusion schedule, home follow-up', lo: 'ຢາອອກໂຮງໝໍ, ຕາລາງສາຍຢັດ, ຕິດຕາມທີ່ບ້ານ', km: 'ថ្នាំចេញពីមន្ទីរពេទ្យ, កាលវិភាគចាក់, តាមដាននៅផ្ទះ' }
      ]
    },
    ortho: {
      procedure: { ms: 'Penggantian lutut / pinggul minima invasif dibantu robotik', in: 'Penggantian lutut / pinggul minimal invasif dibantu robot', vi: 'Thay khớp gối / hông bán phần ít xâm lấn bằng robot', tl: 'Robotic-assisted minimally invasive knee / hip replacement', lo: 'ການຜ່າຕັດປ່ຽນສະໂພກ / ຕີກວ່າງດ້ວຍຫຸ່ນຍົນ', km: 'វះជំនួសជង្គង់ / ត្រគាកដោយមនុស្សយន្តតិចឈឺ' },
      outcome:   { ms: 'Ketahanan implan 10 tahun > 95%', in: 'Ketahanan implan 10 tahun > 95%', vi: 'Tỷ lệ tồn tại implant 10 năm > 95%', tl: '10-year implant survival > 95%', lo: 'ການຢູ່ລອດຂອງອັນປະສົງ 10 ປີ > 95%', km: 'អត្រារស់នៃអមផ្លង់ 10 ឆ្នាំ > 95%' },
      ward:      { ms: 'Bilik single ortopedik · bilik air akses', in: 'Kamar single ortopedi · kamar mandi akses', vi: 'Phòng đơn chỉnh hình · phòng tắm tiếp cận', tl: 'Orthopaedic single room · accessible bathroom', lo: 'ຫ້ອງຄົນໄຂ້ກະດູກ · ຫ້ອງນ້ຳສາມາດເຂົ້າໄດ້', km: 'បន្ទប់ឯកជនឆ្អឹង · បន្ទប់ទឹកអាចចូល' },
      reg:       { ms: 'Klinik pakar pembedahan sendi · penjadualan OR', in: 'Klinik spesialis bedah sendi · penjadwalan operasi', vi: 'Phòng khám chuyên khoa khớp · lịch mổ', tl: 'Joint surgery specialist clinic · OR scheduling', lo: 'ຄລິນິກຜູ້ຊ່ຽວຊານຜ່າຕັດຂໍ້ຕໍ່ · ຕາລາງຜ່າຕັດ', km: 'គ្លីនិកឯកទេពសន្លាក់ · ការកំណត់កាលវេលាវះ' },
      stages: [
        { ms: 'Pengimejan pra-op, penjajaran & analisis berjalan', in: 'Pencitraan pra-op, penjajaran & analisis gait', vi: 'Chụp ảnh trước mổ, căn chỉnh & phân tích dáng đi', tl: 'Pre-op imaging, alignment & gait analysis', lo: 'ພາບຖ່າຍກ່ອນຜ່າຕັດ, ການຈັດວາງ & ວິເຄະການຍ່າງ', km: 'រូបភាពមុនវះ, ការតម្រង់ & វិភាគការដើរ' },
        { ms: 'Penilaian bius & darah pra-op', in: 'Penilaian anestesi & darah pra-op', vi: 'Đánh giá gây mê & máu trước mổ', tl: 'Anaesthesia assessment & pre-op bloods', lo: 'ການປະເມີນຊະລະເຈັບ & ຕວຍເລືອດກ່ອນຜ່າຕັດ', km: 'វាយតម្លៃថ្នាំសន្ធឹក & ឈាមមុនវះ' },
        { ms: 'Arthroplasti dibantu robotik (~90 min)', in: 'Arthroplasti dibantu robotik (~90 mnt)', vi: 'Thay khớp hỗ trợ robot (~90 phút)', tl: 'Robotic-assisted arthroplasty (~90 min)', lo: 'ການຜ່າຕັດຂໍ້ຕໍ່ດ້ວຍຫຸ່ນຍົນ (~90 ນາທີ)', km: 'វះជំនួសសន្លាក់ដោយមនុស្សយន្ត (~90 នាទី)' },
        { ms: 'Pemantauan 24j & analgesia pelbagai mod', in: 'Pemantauan 24j & analgesi multimodal', vi: 'Theo dõi 24h & giảm đau đa phương thức', tl: '24h monitoring & multimodal analgesia', lo: 'ການຕິດຕາມ 24ຊມ & ການບັນເທົບປວດຫຼາຍວິທີ', km: 'ត្រួតពិនិត្យ 24ម៉ោង & បំប៉នវុធ' },
        { ms: 'Pemulihan dua kali sehari (CPM + latihan berjalan)', in: 'Rehab dua kali sehari (CPM + latihan gait)', vi: 'Phục hồi hai lần mỗi ngày (CPM + tập đi)', tl: 'Rehab twice daily (CPM + gait training)', lo: 'ຟື້ນຟູມື້ລະ 2 ຄັ້ງ (CPM + ຝຶກການຍ່າງ)', km: 'ស្តារពីរដងក្នុងមួយថ្ងៃ (CPM + ហ្វឹកហាត់ដើរ)' },
        { ms: 'Penilaian berjalan bebas dengan rangka & semakan pra-discaj', in: 'Penilaian berjalan dengan frame & periksa pra-pulang', vi: 'Đánh giá tự đi bằng khung & kiểm tra trước xuất viện', tl: 'Walker independence assessment & pre-discharge review', lo: 'ປະເມີນການຍ່າງເອກະລາດດ້ວຍລົດເຂັນ & ກວດກ່ອນອອກໂຮງໝໍ', km: 'វាយតម្លៃដើរដោយខ្លួនឯងជាមួយរូរុង & ពិនិត្យមុនចេញពីមន្ទីរពេទ្យ' },
        { ms: 'Pelan pemulihan rumah & susulan jarak jauh', in: 'Rencana pemulihan rumah & tindak lanjut jarak jauh', vi: 'Kế hoạch phục hồi tại nhà & theo dõi từ xa', tl: 'Home rehab plan & tele-follow-up', lo: 'ແຜນຟື້ນຟູຢູ່ບ້ານ & ຕິດຕາມທາງໄກ', km: 'ផែនការស្តារនៅផ្ទះ & តាមដានពីចម្ងាយ' }
      ]
    }
    ,
    cardio: {
      procedure: { ms: 'Angiografi koronari + belon bersalut ubat / kerangka boleh diserap', in: 'Angiografi koroner + balon bersalut obat / kerangka dapat diserap', vi: 'Chụp mạch vành + bóng phủ thuốc / giá đỡ tiêu hủy sinh học', tl: 'Coronary angiography + drug-coated balloon / bioresorbable scaffold', lo: 'ການຖ່າຍພາບຫຼອດເລືອດຫົວໃຈ + ລູກໂປງເຄືອບຢາ / ກະແສການທີ່ສາມາດຮັບປະທານໄດ້', km: 'ការថតអាំងហ្ស៊ីលើសរសៃឈាមបេះដូង + ប៉ោងថ្នាំ / ស្កែបដែលអាចរលាយបាន' },
      outcome:   { ms: 'Kejayaan prosedur 98%+, kemasukan semula 30 hari < 2%', in: 'Keberhasilan prosedur 98%+, readmisi 30 hari < 2%', vi: 'Thành công thủ thuật 98%+, tái nhập viện 30 ngày < 2%', tl: 'Procedural success 98%+, 30-day readmission < 2%', lo: 'ຄວາມສຳເລັດ 98%+, ການເຂົ້າໂຮງໝໍຄືນ 30 ມື້ < 2%', km: 'ជោគជ័យនៃវិធានការ 98%+, ការចូលឡើងវិញក្នុង 30 ថ្ងៃ < 2%' },
      ward:      { ms: 'Peralihan CCU + bilik single kardiologi', in: 'Transisi CCU + kamar single kardiologi', vi: 'Chuyển từ CCU + phòng đơn tim mạch', tl: 'CCU step-down + cardiology single room', lo: 'ການຍ້າຍຈາກ CCU + ຫ້ອງຄົນໄຂ້ພະຍາດໜ້າໃຈ', km: 'ការរំលង CCU + បន្ទប់ឯកជនបេះដូង' },
      reg:       { ms: 'Klinik pakar kardiologi · penjadualan makmal kateter', in: 'Klinik spesialis kardiologi · penjadwalan lab kateter', vi: 'Phòng khám chuyên khoa tim · lên lịch phòng thông tim', tl: 'Cardiology specialist clinic · cath lab scheduling', lo: 'ຄລິນິກຜູ້ຊ່ຽວຊານພະຍາດໜ້າໃຈ · ຕາລາງຫ້ອງທົດລອງທໍ່', km: 'គ្លីនិកឯកទេពបេះដូង · ការកំណត់កាលវេលាមន្ទីរពិសោធន៍' },
      stages: [
        { ms: 'Ekokardiografi + CTA koronari', in: 'Ekokardiografi + CTA koroner', vi: 'Siêu âm tim + CT mạch vành', tl: 'Echocardiography + coronary CTA', lo: 'ການສະທ້ອນສຽງຫົວໃຈ + CT ຫຼອດເລືອດຫົວໃຈ', km: 'អេកូបេះដូង + CT សរសៃឈាមបេះដូង' },
        { ms: 'Konsultasi kardiologi & penstratan risiko', in: 'Konsultasi kardiologi & stratifikasi risiko', vi: 'Khám tim mạch & phân tầng nguy cơ', tl: 'Cardiology consultation & risk stratification', lo: 'ການປຶກສາພະຍາດໜ້າໃຈ & ການແບ່ງຊັ້ນຄວາມສ່ຽງ', km: 'ពិគ្រោះជំងឺបេះដូង & ការបែងថ្នាក់ហានិភ័យ' },
        { ms: 'Angiografi + intervensi (akses radial)', in: 'Angiografi + intervensi (akses radial)', vi: 'Chụp mạch + can thiệp (đường quay)', tl: 'Angiography + intervention (radial access)', lo: 'ພາບຖ່າຍຫຼອດເລືອດ + ການລະງັບ (ທາງເສັ້ນເລືອດຂໍ້ມື)', km: 'អាំងហ្ស៊ី + អន្តរាគមន៍ (ចូលតាមសរសៃឈាមដៃ)' },
        { ms: 'Pemantauan CCU 48j', in: 'Pemantauan CCU 48j', vi: 'Theo dõi CCU 48h', tl: '48h CCU monitoring', lo: 'ການຕິດຕາມ CCU 48 ຊມ', km: 'ត្រួតពិនិត្យ CCU 48ម៉ោង' },
        { ms: 'Pemulihan jantung Fasa I', in: 'Rehabilitasi jantung Fase I', vi: 'Phục hồi tim mạch giai đoạn I', tl: 'Phase I cardiac rehabilitation', lo: 'ການຟື້ນຟູຫົວໃຈຂັ້ນທີ 1', km: 'ការស្តារបេះដូងដំណាក់កាលទី 1' },
        { ms: 'Ujian toleransi senaman semula', in: 'Tes toleransi latihan ulang', vi: 'Kiểm tra sức bền vận động lại', tl: 'Exercise tolerance re-test', lo: 'ການທົດສອບຄວາມທົດທົນການອອກກຳລັງໃໝ່', km: 'តេស្តការអត់ធ្មត់កាយសម្បទាឡើងវិញ' },
        { ms: 'Rejimen antiplatelet ganda & susulan', in: 'Regimen antiplatelet ganda & tindak lanjut', vi: 'Phác đồ kháng tiểu cầu kép & theo dõi', tl: 'Dual antiplatelet regimen & follow-up', lo: 'ວິທີການຕ້ານເນື້ອເລືອດສອງຊະນິດ & ການຕິດຕາມ', km: 'ពិធីការប្រឆាំងកោសិកាឈាមក្រហមទ្វេ & តាមដាន' }
      ]
    },
    ivf: {
      procedure: { ms: 'IVF PGT-A · perangsangan antagonis individu', in: 'IVF PGT-A · stimulasi antagonis individu', vi: 'IVF PGT-A · kích thích đối kháng cá thể hóa', tl: 'PGT-A IVF · individualised antagonist stimulation', lo: 'IVF PGT-A · ການກະຕຸ້ນແບບຕ້ານຕົ້ນຢ້າງເລິກບຸກຄົນ', km: 'IVF PGT-A · ការរំញោចអ្នកប្រឆាំងជាបុគ្គល' },
      outcome:   { ms: 'Kadar kehamilan klinikal ~58% (umur < 35)', in: 'Tingkat kehamilan klinis ~58% (usia < 35)', vi: 'Tỷ lệ có thai lâm sàng ~58% (tuổi < 35)', tl: 'Clinical pregnancy rate ~58% (age < 35)', lo: 'ອັດຕາການຕັ້ງຄັນທາງຄລິນິກ ~58% (ອາຍຸ < 35)', km: 'អត្រាមានផ្ទុកជាក់ស្តែង ~58% (អាយុ < 35)' },
      ward:      { ms: 'Wad harian · pemerhatian 6j pasca-pengambilan', in: 'Ward harian · observasi 6j pasca-pengambilan', vi: 'Khoa lưu ngày · quan sát 6h sau chọc hút', tl: 'Day ward · 6h post-retrieval observation', lo: 'ຫ້ອງຄົນໄຂ້ລາຍວັນ · ການສັງເກດ 6 ຊມຫຼັງດຶງ', km: 'បន្ទប់ថ្ងៃ · ការសង្កេត 6 ម៉ោងបន្ទាប់ពីដក' },
      reg:       { ms: 'Klinik pakar pusat kesuburan · persediaan fail', in: 'Klinik spesialis pusat kesuburan · pembuatan berkas', vi: 'Phòng khám chuyên khoa trung tâm sinh sản · lập hồ sơ', tl: 'Fertility centre specialist clinic · file setup', lo: 'ຄລິນິກຜູ້ຊ່ຽວຊານສູນການມີບຸດ · ຕັ້ງແຟ້ມ', km: 'គ្លីនិកឯកទេពមជ្ឈមណ្ឌលភាពមានកូន · បង្កើតឯកសារ' },
      stages: [
        { ms: 'Saringan kesuburan pasangan (AMH / analisis air mani)', in: 'Pemeriksaan kesuburan pasangan (AMH / analisis sperma)', vi: 'Khám sinh sản vợ chồng (AMH / phân tích tinh dịch)', tl: 'Couple fertility workup (AMH / semen analysis)', lo: 'ການກວດຄວາມມີບຸດຂອງຄູ່ (AMH / ການວິເຄະນ້ຳອະສຸດ)', km: 'ការពិនិត្យភាពមានកូនរបស់គូ (AMH / វិភាគទឹកកាម)' },
        { ms: 'Protokol perangsangan individu', in: 'Protokol stimulasi individu', vi: 'Phác đồ kích thích cá thể hóa', tl: 'Individualised stimulation protocol', lo: 'ວິທີການກະຕຸ້ນແບບບຸກຄົນ', km: 'ពិធីការរំញោចជាបុគ្គល' },
        { ms: 'Perangsangan & pemantauan folikel (10-12 hari)', in: 'Stimulasi & pemantauan folikel (10-12 hari)', vi: 'Kích thích & theo dõi nang trứng (10-12 ngày)', tl: 'Stimulation & follicle monitoring (10-12 days)', lo: 'ການກະຕຸ້ນ & ການຕິດຕາມໝາກໄຂ່ (10-12 ມື້)', km: 'ការរំញោច & តាមដានស៊ុប (10-12 ថ្ងៃ)' },
        { ms: 'Pengambilan oocyte + ICSI', in: 'Pengambilan oocyte + ICSI', vi: 'Chọc hút trứng + ICSI', tl: 'Oocyte retrieval + ICSI', lo: 'ການດຶງເອັກໂຕບລາສທ໌ + ICSI', km: 'ការដកពងស្រូវ + ICSI' },
        { ms: 'Kultur blastosista + saringan PGT-A', in: 'Kultur blastosis + skrining PGT-A', vi: 'Nuôi cấy phôi nang + sàng lọc PGT-A', tl: 'Blastocyst culture + PGT-A screening', lo: 'ວັດທະນະກຳຖົງຕົວອ່ອນ + ການກວດຄັດເລືອກ PGT-A', km: 'ការដាំបណ្តុះស្កហ៍អំប្រ៊ីយុង + ការត្រួតពិនិត្យ PGT-A' },
        { ms: 'Pemindahan embrio beku-cair', in: 'Transfer embrio beku-cair', vi: 'Chuyển phôi đông lạnh rã đông', tl: 'Frozen-thawed embryo transfer', lo: 'ການຍ້າຍຕົວອ່ອນທີ່ແຊ່ແຂງ-ລະລາຍ', km: 'ការផ្ទេររូបកូនដែលបង្កកនិងរលាយ' },
        { ms: 'Pengesahan kehamilan (hCG + US transvaginal)', in: 'Konfirmasi kehamilan (hCG + US transvaginal)', vi: 'Xác nhận thai (hCG + siêu âm âm đạo)', tl: 'Pregnancy confirmation (hCG + transvaginal US)', lo: 'ການຢືນຢັນການຕັ້ງຄັນ (hCG + ອັນຕະສະບາດທາງຊ່ອງຄັດ)', km: 'ការបញ្ជាក់ការមានផ្ទុក (hCG + អេកូតាមទ្វារមាស)' }
      ]
    }
    ,
    aesthetic: {
      procedure: { ms: 'Peremajaan wajah menyeluruh · alat tenaga + pengisi + angkat benang', in: 'Peremajaan wajah komprehensif · alat energi + filler + thread lift', vi: 'Trẻ hóa khuôn mặt toàn diện · thiết bị năng lượng + filler + căng chỉ', tl: 'Comprehensive facial rejuvenation · energy device + filler + thread lift', lo: 'ການຟື້ນຟູໜ້າທັງໝົດ · ອຸປະກອນພະລັງງານ + ສານເຕີມ + ຍົກດ້ວຍເສັ້ນໄຫມ', km: 'ការធ្វើឱ្យមុខស្រស់ស្អាតពេញលក្ខណៈ · ឧបករណ៍ថាមពល + filler + ឡើងខ្សែ' },
      outcome:   { ms: '96% kepuasan pada susulan 6 bulan', in: '96% kepuasan pada tindak lanjut 6 bulan', vi: '96% hài lòng ở lần theo dõi 6 tháng', tl: '96% satisfaction at 6-month follow-up', lo: '96% ພໍໃຈໃນການຕິດຕາມ 6 ເດືອນ', km: 'ការពេញចិត្ត 96% នៅតាមដាន 6 ខែ' },
      ward:      { ms: 'Pemerhatian harian (tiada bermalam)', in: 'Observasi harian (tanpa menginap)', vi: 'Quan sát ban ngày (không lưu trú)', tl: 'Day observation (no overnight stay)', lo: 'ການສັງເກດລາຍວັນ (ບໍ່ຄ້າງຄືນ)', km: 'ការសង្កេតពេលថ្ងៃ (គ្មានស្នាក់នៅយប់)' },
      reg:       { ms: 'Klinik pakar perubatan estetik', in: 'Klinik spesialis kedokteran estetik', vi: 'Phòng khám chuyên khoa thẩm mỹ', tl: 'Aesthetic medicine specialist clinic', lo: 'ຄລິນິກຜູ້ຊ່ຽວຊານສາຂາສວຍງາມ', km: 'គ្លីនិកឯកទេពវេជ្ជសាស្ត្រសោភ៍សម្ផស្ស' },
      stages: [
        { ms: 'Pengimejan kulit & reka bentuk estetik 3D', in: 'Pencitraan kulit & desain estetik 3D', vi: 'Chụp ảnh da & thiết kế thẩm mỹ 3D', tl: 'Skin imaging & 3D aesthetic design', lo: 'ພາບຖ່າຍຜິວໜັງ & ອອກແບບສວຍງາມ 3D', km: 'រូបភាពស្បែក & រចនាស្ថាបត្យកម្មសោភ៍សម្ផស្ស 3D' },
        { ms: 'Rawatan berasaskan tenaga sesi 1 (HIFU / RF)', in: 'Perawatan berbasis energi sesi 1 (HIFU / RF)', vi: 'Điều trị năng lượng buổi 1 (HIFU / RF)', tl: 'Energy-based treatment session 1 (HIFU / RF)', lo: 'ການປິ່ນປົວໂດຍພະລັງງານ ຄັ້ງທີ 1 (HIFU / RF)', km: 'ការព្យាបាលដោយថាមពល វគ្គទី 1 (HIFU / RF)' },
        { ms: 'Prosedur pengisi & angkat benang', in: 'Prosedur filler & thread lift', vi: 'Thủ thuật filler & căng chỉ', tl: 'Filler & thread lift procedure', lo: 'ຂັ້ນຕອນສານເຕີມ & ຍົກດ້ວຍເສັ້ນໄຫມ', km: 'នីតិវិធី filler & ឡើងខ្សែ' },
        { ms: 'Penjagaan pembaikan pasca-prosedur & penyejukan', in: 'Perawatan reparasi pasca-prosedur & pendinginan', vi: 'Chăm sóc phục hồi sau thủ thuật & làm mát', tl: 'Post-procedure repair care & cooling', lo: 'ການດູແລຟື້ນຟູຫຼັງຂັ້ນຕອນ & ການເຢັນ', km: 'ការថែទាំជួសជុលក្រោយនីតិវិធី & ត្រជាក់' },
        { ms: 'Rawatan berasaskan tenaga sesi 2', in: 'Perawatan berbasis energi sesi 2', vi: 'Điều trị năng lượng buổi 2', tl: 'Energy-based treatment session 2', lo: 'ການປິ່ນປົວໂດຍພະລັງງານ ຄັ້ງທີ 2', km: 'ការព្យាបាលដោយថាមពល វគ្គទី 2' },
        { ms: 'Semakan hasil & pelan penjagaan rumah', in: 'Tinjauan hasil & rencana perawatan rumah', vi: 'Đánh giá hiệu quả & kế hoạch chăm sóc tại nhà', tl: 'Outcome review & home-care plan', lo: 'ການປະເມີນຜົນ & ແຜນການດູແລຢູ່ບ້ານ', km: 'ការវាយតម្លៃលទ្ធផល & ផែនការថែទាំនៅផ្ទះ' },
        { ms: 'Susulan dalam talian 6 bulan', in: 'Tindak lanjut daring 6 bulan', vi: 'Theo dõi trực tuyến 6 tháng', tl: '6-month online follow-up', lo: 'ຕິດຕາມທາງອອນໄລນ໌ 6 ເດືອນ', km: 'តាមដានតាមអ៊ីនធឺណិត 6 ខែ' }
      ]
    },
    checkup: {
      procedure: { ms: 'Saringan mendalam seluruh badan · onkologi + kardiovaskular + genomik', in: 'Skrining mendalam seluruh tubuh · onkologi + kardiovaskular + genomik', vi: 'Tầm soát sâu toàn thân · ung thư + tim mạch + bộ gen', tl: 'Full-body deep screening · oncology + cardiovascular + genomics', lo: 'ການກວດຄັດການເລິກທົ່ວຕົວ · ມະເຮັງ + ຫົວໃຈເລືອດແດງ + ພັນທຸກຳ', km: 'ការពិនិត្យជ្រៅទូទៅខ្លួន · មហារីក + បេះដូងសរសៃឈាម + ហ្សែន' },
      outcome:   { ms: 'Pengesanan lesi awal ~3.2x lebih tinggi', in: 'Deteksi lesi dini ~3.2x lebih tinggi', vi: 'Phát hiện tổn thương sớm cao gấp ~3.2 lần', tl: '~3.2x higher early lesion detection', lo: 'ການກວດພົບຮ່ອງຮອຍຕົ້ນສະໄໝ ~3.2 ເທົ່າ', km: 'ការរកឃើញស្នាមរបួសដំបូងខ្ពស់ជាង ~3.2 ដង' },
      ward:      { ms: 'Suite VIP pengurusan kesihatan', in: 'Suite VIP manajemen kesehatan', vi: 'Phòng VIP quản lý sức khỏe', tl: 'Health management VIP suite', lo: 'ຫ້ອງຊຸດ VIP ການຈັດການສຸຂະພາບ', km: 'បន្ទប់ VIP គ្រប់គ្រងសុខភាព' },
      reg:       { ms: 'Tempahan VIP pengurusan kesihatan', in: 'Pemesanan VIP manajemen kesehatan', vi: 'Đặt lịch VIP quản lý sức khỏe', tl: 'Health management VIP booking', lo: 'ຈອງ VIP ການຈັດການສຸຂະພາບ', km: 'ការកក់ VIP គ្រប់គ្រងសុខភាព' },
      stages: [
        { ms: 'Soal selidik kesihatan & risiko sejarah keluarga', in: 'Kuesioner kesehatan & risiko riwayat keluarga', vi: 'Bảng hỏi sức khỏe & nguy cơ tiền sử gia đình', tl: 'Health questionnaire & family-history risk', lo: 'ແບບສອບຖາມສຸຂະພາບ & ຄວາມສ່ຽງປະຫວັດຄອບຄົວ', km: 'សំណួរសុខភាព & ហានិភ័យប្រវត្តិគ្រួសារ' },
        { ms: 'Pemeriksaan sehari penuh (pengimejan + endoskopi + ujian makmal)', in: 'Pemeriksaan sehari penuh (pencitraan + endoskopi + lab)', vi: 'Khám cả ngày (hình ảnh + nội soi + xét nghiệm)', tl: 'Full-day workup (imaging + endoscopy + labs)', lo: 'ການກວດຕະຫຼອດມື້ (ພາບຖ່າຍ + ການສອດກະເພາະ + ຫ້ອງປະລິບັດຕິ)', km: 'ការពិនិត្យពេញមួយថ្ងៃ (រូបភាព + ឆ្លុះ + មន្ទីរពិសោធន៍)' },
        { ms: 'Saringan awal kanser PET-MR', in: 'Skrining dini kanker PET-MR', vi: 'Sàng lọc ung thư sớm PET-MR', tl: 'PET-MR early cancer screening', lo: 'ການກວດຄັດມະເຮັງແຕ່ຕົ້ນ PET-MR', km: 'ការត្រួតពិនិត្យមហារីកដំបូង PET-MR' },
        { ms: 'Profil genomik & metabolomik', in: 'Profil genomik & metabolomik', vi: 'Lập hồ sơ bộ gen & chuyển hóa', tl: 'Genomic & metabolomic profiling', lo: 'ຂໍ້ມູນພັນທຸກຳ & ເມທາບໂບລິກ', km: 'ការបង្កើតប្រវត្តិហ្សែន & មេតាបូលីស' },
        { ms: 'Perundingan keputusan satu-satu', in: 'Konsultasi hasil satu-satu', vi: 'Tư vấn kết quả một-một', tl: 'One-on-one results consultation', lo: 'ການປຶກສາຜົນກົງກັບກົງ', km: 'ពិគ្រោះលទ្ធផលមួយទល់មួយ' },
        { ms: 'Pendapat kedua pakar (jika tidak normal)', in: 'Pendapat kedua spesialis (jika abnormal)', vi: 'Ý kiến thứ hai của chuyên gia (nếu bất thường)', tl: 'Specialist second opinion (if abnormal)', lo: 'ຄວາມຄິດເຫັນທີສອງຈາກຜູ້ຊ່ຽວຊານ (ຖ້າຜິດປົກກະຕິ)', km: 'មតិទីពីរពីអ្នកជំនាញ (ប្រសិនបើមិនប្រក្រតី)' },
        { ms: 'Pelan intervensi & susulan rumah', in: 'Rencana intervensi & tindak lanjut rumah', vi: 'Kế hoạch can thiệp & theo dõi tại nhà', tl: 'Intervention plan & home follow-up', lo: 'ແຜນການແຊກແຊງ & ການຕິດຕາມຢູ່ບ້ານ', km: 'ផែនការអន្តរាគមន៍ & តាមដាននៅផ្ទះ' }
      ]
    }
  };

  Object.keys(MED).forEach(function (k) {
    var m = D.MEDICAL[k]; if (!m) return;
    if (MED[k].procedure) Object.assign(m.procedure, MED[k].procedure);
    if (MED[k].outcome)   Object.assign(m.outcome, MED[k].outcome);
    if (MED[k].ward)      Object.assign(m.ward, MED[k].ward);
    if (MED[k].reg)       Object.assign(m.reg, MED[k].reg);
    if (MED[k].stages) MED[k].stages.forEach(function (s, i) { if (m.stages[i]) Object.assign(m.stages[i], s); });
  });
})();
