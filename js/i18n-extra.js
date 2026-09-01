/* ============================================================
   MedBridge · extra i18n  (ms / id / vi / tl / lo / km)
   Merged into the live DICT at load time by js/i18n.js
   (global.MB_DICT). Falls back to en/zh for any missing key.
   NOTE: all strings below are AI-generated first-pass machine
   translation. ms/id/vi/tl are solid; lo/km are best-effort
   and need native review before production.
   ============================================================ */
(function () {
  'use strict';
  if (!window.MB_DICT) return;

  var EXTRA = {

    /* ---------------------------------------------------- ms (Bahasa Melayu) */
    ms: {
      brand: { tagline: 'Perancang Itinerari Rawatan Merentas Sempadan' },
      nav: { home: 'Beranda', intake: 'Penilaian', plans: 'Pelan Rawatan', pricing: 'Buka Versi Disahkan', trips: 'Perjalanan Saya' },
      common: {
        demoBadge: 'Prototaip · Data sampel', next: 'Seterusnya', back: 'Kembali', confirm: 'Sahkan', cancel: 'Batal',
        close: 'Tutup', viewDetail: 'Lihat butiran', select: 'Pilih', optional: 'Pilihan', perPerson: '/orang',
        total: 'Jumlah', from: 'dari', included: 'Termasuk', notIncluded: 'Tidak termasuk', days: 'hari', night: 'malam',
        loading: 'Memproses…', continue: 'Teruskan', currency: '¥', save: 'Simpan', edit: 'Sunting', per: 'setiap'
      },
      footer: { disclaimer: 'Prototaip boleh klik untuk perbincangan produk. Semua hospital, doktor, harga dan angka hasil adalah ilustrasi serta tidak membentuk nasihat perubatan atau tawaran.', demo: 'Prototaip v0.9' },

      dept: {
        oncology:  { name: 'Onkologi Ketepatan', desc: 'Sasaran / imuno / lembaga MDT' },
        ortho:     { name: 'Ortopedik & Sendi', desc: 'Penggantian pinggul & lutut robotik' },
        cardio:    { name: 'Kardiovaskular', desc: 'Angiografi / stent / pemulihan' },
        ivf:       { name: 'Kesuburan (IVF)', desc: 'PGT-A / perangsangan diperibadikan' },
        aesthetic: { name: 'Estetik & Anti-penuaan', desc: 'Peremajaan wajah / alat tenaga' },
        checkup:   { name: 'Pemeriksaan Eksekutif', desc: 'PET-MR / genomik / kardiovaskular' }
      },

      home: {
        heroTitle: 'Rancang keseluruhan perjalanan rawatan ke luar negara — dalam bahasa anda',
        heroSub: 'Masukkan diagnosis dan keputusan ujian anda. Dalam beberapa minit, anda mendapat tiga itinerari rawatan lengkap: penerbangan, pemindahan, hotel, pendaftaran, wad, doktor yang merawat, protokol rawatan dan kos terperinci. Mulakan secara percuma dengan pelan simulasi AI; buka versi disahkan hospital apabila anda sedia untuk menempah.',
        ctaPrimary: 'Jana pelan saya secara percuma', ctaSecondary: 'Cara platform berfungsi',
        stat1: 'Hospital rakan kongsi', stat2: 'Kes sebenar yang boleh dipadankan', stat3: 'Bahasa disokong',
        howTitle: 'Tiga langkah: dari "saya tidak tahu ke mana hendak pergi" ke "tempahan disahkan"',
        howSub: 'Pesakit kekal dalam bahasa ibunda mereka. Platform mengendalikan terjemahan, pengesahan harga dan penyelarasan.',
        step1Title: 'Terangkan keadaan dalam bahasa anda', step1Body: 'Isi diagnosis dan muat naik imbasan atau laporan makmal dalam bahasa anda sendiri. Sistem menghasilkan ringkasan perubatan standard yang diterjemahkan untuk meja antarabangsa hospital.', step1Lock: 'Percuma',
        step2Title: 'AI membina tiga itinerari', step2Body: 'Platform mencari perpustakaan kes sebenar lepas dan mengembalikan tiga pilihan — hospital, pakar bedah, protokol, tempoh tinggal, penerbangan, hotel dan kos terperinci.', step2Lock: 'Percuma',
        step3Title: 'Buka versi disahkan dan tempah', step3Body: 'Selepas pembayaran, meja antarabangsa hospital mengesahkan protokol, ketersediaan doktor dan katil, kemudian mengeluarkan harga tepat. Penerbangan dan hotel dibayar di platform pihak ketiga.', step3Lock: 'Berbayar',
        deptTitle: 'Enam jabatan diliputi', deptSub: 'Setiap jabatan mempunyai perpustakaan kes sebenar tanpa nama yang dipadankan dan digabungkan semula oleh AI.',
        cases: '{n} kes boleh dipadankan', casesUnit: 'kes',
        trustTitle: 'Mengapa hospital menyertai', trustSub: 'Kami tidak menjual trafik. Kami menyampaikan permintaan berstruktur dan terjemahan awal, mengurangkan kos komunikasi meja antarabangsa.',
        trust1t: 'Permintaan tiba berstruktur', trust1d: 'Hospital menerima ringkasan perubatan yang diterjemahkan dan lengkap — bukan timbunan laporan asing yang tidak boleh dibaca.',
        trust2t: 'Tapis sebelum menerima', trust2d: 'Peringkat pra-padanan AI menapis kes yang tidak sesuai, jadi hospital hanya mengendalikan pertanyaan dengan indikasi rawatan sebenar.',
        trust3t: 'Pembayaran kekal di luar platform', trust3d: 'Penerbangan dan hotel dikutip oleh OTA pihak ketiga; hospital hanya mengenakan bayaran perubatan mereka sendiri. Tiada dana dikumpulkan, tiada pendedahan pematuhan.',
        trust4t: 'Hasil berkumpul', trust4d: 'Data susulan pasca-rawatan mengalir kembali ke perpustakaan kes, membina kadar kejayaan yang boleh dicari dan julat harga sebenar.',
        ctaTitle: 'Cubalah pada senario realistik', ctaBody: 'Tiada pendaftaran. Pilih jabatan, masukkan diagnosis, dan lalui keseluruhan aliran dalam beberapa minit.', ctaBtn: 'Mulakan penilaian'
      },

      intake: {
        title: 'Penilaian perubatan', sub: 'Jawab dalam bahasa anda — kami menterjemah untuk hospital. Ruangan bertanda * adalah wajib.',
        secBasic: 'Asas', secMedical: 'Keadaan & dokumen', secPref: 'Keutamaan perjalanan',
        origin: 'Negara / bandar berlepas', originHint: 'Digunakan untuk menganggar tempoh penerbangan dan tambang',
        dept: 'Jabatan', deptHint: 'Pilih padanan terdekat jika kurang pasti',
        disease: 'Diagnosis', diseaseHint: 'Anda boleh menulisnya dalam bahasa anda.',
        diseasePh: 'cth. Adenokarsinoma gastrik T3N1M0',
        reports: 'Keputusan ujian', reportsHint: 'Muat naik laporan CT / MRI / patologi / darah (prototaip ini tidak benar-benar memuat naik fail)',
        uploadTitle: 'Klik untuk memuat naik laporan atau pengimejan', uploadDesc: 'PDF / JPG / DICOM · sehingga 200MB setiap fail',
        city: 'Bandar destinasi pilihan', cityHint: 'Mempengaruhi hospital, hotel dan kos penerbangan',
        budget: 'Julat bajet (CNY)', date: 'Tarikh berlepas pilihan', companions: 'Ahli keluarga yang menemani',
        travelPref: 'Tambah pilihan pelancongan', travelHint: 'Retret pemulihan, melancong atau pemulihan TCM selepas rawatan',
        sideTitle: 'Apa yang akan berlaku seterusnya', sideStep1t: 'AI mencari kes serupa', sideStep1d: 'Mencari kes sejarah terdekat dalam jabatan anda',
        sideStep2t: 'Tiga itinerari dijana', sideStep2d: 'Setiap satu dengan pelan rawatan, logistik dan kos penuh',
        sideStep3t: 'Anda membuka satu untuk pengesahan', sideStep3d: 'Hospital mengesahkan setiap baris dan mengeluarkan harga tepat serta pegang katil',
        sideStep4t: 'Bayar di platform pihak ketiga', sideStep4d: 'Penerbangan dan hotel dibayar di Trip.com / Booking dan seumpamanya',
        submit: 'Jana itinerari secara percuma', mobility: 'Pemberian gred keperluan pemindahan', mobilityHint: 'Memadankan kenderaan dan persediaan penjagaan yang betul — tidak mengubah pelan perubatan', disclaimer: 'Prototaip: penyerahan menggunakan data sampel untuk simulasi. Tiada apa yang dimuat naik atau dihantar.'
      },

      gen: { title: 'Membina itinerari anda', sub: 'AI sedang mencari kes lepas dan memasang perjalanan', s1: 'Menterjemah dan menstandardkan ringkasan perubatan', s2: 'Mencari perpustakaan kes jabatan', s3: 'Memadankan ketersediaan hospital dan doktor', s4: 'Memasang penerbangan, hotel dan pemindahan', s5: 'Menjana anggaran kos terperinci' },

      plans: {
        title: 'Tiga itinerari rawatan untuk anda', sub: 'Gabungan simulasi AI dibina berdasarkan kasus sebenar lepas. Medan utama hanya menunjukkan nilai sebenar selepas anda membuka versi disahkan hospital.',
        match: 'Padanan', matchSub: 'Berdasarkan keadaan, bajet dan pemasaan anda', resultsFor: 'Kanser gastrik · Shanghai · CNY 200k-300k',
        regenerate: 'Jana semula', tierA: 'Premium', tierB: 'Seimbang', tierC: 'Ekonomi',
        tierADesc: 'Sayap antarabangsa tertiari tertinggi, pengerusi jabatan sebagai pakar bedah', tierBDesc: 'Hospital tertiari kukuh dalam bandar yang sama, nilai seimbang', tierCDesc: 'Hospital terkemuka di bandar kos rendah',
        recommend: 'Disyorkan', popular: 'Paling kerap dipilih', value: 'Nilai terbaik',
        hospital: 'Hospital', doctor: 'Doktor yang merawat', stay: 'Pesakit dalam', ward: 'Wad', duration: 'Tempoh', success: 'Hasil',
        viewPlan: 'Lihat pelan penuh', pickPlan: 'Pilih pelan ini', picked: 'Dipilih',
        priceNote: 'Anggaran AI', exactPrice: 'Sebut harga hospital', aiBadge: 'Simulasi AI', verifiedBadge: 'Disahkan hospital',
        freeNote: 'Anda sedang melihat pelan simulasi AI percuma: nama doktor, kos tepat, pegang katil dan data hasil adalah ruang letak.',
        unlockCta: 'Buka versi disahkan hospital', costHint: 'Kos adalah julat anggaran; pembukaan menunjukkan harga terperinci tepat'
      },

      plan: {
        tabOverview: 'Gambaran keseluruhan', tabTimeline: 'Itinerari', tabMedical: 'Rawatan', tabCost: 'Kos', tabTravel: 'Tambahan',
        backToList: 'Kembali ke pelan', itineraryTitle: 'Itinerari harian penuh', itinerarySub: 'Setiap hari, dari berlepas ke pulang',
        hospitalInfo: 'Hospital', city: 'Bandar', level: 'Tier', accred: 'Akreditasi', beds: 'Katil',
        medicalTeam: 'Pasukan perubatan', chief: 'Doktor yang merawat', specialty: 'Kepakaran', experience: 'Tahun beramal', languages: 'Bahasa perundingan', casesDone: 'Kes dilakukan',
        treatmentPlan: 'Pelan rawatan', procedure: 'Prosedur teras', stages: 'Peringkat protokol', stage: 'Peringkat', successRate: 'Metrik hasil',
        stayDays: 'Hari pesakit dalam', wardType: 'Jenis wad', registration: 'Pendaftaran',
        logistics: 'Logistik', flight: 'Penerbangan antarabangsa', airline: 'Pengangkut', cabin: 'Kabin', duration: 'Masa penerbangan', tripDays: 'Tempoh perjalanan',
        transfer: 'Pengangkutan darat', transferGrade: 'Gred pemindahan', transferVehicle: 'Kenderaan disyorkan', transferNurse: 'Jururawat atas kapal', transferPerTrip: 'Setiap perjalanan', transferRound: 'Perjalanan pergi balik (jemput + hantar)', transferSelfBook: 'Tempah sendiri · platform mencadangkan', transferPlatformBook: 'Ditempah oleh platform', transferSource: 'Nota armada: van perniagaan dikendalikan sendiri oleh platform; ambulan disumber luar di bawah perjanjian rangka kerja, dikenakan mengikut perjalanan.', transferKm: 'Lapangan terbang → hospital ~{n} km', transferAccessible: 'Tanah meluncur akses kerusi roda', transferBook: 'Tempahan', hotel: 'Penginapan', room: 'Jenis bilik', distance: 'Ke hospital',
        costTitle: 'Kos terperinci', medicalFee: 'Fi perubatan', flightFee: 'Tambang penerbangan', hotelFee: 'Penginapan', transferFee: 'Pengangkutan darat',
        serviceFee: 'Fi perkhidmatan platform', travelAddon: 'Tambahan pelancongan', total: 'Jumlah', estimate: 'Anggaran AI', exact: 'Sebut harga hospital',
        perCompanion: 'Termasuk {n} ahli keluarga',
        travelTitle: 'Tambahan pelancongan & pemulihan', travelAdd: 'Tambah ke perjalanan', travelAdded: 'Ditambah',
        lockedTitle: 'Medan ini hanya menunjukkan nilai sebenar selepas pengesahan hospital',
        lockedBody: 'Versi percuma adalah simulasi AI berdasarkan kasus lepas: nama doktor, kos terperinci, nombor pegang katil dan data hasil adalah ruang letak. Pembukaan menyebabkan meja antarabangsa hospital mengesahkan dan menandatangani setiap baris.',
        lockedBtn: 'Buka versi disahkan hospital',
        verifiedTitle: 'Disahkan oleh hospital', verifiedBy: 'Disahkan oleh', verifiedAt: 'Disahkan pada', bedHold: 'Nombor pegang katil',
        doctorSign: 'Tandatangan doktor', hospitalRef: 'Nombor pertanyaan hospital', confidence: 'Keyakinan pelan',
        confidenceNote: 'Berdasarkan {n} kes lepas yang serupa'
      },

      pricing: {
        title: 'Buka pelan disahkan hospital', sub: 'Percuma memberi anda arah. Berbayar memberi anda tarikh boleh tempah dan harga tepat.',
        t1Name: 'Simulasi AI', t1Desc: 'Lihat arah dan magnitud kos dahulu', t1Price: 'Percuma', t1Unit: 'Sentiasa percuma, tiada pendaftaran',
        t2Name: 'Disahkan hospital', t2Desc: 'Disahkan baris demi baris, sedia untuk ditempah', t2Unit: 'Sekali sahaja · setiap pelan',
        t3Name: 'Concierge penuh', t3Desc: 'Pengesahan + visa, jurubahasa, pemindahan', t3Unit: 'Sekali sahaja · termasuk semua faedah tier disahkan',
        pay: 'Buka sekarang', paid: 'Dibuka', current: 'Semasa', upgrade: 'Naik taraf', popular: 'Paling kerap dipilih',
        payTitle: 'Sahkan pembayaran', paySub: 'Selepas pembukaan, meja antarabangsa hospital melengkapkan pengesahan dalam 1-2 hari bekerja', payMethod: 'Kaedah pembayaran',
        pmCard: 'Kad antarabangsa', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'E-dompet', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'Pemindahan bank', pmBankSub: 'Untuk pembayaran perubatan lebih besar · 1-3 hari bekerja',
        successTitle: 'Pembayaran diterima — pengesahan diminta', successBody: 'Meja antarabangsa hospital mempunyai ringkasan perubatan anda dan akan mengesahkan protokol, ketersediaan doktor dan katil dalam 1-2 hari bekerja. Halaman ini dikemas kini secara automatik sebaik sahaja disahkan.',
        successBtn: 'Lihat pelan disahkan',
        noteRefund: 'Bayaran balik penuh jika hospital mendapati tiada indikasi rawatan atau tidak boleh menerima kes.',
        noteScope: 'Fi ini hanya meliputi pengesahan dan penyelarasan — bukan penerbangan, hotel atau rawatan hospital, yang dibayar di platform pihak ketiga.',
        pkgAName: 'Pelan DIY', pkgADesc: 'Pelan perubatan disahkan; tempah penerbangan / hotel / pemindahan sendiri', pkgBName: 'Semua inclusive', pkgBDesc: 'Pelan disahkan + penerbangan / jemputan / hotel ditempah untuk anda', pkgCName: 'Pembantu peribadi', pkgCDesc: 'Semua inclusive + pembantu peribadi khusus, tier teratas',

        feat: {
          ai3: '3 itinerari simulasi AI', range: 'Anggaran julat kos', verify: 'Protokol disahkan oleh hospital',
          doctor: 'Tandatangan doktor + kelayakan', bed: 'Nombor pegang katil / slot operasi', exact: 'Harga hospital terperinci tepat',
          visa: 'Surat jemputan visa perubatan + panduan', interp: 'Penterjemahan perubatan penuh (klinik + wad)', airport: 'Pemindahan lapangan terbang + pengiring janji temu',
          accompany: 'Penyelarasan perjalanan untuk 1 ahli keluarga', insurance: 'Perlindungan komplikasi (had CNY 1Juta)',
          flightBook: 'Tempahan penerbangan (Trip.com)', pickup: 'Jemputan / hantaran lapangan terbang peribadi', hotelBook: 'Tempahan hotel (Booking.com)', assistant: 'Pembantu peribadi khusus', vip: 'Saluran laju VIP'
        }
      },

      booking: {
        title: 'Tempahan & pembayaran', sub: 'Penerbangan, hotel dan pendaftaran hospital masing-masing dibayar di platform sendiri. MedBridge tidak pernah mengutip atau menyimpan dana ini.',
        noteTitle: 'Mengapa pembayaran dipecahkan', noteBody: 'Penerbangan dan hotel mengikut peraturan perubahan syarikat penerbangan dan OTA; pendaftaran hospital adalah perkhidmatan perubatan. Memecahkannya memberikan setiap transaksi resit sendiri dan saluran bayaran balik sendiri, serta menghalang MedBridge daripada mengendalikan akaun berkumpul.',
        itemFlight: 'Penerbangan antarabangsa', itemHotel: 'Penginapan', itemReg: 'Pendaftaran & katil', itemTransfer: 'Pemindahan peribadi', itemTravel: 'Tambahan pelancongan',
        provider: 'Platform pembayaran', goPay: 'Bayar sekarang', payOnPartner: 'Lengkapkan pembayaran di {p}',
        redirectTitle: 'Mengalihkan ke {p}', redirectBody: 'Anda akan dibawa ke platform pihak ketiga untuk melengkapkan pembayaran ini. Pembayaran, perubahan dan bayaran balik dikendalikan sepenuhnya oleh platform tersebut.',
        redirectBtn: 'Faham, teruskan',
        summary: 'Senarai pembayaran', platformFee: 'Fi perkhidmatan platform', platformFeeNote: 'Sudah dibayar semasa anda membuka',
        doneTitle: 'Semua tempahan dihantar', doneBody: 'Setiap pembayaran mempunyai resit sendiri. Setelah perjalanan disahkan, itinerari, butiran jemputan dan peringatan janji temu muncul di bawah Perjalanan Saya.',
        itemsPending: '{n} belum selesai', itemsPaid: '{n} dibayar'
      },

      trips: {
        title: 'Perjalanan Saya', sub: 'Jejak status dan resit setiap tempahan.',
        empty1: 'Tiada perjalanan sedang berjalan lagi', empty2: 'Pelan yang anda jana akan muncul di sini selepas penilaian.',
        emptyBtn: 'Mulakan penilaian',
        orderNo: 'Nombor perjalanan', created: 'Dicipta', viewPlan: 'Lihat pelan', payNow: 'Bayar sekarang',
        s1: 'Permintaan dihantar', s2: 'Pelan AI dijana', s3: 'Disahkan hospital', s4: 'Menunggu pembayaran', s5: 'Tempahan disahkan', s6: 'Perjalanan sedang berjalan',
        pipeline: 'Kemajuan', booking: 'Tempahan'
      },

      partners: { ctrip: 'Penerbangan Trip.com', booking: 'Booking.com', hospital: 'Sistem pendaftaran hospital', didi: 'Perkhidmatan pemindahan peribadi', airbnb: 'Apartmen & penginapan' }
    },

    /* ---------------------------------------------------- in (Bahasa Indonesia) */
    in: {
      brand: { tagline: 'Perencana Perjalanan Perawatan Lintas Batas' },
      nav: { home: 'Beranda', intake: 'Penilaian', plans: 'Rencana Perawatan', pricing: 'Buka Versi Terverifikasi', trips: 'Perjalanan Saya' },
      common: {
        demoBadge: 'Prototipe · Data contoh', next: 'Berikutnya', back: 'Kembali', confirm: 'Konfirmasi', cancel: 'Batal',
        close: 'Tutup', viewDetail: 'Lihat detail', select: 'Pilih', optional: 'Opsional', perPerson: '/orang',
        total: 'Total', from: 'dari', included: 'Termasuk', notIncluded: 'Tidak termasuk', days: 'hari', night: 'malam',
        loading: 'Memproses…', continue: 'Lanjutkan', currency: '¥', save: 'Simpan', edit: 'Edit', per: 'per'
      },
      footer: { disclaimer: 'Prototipe yang dapat diklik untuk diskusi produk. Semua rumah sakit, dokter, harga, dan angka hasil bersifat ilustratif dan tidak merupakan nasihat medis atau penawaran.', demo: 'Prototipe v0.9' },

      dept: {
        oncology:  { name: 'Onkologi Presisi', desc: 'Target / imuno / tim MDT' },
        ortho:     { name: 'Ortopedi & Sendi', desc: 'Penggantian pinggul & lutut robotik' },
        cardio:    { name: 'Kardiovaskular', desc: 'Angiografi / stent / rehabilitasi' },
        ivf:       { name: 'Kesuburan (IVF)', desc: 'PGT-A / stimulasi yang dipersonalisasi' },
        aesthetic: { name: 'Estetika & Anti-penuaan', desc: 'Peremajaan wajah / alat energi' },
        checkup:   { name: 'Pemeriksaan Eksekutif', desc: 'PET-MR / genomik / kardiovaskular' }
      },

      home: {
        heroTitle: 'Rencanakan seluruh perjalanan perawatan ke luar negeri — dalam bahasa Anda',
        heroSub: 'Masukkan diagnosis dan hasil tes Anda. Dalam beberapa menit Anda mendapatkan tiga itinerari perawatan lengkap: penerbangan, transfer, hotel, pendaftaran, bangsal, dokter penanggung jawab, protokol perawatan, dan biaya rinci. Mulai gratis dengan rencana simulasi AI; buka versi terverifikasi rumah sakit saat Anda siap memesan.',
        ctaPrimary: 'Buat rencana saya secara gratis', ctaSecondary: 'Cara kerja platform',
        stat1: 'Rumah sakit mitra', stat2: 'Kasus nyata yang dapat dipadankan', stat3: 'Bahasa didukung',
        howTitle: 'Tiga langkah: dari "saya tidak tahu ke mana pergi" ke "pemesanan dikonfirmasi"',
        howSub: 'Pasien tetap menggunakan bahasa ibu mereka. Platform menangani terjemahan, verifikasi harga, dan koordinasi.',
        step1Title: 'Jelaskan kondisi dalam bahasa Anda', step1Body: 'Isi diagnosis dan unggah pindai atau laporan lab dalam bahasa Anda sendiri. Sistem menghasilkan ringkasan medis standar yang diterjemahkan untuk meja internasional rumah sakit.', step1Lock: 'Gratis',
        step2Title: 'AI membangun tiga itinerari', step2Body: 'Platform mencari perpustakaan kasus nyata masa lalu dan mengembalikan tiga pilihan — rumah sakit, ahli bedah, protokol, lama menginap, penerbangan, hotel, dan biaya rinci.', step2Lock: 'Gratis',
        step3Title: 'Buka versi terverifikasi dan pesan', step3Body: 'Setelah pembayaran, meja internasional rumah sakit memverifikasi protokol, ketersediaan dokter, dan tempat tidur, lalu menerbitkan harga pasti. Penerbangan dan hotel dibayar di platform pihak ketiga.', step3Lock: 'Berbayar',
        deptTitle: 'Enam departemen tercover', deptSub: 'Setiap departemen memiliki perpustakaan kasus nyata anonim yang dipadankan dan digabungkan kembali oleh AI.',
        cases: '{n} kasus dapat dipadankan', casesUnit: 'kasus',
        trustTitle: 'Mengapa rumah sakit bergabung', trustSub: 'Kami tidak menjual trafik. Kami menyampaikan permintaan terstruktur dan terjemahan awal, mengurangi biaya komunikasi meja internasional.',
        trust1t: 'Permintaan tiba terstruktur', trust1d: 'Rumah sakit menerima ringkasan medis yang diterjemahkan dan lengkap — bukan tumpukan laporan asing yang tidak dapat dibaca.',
        trust2t: 'Saring sebelum menerima', trust2d: 'Tahap pra-pemadanan AI menyaring kasus yang tidak sesuai, sehingga rumah sakit hanya menangani pertanyaan dengan indikasi perawatan nyata.',
        trust3t: 'Pembayaran tetap di luar platform', trust3d: 'Penerbangan dan hotel ditagih oleh OTA pihak ketiga; rumah sakit hanya menagih biaya medis mereka sendiri. Tidak ada dana gabungan, tidak ada paparan kepatuhan.',
        trust4t: 'Hasil terakumulasi', trust4d: 'Data tindak lanjut pasca-perawatan mengalir kembali ke perpustakaan kasus, membangun tingkat keberhasilan yang dapat dicari dan rentang harga nyata.',
        ctaTitle: 'Cobalah pada skenario realistis', ctaBody: 'Tanpa pendaftaran. Pilih departemen, masukkan diagnosis, dan jalani seluruh alur dalam beberapa menit.', ctaBtn: 'Mulai penilaian'
      },

      intake: {
        title: 'Penilaian medis', sub: 'Jawab dalam bahasa Anda — kami menerjemahkan untuk rumah sakit. Kolom bertanda * wajib diisi.',
        secBasic: 'Dasar', secMedical: 'Kondisi & dokumen', secPref: 'Preferensi perjalanan',
        origin: 'Negara / kota keberangkatan', originHint: 'Digunakan untuk memperkirakan durasi dan tarif penerbangan',
        dept: 'Departemen', deptHint: 'Pilih kecocokan terdekat jika ragu',
        disease: 'Diagnosis', diseaseHint: 'Anda dapat menulisnya dalam bahasa Anda.',
        diseasePh: 'mis. Adenokarsinoma gastrik T3N1M0',
        reports: 'Hasil tes', reportsHint: 'Unggah laporan CT / MRI / patologi / darah (prototipe ini tidak benar-benar mengunggah file)',
        uploadTitle: 'Klik untuk mengunggah laporan atau pencitraan', uploadDesc: 'PDF / JPG / DICOM · hingga 200MB per file',
        city: 'Kota tujuan pilihan', cityHint: 'Mempengaruhi rumah sakit, hotel, dan biaya penerbangan',
        budget: 'Rentang anggaran (CNY)', date: 'Tanggal keberangkatan pilihan', companions: 'Anggota keluarga pendamping',
        travelPref: 'Tambahkan opsi wisata', travelHint: 'Retret pemulihan, wisata, atau rehabilitasi TCM setelah perawatan',
        sideTitle: 'Apa yang terjadi selanjutnya', sideStep1t: 'AI mencari kasus serupa', sideStep1d: 'Menemukan kasus historis terdekat di departemen Anda',
        sideStep2t: 'Tiga itinerari dihasilkan', sideStep2d: 'Masing-masing dengan rencana perawatan, logistik, dan biaya lengkap',
        sideStep3t: 'Anda membuka satu untuk verifikasi', sideStep3d: 'Rumah sakit memverifikasi setiap baris dan menerbitkan harga pasti beserta pemesanan tempat tidur',
        sideStep4t: 'Bayar di platform pihak ketiga', sideStep4d: 'Penerbangan dan hotel dibayar di Trip.com / Booking dan sejenisnya',
        submit: 'Buat itinerari secara gratis', mobility: 'Penilaian kebutuhan transfer', mobilityHint: 'Memadankan kendaraan dan penyiapan perawatan yang tepat — tidak mengubah rencana medis', disclaimer: 'Prototipe: pengiriman menggunakan data contoh untuk simulasi. Tidak ada yang diunggah atau dikirimkan.'
      },

      gen: { title: 'Membangun itinerari Anda', sub: 'AI sedang mencari kasus masa lalu dan merakit perjalanan', s1: 'Menerjemahkan dan menstandarkan ringkasan medis', s2: 'Mencari perpustakaan kasus departemen', s3: 'Memadankan ketersediaan rumah sakit dan dokter', s4: 'Merakit penerbangan, hotel, dan transfer', s5: 'Menghasilkan estimasi biaya rinci' },

      plans: {
        title: 'Tiga itinerari perawatan untuk Anda', sub: 'Kombinasi simulasi AI dibangun dari kasus nyata masa lalu. Bidang utama hanya menunjukkan nilai sebenarnya setelah Anda membuka versi terverifikasi rumah sakit.',
        match: 'Padanan', matchSub: 'Berdasarkan kondisi, anggaran, dan waktu Anda', resultsFor: 'Kanker lambung · Shanghai · CNY 200k-300k',
        regenerate: 'Hasilkan ulang', tierA: 'Premium', tierB: 'Seimbang', tierC: 'Ekonomi',
        tierADesc: 'Sayap internasional tersier teratas, ketua departemen sebagai operator', tierBDesc: 'Rumah sakit tersier kuat di kota yang sama, nilai seimbang', tierCDesc: 'Rumah sakit terkemuka di kota berbiaya rendah',
        recommend: 'Direkomendasikan', popular: 'Paling sering dipilih', value: 'Nilai terbaik',
        hospital: 'Rumah sakit', doctor: 'Dokter penanggung jawab', stay: 'Rawat inap', ward: 'Bangsal', duration: 'Durasi', success: 'Hasil',
        viewPlan: 'Lihat rencana penuh', pickPlan: 'Pilih rencana ini', picked: 'Dipilih',
        priceNote: 'Estimasi AI', exactPrice: 'Penawaran rumah sakit', aiBadge: 'Simulasi AI', verifiedBadge: 'Terverifikasi rumah sakit',
        freeNote: 'Anda melihat rencana simulasi AI gratis: nama dokter, biaya pasti, pemesanan tempat tidur, dan data hasil adalah placeholder.',
        unlockCta: 'Buka versi terverifikasi rumah sakit', costHint: 'Biaya adalah rentang estimasi; pembukaan menampilkan harga rinci pasti'
      },

      plan: {
        tabOverview: 'Ikhtisar', tabTimeline: 'Itinerari', tabMedical: 'Perawatan', tabCost: 'Biaya', tabTravel: 'Tambahan',
        backToList: 'Kembali ke rencana', itineraryTitle: 'Itinerari harian lengkap', itinerarySub: 'Setiap hari, dari keberangkatan hingga kembali',
        hospitalInfo: 'Rumah sakit', city: 'Kota', level: 'Tier', accred: 'Akreditasi', beds: 'Tempat tidur',
        medicalTeam: 'Tim medis', chief: 'Doktor penanggung jawab', specialty: 'Spesialisasi', experience: 'Tahun praktik', languages: 'Bahasa konsultasi', casesDone: 'Kasus dilakukan',
        treatmentPlan: 'Rencana perawatan', procedure: 'Prosedur inti', stages: 'Tahap protokol', stage: 'Tahap', successRate: 'Metrik hasil',
        stayDays: 'Hari rawat inap', wardType: 'Jenis bangsal', registration: 'Pendaftaran',
        logistics: 'Logistik', flight: 'Penerbangan internasional', airline: 'Maskapai', cabin: 'Kabin', duration: 'Waktu penerbangan', tripDays: 'Lama perjalanan',
        transfer: 'Transportasi darat', transferGrade: 'Grade transfer', transferVehicle: 'Kendaraan yang disarankan', transferNurse: 'Perawat di atas kapal', transferPerTrip: 'Per perjalanan', transferRound: 'Pulang pergi (jemput + antar)', transferSelfBook: 'Pesan sendiri · platform menyarankan', transferPlatformBook: 'Dipesan oleh platform', transferSource: 'Catatan armada: van bisnis dioperasikan sendiri oleh platform; ambulans disumber dari luar berdasarkan perjanjian kerangka, ditagih per perjalanan.', transferKm: 'Bandara → rumah sakit ~{n} km', transferAccessible: 'Landasan akses kursi roda', transferBook: 'Pemesanan', hotel: 'Akomodasi', room: 'Tipe kamar', distance: 'Ke rumah sakit',
        costTitle: 'Biaya rinci', medicalFee: 'Biaya medis', flightFee: 'Tarif penerbangan', hotelFee: 'Akomodasi', transferFee: 'Transportasi darat',
        serviceFee: 'Biaya layanan platform', travelAddon: 'Tambahan wisata', total: 'Total', estimate: 'Estimasi AI', exact: 'Penawaran rumah sakit',
        perCompanion: 'Termasuk {n} anggota keluarga',
        travelTitle: 'Tambahan wisata & pemulihan', travelAdd: 'Tambah ke perjalanan', travelAdded: 'Ditambahkan',
        lockedTitle: 'Bidang ini hanya menunjukkan nilai sebenarnya setelah verifikasi rumah sakit',
        lockedBody: 'Versi gratis adalah simulasi AI berdasarkan kasus masa lalu: nama dokter, biaya rinci, nomor pemesanan tempat tidur, dan data hasil adalah placeholder. Pembukaan membuat meja internasional rumah sakit mengonfirmasi dan menandatangani setiap baris.',
        lockedBtn: 'Buka versi terverifikasi rumah sakit',
        verifiedTitle: 'Diverifikasi oleh rumah sakit', verifiedBy: 'Diverifikasi oleh', verifiedAt: 'Diverifikasi pada', bedHold: 'Nomor pemesanan tempat tidur',
        doctorSign: 'Tanda tangan dokter', hospitalRef: 'Nomor pertanyaan rumah sakit', confidence: 'Keyakinan rencana',
        confidenceNote: 'Berdasarkan {n} kasus serupa masa lalu'
      },

      pricing: {
        title: 'Buka rencana terverifikasi rumah sakit', sub: 'Gratis memberi Anda arah. Berbayar memberi Anda tanggal yang bisa dipesan dan harga pasti.',
        t1Name: 'Simulasi AI', t1Desc: 'Lihat arah dan besaran biaya lebih dulu', t1Price: 'Gratis', t1Unit: 'Selalu gratis, tanpa pendaftaran',
        t2Name: 'Terverifikasi rumah sakit', t2Desc: 'Diverifikasi baris demi baris, siap dipesan', t2Unit: 'Sekali bayar · per rencana',
        t3Name: 'Concierge penuh', t3Desc: 'Verifikasi + visa, penerjemah, transfer', t3Unit: 'Sekali bayar · mencakup semua manfaat tier terverifikasi',
        pay: 'Buka sekarang', paid: 'Dibuka', current: 'Saat ini', upgrade: 'Tingkatkan', popular: 'Paling sering dipilih',
        payTitle: 'Konfirmasi pembayaran', paySub: 'Setelah pembukaan, meja internasional rumah sakit menyelesaikan verifikasi dalam 1-2 hari kerja', payMethod: 'Metode pembayaran',
        pmCard: 'Kartu internasional', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'E-dompet', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'Transfer bank', pmBankSub: 'Untuk pembayaran medis lebih besar · 1-3 hari kerja',
        successTitle: 'Pembayaran diterima — verifikasi diminta', successBody: 'Meja internasional rumah sakit memiliki ringkasan medis Anda dan akan memverifikasi protokol, ketersediaan dokter, dan tempat tidur dalam 1-2 hari kerja. Halaman ini diperbarui otomatis setelah diverifikasi.',
        successBtn: 'Lihat rencana terverifikasi',
        noteRefund: 'Pengembalian dana penuh jika rumah sakit tidak menemukan indikasi perawatan atau tidak dapat menerima kasus.',
        noteScope: 'Biaya ini hanya mencakup verifikasi dan koordinasi — bukan penerbangan, hotel, atau perawatan rumah sakit, yang dibayar di platform pihak ketiga.',
        pkgAName: 'Rencanan DIY', pkgADesc: 'Rencana medis terverifikasi; pesan penerbangan / hotel / transfer sendiri', pkgBName: 'Semua inclusive', pkgBDesc: 'Rencana terverifikasi + penerbangan / jemputan / hotel dipesan untuk Anda', pkgCName: 'Asisten pribadi', pkgCDesc: 'Semua inclusive + asisten pribadi khusus, tier teratas',

        feat: {
          ai3: '3 itinerari simulasi AI', range: 'Estimasi rentang biaya', verify: 'Protokol diverifikasi rumah sakit',
          doctor: 'Tanda tangan dokter + kredensial', bed: 'Nomor pemesanan tempat tidur / slot operasi', exact: 'Harga rumah sakit rinci pasti',
          visa: 'Surat undangan visa medis + panduan', interp: 'Penerjemahan medis penuh (klinik + bangsal)', airport: 'Transfer bandara + pendamping janji temu',
          accompany: 'Koordinasi perjalanan untuk 1 anggota keluarga', insurance: 'Perlindungan komplikasi (batas CNY 1Juta)',
          flightBook: 'Pemesanan penerbangan (Trip.com)', pickup: 'Jemput / antar bandara pribadi', hotelBook: 'Pemesanan hotel (Booking.com)', assistant: 'Asisten pribadi khusus', vip: 'Saluran cepat VIP'
        }
      },

      booking: {
        title: 'Pemesanan & pembayaran', sub: 'Penerbangan, hotel, dan pendaftaran rumah sakit masing-masing dibayar di platformnya sendiri. MedBridge tidak pernah mengumpulkan atau menyimpan dana ini.',
        noteTitle: 'Mengapa pembayaran dipisahkan', noteBody: 'Penerbangan dan hotel mengikuti aturan perubahan maskapai dan OTA; pendaftaran rumah sakit adalah layanan medis. Memisahkannya memberi setiap transaksi resi sendiri dan saluran pengembalian dana sendiri, serta mencegah MedBridge mengoperasikan rekening gabungan.',
        itemFlight: 'Penerbangan internasional', itemHotel: 'Akomodasi', itemReg: 'Pendaftaran & tempat tidur', itemTransfer: 'Transfer pribadi', itemTravel: 'Tambahan wisata',
        provider: 'Platform pembayaran', goPay: 'Bayar sekarang', payOnPartner: 'Selesaikan pembayaran di {p}',
        redirectTitle: 'Mengalihkan ke {p}', redirectBody: 'Anda akan dibawa ke platform pihak ketiga untuk menyelesaikan pembayaran ini. Pembayaran, perubahan, dan pengembalian dana sepenuhnya ditangani oleh platform tersebut.',
        redirectBtn: 'Mengerti, lanjutkan',
        summary: 'Daftar pembayaran', platformFee: 'Biaya layanan platform', platformFeeNote: 'Sudah dibayar saat Anda membuka',
        doneTitle: 'Semua pemesanan dikirim', doneBody: 'Setiap pembayaran memiliki resi sendiri. Setelah perjalanan dikonfirmasi, itinerari, detail jemputan, dan pengingat janji temu muncul di bawah Perjalanan Saya.',
        itemsPending: '{n} tertunda', itemsPaid: '{n} dibayar'
      },

      trips: {
        title: 'Perjalanan Saya', sub: 'Lacak status dan resi setiap pemesanan.',
        empty1: 'Belum ada perjalanan berlangsung', empty2: 'Rencana yang Anda buat akan muncul di sini setelah penilaian.',
        emptyBtn: 'Mulai penilaian',
        orderNo: 'Nomor perjalanan', created: 'Dibuat', viewPlan: 'Lihat rencana', payNow: 'Bayar sekarang',
        s1: 'Permintaan dikirim', s2: 'Rencana AI dihasilkan', s3: 'Diverifikasi rumah sakit', s4: 'Menunggu pembayaran', s5: 'Pemesanan dikonfirmasi', s6: 'Perjalanan berlangsung',
        pipeline: 'Kemajuan', booking: 'Pemesanan'
      },

      partners: { ctrip: 'Penerbangan Trip.com', booking: 'Booking.com', hospital: 'Sistem pendaftaran rumah sakit', didi: 'Layanan transfer pribadi', airbnb: 'Apartemen & penginapan' }
    },

    /* ---------------------------------------------------- vi (Tiếng Việt) */
    vi: {
      brand: { tagline: 'Công cụ lập lịch trình điều trị xuyên biên giới' },
      nav: { home: 'Trang chủ', intake: 'Đánh giá', plans: 'Kế hoạch điều trị', pricing: 'Mở bản xác thực', trips: 'Lịch trình của tôi' },
      common: {
        demoBadge: 'Nguyên mẫu · Dữ liệu mẫu', next: 'Tiếp', back: 'Quay lại', confirm: 'Xác nhận', cancel: 'Hủy',
        close: 'Đóng', viewDetail: 'Xem chi tiết', select: 'Chọn', optional: 'Tùy chọn', perPerson: '/người',
        total: 'Tổng', from: 'từ', included: 'Đã bao gồm', notIncluded: 'Chưa bao gồm', days: 'ngày', night: 'đêm',
        loading: 'Đang xử lý…', continue: 'Tiếp tục', currency: '¥', save: 'Lưu', edit: 'Sửa', per: 'mỗi'
      },
      footer: { disclaimer: 'Nguyên mẫu có thể nhấp để thảo luận sản phẩm. Tất cả bệnh viện, bác sĩ, giá cả và số liệu kết quả chỉ mang tính minh họa và không cấu thành lời khuyên y tế hay chào hàng.', demo: 'Nguyên mẫu v0.9' },

      dept: {
        oncology:  { name: 'Ung thư học chính xác', desc: 'Nhắm đích / miễn dịch / hội đồng MDT' },
        ortho:     { name: 'Chấn thương chỉnh hình & Khớp', desc: 'Thay khớp háng & đầu gối bằng robot' },
        cardio:    { name: 'Tim mạch', desc: 'Chụp mạch / stent / phục hồi' },
        ivf:       { name: 'Sinh sản (IVF)', desc: 'PGT-A / kích thích cá nhân hóa' },
        aesthetic: { name: 'Thẩm mỹ & Chống lão hóa', desc: 'Trẻ hóa khuôn mặt / thiết bị năng lượng' },
        checkup:   { name: 'Khám sức khỏe định kỳ', desc: 'PET-MR / bộ gen / tim mạch' }
      },

      home: {
        heroTitle: 'Lên kế hoạch cho toàn bộ chuyến đi điều trị ở nước ngoài — bằng ngôn ngữ của bạn',
        heroSub: 'Nhập chẩn đoán và kết quả xét nghiệm của bạn. Trong vài phút, bạn sẽ có ba lịch trình điều trị hoàn chỉnh: chuyến bay, đưa đón, khách sạn, đăng ký, khoa nội trú, bác sĩ điều trị, phác đồ điều trị và chi phí chi tiết. Bắt đầu miễn phí với các kế hoạch mô phỏng bằng AI; mở bản xác thực của bệnh viện khi bạn sẵn sàng đặt chỗ.',
        ctaPrimary: 'Tạo kế hoạch miễn phí cho tôi', ctaSecondary: 'Cách nền tảng hoạt động',
        stat1: 'Bệnh viện đối tác', stat2: 'Các ca thực tế có thể ghép nối', stat3: 'Ngôn ngữ được hỗ trợ',
        howTitle: 'Ba bước: từ "tôi không biết đi đâu" đến "đã xác nhận đặt chỗ"',
        howSub: 'Bệnh nhân giữ nguyên ngôn ngữ bản ngữ. Nền tảng xử lý dịch thuật, xác thực giá và điều phối.',
        step1Title: 'Mô tả tình trạng bằng ngôn ngữ của bạn', step1Body: 'Điền chẩn đoán và tải lên ảnh quét hoặc báo cáo xét nghiệm bằng ngôn ngữ của bạn. Hệ thống tạo ra bản tóm tắt y tế chuẩn hóa đã được dịch cho bàn quốc tế của bệnh viện.', step1Lock: 'Miễn phí',
        step2Title: 'AI xây dựng ba lịch trình', step2Body: 'Nền tảng tìm kiếm thư viện các ca thực tế trong quá khứ và trả về ba lựa chọn — bệnh viện, bác sĩ phẫu thuật, phác đồ, thời gian lưu trú, chuyến bay, khách sạn và chi phí chi tiết.', step2Lock: 'Miễn phí',
        step3Title: 'Mở bản xác thực và đặt chỗ', step3Body: 'Sau khi thanh toán, bàn quốc tế của bệnh viện xác thực phác đồ, tình trạng sẵn sàng của bác sĩ và giường bệnh, sau đó đưa ra giá chính xác. Chuyến bay và khách sạn được thanh toán trên nền tảng bên thứ ba.', step3Lock: 'Có phí',
        deptTitle: 'Sáu khoa được hỗ trợ', deptSub: 'Mỗi khoa có một thư viện các ca thực tế ẩn danh được AI ghép nối và kết hợp lại.',
        cases: '{n} ca có thể ghép nối', casesUnit: 'ca',
        trustTitle: 'Tại sao bệnh viện tham gia', trustSub: 'Chúng tôi không bán lưu lượng truy cập. Chúng tôi cung cấp nhu cầu có cấu trúc và dịch thuật từ đầu, giảm chi phí liên lạc của bàn quốc tế.',
        trust1t: 'Nhu cầu đến có cấu trúc', trust1d: 'Bệnh viện nhận được bản tóm tắt y tế đã dịch và đầy đủ — không phải một đống báo cáo nước ngoài không thể đọc được.',
        trust2t: 'Sàng lọc trước khi tiếp nhận', trust2d: 'Giai đoạn ghép nối trước bằng AI lọc ra các ca không phù hợp, vì vậy bệnh viện chỉ xử lý các yêu cầu có chỉ định điều trị thực sự.',
        trust3t: 'Thanh toán nằm ngoài nền tảng', trust3d: 'Chuyến bay và khách sạn được thu bởi OTA bên thứ ba; bệnh viện chỉ thu phí y tế của riêng họ. Không có quỹ gộp, không có rủi ro tuân thủ.',
        trust4t: 'Kết quả được cộng dồn', trust4d: 'Dữ liệu theo dõi sau điều trị quay trở lại thư viện ca, xây dựng tỷ lệ thành công có thể tìm kiếm và dải giá thực tế.',
        ctaTitle: 'Hãy thử trên một kịch bản thực tế', ctaBody: 'Không cần đăng ký. Chọn một khoa, nhập chẩn đoán và trải nghiệm toàn bộ quy trình trong vài phút.', ctaBtn: 'Bắt đầu đánh giá'
      },

      intake: {
        title: 'Đánh giá y tế', sub: 'Trả lời bằng ngôn ngữ của bạn — chúng tôi dịch cho bệnh viện. Các trường có dấu * là bắt buộc.',
        secBasic: 'Cơ bản', secMedical: 'Tình trạng & hồ sơ', secPref: 'Tùy chọn chuyến đi',
        origin: 'Quốc gia / thành phố khởi hành', originHint: 'Dùng để ước tính thời gian và giá vé máy bay',
        dept: 'Khoa', deptHint: 'Chọn mục gần nhất nếu không chắc chắn',
        disease: 'Chẩn đoán', diseaseHint: 'Bạn có thể viết bằng ngôn ngữ của mình.',
        diseasePh: 'vd. Adenocarcinoma dạ dày T3N1M0',
        reports: 'Kết quả xét nghiệm', reportsHint: 'Tải lên báo cáo CT / MRI / bệnh lý / máu (nguyên mẫu này không thực sự tải file lên)',
        uploadTitle: 'Nhấn để tải lên báo cáo hoặc hình ảnh', uploadDesc: 'PDF / JPG / DICOM · tối đa 200MB mỗi file',
        city: 'Thành phố đến mong muốn', cityHint: 'Ảnh hưởng đến bệnh viện, khách sạn và chi phí máy bay',
        budget: 'Khoảng ngân sách (CNY)', date: 'Ngày khởi hành mong muốn', companions: 'Người thân đi cùng',
        travelPref: 'Thêm tùy chọn du lịch', travelHint: 'Nghỉ dưỡng phục hồi, tham quan hoặc phục hồi y học cổ truyền sau điều trị',
        sideTitle: 'Điều gì sẽ xảy ra tiếp theo', sideStep1t: 'AI tìm các ca tương tự', sideStep1d: 'Tìm các ca lịch sử gần nhất trong khoa của bạn',
        sideStep2t: 'Tạo ba lịch trình', sideStep2d: 'Mỗi lịch trình có kế hoạch điều trị, hậu cần và chi phí đầy đủ',
        sideStep3t: 'Bạn mở một bản để xác thực', sideStep3d: 'Bệnh viện xác thực từng mục và đưa ra giá chính xác cùng số giữ giường',
        sideStep4t: 'Thanh toán trên nền tảng bên thứ ba', sideStep4d: 'Chuyến bay và khách sạn được thanh toán trên Trip.com / Booking và tương tự',
        submit: 'Tạo lịch trình miễn phí', mobility: 'Phân loại nhu cầu đưa đón', mobilityHint: 'Ghép đúng phương tiện và thiết lập chăm sóc — không thay đổi phác đồ y tế', disclaimer: 'Nguyên mẫu: việc gửi dùng dữ liệu mẫu để mô phỏng. Không có gì được tải lên hay truyền đi.'
      },

      gen: { title: 'Đang xây dựng lịch trình của bạn', sub: 'AI đang tìm kiếm các ca quá khứ và lắp ráp chuyến đi', s1: 'Dịch và chuẩn hóa bản tóm tắt y tế', s2: 'Tìm kiếm thư viện ca của khoa', s3: 'Ghép tình trạng sẵn sàng của bệnh viện và bác sĩ', s4: 'Lắp ráp chuyến bay, khách sạn và đưa đón', s5: 'Tạo ước tính chi phí chi tiết' },

      plans: {
        title: 'Ba lịch trình điều trị dành cho bạn', sub: 'Các kết hợp mô phỏng AI được xây dựng từ các ca thực tế trong quá khứ. Các trường chính chỉ hiển thị giá trị thực sau khi bạn mở bản xác thực của bệnh viện.',
        match: 'Ghép nối', matchSub: 'Dựa trên tình trạng, ngân sách và thời gian của bạn', resultsFor: 'Ung thư dạ dày · Thượng Hải · CNY 200k-300k',
        regenerate: 'Tạo lại', tierA: 'Cao cấp', tierB: 'Cân bằng', tierC: 'Tiết kiệm',
        tierADesc: 'Cánh quốc tế tuyến cuối hàng đầu, chủ nhiệm khoa trực tiếp phẫu thuật', tierBDesc: 'Bệnh viện tuyến cuối vững mạnh cùng thành phố, giá trị cân bằng', tierCDesc: 'Bệnh viện hàng đầu tại thành phố chi phí thấp',
        recommend: 'Đề xuất', popular: 'Được chọn nhiều nhất', value: 'Giá trị tốt nhất',
        hospital: 'Bệnh viện', doctor: 'Bác sĩ điều trị', stay: 'Nội trú', ward: 'Khoa nội trú', duration: 'Thời gian', success: 'Kết quả',
        viewPlan: 'Xem kế hoạch đầy đủ', pickPlan: 'Chọn kế hoạch này', picked: 'Đã chọn',
        priceNote: 'Ước tính AI', exactPrice: 'Báo giá bệnh viện', aiBadge: 'Mô phỏng AI', verifiedBadge: 'Xác thực bệnh viện',
        freeNote: 'Bạn đang xem các kế hoạch mô phỏng AI miễn phí: tên bác sĩ, chi phí chính xác, số giữ giường và dữ liệu kết quả chỉ là placeholder.',
        unlockCta: 'Mở bản xác thực bệnh viện', costHint: 'Chi phí là khoảng ước tính; mở khóa hiển thị giá chi tiết chính xác'
      },

      plan: {
        tabOverview: 'Tổng quan', tabTimeline: 'Lịch trình', tabMedical: 'Điều trị', tabCost: 'Chi phí', tabTravel: 'Bổ sung',
        backToList: 'Quay lại kế hoạch', itineraryTitle: 'Lịch trình hàng ngày đầy đủ', itinerarySub: 'Mỗi ngày, từ khởi hành đến trở về',
        hospitalInfo: 'Bệnh viện', city: 'Thành phố', level: 'Hạng', accred: 'Công nhận', beds: 'Giường',
        medicalTeam: 'Đội ngũ y tế', chief: 'Bác sĩ điều trị', specialty: 'Chuyên khoa', experience: 'Năm hành nghề', languages: 'Ngôn ngữ tư vấn', casesDone: 'Ca đã thực hiện',
        treatmentPlan: 'Kế hoạch điều trị', procedure: 'Thủ thuật chính', stages: 'Các giai đoạn phác đồ', stage: 'Giai đoạn', successRate: 'Chỉ số kết quả',
        stayDays: 'Ngày nội trú', wardType: 'Loại khoa nội trú', registration: 'Đăng ký',
        logistics: 'Hậu cần', flight: 'Chuyến bay quốc tế', airline: 'Hãng hàng không', cabin: 'Hạng ghế', duration: 'Thời gian bay', tripDays: 'Thời gian chuyến đi',
        transfer: 'Vận chuyển mặt đất', transferGrade: 'Hạng đưa đón', transferVehicle: 'Phương tiện đề xuất', transferNurse: 'Y tá trên xe', transferPerTrip: 'Mỗi chuyến', transferRound: 'Khứ hồi (đón + trả)', transferSelfBook: 'Tự đặt · nền tảng gợi ý', transferPlatformBook: 'Nền tảng đặt', transferSource: 'Ghi chú đội xe: xe van thương mại do nền tảng tự vận hành; xe cứu thương được thuê ngoài theo thỏa thuận khung, tính phí mỗi chuyến.', transferKm: 'Sân bay → bệnh viện ~{n} km', transferAccessible: 'Cầu nâng tiếp cận xe lăn', transferBook: 'Đặt chỗ', hotel: 'Lưu trú', room: 'Loại phòng', distance: 'Đến bệnh viện',
        costTitle: 'Chi phí chi tiết', medicalFee: 'Phí y tế', flightFee: 'Giá vé máy bay', hotelFee: 'Lưu trú', transferFee: 'Vận chuyển mặt đất',
        serviceFee: 'Phí dịch vụ nền tảng', travelAddon: 'Bổ sung du lịch', total: 'Tổng', estimate: 'Ước tính AI', exact: 'Báo giá bệnh viện',
        perCompanion: 'Bao gồm {n} người thân',
        travelTitle: 'Bổ sung du lịch & phục hồi', travelAdd: 'Thêm vào chuyến đi', travelAdded: 'Đã thêm',
        lockedTitle: 'Các trường này chỉ hiển thị giá trị thực sau khi bệnh viện xác thực',
        lockedBody: 'Bản miễn phí là mô phỏng AI dựa trên các ca quá khứ: tên bác sĩ, chi phí chi tiết, số giữ giường và dữ liệu kết quả chỉ là placeholder. Mở khóa yêu cầu bàn quốc tế bệnh viện xác nhận và ký từng mục.',
        lockedBtn: 'Mở bản xác thực bệnh viện',
        verifiedTitle: 'Được xác thực bởi bệnh viện', verifiedBy: 'Xác thực bởi', verifiedAt: 'Xác thực lúc', bedHold: 'Số giữ giường',
        doctorSign: 'Chữ ký bác sĩ', hospitalRef: 'Số yêu cầu bệnh viện', confidence: 'Độ tin cậy kế hoạch',
        confidenceNote: 'Dựa trên {n} ca tương tự trong quá khứ'
      },

      pricing: {
        title: 'Mở kế hoạch xác thực bệnh viện', sub: 'Miễn phí cho bạn hướng đi. Có phí cho bạn ngày có thể đặt và giá chính xác.',
        t1Name: 'Mô phỏng AI', t1Desc: 'Xem hướng đi và quy mô chi phí trước', t1Price: 'Miễn phí', t1Unit: 'Luôn miễn phí, không đăng ký',
        t2Name: 'Xác thực bệnh viện', t2Desc: 'Xác thực từng mục, sẵn sàng đặt chỗ', t2Unit: 'Một lần · mỗi kế hoạch',
        t3Name: 'Hậu cần riêng đầy đủ', t3Desc: 'Xác thực + visa, phiên dịch, đưa đón', t3Unit: 'Một lần · bao gồm mọi quyền lợi hạng xác thực',
        pay: 'Mở ngay', paid: 'Đã mở', current: 'Hiện tại', upgrade: 'Nâng cấp', popular: 'Được chọn nhiều nhất',
        payTitle: 'Xác nhận thanh toán', paySub: 'Sau khi mở, bàn quốc tế bệnh viện hoàn tất xác thực trong 1-2 ngày làm việc', payMethod: 'Phương thức thanh toán',
        pmCard: 'Thẻ quốc tế', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'Ví điện tử', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'Chuyển khoản ngân hàng', pmBankSub: 'Cho thanh toán y tế lớn · 1-3 ngày làm việc',
        successTitle: 'Đã nhận thanh toán — yêu cầu xác thực', successBody: 'Bàn quốc tế bệnh viện đã có bản tóm tắt y tế của bạn và sẽ xác thực phác đồ, tình trạng sẵn sàng của bác sĩ và giường bệnh trong 1-2 ngày làm việc. Trang này tự động cập nhật sau khi xác thực.',
        successBtn: 'Xem kế hoạch xác thực',
        noteRefund: 'Hoàn tiền toàn bộ nếu bệnh viện không tìm thấy chỉ định điều trị hoặc không thể tiếp nhận ca.',
        noteScope: 'Phí này chỉ bao gồm xác thực và điều phối — không gồm chuyến bay, khách sạn hay điều trị bệnh viện, vốn thanh toán trên nền tảng bên thứ ba.',
        pkgAName: 'Tự lập kế hoạch', pkgADesc: 'Kế hoạch y tế xác thực; tự đặt chuyến bay / khách sạn / đưa đón', pkgBName: 'Trọn gói', pkgBDesc: 'Kế hoạch xác thực + chuyến bay / đón / khách sạn được đặt cho bạn', pkgCName: 'Trợ lý riêng', pkgCDesc: 'Trọn gói + trợ lý riêng chuyên trách, hạng cao nhất',

        feat: {
          ai3: '3 lịch trình mô phỏng AI', range: 'Ước tính khoảng chi phí', verify: 'Phác đồ được bệnh viện xác thực',
          doctor: 'Chữ ký bác sĩ + tư cách', bed: 'Số giữ giường / lượt phẫu thuật', exact: 'Giá bệnh viện chi tiết chính xác',
          visa: 'Thư mời visa y tế + hướng dẫn', interp: 'Phiên dịch y tế đầy đủ (phòng khám + khoa nội trú)', airport: 'Đưa đón sân bay + đi cùng lịch hẹn',
          accompany: 'Điều phối chuyến đi cho 1 người thân', insurance: 'Bảo hiểm biến chứng (giới hạn CNY 1 triệu)',
          flightBook: 'Đặt vé máy bay (Trip.com)', pickup: 'Đón / trả sân bay riêng', hotelBook: 'Đặt khách sạn (Booking.com)', assistant: 'Trợ lý riêng chuyên trách', vip: 'Kênh nhanh VIP'
        }
      },

      booking: {
        title: 'Đặt chỗ & thanh toán', sub: 'Chuyến bay, khách sạn và đăng ký bệnh viện mỗi khoản được thanh toán trên nền tảng riêng. MedBridge không bao giờ thu hay giữ các khoản tiền này.',
        noteTitle: 'Tại sao thanh toán được tách riêng', noteBody: 'Chuyến bay và khách sạn tuân theo quy tắc thay đổi của hãng hàng không và OTA; đăng ký bệnh viện là dịch vụ y tế. Tách chúng giúp mỗi giao dịch có biên lai riêng và kênh hoàn tiền riêng, đồng thời ngăn MedBridge vận hành tài khoản gộp.',
        itemFlight: 'Chuyến bay quốc tế', itemHotel: 'Lưu trú', itemReg: 'Đăng ký & giường', itemTransfer: 'Đưa đón riêng', itemTravel: 'Bổ sung du lịch',
        provider: 'Nền tảng thanh toán', goPay: 'Thanh toán ngay', payOnPartner: 'Hoàn tất thanh toán trên {p}',
        redirectTitle: 'Đang chuyển hướng đến {p}', redirectBody: 'Bạn sẽ được đưa đến nền tảng bên thứ ba để hoàn tất thanh toán này. Thanh toán, thay đổi và hoàn tiền hoàn toàn do nền tảng đó xử lý.',
        redirectBtn: 'Hiểu rồi, tiếp tục',
        summary: 'Danh sách thanh toán', platformFee: 'Phí dịch vụ nền tảng', platformFeeNote: 'Đã thanh toán khi bạn mở',
        doneTitle: 'Tất cả đặt chỗ đã gửi', doneBody: 'Mỗi khoản thanh toán có biên lai riêng. Sau khi chuyến đi được xác nhận, lịch trình, chi tiết đón và nhắc nhở lịch hẹn sẽ xuất hiện trong Lịch trình của tôi.',
        itemsPending: '{n} chờ xử lý', itemsPaid: '{n} đã thanh toán'
      },

      trips: {
        title: 'Lịch trình của tôi', sub: 'Theo dõi trạng thái và biên lai của mọi đặt chỗ.',
        empty1: 'Chưa có chuyến đi nào đang diễn ra', empty2: 'Các kế hoạch bạn tạo sẽ xuất hiện ở đây sau khi đánh giá.',
        emptyBtn: 'Bắt đầu đánh giá',
        orderNo: 'Số chuyến đi', created: 'Ngày tạo', viewPlan: 'Xem kế hoạch', payNow: 'Thanh toán ngay',
        s1: 'Đã gửi yêu cầu', s2: 'Đã tạo kế hoạch AI', s3: 'Bệnh viện xác thực', s4: 'Chờ thanh toán', s5: 'Đã xác nhận đặt chỗ', s6: 'Chuyến đi đang diễn ra',
        pipeline: 'Tiến độ', booking: 'Đặt chỗ'
      },

      partners: { ctrip: 'Vé máy bay Trip.com', booking: 'Booking.com', hospital: 'Hệ thống đăng ký bệnh viện', didi: 'Dịch vụ đưa đón riêng', airbnb: 'Căn hộ & nơi lưu trú' }
    },

    /* ---------------------------------------------------- tl (Filipino) */
    tl: {
      brand: { tagline: 'Tagabuo ng Itinerary ng Paggamot sa Pagitan ng Bansa' },
      nav: { home: 'Tahanan', intake: 'Pagsusuri', plans: 'Mga Planong Paggamot', pricing: 'Buksan ang Beripikado', trips: 'Ang Aking Biyahe' },
      common: {
        demoBadge: 'Prototype · Halimbawang dato', next: 'Susunod', back: 'Bumalik', confirm: 'Kumpirmahin', cancel: 'Kanselado',
        close: 'Isara', viewDetail: 'Tingnan ang detalye', select: 'Piliin', optional: 'Opsyonal', perPerson: '/tao',
        total: 'Kabuuan', from: 'mula', included: 'Kasama', notIncluded: 'Hindi kasama', days: 'araw', night: 'gabi',
        loading: 'Pinoproseso…', continue: 'Magpatuloy', currency: '¥', save: 'I-save', edit: 'I-edit', per: 'bawat'
      },
      footer: { disclaimer: 'Nakakikiliti prototipo para sa pag-uusap ng produkto. Lahat ng ospital, doktor, presyo, at datos ng resulta ay panghalimbawa lamang at hindi nagsisilbing payo o alok na medikal.', demo: 'Prototype v0.9' },

      dept: {
        oncology:  { name: 'Onkolohiyang Tiyak', desc: 'Targeted / immuno / lupon ng MDT' },
        ortho:     { name: 'Orthopedics at Joint', desc: 'Robotic na palit-puwesto ng balakang at tuhod' },
        cardio:    { name: 'Cardiovascular', desc: 'Angiography / stent / rehab' },
        ivf:       { name: 'Fertility (IVF)', desc: 'PGT-A / personalisadong stimulasyon' },
        aesthetic: { name: 'Estetika at Anti-pagtanda', desc: 'Pagbuhay muli ng mukha / energy devices' },
        checkup:   { name: 'Executive Screening', desc: 'PET-MR / genomics / cardiovascular' }
      },

      home: {
        heroTitle: 'Planohin ang buong biyahe ng paggamot sa ibang bansa — sa sarili mong wika',
        heroSub: 'Ilagay ang diagnosis at mga resulta ng pagsusuri. Sa loob ng ilang minuto, makakakuha ka ng tatlong kumpletong itinerary ng paggamot: flight, transfer, hotel, registration, ward, doktor na magtatama, protocol ng paggamot, at detalyadong gastos. Magsimula nang libre gamit ang AI-simulated plans; buksan ang hospital-verified version kapag handa ka nang mag-book.',
        ctaPrimary: 'Gumawa ng plano para sa akin nang libre', ctaSecondary: 'Paano gumagana ang platform',
        stat1: 'Mga partner na ospital', stat2: 'Mga tunay na kasong mapagpapares', stat3: 'Mga wikang suportado',
        howTitle: 'Tatlong hakbang: mula "hindi ko alam kung saan pupunta" patungo sa "kumpirmadong booking"',
        howSub: 'Mananatili ang pasyente sa sarili nilang wika. Inaasikaso ng platform ang pagsasalin, pagberipika ng presyo, at koordinasyon.',
        step1Title: 'Ilarawan ang kondisyon sa iyong wika', step1Body: 'Punin ang diagnosis at i-upload ang scan o lab report sa sarili mong wika. Gagawa ang system ng standardized, translated medical summary para sa international desk ng ospital.', step1Lock: 'Libre',
        step2Title: 'Ginagawa ng AI ang tatlong itinerary', step2Body: 'Hahanapin ng platform ang library ng mga tunay na nakaraang kaso at magbabalik ng tatlong pagpipilian — ospital, surgeon, protocol, tagal ng pag-stay, flight, hotel, at detalyadong gastos.', step2Lock: 'Libre',
        step3Title: 'Buksan ang beripikadong version at mag-book', step3Body: 'Matapos ang bayad, beripikado ng international desk ng ospital ang protocol, availability ng doktor, at bed, saka maglalabas ng eksaktong presyo. Ang flight at hotel ay binabayaran sa third-party platforms.', step3Lock: 'May bayad',
        deptTitle: 'Anim na departamentong sakop', deptSub: 'Ang bawat departamento ay may library ng mga anonymized na tunay na kaso na pinagpapares at muling pinagsasama ng AI.',
        cases: '{n} kasong mapagpapares', casesUnit: 'mga kaso',
        trustTitle: 'Bakit sumasali ang mga ospital', trustSub: 'Hindi kami nagbebenta ng traffic. Naghahatid kami ng structured demand at nakaunang pagsasalin, binabawasan ang communication cost ng international desk.',
        trust1t: 'Ang demand ay dumarating nang structured', trust1d: 'Tumatanggap ang ospital ng translated, field-complete na medical summary — hindi isang bunton ng hindi mabasang dayuhang report.',
        trust2t: 'Salain bago tanggapin', trust2d: 'Ang AI pre-matching stage ay nagsasala ng hindi angkop na kaso, kaya ang ospital ay humahawak lamang ng mga inquiry na may tunay na indication sa paggamot.',
        trust3t: 'Ang bayad ay nananatili sa labas ng platform', trust3d: 'Ang flight at hotel ay kinukulekta ng third-party OTA; ang ospital ay sinisingil lamang ang sarili nitong medical fee. Walang pooled funds, walang compliance exposure.',
        trust4t: 'Ang mga resulta ay nag-iipon', trust4d: 'Ang post-treatment follow-up data ay bumabalik sa case library, na bumubuo ng searchable success rates at tunay na price bands.',
        ctaTitle: 'Subukan ito sa isang realistikong scenario', ctaBody: 'Walang registration. Pumili ng departamento, ilagay ang diagnosis, at dumaan sa buong flow sa loob ng ilang minuto.', ctaBtn: 'Simulan ang pagsusuri'
      },

      intake: {
        title: 'Pagsusuri ng Medikal', sub: 'Sagutin sa iyong wika — kami ang magtatranslate para sa ospital. Ang mga field na may * ay kailangan.',
        secBasic: 'Pangunahing impormasyon', secMedical: 'Kondisyon at dokumento', secPref: 'Mga preference sa biyahe',
        origin: 'Bansang / lungsod na pinag-alisan', originHint: 'Ginagamit para tantiyahin ang tagal at presyo ng flight',
        dept: 'Departamento', deptHint: 'Piliin ang pinakamalapit na match kung hindi sigurado',
        disease: 'Diagnosis', diseaseHint: 'Maaari mong isulat ito sa iyong wika.',
        diseasePh: 'hal. Gastric adenocarcinoma T3N1M0',
        reports: 'Mga resulta ng pagsusuri', reportsHint: 'I-upload ang CT / MRI / pathology / blood reports (hindi talaga nag-a-upload ang prototype na ito)',
        uploadTitle: 'I-click para i-upload ang report o imaging', uploadDesc: 'PDF / JPG / DICOM · hanggang 200MB bawat file',
        city: 'PREFERENG lungsod patutunguhan', cityHint: 'Nakakaapekto sa ospital, hotel, at gastos sa flight',
        budget: 'Budget range (CNY)', date: 'Predeng petsa ng alis', companions: 'Mga kasamang miyembro ng pamilya',
        travelPref: 'Magdagdag ng mga opsyon sa turismo', travelHint: 'Recovery retreat, sightseeing, o TCM rehab matapos ang paggamot',
        sideTitle: 'Ano ang susunod', sideStep1t: 'Hinahanap ng AI ang mga katulad na kaso', sideStep1d: 'Naghahanap ng pinakamalapit na nakaraang kaso sa iyong departamento',
        sideStep2t: 'Tatlong itinerary ang nabuo', sideStep2d: 'Bawat isa ay may buong treatment plan, logistics, at gastos',
        sideStep3t: 'Binubuksan mo ang isa para beripikado', sideStep3d: 'Beripikado ng ospital ang bawat linya at naglalabas ng eksaktong presyo at bed hold',
        sideStep4t: 'Magbayad sa third-party platforms', sideStep4d: 'Ang flight at hotel ay binabayaran sa Trip.com / Booking at katulad',
        submit: 'Gumawa ng itinerary nang libre', mobility: 'Grading ng pangangailangan sa transfer', mobilityHint: 'Tumutugma sa tamang sasakyan at care setup — hindi binabago ang planong medikal', disclaimer: 'Prototype: ang pagsusumite ay gumagamit ng sample data para sa simulation. Wala ring na-upload o na-transmit.'
      },

      gen: { title: 'Ginagawa ang iyong mga itinerary', sub: 'Hinahanap ng AI ang mga nakaraang kaso at pinipino ang biyahe', s1: 'Tinaslate at binibigyang-pamantayan ang medical summary', s2: 'Hinahanap ang case library ng departamento', s3: 'Pinagpapares ang availability ng ospital at doktor', s4: 'Pinipino ang flight, hotel, at transfer', s5: 'Gumagawa ng detalyadong estimate ng gastos' },

      plans: {
        title: 'Tatlong itinerary ng paggamot para sa iyo', sub: 'Mga AI-simulated na kombinasyon na binuo mula sa tunay na nakaraang kaso. Ang mga pangunahing field ay nagpapakita ng tunay na value lang pagkatapos mong buksan ang hospital-verified version.',
        match: 'Match', matchSub: 'Batay sa iyong kondisyon, budget, at timing', resultsFor: 'Gastric cancer · Shanghai · CNY 200k-300k',
        regenerate: 'Gumawa muli', tierA: 'Premium', tierB: 'Balanced', tierC: 'Economy',
        tierADesc: 'Nangungunang tertiary international wing, ang department chair ang nag-o-opera', tierBDesc: 'Matibay na tertiary hospital sa parehong lungsod, balanseng value', tierCDesc: 'Nangungunang hospital sa lungsod na mababa ang gastos',
        recommend: 'Inirerekomenda', popular: 'Pinakamadalas piliin', value: 'Pinakamagandang value',
        hospital: 'Ospital', doctor: 'Doktor na tagapaggamot', stay: 'Inpatient', ward: 'Ward', duration: 'Tagal', success: 'Resulta',
        viewPlan: 'Tingnan ang buong plano', pickPlan: 'Piliin ang planong ito', picked: 'Napili',
        priceNote: 'AI estimate', exactPrice: 'Hospital quote', aiBadge: 'AI simulated', verifiedBadge: 'Hospital verified',
        freeNote: 'Nakikita mo ang mga libreng AI-simulated plan: ang mga pangalan ng doktor, eksaktong gastos, bed holds, at data ng resulta ay placeholders.',
        unlockCta: 'Buksan ang hospital-verified', costHint: 'Ang mga gastos ay estimated ranges; ipinapakita ng pagbukas ang eksaktong itemised pricing'
      },

      plan: {
        tabOverview: 'Pangkalahatang-ideya', tabTimeline: 'Itinerary', tabMedical: 'Paggamot', tabCost: 'Mga Gastos', tabTravel: 'Mga Dagdag',
        backToList: 'Bumalik sa mga plano', itineraryTitle: 'Buong day-by-day na itinerary', itinerarySub: 'Bawat araw, mula alis hanggang balik',
        hospitalInfo: 'Ospital', city: 'Lungsod', level: 'Tier', accred: 'Accreditation', beds: 'Mga kama',
        medicalTeam: 'Medical team', chief: 'Doktor na tagapaggamot', specialty: 'Specialty', experience: 'Taong nagpapraktis', languages: 'Mga wikang konsultasyon', casesDone: 'Mga kasong ginawa',
        treatmentPlan: 'Treatment plan', procedure: 'Pangunahing procedure', stages: 'Mga yugto ng protocol', stage: 'Yugto', successRate: 'Metric ng resulta',
        stayDays: 'Mga araw na inpatient', wardType: 'Uri ng ward', registration: 'Registration',
        logistics: 'Logistics', flight: 'International flight', airline: 'Carrier', cabin: 'Cabin', duration: 'Tagal ng flight', tripDays: 'Tagal ng biyahe',
        transfer: 'Ground transport', transferGrade: 'Transfer grade', transferVehicle: 'Inirerekomendang sasakyan', transferNurse: 'RN sa board', transferPerTrip: 'Bawat biyahe', transferRound: 'Round trip (pickup + drop-off)', transferSelfBook: 'Self-book · mung nag-su-suggest ang platform', transferPlatformBook: 'Booked ng platform', transferSource: 'Fleet note: ang business vans ay self-operated ng platform; ang ambulansya ay outsourced sa ilalim ng framework agreement, sinisingil bawat biyahe.', transferKm: 'Airport → ospital ~{n} km', transferAccessible: 'Wheelchair-accessible na ramp', transferBook: 'Booking', hotel: 'Akomodasyon', room: 'Uri ng kuwarto', distance: 'Sa ospital',
        costTitle: 'Detalyadong gastos', medicalFee: 'Medical fees', flightFee: 'Airfare', hotelFee: 'Akomodasyon', transferFee: 'Ground transport',
        serviceFee: 'Platform service fee', travelAddon: 'Mga dagdag na turismo', total: 'Kabuuan', estimate: 'AI estimate', exact: 'Hospital quote',
        perCompanion: 'Kasama ang {n} miyembro ng pamilya',
        travelTitle: 'Mga dagdag sa turismo at paggaling', travelAdd: 'Idagdag sa biyahe', travelAdded: 'Nadagdag',
        lockedTitle: 'Ipapakita ng mga field na ito ang tunay na value pagkatapos ng hospital verification',
        lockedBody: 'Ang libreng version ay AI simulation batay sa nakaraang kaso: ang mga pangalan ng doktor, itemised costs, bed-hold numbers, at data ng resulta ay placeholders. Ang pagbukas ay nagpapa-verify at pumirma sa bawat linya ng international desk ng ospital.',
        lockedBtn: 'Buksan ang hospital-verified',
        verifiedTitle: 'Beripikado ng ospital', verifiedBy: 'Beripikado ng', verifiedAt: 'Beripikado noong', bedHold: 'Bed hold no.',
        doctorSign: 'Pirma ng doktor', hospitalRef: 'Hospital enquiry no.', confidence: 'Confidence ng plano',
        confidenceNote: 'Batay sa {n} katulad na nakaraang kaso'
      },

      pricing: {
        title: 'Buksan ang hospital-verified plan', sub: 'Ang libre ay nagbibigay sa iyo ng direksyon. Ang bayad ay nagbibigay sa iyo ng bookable dates at eksaktong presyo.',
        t1Name: 'AI simulated', t1Desc: 'Tingnan muna ang direksyon at sukat ng gastos', t1Price: 'Libre', t1Unit: 'Laging libre, walang registration',
        t2Name: 'Hospital verified', t2Desc: 'Beripikado bawat linya, handa nang i-book', t2Unit: 'Isang beses · bawat plano',
        t3Name: 'Buong concierge', t3Desc: 'Verification + visa, interpreters, transfers', t3Unit: 'Isang beses · kasama ang lahat ng benepisyo ng verified tier',
        pay: 'Buksan ngayon', paid: 'Nabuksan', current: 'Kasalukuyan', upgrade: 'I-upgrade', popular: 'Pinakamadalas piliin',
        payTitle: 'Kumpirmahin ang bayad', paySub: 'Matapos buksan, kukumpletuhin ng international desk ng ospital ang verification sa loob ng 1-2 araw ng trabaho', payMethod: 'Paraan ng pagbabayad',
        pmCard: 'International card', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'E-wallet', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'Bank transfer', pmBankSub: 'Para sa mas malaking medical payment · 1-3 araw ng trabaho',
        successTitle: 'Natanggap ang bayad — hinihingi ang verification', successBody: 'Ang international desk ng ospital ay may iyong medical summary at beripikado ang protocol, availability ng doktor, at bed sa loob ng 1-2 araw ng trabaho. Awtomatikong mag-a-update ang page na ito pagkatapos beripikado.',
        successBtn: 'Tingnan ang beripikadong plano',
        noteRefund: 'Buong refund kung ang ospital ay hindi makakita ng indication sa paggamot o hindi makatanggap ng kaso.',
        noteScope: 'Ang fee na ito ay sumasakra lang sa verification at koordinasyon — hindi flight, hotel, o paggamot sa ospital, na binabayaran sa third-party platforms.',
        pkgAName: 'DIY plan', pkgADesc: 'Beripikadong medical plan; mag-book ng sariling flight / hotel / transfer', pkgBName: 'All-inclusive', pkgBDesc: 'Beripikadong plan + flight / pickup / hotel na ibinook para sa iyo', pkgCName: 'Pribadong assistant', pkgCDesc: 'All-inclusive + dedicadong pribadong assistant, pinakamataas na tier',

        feat: {
          ai3: '3 AI-simulated na itinerary', range: 'Estimate ng range ng gastos', verify: 'Protocol ay beripikado ng ospital',
          doctor: 'Pirma ng doktor + credentials', bed: 'Bed / operating-slot hold number', exact: 'Eksaktong itemised hospital pricing',
          visa: 'Medical visa invitation letter + gabay', interp: 'Buong medical interpreting (clinic + ward)', airport: 'Airport transfers + appointment escort',
          accompany: 'Koordinasyon ng biyahe para sa 1 miyembro ng pamilya', insurance: 'Complication cover (limit na CNY 1M)',
          flightBook: 'Flight booking (Trip.com)', pickup: 'Pribadong airport pickup / drop-off', hotelBook: 'Hotel booking (Booking.com)', assistant: 'Dedicadong pribadong assistant', vip: 'VIP fast-track channel'
        }
      },

      booking: {
        title: 'Booking at pagbabayad', sub: 'Ang flight, hotel, at hospital registration ay bawat isa ay binabayaran sa sarili nitong platform. Hindi kailanman kinokolekta o hinahawak ng MedBridge ang pondong ito.',
        noteTitle: 'Bakit hinahati ang pagbabayad', noteBody: 'Ang flight at hotel ay sumusunod sa airline at OTA change rules; ang hospital registration ay serbisyo medikal. Ang paghahiwalay sa kanila ay nagbibigay sa bawat transaksyon ng sarili nitong resibo at sarili nitong refund channel, at pinipigilan ang MedBridge sa pag-operate ng pooled account.',
        itemFlight: 'International flights', itemHotel: 'Akomodasyon', itemReg: 'Registration & bed', itemTransfer: 'Pribadong transfers', itemTravel: 'Mga dagdag na turismo',
        provider: 'Platform ng pagbabayad', goPay: 'Magbayad ngayon', payOnPartner: 'Kumpletuhin ang bayad sa {p}',
        redirectTitle: 'Redirecting sa {p}', redirectBody: 'Dalhin ka sa isang third-party platform para kumpletuhin ang bayad na ito. Ang pagbabayad, pagbabago, at refund ay ganap na hinahawakan ng platform na iyon.',
        redirectBtn: 'Sige, ituloy',
        summary: 'Listahan ng pagbabayad', platformFee: 'Platform service fee', platformFeeNote: 'Nabayaran na nang buksan mo',
        doneTitle: 'Lahat ng booking ay naisumite', doneBody: 'Ang bawat bayad ay may sarili nitong resibo. Kapag nakumpirma na ang biyahe, ang itinerary, pickup details, at appointment reminders ay lilitaw sa Ilalim ng Aking Biyahe.',
        itemsPending: '{n} nakabinbin', itemsPaid: '{n} bayad na'
      },

      trips: {
        title: 'Ang Aking Biyahe', sub: 'Subaybayan ang status at resibo ng bawat booking.',
        empty1: 'Wala pang biyaheng pinoproseso', empty2: 'Ang mga planong nabuo mo ay lilitaw dito matapos ang assessment.',
        emptyBtn: 'Simulan ang pagsusuri',
        orderNo: 'Numero ng biyahe', created: 'Nagawa noong', viewPlan: 'Tingnan ang plano', payNow: 'Magbayad ngayon',
        s1: 'Naipasa ang request', s2: 'Nabuong AI plans', s3: 'Beripikado ng ospital', s4: 'Naghihintay ng bayad', s5: 'Kumpirmadong booking', s6: 'Biyahe ay nagaganap',
        pipeline: 'Progress', booking: 'Mga Booking'
      },

      partners: { ctrip: 'Trip.com flights', booking: 'Booking.com', hospital: 'Hospital registration system', didi: 'Pribadong transfer service', airbnb: 'Apartments & stays' }
    },

    /* ---------------------------------------------------- lo (ລາວ) — best-effort, needs native review */
    lo: {
      brand: { tagline: 'ແຜນຈັດຕັ້ງການປິ່ນປົວຂ້າມແດນ' },
      nav: { home: 'ໜ້າຫຼັກ', intake: 'ການປະເມີນ', plans: 'ແຜນການປິ່ນປົວ', pricing: 'ເປີດສະບັບຢືນຢັນ', trips: 'ການເດີນທາງຂອຍ' },
      common: {
        demoBadge: 'ຕົວຢ່າງ · ຂໍ້ມູນຕົວຢ່າງ', next: 'ຖັດໄປ', back: 'ກັບຄືນ', confirm: 'ຢືນຢັນ', cancel: 'ຍົກເລີກ',
        close: 'ປິດ', viewDetail: 'ເບິ່ງລາຍລະອຽດ', select: 'ເລືອກ', optional: 'ເລືອກໄດ້', perPerson: '/ຄົນ',
        total: 'ລວມ', from: 'ຈາກ', included: 'ລວມແລ້ວ', notIncluded: 'ບໍ່ລວມ', days: 'ມື້', night: 'ຄືນ',
        loading: 'ກຳລັງດຳເນີນ…', continue: 'ສືບຕໍ່', currency: '¥', save: 'ບັນທຶກ', edit: 'ແກ້ໄຂ', per: 'ຕໍ່'
      },
      footer: { disclaimer: 'ຕົວຢ່າງທີ່ກົດໄດ້ເພື່ອສົນທະນາຜະລິດຕະພັນ. ໂຮງພະຍາບານ, ໝໍ, ລາຄາ ແລະຂໍ້ມູນຜົນໄດ້ທັງໝົດເປັນພຽງຕົວຢ່າງ ແລະບໍ່ແມ່ນຄຳແນະນຳທາງການແພດ.', demo: 'ຕົວຢ່າງ v0.9' },

      dept: {
        oncology:  { name: 'ມະເຮັງແບບແມ່ນຍຳ', desc: 'ເປົ້າໝາຍ / ຠູມິຄຸ້ມກັນ / ຄະນະ MDT' },
        ortho:     { name: 'ກະດູກ ແລະຂໍ້ຕໍ່', desc: 'ຜ່າຕັດປ່ຽນສະໂພກ ແລະເຂ່າດ້ວຍຫຸ່ນຍົນ' },
        cardio:    { name: 'ໂຣກຫົວໃຈ', desc: 'ການຖ່າຍພາບເສັ້ນເລືອດ / stent / ຟື້ນຟູ' },
        ivf:       { name: 'ການມີບຸດ (IVF)', desc: 'PGT-A / ການກະຕຸ້ນແບບບຸກຄົນ' },
        aesthetic: { name: 'ຄວາມງາມ ແລະຕ້ານວັດທະຍາກອນ', desc: 'ຟື້ນຟູໃບຫນ້າ / ອຸປະກອນພະລັງງານ' },
        checkup:   { name: 'ການຕຣວດສຸຂະພາບຜູ້ບໍລິຫານ', desc: 'PET-MR / ພັນທຸກຳ / ຫົວໃຈ' }
      },

      home: {
        heroTitle: 'ວາງແຜນການເດີນທາງປິ່ນປົວຢູ່ຕ່າງປະເທດທັງໝົດ — ໃນພາສາຂອງເຈົ້າ',
        heroSub: 'ໃສ່ການວິນິດໄສ ແລະຜົນການກວດ. ໃນໄລຍະບໍ່ກ່ວາໃດນາທີ, ເຈົ້າຈະໄດ້ຮັບສາມແຜນການປິ່ນປົວທີ່ສົມບູນ: ການບິນ, ລົດສົ່ງ, ໂຮງແຮມ, ການລົງທະບຽນ, ຫ້ອງຄົນໄຂ້, ໝໍຜູ້ປິ່ນປົວ, ວິທີການປິ່ນປົວ ແລະຄ່າໃຊ້ຈ່າຍລະອຽດ. ເລີ່ມຕົ້ນໂດຍບໍ່ເສຍຄ່າດ້ວຍແຜນຈຳລອງ AI; ເປີດສະບັບຢືນຢັນຈາກໂຮງພະຍາບານເມື່ອພ້ອມຈອງ.',
        ctaPrimary: 'ສ້າງແຜນໃຫ້ຂ້ອຍໂດຍບໍ່ເສຍຄ່າ', ctaSecondary: 'ວິທີການເຮັດວຽກຂອງແພລດຟອມ',
        stat1: 'ໂຮງພະຍາບານຄູ່ຮ່ວມ', stat2: 'ຄະດີຈິງທີ່ສາມາດຈັບຄູ່ໄດ້', stat3: 'ພາສາທີ່ສະຫນັບສະຫນູນ',
        howTitle: 'ສາມຂັ້ນຕອນ: ຈາກ "ຂ້ອຍບໍ່ຮູ້ວ່າຕ້ອງໄປໃສ" ເຖິງ "ຈອງສຳເລັດແລ້ວ"',
        howSub: 'ຜູ້ປ່ວຍຢູ່ໃນພາສາຂອງຕົນເອງ. ແພລດຟອມຈັດການແປ, ຢືນຢັນລາຄາ ແລະປະສານງານ.',
        step1Title: 'ອະທິບາຍອາການໃນພາສາຂອງເຈົ້າ', step1Body: 'ເຕີມການວິນິດໄສ ແລະອັບໂຫຼດການສະແກນ ຫຼືລາຍງານກວດໃນພາສາຂອງເຈົ້າເອງ. ລະບົບຈະສ້າງບົດສະຫຼຸບການແພດມາດຕະຖານທີ່ແປແລ້ວສຳລັບໂຕະລັງລະຫວ່າງປະເທດຂອງໂຮງພະຍາບານ.', step1Lock: 'ບໍ່ເສຍຄ່າ',
        step2Title: 'AI ສ້າງສາມແຜນການ', step2Body: 'ແພລດຟອມຊອກຫາຫ້ອງສະຫຼຸບຄະດີຈິງໃນອະດີດ ແລະສົ່ງຄືນສາມທາງເລືອກ — ໂຮງພະຍາບານ, ຫມໍຜ່າຕັດ, ວິທີການ, ໄລຍະເວລາພັກ, ການບິນ, ໂຮງແຮມ ແລະຄ່າໃຊ້ຈ່າຍລະອຽດ.', step2Lock: 'ບໍ່ເສຍຄ່າ',
        step3Title: 'ເປີດສະບັບຢືນຢັນ ແລະຈອງ', step3Body: 'ຫຼັງຈາກຈ່າຍເງິນ, ໂຕະລັງລະຫວ່າງປະເທດຂອງໂຮງພະຍາບານຈະຢືນຢັນວິທີການ, ຄວາມພ້ອມຂອງໝໍ ແລະຕຽງ, ຈາກນັ້ນຈະໃຫ້ລາຄາທີ່ແນ່ນອນ. ການບິນ ແລະໂຮງແຮມຈ່າຍຢູ່ເທິງແພລດຟອມຂອງບຸກຄົນທີສາມ.', step3Lock: 'ມີຄ່າໃຊ້ຈ່າຍ',
        deptTitle: 'ຫົກພະແນກທີ່ຄອບຄຸມ', deptSub: 'ແຕ່ລະພະແນກມີຫ້ອງສະຫຼຸບຄະດີຈິງທີ່ບໍ່ເປີດເຜີຍຊື່ ເຊິ່ງ AI ຈັບຄູ່ ແລະລວມກັນໃໝ່.',
        cases: '{n} ຄະດີທີ່ສາມາດຈັບຄູ່ໄດ້', casesUnit: 'ຄະດີ',
        trustTitle: 'ເປັນຫຍັງໂຮງພະຍາບານຈຶ່ງເຂົ້າຮ່ວມ', trustSub: 'ພວກເຮົາບໍ່ໄດ້ຂາຍການເຂົ້າເບິ້ງ. ພວກເຮົາສົ່ງຄວາມຕ້ອງການທີ່ເປັນໂຄງສ້າງ ແລະການແປລ່ວງໜ້າ, ລົດຕົ້ນທຶນການສື່ສານຂອງໂຕະລັງລະຫວ່າງປະເທດ.',
        trust1t: 'ຄວາມຕ້ອງການມາເປັນໂຄງສ້າງ', trust1d: 'ໂຮງພະຍາບານຮັບບົດສະຫຼຸບການແພດທີ່ແປ ແລະສົມບູນ — ບໍ່ແມ່ນກອງລາຍງານຕ່າງປະເທດທີ່ອ່ານບໍ່ໄດ້.',
        trust2t: 'ກັ່ນຕອງກ່ອນຮັບ', trust2d: 'ຂັ້ນຕອນການຈັບຄູ່ລ່ວງໜ້າຂອງ AI ຈະກັ່ນຕອງຄະດີທີ່ບໍ່ເໝາະສົມ, ດັ່ງນັ້ນໂຮງພະຍາບານຈຶ່ງຈັດການເທົ່ານັ້ນທີ່ມີການຊີ້ຊອນປິ່ນປົວຈິງ.',
        trust3t: 'ການຈ່າຍເງິນຢູ່ນອກເວທີການ', trust3d: 'ການບິນ ແລະໂຮງແຮມເກັບຈາກ OTA ບຸກຄົນທີສາມ; ໂຮງພະຍາບານຄິດຄ່າເພາະການແພດຂອງຕົນເອງພຽງເທົ່ານັ້ນ. ບໍ່ມີກອງທຶນ, ບໍ່ມີຄວາມສ່ຽງດ້ານກົດໝາຍ.',
        trust4t: 'ຜົນລັບສະສົມ', trust4d: 'ຂໍ້ມູນການຕິດຕາມຫຼັງປິ່ນປົວໄຫຼກັບມາຫ້ອງສະຫຼຸບຄະດີ, ສ້າງອັດຕາຄວາມສຳເລັດທີ່ສາມາດຊອກຫາໄດ້ ແລະຊ່ວງລາຄາຈິງ.',
        ctaTitle: 'ລອງໃນສະພາບຈິງ', ctaBody: 'ບໍ່ຕ້ອງລົງທະບຽນ. ເລືອກພະແນກ, ໃສ່ການວິນິດໄສ ແລະຜ່ານຂະບວນການທັງໝົດໃນບໍ່ກ່ວາໃດນາທີ.', ctaBtn: 'ເລີ່ມການປະເມີນ'
      },

      intake: {
        title: 'ການປະເມີນທາງການແພດ', sub: 'ຕອບໃນພາສາຂອງເຈົ້າ — ພວກເຮົາຈະແປໃຫ້ໂຮງພະຍາບານ. ຊ່ອງທີ່ມີໝາຍ * ແມ່ນບັງຄັບ.',
        secBasic: 'ພື້ນຖານ', secMedical: 'ອາການ ແລະເອກະສານ', secPref: 'ຄວາມມັກການເດີນທາງ',
        origin: 'ປະເທດ / ນະຄອນຕົ້ນທາງ', originHint: 'ໃຊ້ເພື່ອຄາດເດົາໄລຍະ ແລະລາຄາຕີ໋າບິນ',
        dept: 'ພະແນກ', deptHint: 'ເລືອກສິ່ງທີ່ຄ້າຍຄືທີ່ສຸດຖ້າບໍ່ແນ່ໃຈ',
        disease: 'ການວິນິດໄສ', diseaseHint: 'ເຈົ້າສາມາດຂຽນໃນພາສາຂອງເຈົ້າໄດ້.',
        diseasePh: 'ຕົວຢ່າງ: ມະເຮັງກະເພາະອາຫານ T3N1M0',
        reports: 'ຜົນການກວດ', reportsHint: 'ອັບໂຫຼດລາຍງານ CT / MRI / ພະຍາດທາດ / ເລືອດ (ຕົວຢ່າງນີ້ບໍ່ອັບໂຫຼດໄຟລ໌ຈິງ)',
        uploadTitle: 'ຄລິກເພື່ອອັບໂຫຼດລາຍງານ ຫຼືພາບ', uploadDesc: 'PDF / JPG / DICOM · ສູງສຸດ 200MB ຕໍ່ໄຟລ໌',
        city: 'ນະຄອນປາຍທາງທີ່ມັກ', cityHint: 'ສົ່ງຜົນຕໍ່ໂຮງພະຍາບານ, ໂຮງແຮມ ແລະຄ່າບິນ',
        budget: 'ຊ່ວງງົບປະມານ (CNY)', date: 'ວັນທີເດີນທາງທີ່ມັກ', companions: 'ສະມາຊິກຄອບຄົວທີ່ຕິດຕາມ',
        travelPref: 'ເພິ່ມທາງເລືອກທ່ອງທ່ຽວ', travelHint: 'ສະຖານຟື້ນຟູ, ທ່ອງທ່ຽວ ຫຼືຟື້ນຟູການແພດຈີນຫຼັງປິ່ນປົວ',
        sideTitle: 'ສິ່ງທີ່ຈະເກີດຂຶ້ນຕໍ່ໄປ', sideStep1t: 'AI ຊອກຫາຄະດີຄ້າຍຄື', sideStep1d: 'ຊອກຫາຄະດີໃນອະດີດທີ່ໃກ້ທີ່ສຸດໃນພະແນກຂອງເຈົ້າ',
        sideStep2t: 'ສ້າງສາມແຜນການ', sideStep2d: 'ແຕ່ລະອັນມີແຜນປິ່ນປົວ, ລະບົບລູກຄ້າ ແລະຄ່າໃຊ້ຈ່າຍສົມບູນ',
        sideStep3t: 'ເຈົ້າເປີດຫນຶ່ງເພື່ອຢືນຢັນ', sideStep3d: 'ໂຮງພະຍາບານຢືນຢັນທຸກແຖວ ແລະໃຫ້ລາຄາທີ່ແນ່ນອນພ້ອມເລກຈອງຕຽງ',
        sideStep4t: 'ຈ່າຍເງິນໃນເວທີການບຸກຄົນທີສາມ', sideStep4d: 'ການບິນ ແລະໂຮງແຮມຈ່າຍຢູ່ Trip.com / Booking ແລະຄືໆກັນ',
        submit: 'ສ້າງແຜນການໂດຍບໍ່ເສຍຄ່າ', mobility: 'ການຈັດລະດັບຄວາມຕ້ອງການລົດສົ່ງ', mobilityHint: 'ຈັບຄູ່ພາຫະນະ ແລະການຈັດຕັ້ງດູແລທີ່ຖືກຕ້ອງ — ບໍ່ແປຽນແຜນການແພດ', disclaimer: 'ຕົວຢ່າງ: ການສົ່ງໃຊ້ຂໍ້ມູນຕົວຢ່າງເພື່ອຈຳລອງ. ບໍ່ມີຫຍັງຖືກອັບໂຫຼດ ຫຼືສົ່ງ.'
      },

      gen: { title: 'ກຳລັງສ້າງແຜນການຂອງເຈົ້າ', sub: 'AI ກຳລັງຊອກຫາຄະດີໃນອະດີດ ແລະປວກອງການເດີນທາງ', s1: 'ແປ ແລະມາດຕະຖານບົດສະຫຼຸບການແພດ', s2: 'ຊອກຫາຫ້ອງສະຫຼຸບຄະດີຂອງພະແນກ', s3: 'ຈັບຄູ່ຄວາມພ້ອມຂອງໂຮງພະຍາບານ ແລະໝໍ', s4: 'ປວກອງການບິນ, ໂຮງແຮມ ແລະລົດສົ່ງ', s5: 'ສ້າງການຄາດເດົາຄ່າໃຊ້ຈ່າຍລະອຽດ' },

      plans: {
        title: 'ສາມແຜນການປິ່ນປົວສຳລັບເຈົ້າ', sub: 'ການລວມທີ່ຈຳລອງດ້ວຍ AI ສ້າງຂື້ນຈາກຄະດີຈິງໃນອະດີດ. ຊ່ອງຫຼັກແສດງຄ່າຈິງພຽງຫຼັງຈາກເຈົ້າເປີດສະບັບຢືນຢັນຈາກໂຮງພະຍາບານ.',
        match: 'ຈັບຄູ່', matchSub: 'ຕາມອາການ, ງົບປະມານ ແລະເວລາຂອງເຈົ້າ', resultsFor: 'ມະເຮັງກະເພາະ · ຊາງໄຮ · CNY 200k-300k',
        regenerate: 'ສ້າງໃໝ່', tierA: 'ລະດັບສູງ', tierB: 'ສົມດູນ', tierC: 'ປະຢັດ',
        tierADesc: 'ສາຂາລະຫວ່າງປະເທດຊັ້ນສູງສຸດ, ຫົວໜ້າພະແນກເປັນຜູ້ຜ່າຕັດ', tierBDesc: 'ໂຮງພະຍາບານຊັ້ນສູງໃນເມືອງດຽວກັນ, ຄ່າທີ່ສົມດູນ', tierCDesc: 'ໂຮງພະຍາບານຊັ້ນນຳໃນເມືອງທີ່ມີຄ່າໃຊ້ຈ່າຍຕ່ຳ',
        recommend: 'ແນະນຳ', popular: 'ຖືກເລືອກບໍ່ຫຼາຍທີ່ສຸດ', value: 'ຄ່າທີ່ດີທີ່ສຸດ',
        hospital: 'ໂຮງພະຍາບານ', doctor: 'ໝໍຜູ້ປິ່ນປົວ', stay: 'ຄົນໄຂ້', ward: 'ຫ້ອງຄົນໄຂ້', duration: 'ໄລຍະເວລາ', success: 'ຜົນລັບ',
        viewPlan: 'ເບິ່ງແຜນສົມບູນ', pickPlan: 'ເລືອກແຜນນີ້', picked: 'ເລືອກແລ້ວ',
        priceNote: 'ຄາດເດົາ AI', exactPrice: 'ລາຄາໂຮງພະຍາບານ', aiBadge: 'ຈຳລອງ AI', verifiedBadge: 'ຢືນຢັນໂຮງພະຍາບານ',
        freeNote: 'ເຈົ້າກຳລັງເບິ່ງແຜນທີ່ຈຳລອງ AI ບໍ່ເສຍຄ່າ: ຊື່ໝໍ, ຄ່າແນ້ນອນ, ເລກຈອງຕຽງ ແລະຂໍ້ມູນຜົນໄດ້ແມ່ນພຽງຕົວແທນ.',
        unlockCta: 'ເປີດສະບັບຢືນຢັນໂຮງພະຍາບານ', costHint: 'ຄ່າແມ່ນຊ່ວງຄາດເດົາ; ການເປີດສະແດງລາຄາລະອຽດທີ່ແນໜອນ'
      },

      plan: {
        tabOverview: 'ພາບລວມ', tabTimeline: 'ແຜນການເດີນທາງ', tabMedical: 'ການປິ່ນປົວ', tabCost: 'ຄ່າໃຊ້ຈ່າຍ', tabTravel: 'ສິ່ງເພິ່ມເຕິມ',
        backToList: 'ກັບຄືນແຜນການ', itineraryTitle: 'ແຜນການລາຍວັນສົມບູນ', itinerarySub: 'ທຸກໆມື້, ຈາກອອກເດີນທາງເຖິງກັບຄືນ',
        hospitalInfo: 'ໂຮງພະຍາບານ', city: 'ນະຄອນ', level: 'ລະດັບ', accred: 'ການຮັບຮອງ', beds: 'ຕຽງ',
        medicalTeam: 'ທີມງານການແພດ', chief: 'ໝໍຜູ້ປິ່ນປົວ', specialty: 'ສາຂາວິຊາ', experience: 'ປີປະຕິບັດ', languages: 'ພາສາປຶກສາ', casesDone: 'ຄະດີທີ່ເຮັດ',
        treatmentPlan: 'ແຜນການປິ່ນປົວ', procedure: 'ຂັ້ນຕອນຕົ້ນຕໍ', stages: 'ຂັ້ນຕອນວິທີການ', stage: 'ຂັ້ນຕອນ', successRate: 'ມາດຕະຖານຜົນໄດ້',
        stayDays: 'ມື້ຄົນໄຂ້', wardType: 'ປະເພດຫ້ອງຄົນໄຂ້', registration: 'ການລົງທະບຽນ',
        logistics: 'ລະບົບລູກຄ້າ', flight: 'ການບິນລະຫວ່າງປະເທດ', airline: 'ສາຍການບິນ', cabin: 'ຫ້ອງໂດຍສານ', duration: 'ເວລາບິນ', tripDays: 'ໄລຍະເດີນທາງ',
        transfer: 'ຂົນສົ່ງທາງບົກ', transferGrade: 'ລະດັບການຂົນສົ່ງ', transferVehicle: 'ພາຫະນະແນະນຳ', transferNurse: 'ພະຍາບານຢູ່ເທິງລົດ', transferPerTrip: 'ຕໍ່ການເດີນທາງ', transferRound: 'ໄປກັບ (ຮັບ + ສົ່ງ)', transferSelfBook: 'ຈອງເອງ · ແພລດຟອມແນະນຳ', transferPlatformBook: 'ແພລດຟອມຈອງ', transferSource: 'ໝາຍເຫດກອງລົດ: ລົດຕູ້ທຸລະກິດແມ່ນຂັບໂດຍແພລດຟອມ; ລົດເຂັນເປັນຈ້າງນອກຕາມສັນຍາ, ຄິດຄ່າຕໍ່ການເດີນທາງ.', transferKm: 'ສະໜາມບິນ → ໂຮງພະຍາບານ ~{n} ກມ', transferAccessible: 'ທາງລົດເຂັນສຳລັບຜູ້ໃຊ້ລົດເຂັນ', transferBook: 'ການຈອງ', hotel: 'ທີ່ພັກ', room: 'ປະເພດຫ້ອງ', distance: 'ເຖິງໂຮງພະຍາບານ',
        costTitle: 'ຄ່າໃຊ້ຈ່າຍລະອຽດ', medicalFee: 'ຄ່າແພດ', flightFee: 'ຄ່າຕີ໋າບິນ', hotelFee: 'ທີ່ພັກ', transferFee: 'ຂົນສົ່ງທາງບົກ',
        serviceFee: 'ຄ່າບໍລິການແພລດຟອມ', travelAddon: 'ທ່ອງທ່ຽວເພິ່ມເຕິມ', total: 'ລວມ', estimate: 'ຄາດເດົາ AI', exact: 'ລາຄາໂຮງພະຍາບານ',
        perCompanion: 'ລວມ {n} ສະມາຊິກຄອບຄົວ',
        travelTitle: 'ທ່ອງທ່ຽວ ແລະການຟື້ນຟູເພິ່ມເຕິມ', travelAdd: 'ເພິ່ມໃສ່ການເດີນທາງ', travelAdded: 'ເພິ່ມແລ້ວ',
        lockedTitle: 'ຊ່ອງເຫຼ່ານີ້ສະແດງຄ່າຈິງພຽງຫຼັງການຢືນຢັນຈາກໂຮງພະຍາບານ',
        lockedBody: 'ສະບັບບໍ່ເສຍຄ່າແມ່ນການຈຳລອງ AI ຕາມຄະດີໃນອະດີດ: ຊື່ໝໍ, ຄ່າໃຊ້ຈ່າຍລະອຽດ, ເລກຈອງຕຽງ ແລະຂໍ້ມູນຜົນໄດ້ແມ່ນພຽງຕົວແທນ. ການເປີດສະແດງໃຫ້ໂຕະລັງລະຫວ່າງປະເທດຂອງໂຮງພະຍາບານຢືນຢັນ ແລະເຊັນທຸກແຖວ.',
        lockedBtn: 'ເປີດສະບັບຢືນຢັນໂຮງພະຍາບານ',
        verifiedTitle: 'ຢືນຢັນໂດຍໂຮງພະຍາບານ', verifiedBy: 'ຢືນຢັນໂດຍ', verifiedAt: 'ຢືນຢັນເມື່ອ', bedHold: 'ເລກຈອງຕຽງ',
        doctorSign: 'ລາຍເຊັນໝໍ', hospitalRef: 'ເລກສອບຖາມໂຮງພະຍາບານ', confidence: 'ຄວາມໝັ້ນໃຈຂອງແຜນ',
        confidenceNote: 'ອີງຕາມຄະດີ {n} ທີ່ຄ້າຍຄືໃນອະດີດ'
      },

      pricing: {
        title: 'ເປີດແຜນຢືນຢັນໂຮງພະຍາບານ', sub: 'ບໍ່ເສຍຄ່າໃຫ້ເຈົ້າທິດທາງ. ມີຄ່າໃຫ້ເຈົ້າວັນທີສາມາດຈອງ ແລະລາຄາທີ່ແນໜອນ.',
        t1Name: 'ຈຳລອງ AI', t1Desc: 'ເບິ່ງທິດທາງ ແລະຂະໜາດຂອງຄ່າໃຊ້ຈ່າຍກ່ອນ', t1Price: 'ບໍ່ເສຍຄ່າ', t1Unit: 'ບໍ່ເສຍຄ່າສະເຫມີ, ບໍ່ຕ້ອງລົງທະບຽນ',
        t2Name: 'ຢືນຢັນໂຮງພະຍາບານ', t2Desc: 'ຢືນຢັນທຸກແຖວ, ພ້ອມຈອງ', t2Unit: 'ຈັບຄັ້ງດຽວ · ຕໍ່ແຜນ',
        t3Name: 'ບໍລິການເຕັມຮູບແບບ', t3Desc: 'ຢືນຢັນ + ວີຊາ, ລາມານ, ການຂົນສົ່ງ', t3Unit: 'ຈັບຄັ້ງດຽວ · ລວມສິດປະໂຫຍດຂອງລະດັບຢືນຢັນ',
        pay: 'ເປີດດຽວນີ້', paid: 'ເປີດແລ້ວ', current: 'ປັດຈຸບັນ', upgrade: 'ອັບເກຣດ', popular: 'ຖືກເລືອກບໍ່ຫຼາຍທີ່ສຸດ',
        payTitle: 'ຢືນຢັນການຈ່າຍ', paySub: 'ຫຼັງຈາກເປີດ, ໂຕະລັງລະຫວ່າງປະເທດຂອງໂຮງພະຍາບານຈະສຳເລັດການຢືນຢັນໃນ 1-2 ວັນທຳງານ', payMethod: 'ວິທີການຈ່າຍ',
        pmCard: 'ບັດລະຫວ່າງປະເທດ', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'ກະເປາະເງິນອິເລັກທຣອນິກ', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'ໂອນເງິນທະນາຄານ', pmBankSub: 'ສຳລັບການຈ່າຍການແພດທີ່ໃຫຍ່ · 1-3 ວັນທຳງານ',
        successTitle: 'ໄດ້ຮັບການຈ່າຍ — ຮ້ອງຂໍການຢືນຢັນ', successBody: 'ໂຕະລັງລະຫວ່າງປະເທດຂອງໂຮງພະຍາບານມີບົດສະຫຼຸບການແພດຂອງເຈົ້າ ແລະຈະຢືນຢັນວິທີການ, ຄວາມພ້ອມຂອງໝໍ ແລະຕຽງໃນ 1-2 ວັນທຳງານ. ໜ້ານີ້ຈະອັບເດດໂດຍອັດຕະໂນມັດຫຼັງຢືນຢັນ.',
        successBtn: 'ເບິ່ງແຜນຢືນຢັນ',
        noteRefund: 'ຄືນເງິນເຕັມຖ້າໂຮງພະຍາບານບໍ່ພົບການຊີ້ຊອນປິ່ນປົວ ຫຼືບໍ່ສາມາດຮັບຄະດີ.',
        noteScope: 'ຄ່າບໍລິການນີ້ຄອບຄຸມພຽງການຢືນຢັນ ແລະປະສານງານ — ບໍ່ຮວມການບິນ, ໂຮງແຮມ ຫຼືການປິ່ນປົວຂອງໂຮງພະຍາບານ, ທີ່ຈ່າຍໃນເວທີການບຸກຄົນທີສາມ.',
        pkgAName: 'ແຜນ DIY', pkgADesc: 'ແຜນການແພດຢືນຢັນ; ຈອງການບິນ / ໂຮງແຮມ / ລົດສົ່ງເອງ', pkgBName: 'ລວມທັງໝົດ', pkgBDesc: 'ແຜນຢືນຢັນ + ການບິນ / ຮັບສົ່ງ / ໂຮງແຮມທີ່ຈອງໃຫ້ເຈົ້າ', pkgCName: 'ຜູ້ຊ່ວຍເຫຼືອສ່ວນຕົວ', pkgCDesc: 'ລວມທັງໝົດ + ຜູ້ຊ່ວຍເຫຼືອສ່ວນຕົວ, ລະດັບສູງສຸດ',

        feat: {
          ai3: '3 ແຜນການຈຳລອງ AI', range: 'ຄາດເດົາຊ່ວງຄ່າໃຊ້ຈ່າຍ', verify: 'ວິທີການຢືນຢັນໂດຍໂຮງພະຍາບານ',
          doctor: 'ລາຍເຊັນໝໍ + ຄຸນສົມບັດ', bed: 'ເລກຈອງຕຽງ / ຊ່ອງຜ່າຕັດ', exact: 'ລາຄາໂຮງພະຍາບານລະອຽດແນໜອນ',
          visa: 'ປື້ມເຊິນເຊິນວີຊາການແພດ + ຄູ່ມື', interp: 'ລາມານການແພດເຕັມ (ຄລິນິກ + ຫ້ອງຄົນໄຂ້)', airport: 'ລົດສົ່ງສະໜາມບິນ + ຕິດຕາມນັດ',
          accompany: 'ປະສານງານການເດີນທາງສຳລັບສະມາຊິກຄອບຄົວ 1 ຄົນ', insurance: 'ຄຸ້ມຄອງພາບັດຊັກຊ້ອນ (ຈຳກັດ CNY 1 ລ້ານ)',
          flightBook: 'ການຈອງຕີ໋າບິນ (Trip.com)', pickup: 'ຮັບ/ສົ່ງສະໜາມບິນສ່ວນຕົວ', hotelBook: 'ການຈອງໂຮງແຮມ (Booking.com)', assistant: 'ຜູ້ຊ່ວຍເຫຼືອສ່ວນຕົວ', vip: 'ຊ່ອງທາງດ່ວນ VIP'
        }
      },

      booking: {
        title: 'ການຈອງ ແລະການຈ່າຍ', sub: 'ການບິນ, ໂຮງແຮມ ແລະການລົງທະບຽນໂຮງພະຍາບານແຕ່ລະອັນຈ່າຍໃນເວທີການຂອງຕົນເອງ. MedBridge ບໍ່ເຄີຍເກັບ ຫຼືຖືກອງທຶນນີ້.',
        noteTitle: 'ເປັນຫຍັງການຈ່າຍຈຶ່ງແຍກກັນ', noteBody: 'ການບິນ ແລະໂຮງແຮມປະຕິບັດຕາມກົດເງື່ອນແປຽນຂອງສາຍການບິນ ແລະ OTA; ການລົງທະບຽນໂຮງພະຍາບານແມ່ນບໍລິການທາງການແພດ. ການແຍກມັນໃຫ້ແຕ່ລະລາຍການມີໃບຮັບຂອງຕົວເອງ ແລະຊ່ອງທາງຄືນເງິນຂອງຕົວເອງ, ແລະປ້ອງກັນບໍ່ໃຫ້ MedBridge ດຳເນີນບັນຊີລວມ.',
        itemFlight: 'ການບິນລະຫວ່າງປະເທດ', itemHotel: 'ທີ່ພັກ', itemReg: 'ການລົງທະບຽນ ແລະຕຽງ', itemTransfer: 'ການຂົນສົ່ງສ່ວນຕົວ', itemTravel: 'ທ່ອງທ່ຽວເພິ່ມເຕິມ',
        provider: 'ເວທີການຈ່າຍ', goPay: 'ຈ່າຍດຽວນີ້', payOnPartner: 'ສຳເລັດການຈ່າຍໃນ {p}',
        redirectTitle: 'ກຳລັງໄປຍັງ {p}', redirectBody: 'ເຈົ້າຈະຖືກພາໄປຍັງເວທີການບຸກຄົນທີສາມເພື່ອສຳເລັດການຈ່າຍນີ້. ການຈ່າຍ, ການແປຽນ ແລະການຄືນເງິນຖືກຈັດການໂດຍເວທີນັ້ນຢ່າງສົມບູນ.',
        redirectBtn: 'ເຂົ້າໃຈແລ້ວ, ສືບຕໍ່',
        summary: 'ລາຍການຈ່າຍ', platformFee: 'ຄ່າບໍລິການແພລດຟອມ', platformFeeNote: 'ຈ່າຍແລ້ວເມື່ອເຈົ້າເປີດ',
        doneTitle: 'ການຈອງທັງໝົດຖືກສົ່ງແລ້ວ', doneBody: 'ການຈ່າຍແຕ່ລະອັນມີໃບຮັບຂອງຕົວເອງ. ເມື່ອການເດີນທາງຖືກຢືນຢັນ, ແຜນການ, ລາຍລະອຽດການຮັບສົ່ງ ແລະການເຕືອນນັດຈະປົກຕິໃນພາຍໃຕ້ "ການເດີນທາງຂອຍ".',
        itemsPending: '{n} ລໍຖ້າ', itemsPaid: '{n} ຈ່າຍແລ້ວ'
      },

      trips: {
        title: 'ການເດີນທາງຂອຍ', sub: 'ຕິດຕາມສະຖານະ ແລະໃບຮັບຂອງທຸກການຈອງ.',
        empty1: 'ຍັງບໍ່ມີການເດີນທາງທີ່ກຳລັງດຳເນີນ', empty2: 'ແຜນທີ່ເຈົ້າສ້າງຈະປົກຕິຢູ່ນີ້ຫຼັງການປະເມີນ.',
        emptyBtn: 'ເລີ່ມການປະເມີນ',
        orderNo: 'ເລກການເດີນທາງ', created: 'ສ້າງເມື່ອ', viewPlan: 'ເບິ່ງແຜນ', payNow: 'ຈ່າຍດຽວນີ້',
        s1: 'ສົ່ງຄຳຮ້ອງຂໍ', s2: 'ສ້າງແຜນ AI', s3: 'ຢືນຢັນໂຮງພະຍາບານ', s4: 'ລໍຖ້າການຈ່າຍ', s5: 'ຢືນຢັນການຈອງ', s6: 'ກຳລັງເດີນທາງ',
        pipeline: 'ຄວາມກ້າວໜ້າ', booking: 'ການຈອງ'
      },

      partners: { ctrip: 'ຕີ໋າບິນ Trip.com', booking: 'Booking.com', hospital: 'ລະບົບລົງທະບຽນໂຮງພະຍາບານ', didi: 'ບໍລິການຂົນສົ່ງສ່ວນຕົວ', airbnb: 'ອາພາດເມັນ ແລະທີ່ພັກ' }
    },

    /* ---------------------------------------------------- km (ខ្មែរ) — best-effort, needs native review */
    km: {
      brand: { tagline: 'គម្រោងរៀបចំការព្យាបាលឆ្លងដែន' },
      nav: { home: 'ទំពំរុក', intake: 'ការវាយតម្លៃ', plans: 'ផែនការព្យាបាល', pricing: 'បើកកំណែផ្ទៀងផ្ទាត់', trips: 'ដំណើររបស់ខ្ញុំ' },
      common: {
        demoBadge: 'គំរូ · ទិន្នន័យគំរូ', next: 'បន្ទាប់', back: 'ត្រឡប់', confirm: 'បញ្ជាក់', cancel: 'បោះបង់',
        close: 'បិទ', viewDetail: 'មើលព័ត៌មានលម្អិត', select: 'ជ្រើស', optional: 'ជម្រើស', perPerson: '/នាក់',
        total: 'សរុប', from: 'ពី', included: 'រួមបញ្ចូល', notIncluded: 'មិនរួមបញ្ចូល', days: 'ថ្ងៃ', night: 'យប់',
        loading: 'កំពុងដំណើរការ…', continue: 'បន្ត', currency: '¥', save: 'រក្សាទុក', edit: 'កែ', per: 'ក្នុងមួយ'
      },
      footer: { disclaimer: 'គំរូដែលអាចចុចបានសម្រាប់ការពិភាក្សាផលិតផល។ មន្ទីរពេទ្យ វេជ្ជបណ្ឌិត តម្លៃ និងលេខទិន្នន័យលទ្ធផលទាំងអស់គ្រាន់តែជាឧទាហរណ៍ ហើយមិនមែនជាដំបូនាំផ្នែកវេជ្ជសាស្ត្រទេ។', demo: 'គំរូ v0.9' },

      dept: {
        oncology:  { name: 'មហារីកធានាកំណត់', desc: 'គោលដៅ / ភាសាសុទ្ធ / ក្រុម MDT' },
        ortho:     { name: 'ឆ្អឹង និងសន្លាក់', desc: 'វះជំនួសសន្លាក់ត្រគាក និងជង្គង់ដោយមនុស្សយន្ត' },
        cardio:    { name: 'បេះដូងនិងសរសៃឈាម', desc: 'ការថតអាំងហ្គូក្រាហ្វី / stent / ស្តារ' },
        ivf:       { name: 'ភាពមានកូន (IVF)', desc: 'PGT-A / ការរំញោចតាមបុគ្គល' },
        aesthetic: { name: 'សោភ៍សម្ផស្ស និងបង្ការការចាស់', desc: 'ធ្វើឱ្យមុខងារស្រស់ទន់ / ឧបករណ៍ថាមពល' },
        checkup:   { name: 'ពិនិត្យសុខភាពអ្នកគ្រប់គ្រង', desc: 'PET-MR / ហ្សែន / បេះដូង' }
      },

      home: {
        heroTitle: 'រៀបចំដំណើរការព្យាបាលនៅបរទេសទាំងមូល — ជាភាសារបស់អ្នក',
        heroSub: 'បញ្ចូលរោគវិនិច្ឆ័យ និងលទ្ធផលពិនិត្យ។ ក្នុងរយៈពេលប៉ុន្មាននាទី អ្នកនឹងទទួលបានផែនការព្យាបាលពេញលេញបី: ជើងហោះ ឡានតាក់តិន សណ្ឋាគារ ការចុះឈ្មោះ បន្ទប់អ្នកជំងឺ វេជ្ជបណ្ឌិតព្យាបាល វិធីសាស្ត្រព្យាបាល និងការចំណាយលម្អិត។ ចាប់ផ្តើមដោយឥតគិតថ្លៃជាមួយផែនការសាកល្បង AI; បើកកំណែផ្ទៀងផ្ទាត់ពីមន្ទីរពេទ្យនៅពេលអ្នករៀបនឹងកក់។',
        ctaPrimary: 'បង្កើតផែនការសម្រាប់ខ្ញុំដោយឥតគិតថ្លៃ', ctaSecondary: 'របៀបដែលវេទិកាដំណើរ',
        stat1: 'មន្ទីរពេទ្យដៃគូ', stat2: 'ករណីពិតដែលអាចផ្គូបាន', stat3: 'ភាសាដែលគាំទ្រ',
        howTitle: 'បីជំហាន: ពី "ខ្ញុំមិនដឹងថាត្រូវទៅណា" ដល់ "ការកក់បានបញ្ជាក់"',
        howSub: 'អ្នកជំងឺនៅក្នុងភាសាកំណើតរបស់ពួកគេ។ វេទិកាគ្រប់គ្រងការបកប្រែ ការផ្ទៀងផ្ទាត់តម្លៃ និងការសម្របសម្រួល។',
        step1Title: 'ពិពណ៌នាស្ថានភាពជាភាសារបស់អ្នក', step1Body: 'បំពេញរោគវិនិច្ឆ័យ និងផ្ទុកឡើងការថតកាំរស្មី ឬរបាយការណ៍ពិនិត្យជាភាសារបស់អ្នក។ ប្រព័ន្ធនឹងបង្កើតសេចក្តីសង្ខេបវេជ្ជសាស្ត្រស្តង់ដារដែលបានបកប្រែសម្រាប់ផ្ទៃតុអន្តរជាតិរបស់មន្ទីរពេទ្យ។', step1Lock: 'ឥតគិតថ្លៃ',
        step2Title: 'AI បង្កើតផែនការបី', step2Body: 'វេទិកាស្វែងរកបណ្ណាសារករណីពិតក្នុងអតីតកាល និងត្រឡប់ជម្រើសបី — មន្ទីរពេទ្យ វេជ្ជបណ្ឌិតវះកាត់ វិធីសាស្ត្រ រយៈពេលសម្រាក ជើងហោះ សណ្ឋាគារ និងការចំណាយលម្អិត។', step2Lock: 'ឥតគិតថ្លៃ',
        step3Title: 'បើកកំណែផ្ទៀងផ្ទាត់ និងកក់', step3Body: 'បន្ទាប់ពីបង់ប្រាក់ ផ្ទៃតុអន្តរជាតិរបស់មន្ទីរពេទ្យផ្ទៀងផ្ទាត់វិធីសាស្ត្រ ភាពអាចរបស់វេជ្ជបណ្ឌិត និងគ្រែ រួចផ្តល់តម្លៃពិតប្រាកដ។ ជើងហោះ និងសណ្ឋាគារបង់លើវេទិកាភាគីទីបី។', step3Lock: 'មានថ្លៃ',
        deptTitle: 'ប្រាំមួយផ្នែកដែលគ្របដណ្តាំ', deptSub: 'ផ្នែកនីមួយៗមានបណ្ណាសារករណីពិតអនាមិកដែល AI ផ្គូ និងរៀបចំឡើងវិញ។',
        cases: '{n} ករណីដែលអាចផ្គូបាន', casesUnit: 'ករណី',
        trustTitle: 'ហេតុអ្វីមន្ទីរពេទ្យចូលរួម', trustSub: 'យើងមិនលក់ចរាចរណ៍ទេ។ យើងផ្តល់តម្រូវការមានរចនាសសម្ព័ន្ធ និងការបកប្រែជាមុន កាត់បន្ថយថ្លៃដើមទំនាក់ទំនងរបស់ផ្ទៃតុអន្តរជាតិ។',
        trust1t: 'តម្រូវការមកដល់មានរចនាសសម្ព័ន្ធ', trust1d: 'មន្ទីរពេទ្យទទួលបានសេចក្តីសង្ខេបវេជ្ជសាស្ត្រដែលបានបកប្រែ និងពេញលេញ — មិនមែនជាទមងរបាយការណ៍បរទេសដែលអានមិនចេញ។',
        trust2t: 'ច្រោះមុនទទួល', trust2d: 'ដំណាក់កាលផ្គូជាមុនរបស់ AI ច្រោះករណីមិនសមរម្យ ដូច្នេះមន្ទីរពេទ្យដោះស្រាយតែសំណួរដែលមានសញ្ញាណព្យាបាលពិត។',
        trust3t: 'ការទូទាត់នៅក្រៅវេទិកា', trust3d: 'ជើងហោះ និងសណ្ឋាគារប្រមូលពី OTA ភាគីទីបី; មន្ទីរពេទ្យគិតតែថ្លៃព្យាបាលរបស់ខ្លួន។ គ្មានមូលនិធិរួម គ្មានហានិភ័យអនុលោម។',
        trust4t: 'លទ្ធផលស្តុកបាន', trust4d: 'ទិន្នន័យតាមដានក្រោយព្យាបាលហូរត្រឡប់ទៅបណ្ណាសារករណី បង្កើតអត្រាជោគជ័យដែលអាចស្វែងរកបាន និងចន្លោះតម្លៃពិត។',
        ctaTitle: 'សាកល្បងលើសេណារីយ៉ូពិត', ctaBody: 'គ្មានការចុះឈ្មោះ។ ជ្រើសផ្នែក បញ្ចូលរោគវិនិច្ឆ័យ ហើយឆ្លងកាត់ដំណើរការទាំងមូលក្នុងប៉ុន្មាននាទី។', ctaBtn: 'ចាប់ផ្តើមវាយតម្លៃ'
      },

      intake: {
        title: 'ការវាយតម្លៃវេជ្ជសាស្ត្រ', sub: 'ឆ្លើយជាភាសារបស់អ្នក — យើងនឹងបកប្រែជូនមន្ទីរពេទ្យ។ វាលដែលមាន * គឺតម្រូវ។',
        secBasic: 'មូលដ្ឋាន', secMedical: 'ស្ថានភាព និងឯកសារ', secPref: 'ចំណូលចិត្តដំណើរ',
        origin: 'ប្រទេស / ទីក្រុងចេញដំណើរ', originHint: 'ប្រើដើម្បីប៉ាន់ស្មានរយៈពេល និងតម្លៃសំបុត្រហោះ',
        dept: 'ផ្នែក', deptHint: 'ជ្រើសអ្វីដែលស្រដៀងបំផុតបើមិនប្រាកដ',
        disease: 'រោគវិនិច្ឆ័យ', diseaseHint: 'អ្នកអាចសរសេរជាភាសារបស់អ្នក។',
        diseasePh: 'ឧ. មហារីកក្រពះ T3N1M0',
        reports: 'លទ្ធផលពិនិត្យ', reportsHint: 'ផ្ទុកឡើងរបាយការណ៍ CT / MRI / ជំងឺមហារីក / ឈាម (គំរូនេះពុំផ្ទុកឯកសារពិត)',
        uploadTitle: 'ចុចដើម្បីផ្ទុកឡើងរបាយការណ៍ ឬរូបភាព', uploadDesc: 'PDF / JPG / DICOM · រហូតដល់ 200MB ក្នុងមួយឯកសារ',
        city: 'ទីក្រុងទិសដៅដែលចូលចិត្ត', cityHint: 'ប៉ះពាល់មន្ទីរពេទ្យ សណ្ឋាគារ និងថ្លៃហោះ',
        budget: 'ជួរថវិកា (CNY)', date: 'កាលបរិច្ឆេទចេញដំណើរចូលចិត្ត', companions: 'សមាជិកគ្រួសារដែលអមដំណើរ',
        travelPref: 'បន្ថែមជម្រើសទេសចរណ៍', travelHint: 'កន្លែងសម្រាកព្យាបាល កម្សាន្ត ឬស្តារវេជ្ជសាស្ត្រចិនបន្ទាប់ពីព្យាបាល',
        sideTitle: 'អ្វីដែលនឹងកើតឡើងបន្ទាប់', sideStep1t: 'AI ស្វែងរកករណីស្រដៀង', sideStep1d: 'រកករណីក្នុងអតីតកាលដែលនៅក្បែរបំផុតក្នុងផ្នែករបស់អ្នក',
        sideStep2t: 'បង្កើតផែនការបី', sideStep2d: 'ផែនការនីមួយៗមានផែនការព្យាបាល ភស្តុតាង និងការចំណាយពេញលេញ',
        sideStep3t: 'អ្នកបើកមួយដើម្បីផ្ទៀងផ្ទាត់', sideStep3d: 'មន្ទីរពេទ្យផ្ទៀងផ្ទាត់រាល់ជួរ និងផ្តល់តម្លៃពិត ព្រមទាំងលេខចូលគ្រែ',
        sideStep4t: 'បង់ប្រាក់លើវេទិកាភាគីទីបី', sideStep4d: 'ជើងហោះ និងសណ្ឋាគារបង់លើ Trip.com / Booking និងដូចគ្នា',
        submit: 'បង្កើតវិធីសាស្ត្រដោយឥតគិតថ្លៃ', mobility: 'ការវាយថ្នាក់តម្រូវការឡានតាក់តិន', mobilityHint: 'ផ្គូរយានយន្ត និងការរៀបចំថែទាំងត្រឹមត្រូវ — មិនផ្លាស់ប្តូរផែនការវេជ្ជសាស្ត្រ', disclaimer: 'គំរូ: ការផ្ញើប្រើទិន្នន័យគំរូសម្រាប់ការសាកល្បង។ មិនមានអ្វីត្រូវផ្ទុកឡើង ឬផ្ញើទេ។'
      },

      gen: { title: 'កំពុងបង្កើតផែនការរបស់អ្នក', sub: 'AI កំពុងស្វែងរកករណីក្នុងអតីតកាល និងរៀបចំដំណើរ', s1: 'បកប្រែ និងធ្វើឲ្យស្តង់ដារសេចក្តីសង្ខេបវេជ្ជសាស្ត្រ', s2: 'ស្វែងរកបណ្ណាសារករណីផ្នែក', s3: 'ផ្គូភាពអាចរបស់មន្ទីរពេទ្យ និងវេជ្ជបណ្ឌិត', s4: 'រៀបចំជើងហោះ សណ្ឋាគារ និងឡានតាក់តិន', s5: 'បង្កើតការប៉ាន់ស្មានការចំណាយលម្អិត' },

      plans: {
        title: 'ផែនការព្យាបាលបីសម្រាប់អ្នក', sub: 'បន្សំសាកល្បង AI បង្កើតឡើងពីករណីពិតក្នុងអតីតកាល។ វាលសំខាន់ៗបង្ហាញតម្លៃពិតប្រាកដប៉ុណ្ណោះបន្ទាប់ពីអ្នកបើកកំណែផ្ទៀងផ្ទាត់មន្ទីរពេទ្យ។',
        match: 'ផ្គូ', matchSub: 'តាមស្ថានភាព ថវិកា និងពេលវេលារបស់អ្នក', resultsFor: 'មហារីកក្រពះ · ស៊ាងហៃ · CNY 200k-300k',
        regenerate: 'បង្កើតឡើងវិញ', tierA: 'កម្រិតខ្ពស់', tierB: 'សមតុល្យ', tierC: 'ប្រៀបធៀប',
        tierADesc: 'ស្លាបអន្តរជាតិថ្នាក់កំពូល ប្រធានផ្នែកជាវេជ្ជបណ្ឌិតវះកាត់', tierBDesc: 'មន្ទីរពេទ្យថ្នាក់កំពូលរឹងមាំក្នុងទីក្រុងដដែល តម្លៃសមតុល្យ', tierCDesc: 'មន្ទីរពេទ្យឈានមុខក្នុងទីក្រុងតម្លៃទាប',
        recommend: 'ណែនាំ', popular: 'ត្រូវបានជ្រើសច្រើនបំផុត', value: 'តម្លៃល្អបំផុត',
        hospital: 'មន្ទីរពេទ្យ', doctor: 'វេជ្ជបណ្ឌិតព្យាបាល', stay: 'អ្នកជំងឺក្នុង', ward: 'បន្ទប់អ្នកជំងឺ', duration: 'រយៈពេល', success: 'លទ្ធផល',
        viewPlan: 'មើលផែនការពេញលេញ', pickPlan: 'ជ្រើសផែនការនេះ', picked: 'បានជ្រើស',
        priceNote: 'ប៉ាន់ស្មាន AI', exactPrice: 'សម្តសំណើមន្ទីរពេទ្យ', aiBadge: 'សាកល្បង AI', verifiedBadge: 'ផ្ទៀងផ្ទាត់មន្ទីរពេទ្យ',
        freeNote: 'អ្នកកំពុងមើលផែនការសាកល្បង AI ឥតគិតថ្លៃ: ឈ្មោះវេជ្ជបណ្ឌិត តម្លៃពិតប្រាកដ លេខចូលគ្រែ និងទិន្នន័យលទ្ធផលគ្រាន់តែជាតំណាង។',
        unlockCta: 'បើកកំណែផ្ទៀងផ្ទាត់មន្ទីរពេទ្យ', costHint: 'ការចំណាយគឺជាជួរប៉ាន់ស្មាន; ការបើកបង្ហាញតម្លៃលម្អិតពិតប្រាកដ'
      },

      plan: {
        tabOverview: 'ទិដ្ឋភាទុបទសង្ខេប', tabTimeline: 'វិធីសាស្ត្រ', tabMedical: 'ព្យាបាល', tabCost: 'ការចំណាយ', tabTravel: 'បន្ថែម',
        backToList: 'ត្រឡប់ផែនការ', itineraryTitle: 'វិធីសាស្ត្ររាលរាល់ថ្ងៃ', itinerarySub: 'រាល់ថ្ងៃ ពីការចេញដំណើរដល់ត្រឡប់វិញ',
        hospitalInfo: 'មន្ទីរពេទ្យ', city: 'ទីក្រុង', level: 'កម្រិត', accred: 'ការទទួលស្គាល់', beds: 'គ្រែ',
        medicalTeam: 'ក្រុមវេជ្ជសាស្ត្រ', chief: 'វេជ្ជបណ្ឌិតព្យាបាល', specialty: 'ឯកទេព', experience: 'ឆ្នាំអនុវត្ត', languages: 'ភាសាបញ្ជូល', casesDone: 'ករណីបានធ្វើ',
        treatmentPlan: 'ផែនការព្យាបាល', procedure: 'នីតិវិធីស្នូល', stages: 'ដំណាក់កាលវិធីសាស្ត្រ', stage: 'ដំណាក់កាល', successRate: 'សូចនាកតម្លៃលទ្ធផល',
        stayDays: 'ថ្ងៃអ្នកជំងឺក្នុង', wardType: 'ប្រភេទបន្ទប់អ្នកជំងឺ', registration: 'ការចុះឈ្មោះ',
        logistics: 'ភស្តុតាង', flight: 'ជើងហោះអន្តរជាតិ', airline: 'ក្រុមហ៊ុនអាកាសចរណ៍', cabin: 'បន្ទប់យន្តហោះ', duration: 'រយៈពេលហោះ', tripDays: 'រយៈពេលដំណើរ',
        transfer: 'ដឹកជញ្ជូនផ្លូវគោក', transferGrade: 'កម្រិតដឹកជញ្ជូន', transferVehicle: 'យានដែលណែនាំ', transferNurse: 'គិលានុបដ្ឋាយិកានៅលើឡាន', transferPerTrip: 'ក្នុងមួយដង', transferRound: 'ទៅមក (ទទួល + ជូន)', transferSelfBook: 'កក់ដោយខ្លួន · វេទិកាណែនាំ', transferPlatformBook: 'វេទិកាកក់', transferSource: 'កំណត់សម្គាល់កងឡាន: រថធានធុនជំនួញបើកដោយវេទិកា; រថយន្តពេទ្យជាកិច្ចសន្យាក្រៅ គិតជាមួយដងហោះ។', transferKm: 'អាកាសយានដ្ឋាន → មន្ទីរពេទ្យ ~{n} គីឡូម៉ែត្រ', transferAccessible: 'ផ្លូវស្លាបឡានសម្រាប់រូរុងរុះ', transferBook: 'ការកក់', hotel: 'កន្លែងស្នាក់នៅ', room: 'ប្រភេទបន្ទប់', distance: 'ដល់មន្ទីរពេទ្យ',
        costTitle: 'ការចំណាយលម្អិត', medicalFee: 'ថ្លៃព្យាបាល', flightFee: 'សំបុត្រហោះ', hotelFee: 'កន្លែងស្នាក់នៅ', transferFee: 'ដឹកជញ្ជូនផ្លូវគោក',
        serviceFee: 'ថ្លៃសេវាកម្មវេទិកា', travelAddon: 'បន្ថែមទេសចរណ៍', total: 'សរុប', estimate: 'ប៉ាន់ស្មាន AI', exact: 'សម្តសំណើមន្ទីរពេទ្យ',
        perCompanion: 'រួមបញ្ចូល {n} សមាជិកគ្រួសារ',
        travelTitle: 'បន្ថែមទេសចរណ៍ និងស្តារ', travelAdd: 'បន្ថែមក្នុងដំណើរ', travelAdded: 'បានបន្ថែម',
        lockedTitle: 'វាលទាំងនេះបង្ហាញតម្លៃពិតប្រាកដប៉ុណ្ណោះបន្ទាប់ពីមន្ទីរពេទ្យផ្ទៀងផ្ទាត់',
        lockedBody: 'កំណែឥតគិតថ្លៃគឺជាការសាកល្បង AI ផ្អែកលើករណីក្នុងអតីតកាល: ឈ្មោះវេជ្ជបណ្ឌិត ការចំណាយលម្អិត លេខចូលគ្រែ និងទិន្នន័យលទ្ធផលគ្រាន់តែជាតំណាង។ ការបើកធ្វើឲ្យផ្ទៃតុអន្តរជាតិមន្ទីរពេទ្យផ្ទៀងផ្ទាត់ និងចុះហត្ថលេខារាល់ជួរ។',
        lockedBtn: 'បើកកំណែផ្ទៀងផ្ទាត់មន្ទីរពេទ្យ',
        verifiedTitle: 'ផ្ទៀងផ្ទាត់ដោយមន្ទីរពេទ្យ', verifiedBy: 'ផ្ទៀងផ្ទាត់ដោយ', verifiedAt: 'ផ្ទៀងផ្ទាត់នៅ', bedHold: 'លេខចូលគ្រែ',
        doctorSign: 'ហត្ថលេខាវេជ្ជបណ្ឌិត', hospitalRef: 'លេខសួររកមន្ទីរពេទ្យ', confidence: 'ភាពជឿជាក់ផែនការ',
        confidenceNote: 'ផ្អែកលើករណី {n} ស្រដៀងក្នុងអតីតកាល'
      },

      pricing: {
        title: 'បើកផែនការផ្ទៀងផ្ទាត់មន្ទីរពេទ្យ', sub: 'ឥតគិតថ្លៃឲ្យអ្នកទិសដៅ។ មានថ្លៃឲ្យអ្នកថ្ងៃអាចកក់ និងតម្លៃពិតប្រាកដ។',
        t1Name: 'សាកល្បង AI', t1Desc: 'មើលទិសដៅ និងទំហំការចំណាយជាមុន', t1Price: 'ឥតគិតថ្លៃ', t1Unit: 'ឥតគិតថ្លៃជានិច្ច គ្មានការចុះឈ្មោះ',
        t2Name: 'ផ្ទៀងផ្ទាត់មន្ទីរពេទ្យ', t2Desc: 'ផ្ទៀងផ្ទាត់រាល់ជួរ រួចកក់បាន', t2Unit: 'ម្តងម្តង · ក្នុងមួយផែនការ',
        t3Name: 'សេវាកម្មពេញលេញ', t3Desc: 'ផ្ទៀងផ្ទាត់ + វីសា អ្នកបកប្រែ ការដឹកជញ្ជូន', t3Unit: 'ម្តងម្តង · រួមអត្ថប្រយោជន៍ថ្នាក់ផ្ទៀងផ្ទាត់',
        pay: 'បើកឥឡូវ', paid: 'បានបើក', current: 'បច្ចុប្បន្ន', upgrade: 'ផ្លាស់ឡើង', popular: 'ត្រូវបានជ្រើសច្រើនបំផុត',
        payTitle: 'បញ្ជាក់ការទូទាត់', paySub: 'បន្ទាប់ពីបើក ផ្ទៃតុអន្តរជាតិមន្ទីរពេទ្យបញ្ចប់ការផ្ទៀងផ្ទាត់ក្នុង 1-2 ថ្ងៃធ្វើការ', payMethod: 'វិធីបង់ប្រាក់',
        pmCard: 'កាតអន្តរជាតិ', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'កាបូបអេឡិចត្រូនិក', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'ផ្ទេរធនាគារ', pmBankSub: 'សម្រាប់ការទូទាត់ព្យាបាលធំ · 1-3 ថ្ងៃធ្វើការ',
        successTitle: 'បានទទួលការទូទាត់ — ស្នើសុំការផ្ទៀងផ្ទាត់', successBody: 'ផ្ទៃតុអន្តរជាតិមន្ទីរពេទ្យមានសេចក្តីសង្ខេបវេជ្ជសាស្ត្ររបស់អ្នក ហើយនឹងផ្ទៀងផ្ទាត់វិធីសាស្ត្រ ភាពអាចរបស់វេជ្ជបណ្ឌិត និងគ្រែក្នុង 1-2 ថ្ងៃធ្វើការ។ ទំពំរុកនេះនឹងធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិបន្ទាប់ពីផ្ទៀងផ្ទាត់។',
        successBtn: 'មើលផែនការផ្ទៀងផ្ទាត់',
        noteRefund: 'សងប្រាក់ពេញលេញប្រសិនបើមន្ទីរពេទ្យរកមិនឃើញសញ្ញាណព្យាបាល ឬមិនអាចទទួលករណី។',
        noteScope: 'ថ្លៃនេះគ្រាន់តែគ្របដណ្តាំការផ្ទៀងផ្ទាត់ និងសម្របសម្រួល — មិនរួមជើងហោះ សណ្ឋាគារ ឬព្យាបាលមន្ទីរពេទ្យ ដែលបង់លើវេទិកាភាគីទីបី។',
        pkgAName: 'ផែនការ DIY', pkgADesc: 'ផែនការព្យាបាលផ្ទៀងផ្ទាត់; កក់ជើងហោះ / សណ្ឋាគារ / ឡានតាក់តិនដោយខ្លួនឯង', pkgBName: 'រួមគ្រប់យ៉ាង', pkgBDesc: 'ផែនការផ្ទៀងផ្ទាត់ + ជើងហោះ / ទទួល / សណ្ឋាគារត្រូវបានកក់ឲ្យអ្នក', pkgCName: 'ជំនួយការផ្ទាល់ខ្លួន', pkgCDesc: 'រួមគ្រប់យ៉ាង + ជំនួយការផ្ទាល់ខ្លួន ថ្នាក់កំពូល',

        feat: {
          ai3: 'ផែនការសាកល្បង AI បី', range: 'ប៉ាន់ស្មានជួរការចំណាយ', verify: 'វិធីសាស្ត្រផ្ទៀងផ្ទាត់ដោយមន្ទីរពេទ្យ',
          doctor: 'ហត្ថលេខាវេជ្ជបណ្ឌិត + ឯកសណ្ឋាន', bed: 'លេខចូលគ្រែ / ល្បឿនវះកាត់', exact: 'តម្លៃមន្ទីរពេទ្យលម្អិតពិតប្រាកដ',
          visa: 'លិខិតអញ្ជើញវីសាព្យាបាល + ការណែនាំ', interp: 'ការបកប្រែវេជ្ជសាស្ត្រពេញលេញ (គ្លីនិក + បន្ទប់អ្នកជំងឺ)', airport: 'ដឹកជញ្ជូនអាកាសយានដ្ឋាន + អមការណាត់',
          accompany: 'សម្របសម្រួលដំណើរសម្រាប់សមាជិកគ្រួសារ 1 នាក់', insurance: 'ការធានាផលវិបត្តិ (ដែនកំណត់ CNY 1 លាន)',
          flightBook: 'ការកក់ជើងហោះ (Trip.com)', pickup: 'ទទួល/ជូនអាកាសយានដ្ឋានផ្ទាល់ខ្លួន', hotelBook: 'ការកក់សណ្ឋាគារ (Booking.com)', assistant: 'ជំនួយការផ្ទាល់ខ្លួន', vip: 'ច្រកលឿន VIP'
        }
      },

      booking: {
        title: 'ការកក់ និងការទូទាត់', sub: 'ជើងហោះ សណ្ឋាគារ និងការចុះឈ្មោះមន្ទីរពេទ្យនីមួយៗបង់លើវេទិការបស់ខ្លួន។ MedBridge ពុំដែលប្រមូល ឬរក្សាទុកមូលនិធិនេះឡើយ។',
        noteTitle: 'ហេតុអ្វីការទូទាត់ត្រូវបំបែក', noteBody: 'ជើងហោះ និងសណ្ឋាគារអនុវត្តតាមច្បាប់ផ្លាស់ប្តូររបស់ក្រុមហ៊ុនអាកាសចរណ៍ និង OTA; ការចុះឈ្មោះមន្ទីរពេទ្យជាសេវាកម្មវេជ្ជសាស្ត្រ។ ការបំបែកពួកវាផ្តល់ឲ្យប្រតិបត្តិការនីមួយៗមានបង្កាន់របស់ខ្លួន និងច្រកសងប្រាក់របស់ខ្លួន ហើយរារាំងមិនឲ្យ MedBridge ដំណើរការគណនីរួម។',
        itemFlight: 'ជើងហោះអន្តរជាតិ', itemHotel: 'កន្លែងស្នាក់នៅ', itemReg: 'ការចុះឈ្មោះ និងគ្រែ', itemTransfer: 'ការដឹកជញ្ជូនផ្ទាល់ខ្លួន', itemTravel: 'បន្ថែមទេសចរណ៍',
        provider: 'វេទិកាទូទាត់', goPay: 'បង់ឥឡូវ', payOnPartner: 'បញ្ចប់ការទូទាត់លើ {p}',
        redirectTitle: 'កំពុងបញ្ជូនទៅ {p}', redirectBody: 'អ្នកនឹងត្រូវបញ្ជូនទៅវេទិកាភាគីទីបីដើម្បីបញ្ចប់ការទូទាត់នេះ។ ការទូទាត់ ការផ្លាស់ប្តូរ និងការសងប្រាក់ត្រូវបានគ្រប់គ្រងទាំងស្រុងដោយវេទិកានោះ។',
        redirectBtn: 'យល់ហើយ បន្ត',
        summary: 'បញ្ជីការទូទាត់', platformFee: 'ថ្លៃសេវាកម្មវេទិកា', platformFeeNote: 'បានបង់រួចពេលអ្នកបើក',
        doneTitle: 'ការកក់ទាំងអស់ត្រូវបានផ្ញើ', doneBody: 'ការទូទាត់នីមួយៗមានបង្កាន់របស់ខ្លួន។ នៅពេលដំណើរត្រូវបានបញ្ជាក់ វិធីសាស្ត្រ ព័ត៌មានទទួល និងការរំលឹកការណាត់នឹងលេចឡើងក្រោម "ដំណើររបស់ខ្ញុំ"។',
        itemsPending: '{n} រង់ចាំ', itemsPaid: '{n} បានបង់'
      },

      trips: {
        title: 'ដំណើររបស់ខ្ញុំ', sub: 'តាមដានស្ថានភាព និងបង្កាន់នៃការកក់នីមួយៗ។',
        empty1: 'នៅមិនទាន់មានដំណើរកំពុងដំណើរទេ', empty2: 'ផែនការដែលអ្នកបង្កើតនឹងលេចឡើងនៅទីនេះបន្ទាប់ពីការវាយតម្លៃ។',
        emptyBtn: 'ចាប់ផ្តើមវាយតម្លៃ',
        orderNo: 'លេខដំណើរ', created: 'បង្កើតនៅ', viewPlan: 'មើលផែនការ', payNow: 'បង់ឥឡូវ',
        s1: 'បានផ្ញើសំណើ', s2: 'បង្កើតផែនការ AI', s3: 'ផ្ទៀងផ្ទាត់មន្ទីរពេទ្យ', s4: 'រង់ចាំការទូទាត់', s5: 'ការកក់បានបញ្ជាក់', s6: 'ដំណើរកំពុងដំណើរ',
        pipeline: 'វឌ្ឍនភាព', booking: 'ការកក់'
      },

      partners: { ctrip: 'ជើងហោះ Trip.com', booking: 'Booking.com', hospital: 'ប្រព័ន្ធចុះឈ្មោះមន្ទីរពេទ្យ', didi: 'សេវាដឹកជញ្ជូនផ្ទាល់ខ្លួន', airbnb: 'អាផាតម៉ិន និងកន្លែងស្នាក់នៅ' }
    }

    /*__MORE__*/
  };

  Object.keys(EXTRA).forEach(function (k) { if (EXTRA[k]) window.MB_DICT[k] = EXTRA[k]; });
  if (window.I18N && window.I18N.LANGS) {
    window.I18N.LANGS.push(
      { code: 'ms', label: 'Bahasa Melayu', dir: 'ltr' },
      { code: 'in', label: 'Bahasa Indonesia', dir: 'ltr' },
      { code: 'vi', label: 'Tiếng Việt', dir: 'ltr' },
      { code: 'tl', label: 'Filipino', dir: 'ltr' },
      { code: 'lo', label: 'ລາວ', dir: 'ltr' },
      { code: 'km', label: 'ខ្មែរ', dir: 'ltr' }
    );
  }
})();
