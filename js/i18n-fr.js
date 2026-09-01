/* ============================================================
   MedBridge · extra i18n  (fr — Français)
   Merged into the live DICT at load time by js/i18n.js
   (global.MB_DICT). Falls back to en/zh for any missing key.
   NOTE: AI-generated first-pass French. Needs native review
   before production.
   ============================================================ */
(function () {
  'use strict';
  if (!window.MB_DICT) return;

  var EXTRA = {
    fr: {
      brand: { tagline: 'Planificateur d\'itinéraires de soins transfrontaliers' },
      nav: { home: 'Accueil', intake: 'Évaluation', plans: 'Plans de soins', pricing: 'Débloquer la version vérifiée', trips: 'Mes voyages' },
      common: {
        demoBadge: 'Prototype · Données fictives', next: 'Suivant', back: 'Retour', confirm: 'Confirmer', cancel: 'Annuler',
        close: 'Fermer', viewDetail: 'Voir le détail', select: 'Sélectionner', optional: 'Facultatif', perPerson: '/pers.',
        total: 'Total', from: 'à partir de', included: 'Inclus', notIncluded: 'Non inclus', days: 'jours', night: 'nuit',
        loading: 'Traitement…', continue: 'Continuer', currency: '¥', save: 'Enregistrer', edit: 'Modifier', per: 'par'
      },
      footer: { disclaimer: 'Prototype cliquable pour discussion produit. Tous les hôpitaux, médecins, prix et chiffres de résultats sont illustratifs et ne constituent ni un avis médical ni une offre.', demo: 'Prototype v0.9' },

      dept: {
        oncology:  { name: 'Oncologie de précision', desc: 'Ciblée / immunothérapie / conseil MDT' },
        ortho:     { name: 'Orthopédie & articulations', desc: 'Prothèse de hanche & genou assistée par robot' },
        cardio:    { name: 'Cardiovasculaire', desc: 'Angiographie / stent / rééducation' },
        ivf:       { name: 'Fertilité (FIV)', desc: 'PGT-A / stimulation personnalisée' },
        aesthetic: { name: 'Esthétique & anti-âge', desc: 'Rafraîchissement du visage / appareils énergétiques' },
        checkup:   { name: 'Bilan exécutif', desc: 'PET-MR / génomique / cardiovasculaire' }
      },

      home: {
        heroTitle: 'Planifiez tout le voyage de soins à l\'étranger — dans votre langue',
        heroSub: 'Saisissez votre diagnostic et vos résultats d\'examens. En quelques minutes, obtenez trois itinéraires de soins complets : vol, transfert, hôtel, inscription, chambre, médecin traitant, protocole de soins et coût détaillé. Commencez gratuitement avec un plan de simulation IA ; débloquez la version vérifiée par l\'hôpital quand vous êtes prêt à réserver.',
        ctaPrimary: 'Générer mon plan gratuitement', ctaSecondary: 'Comment fonctionne la plateforme',
        stat1: 'Hôpitaux partenaires', stat2: 'Cas réels appariables', stat3: 'Langues prises en charge',
        howTitle: 'Trois étapes : de « je ne sais pas où aller » à « réservation confirmée »',
        howSub: 'Le patient reste dans sa langue maternelle. La plateforme gère la traduction, la validation des prix et la coordination.',
        step1Title: 'Décrivez votre état dans votre langue', step1Body: 'Renseignez le diagnostic et téléversez scanners ou comptes-rendus de laboratoire dans votre propre langue. Le système produit un résumé médical normalisé traduit pour le bureau international de l\'hôpital.', step1Lock: 'Gratuit',
        step2Title: 'L\'IA construit trois itinéraires', step2Body: 'La plateforme interroge la bibliothèque de cas réels passés et renvoie trois options — hôpital, chirurgien, protocole, durée de séjour, vol, hôtel et coût détaillé.', step2Lock: 'Gratuit',
        step3Title: 'Débloquez la version vérifiée et réservez', step3Body: 'Après paiement, le bureau international de l\'hôpital confirme le protocole, la disponibilité du médecin et des lits, puis émet un devis exact. Le vol et l\'hôtel sont payés sur des plateformes tierces.', step3Lock: 'Payant',
        deptTitle: 'Six départements couverts', deptSub: 'Chaque département dispose d\'une bibliothèque de cas réels anonymisés appariés et recombines par l\'IA.',
        cases: '{n} cas appariables', casesUnit: 'cas',
        trustTitle: 'Pourquoi les hôpitaux rejoignent la plateforme', trustSub: 'Nous ne vendons pas du trafic. Nous transmettons des demandes structurées et une traduction initiale, réduisant le coût de communication du bureau international.',
        trust1t: 'Les demandes arrivent structurées', trust1d: 'L\'hôpital reçoit un résumé médical traduit et complet — pas une pile de comptes-rendus étrangers illisibles.',
        trust2t: 'Filtrage avant acceptation', trust2d: 'Le pré-appariement IA filtre les cas inappropriés, l\'hôpital ne traite donc que les demandes à vraie indication de soins.',
        trust3t: 'Les paiements restent hors plateforme', trust3d: 'Le vol et l\'hôtel sont encaissés par des OTA tierces ; l\'hôpital ne facture que ses soins. Aucun fonds centralisé, aucune exposition de conformité.',
        trust4t: 'Les résultats s\'accumulent', trust4d: 'Les données de suivi post-soins remontent dans la bibliothèque de cas, construisant des taux de réussite consultables et des fourchettes de prix réels.',
        ctaTitle: 'Essayez sur un scénario réaliste', ctaBody: 'Aucune inscription. Choisissez un département, saisissez un diagnostic et parcourez tout le flux en quelques minutes.', ctaBtn: 'Commencer l\'évaluation'
      },

      intake: {
        title: 'Évaluation médicale', sub: 'Répondez dans votre langue — nous traduisons pour l\'hôpital. Les champs marqués * sont obligatoires.',
        secBasic: 'Informations de base', secMedical: 'État & documents', secPref: 'Préférences de voyage',
        origin: 'Pays / ville de départ', originHint: 'Utilisé pour estimer la durée et le tarif du vol',
        dept: 'Département', deptHint: 'Choisissez l\'appariement le plus proche en cas de doute',
        disease: 'Diagnostic', diseaseHint: 'Vous pouvez l\'écrire dans votre langue.',
        diseasePh: 'ex. Adénocarcinome gastrique T3N1M0',
        reports: 'Résultats d\'examens', reportsHint: 'Téléversez comptes-rendus CT / IRM / anatomopathologie / sang (ce prototype ne téléverse pas réellement de fichiers)',
        uploadTitle: 'Cliquez pour téléverser un compte-rendu ou une imagerie', uploadDesc: 'PDF / JPG / DICOM · jusqu\'à 200 Mo par fichier',
        city: 'Ville de destination souhaitée', cityHint: 'Influence l\'hôpital, l\'hôtel et le coût du vol',
        budget: 'Fourchette de budget (CNY)', date: 'Date de départ souhaitée', companions: 'Famille accompagnatrice',
        travelPref: 'Ajouter des options touristiques', travelHint: 'Rétraite de rééducation, tourisme ou rééducation TCM après les soins',
        sideTitle: 'Ce qui va se passer ensuite', sideStep1t: 'L\'IA recherche des cas similaires', sideStep1d: 'Recherche des cas historiques les plus proches dans votre département',
        sideStep2t: 'Trois itinéraires générés', sideStep2d: 'Chacun avec plan de soins, logistique et coût complets',
        sideStep3t: 'Vous en débloquez un pour validation', sideStep3d: 'L\'hôpital confirme chaque ligne et émet un devis exact ainsi qu\'une réservation de lit',
        sideStep4t: 'Paiement sur plateforme tierce', sideStep4d: 'Le vol et l\'hôtel sont payés sur Trip.com / Booking et similaires',
        submit: 'Générer l\'itinéraire gratuitement', mobility: 'Notation des besoins de transfert', mobilityHint: 'Adapte le véhicule et la prise en charge — ne modifie pas le plan médical', disclaimer: 'Prototype : la soumission utilise des données fictives pour simulation. Rien n\'est téléversé ni envoyé.'
      },

      gen: { title: 'Construction de votre itinéraire', sub: 'L\'IA recherche des cas passés et assemble le voyage', s1: 'Traduction et normalisation du résumé médical', s2: 'Recherche dans la bibliothèque de cas du département', s3: 'Appariement de la disponibilité hôpital et médecin', s4: 'Assemblage du vol, de l\'hôtel et du transfert', s5: 'Génération d\'une estimation de coût détaillée' },

      plans: {
        title: 'Trois itinéraires de soins pour vous', sub: 'Combinaisons de simulation IA construites à partir de cas réels passés. Les champs clés n\'affichent des valeurs réelles qu\'une fois la version vérifiée par l\'hôpital débloquée.',
        match: 'Appariement', matchSub: 'Basé sur votre état, budget et calendrier', resultsFor: 'Cancer de l\'estomac · Shanghai · 200k-300k CNY',
        regenerate: 'Régénérer', tierA: 'Premium', tierB: 'Équilibré', tierC: 'Économique',
        tierADesc: 'Meilleur centre international tertiaire, le chef de département comme chirurgien', tierBDesc: 'Hôpital tertiaire solide dans la même ville, bon rapport qualité-prix', tierCDesc: 'Hôpital réputé dans une ville à bas coût',
        recommend: 'Recommandé', popular: 'Le plus souvent choisi', value: 'Meilleur rapport qualité-prix',
        hospital: 'Hôpital', doctor: 'Médecin traitant', stay: 'Hospitalisation', ward: 'Chambre', duration: 'Durée', success: 'Résultat',
        viewPlan: 'Voir le plan complet', pickPlan: 'Choisir ce plan', picked: 'Choisi',
        priceNote: 'Estimation IA', exactPrice: 'Devis hôpital', aiBadge: 'Simulation IA', verifiedBadge: 'Vérifié hôpital',
        freeNote: 'Vous consultez un plan de simulation IA gratuit : nom du médecin, coût exact, réservation de lit et données de résultat sont des espaces réservés.',
        unlockCta: 'Débloquer la version vérifiée par l\'hôpital', costHint: 'Les coûts sont des fourchettes estimées ; le déblocage affiche le prix détaillé exact'
      },

      plan: {
        tabOverview: 'Aperçu', tabTimeline: 'Itinéraire', tabMedical: 'Soins', tabCost: 'Coût', tabTravel: 'Options',
        backToList: 'Retour aux plans', itineraryTitle: 'Itinéraire quotidien complet', itinerarySub: 'Chaque jour, du départ au retour',
        hospitalInfo: 'Hôpital', city: 'Ville', level: 'Niveau', accred: 'Accréditation', beds: 'Lits',
        medicalTeam: 'Équipe médicale', chief: 'Médecin traitant', specialty: 'Spécialité', experience: 'Années de pratique', languages: 'Langues de consultation', casesDone: 'Cas réalisés',
        treatmentPlan: 'Plan de soins', procedure: 'Procédure principale', stages: 'Étapes du protocole', stage: 'Étape', successRate: 'Métriques de résultat',
        stayDays: 'Jours d\'hospitalisation', wardType: 'Type de chambre', registration: 'Inscription',
        logistics: 'Logistique', flight: 'Vol international', airline: 'Transporteur', cabin: 'Classe', duration: 'Durée du vol', tripDays: 'Durée du voyage',
        transfer: 'Transport terrestre', transferGrade: 'Niveau de transfert', transferVehicle: 'Véhicule recommandé', transferNurse: 'Infirmier à bord', transferPerTrip: 'Par trajet', transferRound: 'Aller-retour (prise en charge + dépôt)', transferSelfBook: 'Réserver soi-même · la plateforme suggère', transferPlatformBook: 'Réservé par la plateforme', transferSource: 'Note sur la flotte : van utilitaire exploité directement par la plateforme ; ambulance sous-traitée dans le cadre d\'un accord-cadre, facturée au trajet.', transferKm: 'Aéroport → hôpital ~{n} km', transferAccessible: 'Plateau accessible fauteuil roulant', transferBook: 'Réserver', hotel: 'Hébergement', room: 'Type de chambre', distance: 'De l\'hôpital',
        costTitle: 'Coût détaillé', medicalFee: 'Frais médicaux', flightFee: 'Billet d\'avion', hotelFee: 'Hébergement', transferFee: 'Transport terrestre',
        serviceFee: 'Frais de service plateforme', travelAddon: 'Options touristiques', total: 'Total', estimate: 'Estimation IA', exact: 'Devis hôpital',
        perCompanion: 'Inclut {n} membre(s) de la famille',
        travelTitle: 'Options touristiques & rééducation', travelAdd: 'Ajouter au voyage', travelAdded: 'Ajouté',
        lockedTitle: 'Ce champ n\'affiche des valeurs réelles qu\'après validation par l\'hôpital',
        lockedBody: 'La version gratuite est une simulation IA basée sur des cas passés : nom du médecin, coût détaillé, numéro de réservation de lit et données de résultat sont des espaces réservés. Le déblocage amène le bureau international de l\'hôpital à confirmer et signer chaque ligne.',
        lockedBtn: 'Débloquer la version vérifiée par l\'hôpital',
        verifiedTitle: 'Vérifié par l\'hôpital', verifiedBy: 'Vérifié par', verifiedAt: 'Vérifié le', bedHold: 'Numéro de réservation de lit',
        doctorSign: 'Signature du médecin', hospitalRef: 'Numéro de demande hôpital', confidence: 'Confiance du plan',
        confidenceNote: 'Basé sur {n} cas similaires passés'
      },

      pricing: {
        title: 'Débloquer le plan vérifié par l\'hôpital', sub: 'Le gratuit vous donne une orientation. Le payant vous donne une date réservable et un prix exact.',
        t1Name: 'Simulation IA', t1Desc: 'Voyez d\'abord l\'orientation et l\'ampleur du coût', t1Price: 'Gratuit', t1Unit: 'Toujours gratuit, sans inscription',
        t2Name: 'Vérifié hôpital', t2Desc: 'Confirmé ligne par ligne, prêt à réserver', t2Unit: 'Paiement unique · par plan',
        t3Name: 'Conciergerie complète', t3Desc: 'Validation + visa, interprète, transfert', t3Unit: 'Paiement unique · inclut tous les avantages du niveau vérifié',
        pay: 'Débloquer maintenant', paid: 'Débloqué', current: 'Actuel', upgrade: 'Améliorer', popular: 'Le plus souvent choisi',
        payTitle: 'Confirmer le paiement', paySub: 'Après le déblocage, le bureau international de l\'hôpital termine la validation en 1 à 2 jours ouvrés', payMethod: 'Méthode de paiement',
        pmCard: 'Carte internationale', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'Portefeuille électronique', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'Virement bancaire', pmBankSub: 'Pour les paiements médicaux plus importants · 1 à 3 jours ouvrés',
        successTitle: 'Paiement reçu — validation demandée', successBody: 'Le bureau international de l\'hôpital dispose de votre résumé médical et confirmera le protocole, la disponibilité du médecin et des lits en 1 à 2 jours ouvrés. Cette page se met à jour automatiquement dès validation.',
        successBtn: 'Voir le plan vérifié',
        noteRefund: 'Remboursement intégral si l\'hôpital estime qu\'il n\'y a pas d\'indication de soins ou ne peut accepter le cas.',
        noteScope: 'Ces frais ne couvrent que la validation et la coordination — pas le vol, l\'hôtel ou les soins hospitaliers, payés sur des plateformes tierces.',
        pkgAName: 'Plan DIY', pkgADesc: 'Plan de soins vérifié ; réservez vol / hôtel / transfert vous-même', pkgBName: 'Tout inclus', pkgBDesc: 'Plan vérifié + vol / prise en charge / hôtel réservés pour vous', pkgCName: 'Assistant personnel', pkgCDesc: 'Tout inclus + assistant personnel dédié, niveau supérieur',

        feat: {
          ai3: '3 itinéraires de simulation IA', range: 'Estimation de la fourchette de coût', verify: 'Protocole vérifié par l\'hôpital',
          doctor: 'Signature du médecin + qualifications', bed: 'Numéro de lit / créneau opératoire', exact: 'Prix hospitalier détaillé exact',
          visa: 'Lettre d\'invitation visa médical + guide', interp: 'Traduction médicale complète (clinique + chambre)', airport: 'Transfert aéroport + accompagnement rendez-vous',
          accompany: 'Coordination du voyage pour 1 membre de la famille', insurance: 'Couverture des complications (limite 1 M CNY)',
          flightBook: 'Réservation de vol (Trip.com)', pickup: 'Prise en charge / dépôt aéroport privé', hotelBook: 'Réservation hôtel (Booking.com)', assistant: 'Assistant personnel dédié', vip: 'Couloir prioritaire VIP'
        }
      },

      booking: {
        title: 'Réservation & paiement', sub: 'Le vol, l\'hôtel et l\'inscription hospitalière se paient chacun sur leur propre plateforme. MedBridge ne collecte ni ne conserve jamais ces fonds.',
        noteTitle: 'Pourquoi le paiement est fragmenté', noteBody: 'Le vol et l\'hôtel suivent les règles de modification des compagnies et des OTA ; l\'inscription hospitalière est un service médical. Les fragmenter donne à chaque transaction son propre reçu et son propre circuit de remboursement, et empêche MedBridge de gérer un compte centralisé.',
        itemFlight: 'Vol international', itemHotel: 'Hébergement', itemReg: 'Inscription & lit', itemTransfer: 'Transfert privé', itemTravel: 'Options touristiques',
        provider: 'Plateforme de paiement', goPay: 'Payer maintenant', payOnPartner: 'Complétez le paiement sur {p}',
        redirectTitle: 'Redirection vers {p}', redirectBody: 'Vous allez être dirigé vers une plateforme tierce pour compléter ce paiement. Le paiement, les modifications et les remboursements sont entièrement gérés par cette plateforme.',
        redirectBtn: 'Compris, continuer',
        summary: 'Liste de paiement', platformFee: 'Frais de service plateforme', platformFeeNote: 'Déjà payés lors du déblocage',
        doneTitle: 'Toutes les réservations envoyées', doneBody: 'Chaque paiement dispose de son propre reçu. Une fois le voyage confirmé, l\'itinéraire, les détails de prise en charge et les rappels de rendez-vous apparaissent sous Mes voyages.',
        itemsPending: '{n} en attente', itemsPaid: '{n} payés'
      },

      trips: {
        title: 'Mes voyages', sub: 'Suivez le statut et le reçu de chaque réservation.',
        empty1: 'Aucun voyage en cours pour l\'instant', empty2: 'Les plans que vous générez apparaîtront ici après l\'évaluation.',
        emptyBtn: 'Commencer l\'évaluation',
        orderNo: 'Numéro de voyage', created: 'Créé le', viewPlan: 'Voir le plan', payNow: 'Payer maintenant',
        s1: 'Demande envoyée', s2: 'Plan IA généré', s3: 'Vérifié hôpital', s4: 'En attente de paiement', s5: 'Réservation confirmée', s6: 'Voyage en cours',
        pipeline: 'Avancement', booking: 'Réservation'
      },

      partners: { ctrip: 'Vol Trip.com', booking: 'Booking.com', hospital: 'Système d\'inscription hôpital', didi: 'Service de transfert privé', airbnb: 'Appartements & hébergement' }
    }
  };

  Object.keys(EXTRA).forEach(function (k) { if (EXTRA[k]) window.MB_DICT[k] = EXTRA[k]; });
  if (window.I18N && window.I18N.LANGS) {
    window.I18N.LANGS.push(
      { code: 'fr', label: 'Français', dir: 'ltr' }
    );
  }
})();
