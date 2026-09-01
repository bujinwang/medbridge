/* ============================================================
   MedBridge · extra data strings  (it — Italiano)
   Augments the live window.DATA objects at load time.
   ============================================================ */
(function () {
  'use strict';
  if (!window.DATA) return;
  var D = window.DATA;

  /* ---------------- CITIES ---------------- */
  var CN = {
    shanghai:  { it: 'Shanghai' },
    beijing:   { it: 'Pechino' },
    guangzhou: { it: 'Guangzhou' },
    chengdu:   { it: 'Chengdu' },
    hangzhou:  { it: 'Hangzhou' },
    boao:      { it: 'Boao, Hainan' }
  };
  D.CITIES.forEach(function (c) { if (CN[c.id]) Object.assign(c.name, CN[c.id]); });

  /* ---------------- TIERS flightClass ---------------- */
  var FL = {
    A: { it: 'Business' },
    B: { it: 'Premium economy' },
    C: { it: 'Economy' }
  };
  D.TIERS.forEach(function (t) { if (FL[t.id]) Object.assign(t.flightClass, FL[t.id]); });

  /* ---------------- TRANSFER_MODELS ---------------- */
  var TM = {
    van_gl8:  { it: 'Furgone business GL8 (con autista)' },
    amb_c:    { it: 'Ambulanza · Classe C' },
    amb_b:    { it: 'Ambulanza · Classe B' },
    amb_a:    { it: 'Ambulanza · Classe A' },
    van_alph: { it: 'Toyota Alphard (con autista)' }
  };
  D.TRANSFER_MODELS.forEach(function (m) { if (TM[m.id]) Object.assign(m.name, TM[m.id]); });

  /* ---------------- TRANSFER_GRADES ---------------- */
  var TG = {
    A: {
      label: { it: 'Deambula' },
      desc:  { it: 'Check-up, follow-up, ambulatorio, estetica, PMI, casi lievi' }
    },
    B: {
      label: { it: 'Necessita aiuto / sedia a rotelle' },
      desc:  { it: 'Recupero post-op, mobilità limitata, parametri vitali stabili' }
    },
    C: {
      label: { it: 'Barella / ossigeno' },
      desc:  { it: 'Rientro post-op, allettato, drenaggio, ossigeno, monitoraggio cardiaco' }
    },
    D: {
      label: { it: 'Critico / trasferimento UTI' },
      desc:  { it: 'Supporto vitale (ventilatore, pompa infusionale) o trasferimento critico transfrontaliero' }
    }
  };
  Object.keys(TG).forEach(function (g) {
    if (D.TRANSFER_GRADES[g]) { Object.assign(D.TRANSFER_GRADES[g].label, TG[g].label); Object.assign(D.TRANSFER_GRADES[g].desc, TG[g].desc); }
  });

  /* ---------------- BUDGETS ---------------- */
  var BD = {
    b1: { it: 'Sotto 100k' },
    b2: { it: '100k – 200k' },
    b3: { it: '200k – 300k' },
    b4: { it: '300k – 500k' },
    b5: { it: 'Oltre 500k' }
  };
  D.BUDGETS.forEach(function (b) { if (BD[b.id]) Object.assign(b, BD[b.id]); });

  /* ---------------- ADDONS ---------------- */
  var AD = {
    a1: { it: 'Pacchetto riabilitazione MTC (6 sedute)', desc_it: 'Agopuntura + tuina + erbe, una volta al giorno in recupero' },
    a2: { it: 'Gita urbana di mezza giornata per accompagnatore × 2', desc_it: 'Guida + auto privata, ritmo adattato alla tolleranza post-trattamento' },
    a3: { it: 'Estensione hotel di recupero 3 notti', desc_it: 'Hotel di recupero vicino dopo la dimissione: pasti, controllo quotidiano parametri vitali, fisioterapia di base' },
    a4: { it: 'Upgrade interprete medico a tempo pieno', desc_it: 'Interprete oltre l\'orario di clinica: indicazioni sui farmaci e comunicazione familiare' },
    a5: { it: 'Ritiro termale / marino 3 giorni', desc_it: 'Soggiorno di recupero a bassa intensità dopo le cure, 1 infermiere al seguito' }
  };
  D.ADDONS.forEach(function (a) {
    var t = AD[a.id];
    if (t) {
      Object.assign(a, { it: t.it });
      if (a.desc) Object.assign(a.desc, { it: t.desc_it });
    }
  });

  /* ---------------- MEDICAL ---------------- */
  var MED = {
    oncology: {
      procedure: { it: 'Terapia a bersaglio di precisione + immunoterapia (inibitore PD-1)' },
      outcome:   { it: 'Tasso di risposta obiettiva ~62 %' },
      ward:      { it: 'Camera singola di oncologia (con letto per accompagnatore)' },
      reg:       { it: 'Ambulatorio specialistico VIP · corsia verde internazionale' },
      stages: [
        { it: 'Revisione cartelle a distanza + consulto su vetrini anatomo-patologici' },
        { it: 'Stadiazione PET-TC + sequenziamento di nuova generazione (NGS)' },
        { it: 'Consiglio MDT conferma il protocollo di prima linea' },
        { it: 'Combinazione a bersaglio + immunoterapia, ciclo 1' },
        { it: 'Monitoraggio eventi avversi e cure di supporto' },
        { it: 'Valutazione della risposta per immagini (RECIST 1.1)' },
        { it: 'Farmaci alla dimissione, calendario infusioni, follow-up a casa' }
      ]
    },
    ortho: {
      procedure: { it: 'Protesi di ginocchio / anca mini-invasiva assistita da robot' },
      outcome:   { it: 'Sopravvivenza dell\'impianto a 10 anni > 95 %' },
      ward:      { it: 'Camera singola ortopedica · bagno accessibile' },
      reg:       { it: 'Ambulatorio chirurgia articolare · programmazione sale operatorie' },
      stages: [
        { it: 'Imaging pre-op, allineamento e analisi del passo' },
        { it: 'Valutazione anestesia ed esami ematici pre-op' },
        { it: 'Artroplastica assistita da robot (~90 min)' },
        { it: 'Monitoraggio 24 h e analgesia multimodale' },
        { it: 'Riabilitazione due volte al giorno (CPM + allenamento del passo)' },
        { it: 'Valutazione deambulazione autonoma con deambulatore e controllo pre-dimissione' },
        { it: 'Piano di riabilitazione domiciliare e follow-up a distanza' }
      ]
    },
    cardio: {
      procedure: { it: 'Coronarografia + balloon medicato / scaffold riassorbibile' },
      outcome:   { it: 'Successo della procedura 98 %+, riammissione a 30 gg < 2 %' },
      ward:      { it: 'Transizione da UTI + camera singola cardiologia' },
      reg:       { it: 'Ambulatorio cardiologia · programmazione sala di cateterismo' },
      stages: [
        { it: 'Ecocardiografia + angio-TC coronarico' },
        { it: 'Consulenza cardiologica e stratificazione del rischio' },
        { it: 'Angiografia + intervento (accesso radiale)' },
        { it: 'Monitoraggio UTI 48 h' },
        { it: 'Riabilitazione cardiaca fase I' },
        { it: 'Nuovo test da sforzo' },
        { it: 'Schema antiaggregante doppio e follow-up' }
      ]
    },
    ivf: {
      procedure: { it: 'PMI PGT-A · stimolazione antagonista individualizzata' },
      outcome:   { it: 'Tasso di gravidanza clinica ~58 % (età < 35)' },
      ward:      { it: 'Day hospital · osservazione 6 h post-prelievo' },
      reg:       { it: 'Ambulatorio centro fecondazione · apertura cartella' },
      stages: [
        { it: 'Valutazione fertilità della coppia (AMH / analisi del liquido seminale)' },
        { it: 'Protocollo di stimolazione individualizzato' },
        { it: 'Stimolazione e monitoraggio follicoli (10-12 giorni)' },
        { it: 'Prelievo ovociti + ICSI' },
        { it: 'Coltura blastocisti + screening PGT-A' },
        { it: 'Trasferimento embrione congelato-scongelato' },
        { it: 'Conferma gravidanza (hCG + ecografia transvaginale)' }
      ]
    },
    aesthetic: {
      procedure: { it: 'Ringiovanimento facciale completo · dispositivo ad energia + filler + lifting con fili' },
      outcome:   { it: 'Soddisfazione 96 % al follow-up a 6 mesi' },
      ward:      { it: 'Osservazione diurna (senza pernottamento)' },
      reg:       { it: 'Ambulatorio medicina estetica' },
      stages: [
        { it: 'Imaging cutaneo e progetto estetico 3D' },
        { it: 'Trattamento ad energia seduta 1 (HIFU / RF)' },
        { it: 'Filler e lifting con fili' },
        { it: 'Cure di riparazione post-trattamento e raffreddamento' },
        { it: 'Trattamento ad energia seduta 2' },
        { it: 'Valutazione risultato e piano di cura domiciliare' },
        { it: 'Follow-up online a 6 mesi' }
      ]
    },
    checkup: {
      procedure: { it: 'Screening approfondito dell\'intero corpo · oncologia + cardiovascolare + genomica' },
      outcome:   { it: 'Rilevamento lesioni precoci ~3,2× superiore' },
      ward:      { it: 'Suite VIP gestione della salute' },
      reg:       { it: 'Prenotazione VIP gestione della salute' },
      stages: [
        { it: 'Questionario salute e rischio per familiarità' },
        { it: 'Check-up di un\'intera giornata (imaging + endoscopia + laboratorio)' },
        { it: 'Screening precoce tumore PET-RM' },
        { it: 'Profilo genomico e metabolomico' },
        { it: 'Consulenza individuale sui risultati' },
        { it: 'Secondo parere specialistico (se anomalo)' },
        { it: 'Piano di intervento e follow-up a casa' }
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
