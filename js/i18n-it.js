/* ============================================================
   MedBridge · extra i18n  (it — Italiano)
   Merged into the live DICT at load time by js/i18n.js
   (global.MB_DICT). Falls back to en/zh for any missing key.
   NOTE: AI-generated first-pass Italian. Needs native review
   before production.
   ============================================================ */
(function () {
  'use strict';
  if (!window.MB_DICT) return;

  var EXTRA = {
    it: {
      brand: { tagline: 'Pianificatore di itinerari di cura transfrontalieri' },
      nav: { home: 'Home', intake: 'Valutazione', plans: 'Piani di cura', pricing: 'Sblocca versione verificata', trips: 'I miei viaggi' },
      common: {
        demoBadge: 'Prototipo · Dati di esempio', next: 'Avanti', back: 'Indietro', confirm: 'Conferma', cancel: 'Annulla',
        close: 'Chiudi', viewDetail: 'Vedi dettaglio', select: 'Seleziona', optional: 'Facoltativo', perPerson: '/pers.',
        total: 'Totale', from: 'da', included: 'Incluso', notIncluded: 'Non incluso', days: 'giorni', night: 'notte',
        loading: 'Elaborazione…', continue: 'Continua', currency: '¥', save: 'Salva', edit: 'Modifica', per: 'per'
      },
      footer: { disclaimer: 'Prototipo cliccabile per discussione di prodotto. Tutti gli ospedali, medici, prezzi e dati di esito sono illustrativi e non costituiscono consulenza medica né un\'offerta.', demo: 'Prototipo v0.9' },

      dept: {
        oncology:  { name: 'Oncologia di precisione', desc: 'Mirata / immunoterapia / consiglio MDT' },
        ortho:     { name: 'Ortopedia e articolazioni', desc: 'Protesi di anca e ginocchio assistita da robot' },
        cardio:    { name: 'Cardiovascolare', desc: 'Angiografia / stent / riabilitazione' },
        ivf:       { name: 'Fertilità (PMI)', desc: 'PGT-A / stimolazione personalizzata' },
        aesthetic: { name: 'Estetica e anti-invecchiamento', desc: 'Ringiovanimento viso / dispositivi a energia' },
        checkup:   { name: 'Check-up executive', desc: 'PET-RM / genomica / cardiovascolare' }
      },

      home: {
        heroTitle: 'Pianifica tutto il viaggio di cura all\'estero — nella tua lingua',
        heroSub: 'Inserisci la tua diagnosi e i risultati degli esami. In pochi minuti ottieni tre itinerari di cura completi: volo, trasferimento, hotel, registrazione, reparto, medico curante, protocollo di cura e costo dettagliato. Inizia gratis con un piano di simulazione IA; sblocca la versione verificata dall\'ospedale quando sei pronto a prenotare.',
        ctaPrimary: 'Genera il mio piano gratuitamente', ctaSecondary: 'Come funziona la piattaforma',
        stat1: 'Ospedali partner', stat2: 'Casi reali abbinabili', stat3: 'Lingue supportate',
        howTitle: 'Tre passi: da « non so dove andare » a « prenotazione confermata »',
        howSub: 'Il paziente resta nella propria lingua madre. La piattaforma gestisce traduzione, convalida dei prezzi e coordinamento.',
        step1Title: 'Descrivi la tua condizione nella tua lingua', step1Body: 'Compila la diagnosi e carica scansioni o referti di laboratorio nella tua lingua. Il sistema produce un riepilogo medico standardizzato tradotto per la scrivania internazionale dell\'ospedale.', step1Lock: 'Gratis',
        step2Title: 'L\'IA costruisce tre itinerari', step2Body: 'La piattaforma interroga la libreria dei casi reali passati e restituisce tre opzioni — ospedale, chirurgo, protocollo, durata del soggiorno, volo, hotel e costo dettagliato.', step2Lock: 'Gratis',
        step3Title: 'Sblocca la versione verificata e prenota', step3Body: 'Dopo il pagamento, la scrivania internazionale dell\'ospedale conferma il protocollo, la disponibilità del medico e dei letti, quindi emette un preventivo esatto. Volo e hotel si pagano su piattaforme terze.', step3Lock: 'A pagamento',
        deptTitle: 'Sei reparti coperti', deptSub: 'Ogni reparto dispone di una libreria di casi reali anonimi abbinati e ricombinati dall\'IA.',
        cases: '{n} casi abbinabili', casesUnit: 'casi',
        trustTitle: 'Perché gli ospedali aderiscono', trustSub: 'Non vendiamo traffico. Trasmettiamo richieste strutturate e una traduzione iniziale, riducendo il costo di comunicazione della scrivania internazionale.',
        trust1t: 'Le richieste arrivano strutturate', trust1d: 'L\'ospedale riceve un riepilogo medico tradotto e completo — non una pila di referti esteri illeggibili.',
        trust2t: 'Filtraggio prima di accettare', trust2d: 'Il pre-abbinamento IA filtra i casi inappropriati, così l\'ospedale gestisce solo richieste con reale indicazione di cura.',
        trust3t: 'I pagamenti restano fuori dalla piattaforma', trust3d: 'Volo e hotel sono incassati da OTA terze; l\'ospedale fattura solo le proprie prestazioni mediche. Nessun fondo accentrato, nessuna esposizione di conformità.',
        trust4t: 'I risultati si accumulano', trust4d: 'I dati di follow-up post-cura confluiscono nella libreria dei casi, costruendo tassi di successo consultabili e fasce di prezzo reali.',
        ctaTitle: 'Prova con uno scenario realistico', ctaBody: 'Senza registrazione. Scegli un reparto, inserisci una diagnosi e percorri l\'intero flusso in pochi minuti.', ctaBtn: 'Inizia la valutazione'
      },

      intake: {
        title: 'Valutazione medica', sub: 'Rispondi nella tua lingua — noi traduciamo per l\'ospedale. I campi contrassegnati con * sono obbligatori.',
        secBasic: 'Generale', secMedical: 'Condizione e documenti', secPref: 'Preferenze di viaggio',
        origin: 'Paese / città di partenza', originHint: 'Usato per stimare la durata e la tariffa del volo',
        dept: 'Reparto', deptHint: 'Scegli l\'abbinamento più vicino in caso di dubbio',
        disease: 'Diagnosi', diseaseHint: 'Puoi scriverla nella tua lingua.',
        diseasePh: 'es. Adenocarcinoma gastrico T3N1M0',
        reports: 'Risultati esami', reportsHint: 'Carica referti TC / RM / anatomia patologica / sangue (questo prototipo non carica realmente file)',
        uploadTitle: 'Clicca per caricare un referto o un\'immagine', uploadDesc: 'PDF / JPG / DICOM · fino a 200 MB per file',
        city: 'Città di destinazione preferita', cityHint: 'Influenza ospedale, hotel e costo del volo',
        budget: 'Fascia di budget (CNY)', date: 'Data di partenza preferita', companions: 'Familiari al seguito',
        travelPref: 'Aggiungi opzioni turistiche', travelHint: 'Ritiro di riabilitazione, turismo o riabilitazione MTC dopo le cure',
        sideTitle: 'Cosa accadrà poi', sideStep1t: 'L\'IA cerca casi simili', sideStep1d: 'Cerca i casi storici più vicini nel tuo reparto',
        sideStep2t: 'Vengono generati tre itinerari', sideStep2d: 'Ciascuno con piano di cura, logistica e costo completi',
        sideStep3t: 'Ne sblocchi uno per la convalida', sideStep3d: 'L\'ospedale conferma ogni riga ed emette un preventivo esatto e una prenotazione letto',
        sideStep4t: 'Pagamento su piattaforma terza', sideStep4d: 'Volo e hotel si pagano su Trip.com / Booking e simili',
        submit: 'Genera itinerario gratuitamente', mobility: 'Classificazione del fabbisogno di trasferimento', mobilityHint: 'Abbina il veicolo e l\'assistenza adeguati — non modifica il piano medico', disclaimer: 'Prototipo: l\'invio usa dati di esempio per simulazione. Nulla viene caricato o inviato.'
      },

      gen: { title: 'Costruzione del tuo itinerario', sub: 'L\'IA cerca casi passati e assembla il viaggio', s1: 'Tradurre e standardizzare il riepilogo medico', s2: 'Ricerca nella libreria casi del reparto', s3: 'Abbinare disponibilità di ospedale e medico', s4: 'Assemblare volo, hotel e trasferimento', s5: 'Generare una stima di costo dettagliata' },

      plans: {
        title: 'Tre itinerari di cura per te', sub: 'Combinazioni di simulazione IA costruite su casi reali passati. I campi chiave mostrano valori reali solo dopo aver sbloccato la versione verificata dall\'ospedale.',
        match: 'Abbinamento', matchSub: 'In base a condizione, budget e tempistiche', resultsFor: 'Cancro gastrico · Shanghai · 200k-300k CNY',
        regenerate: 'Rigenera', tierA: 'Premium', tierB: 'Equilibrato', tierC: 'Economico',
        tierADesc: 'Miglior centro internazionale terziario, il primario come chirurgo', tierBDesc: 'Ospedale terziario solido nella stessa città, buon rapporto qualità-prezzo', tierCDesc: 'Ospedale rinomato in una città a basso costo',
        recommend: 'Consigliato', popular: 'Più scelto', value: 'Miglior rapporto qualità-prezzo',
        hospital: 'Ospedale', doctor: 'Medico curante', stay: 'Ricovero', ward: 'Reparto', duration: 'Durata', success: 'Esito',
        viewPlan: 'Vedi piano completo', pickPlan: 'Scegli questo piano', picked: 'Scelto',
        priceNote: 'Stima IA', exactPrice: 'Preventivo ospedale', aiBadge: 'Simulazione IA', verifiedBadge: 'Verificato ospedale',
        freeNote: 'Stai vedendo un piano di simulazione IA gratuito: nome del medico, costo esatto, prenotazione letto e dati di esito sono segnaposto.',
        unlockCta: 'Sblocca la versione verificata dall\'ospedale', costHint: 'I costi sono fasce stimate; lo sblocco mostra il prezzo dettagliato esatto'
      },

      plan: {
        tabOverview: 'Panoramica', tabTimeline: 'Itinerario', tabMedical: 'Cure', tabCost: 'Costo', tabTravel: 'Extra',
        backToList: 'Torna ai piani', itineraryTitle: 'Itinerario giornaliero completo', itinerarySub: 'Ogni giorno, dalla partenza al ritorno',
        hospitalInfo: 'Ospedale', city: 'Città', level: 'Livello', accred: 'Accreditamento', beds: 'Letti',
        medicalTeam: 'Equipe medica', chief: 'Medico curante', specialty: 'Specialità', experience: 'Anni di pratica', languages: 'Lingue di consulto', casesDone: 'Casi eseguiti',
        treatmentPlan: 'Piano di cura', procedure: 'Procedura principale', stages: 'Fasi del protocollo', stage: 'Fase', successRate: 'Metriche di esito',
        stayDays: 'Giorni di ricovero', wardType: 'Tipo di reparto', registration: 'Registrazione',
        logistics: 'Logistica', flight: 'Volo internazionale', airline: 'Vettore', cabin: 'Classe', duration: 'Durata volo', tripDays: 'Durata viaggio',
        transfer: 'Trasporto terrestre', transferGrade: 'Livello di trasferimento', transferVehicle: 'Veicolo consigliato', transferNurse: 'Infermiere a bordo', transferPerTrip: 'Per tratta', transferRound: 'Andata e ritorno (prelievo + consegna)', transferSelfBook: 'Prenota tu · la piattaforma suggerisce', transferPlatformBook: 'Prenotato dalla piattaforma', transferSource: 'Nota sulla flotta: furgone operato direttamente dalla piattaforma; ambulanza subappaltata in regime quadro, fatturata a tratta.', transferKm: 'Aeroporto → ospedale ~{n} km', transferAccessible: 'Pedana accessibile sedia a rotelle', transferBook: 'Prenota', hotel: 'Alloggio', room: 'Tipo di camera', distance: 'Dall\'ospedale',
        costTitle: 'Costo dettagliato', medicalFee: 'Onorario medico', flightFee: 'Biglietto aereo', hotelFee: 'Alloggio', transferFee: 'Trasporto terrestre',
        serviceFee: 'Tariffa servizio piattaforma', travelAddon: 'Extra turistici', total: 'Totale', estimate: 'Stima IA', exact: 'Preventivo ospedale',
        perCompanion: 'Include {n} familiare(i)',
        travelTitle: 'Extra turistici e riabilitazione', travelAdd: 'Aggiungi al viaggio', travelAdded: 'Aggiunto',
        lockedTitle: 'Questo campo mostra valori reali solo dopo la verifica dell\'ospedale',
        lockedBody: 'La versione gratuita è una simulazione IA basata su casi passati: nome del medico, costo dettagliato, numero di prenotazione letto e dati di esito sono segnaposto. Lo sblocco porta la scrivania internazionale dell\'ospedale a confermare e firmare ogni riga.',
        lockedBtn: 'Sblocca la versione verificata dall\'ospedale',
        verifiedTitle: 'Verificato dall\'ospedale', verifiedBy: 'Verificato da', verifiedAt: 'Verificato il', bedHold: 'Numero prenotazione letto',
        doctorSign: 'Firma del medico', hospitalRef: 'Numero richiesta ospedale', confidence: 'Affidabilità del piano',
        confidenceNote: 'Basato su {n} casi simili passati'
      },

      pricing: {
        title: 'Sblocca il piano verificato dall\'ospedale', sub: 'Il gratuito ti dà l\'indirizzo. Il pagamento ti dà una data prenotabile e un prezzo esatto.',
        t1Name: 'Simulazione IA', t1Desc: 'Vedi prima l\'indirizzo e l\'entità del costo', t1Price: 'Gratis', t1Unit: 'Sempre gratis, senza registrazione',
        t2Name: 'Verificato ospedale', t2Desc: 'Confermato riga per riga, pronto da prenotare', t2Unit: 'Pagamento unico · per piano',
        t3Name: 'Concierge completo', t3Desc: 'Verifica + visto, interprete, trasferimento', t3Unit: 'Pagamento unico · include tutti i vantaggi del livello verificato',
        pay: 'Sblocca ora', paid: 'Sbloccato', current: 'Attuale', upgrade: 'Passa a premium', popular: 'Più scelto',
        payTitle: 'Conferma pagamento', paySub: 'Dopo lo sblocco, la scrivania internazionale dell\'ospedale completa la verifica in 1-2 giorni lavorativi', payMethod: 'Metodo di pagamento',
        pmCard: 'Carta internazionale', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'Portafoglio elettronico', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'Bonifico bancario', pmBankSub: 'Per pagamenti medici maggiori · 1-3 giorni lavorativi',
        successTitle: 'Pagamento ricevuto — verifica richiesta', successBody: 'La scrivania internazionale dell\'ospedale ha il tuo riepilogo medico e confermerà protocollo, disponibilità del medico e letti in 1-2 giorni lavorativi. Questa pagina si aggiorna automaticamente alla conferma.',
        successBtn: 'Vedi piano verificato',
        noteRefund: 'Rimborso integrale se l\'ospedale ritiene non ci sia indicazione di cura o non può accettare il caso.',
        noteScope: 'Questa tariffa copre solo verifica e coordinamento — non volo, hotel o cure ospedaliere, pagati su piattaforme terze.',
        pkgAName: 'Piano fai-da-te', pkgADesc: 'Piano di cura verificato; prenota volo / hotel / trasferimento tu stesso', pkgBName: 'Tutto incluso', pkgBDesc: 'Piano verificato + volo / prelievo / hotel prenotati per te', pkgCName: 'Assistente personale', pkgCDesc: 'Tutto incluso + assistente personale dedicato, livello superiore',

        feat: {
          ai3: '3 itinerari di simulazione IA', range: 'Stima fascia di costo', verify: 'Protocollo verificato dall\'ospedale',
          doctor: 'Firma del medico + qualifiche', bed: 'Numero letto / slot chirurgico', exact: 'Prezzo ospedaliero dettagliato esatto',
          visa: 'Lettera di invito visto medico + guida', interp: 'Traduzione medica completa (clinica + reparto)', airport: 'Trasferimento aeroporto + accompagnamento appuntamenti',
          accompany: 'Coordinamento viaggio per 1 familiare', insurance: 'Copertura complicazioni (limite 1 M CNY)',
          flightBook: 'Prenotazione volo (Trip.com)', pickup: 'Prelievo / consegna aeroporto privato', hotelBook: 'Prenotazione hotel (Booking.com)', assistant: 'Assistente personale dedicato', vip: 'Canale prioritario VIP'
        }
      },

      booking: {
        title: 'Prenotazione e pagamento', sub: 'Volo, hotel e registrazione ospedaliera si pagano ciascuno sulla propria piattaforma. MedBridge non incassa né trattiene mai questi fondi.',
        noteTitle: 'Perché il pagamento è suddiviso', noteBody: 'Volo e hotel seguono le regole di modifica di compagnie e OTA; la registrazione ospedaliera è un servizio medico. Suddividerli dà a ogni transazione la propria ricevuta e il proprio canale di rimborso, ed evita a MedBridge di gestire un conto accentrato.',
        itemFlight: 'Volo internazionale', itemHotel: 'Alloggio', itemReg: 'Registrazione e letto', itemTransfer: 'Trasferimento privato', itemTravel: 'Extra turistici',
        provider: 'Piattaforma di pagamento', goPay: 'Paga ora', payOnPartner: 'Completa il pagamento su {p}',
        redirectTitle: 'Reindirizzamento a {p}', redirectBody: 'Sarai indirizzato a una piattaforma terza per completare questo pagamento. Pagamento, modifiche e rimborsi sono gestiti interamente da quella piattaforma.',
        redirectBtn: 'Ho capito, continua',
        summary: 'Elenco pagamenti', platformFee: 'Tariffa servizio piattaforma', platformFeeNote: 'Già pagata allo sblocco',
        doneTitle: 'Tutte le prenotazioni inviate', doneBody: 'Ogni pagamento ha la propria ricevuta. Una volta confermato il viaggio, itinerario, dettagli di prelievo e promemoria appuntamenti appaiono in I miei viaggi.',
        itemsPending: '{n} in attesa', itemsPaid: '{n} pagati'
      },

      trips: {
        title: 'I miei viaggi', sub: 'Tieni traccia dello stato e della ricevuta di ogni prenotazione.',
        empty1: 'Ancora nessun viaggio in corso', empty2: 'I piani che generi appariranno qui dopo la valutazione.',
        emptyBtn: 'Inizia la valutazione',
        orderNo: 'Numero viaggio', created: 'Creato il', viewPlan: 'Vedi piano', payNow: 'Paga ora',
        s1: 'Richiesta inviata', s2: 'Piano IA generato', s3: 'Verificato ospedale', s4: 'In attesa di pagamento', s5: 'Prenotazione confermata', s6: 'Viaggio in corso',
        pipeline: 'Avanzamento', booking: 'Prenotazione'
      },

      partners: { ctrip: 'Volo Trip.com', booking: 'Booking.com', hospital: 'Sistema registrazione ospedale', didi: 'Servizio trasferimento privato', airbnb: 'Appartamenti e alloggi' }
    }
  };

  Object.keys(EXTRA).forEach(function (k) { if (EXTRA[k]) window.MB_DICT[k] = EXTRA[k]; });
  if (window.I18N && window.I18N.LANGS) {
    window.I18N.LANGS.push(
      { code: 'it', label: 'Italiano', dir: 'ltr' }
    );
  }
})();
