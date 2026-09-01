/* ============================================================
   MedBridge · extra data strings  (fr — Français)
   Augments the live window.DATA objects at load time.
   ============================================================ */
(function () {
  'use strict';
  if (!window.DATA) return;
  var D = window.DATA;

  /* ---------------- CITIES ---------------- */
  var CN = {
    shanghai:  { fr: 'Shanghai' },
    beijing:   { fr: 'Pékin' },
    guangzhou: { fr: 'Guangzhou' },
    chengdu:   { fr: 'Chengdu' },
    hangzhou:  { fr: 'Hangzhou' },
    boao:      { fr: 'Boao, Hainan' }
  };
  D.CITIES.forEach(function (c) { if (CN[c.id]) Object.assign(c.name, CN[c.id]); });

  /* ---------------- TIERS flightClass ---------------- */
  var FL = {
    A: { fr: 'Affaires' },
    B: { fr: 'Économique premium' },
    C: { fr: 'Économique' }
  };
  D.TIERS.forEach(function (t) { if (FL[t.id]) Object.assign(t.flightClass, FL[t.id]); });

  /* ---------------- TRANSFER_MODELS ---------------- */
  var TM = {
    van_gl8:  { fr: 'Van utilitaire GL8 (avec chauffeur)' },
    amb_c:    { fr: 'Ambulance · Classe C' },
    amb_b:    { fr: 'Ambulance · Classe B' },
    amb_a:    { fr: 'Ambulance · Classe A' },
    van_alph: { fr: 'Toyota Alphard (avec chauffeur)' }
  };
  D.TRANSFER_MODELS.forEach(function (m) { if (TM[m.id]) Object.assign(m.name, TM[m.id]); });

  /* ---------------- TRANSFER_GRADES ---------------- */
  var TG = {
    A: {
      label: { fr: 'Ambulatoire' },
      desc:  { fr: 'Bilan, suivi, ambulatoire, esthétique, FIV, cas légers' }
    },
    B: {
      label: { fr: 'Besoin d\'aide / fauteuil roulant' },
      desc:  { fr: 'Rééducation post-op, mobilité limitée, constantes stables' }
    },
    C: {
      label: { fr: 'Brancard / oxygène' },
      desc:  { fr: 'Retour post-op, alité, drain, oxygène, monitoring cardiaque' }
    },
    D: {
      label: { fr: 'Critique / transfert ICU' },
      desc:  { fr: 'Support vital (ventilateur, pompe à perfusion) ou transfert critique transfrontalier' }
    }
  };
  Object.keys(TG).forEach(function (g) {
    if (D.TRANSFER_GRADES[g]) { Object.assign(D.TRANSFER_GRADES[g].label, TG[g].label); Object.assign(D.TRANSFER_GRADES[g].desc, TG[g].desc); }
  });

  /* ---------------- BUDGETS ---------------- */
  var BD = {
    b1: { fr: 'Moins de 100k' },
    b2: { fr: '100k – 200k' },
    b3: { fr: '200k – 300k' },
    b4: { fr: '300k – 500k' },
    b5: { fr: 'Plus de 500k' }
  };
  D.BUDGETS.forEach(function (b) { if (BD[b.id]) Object.assign(b, BD[b.id]); });

  /* ---------------- ADDONS ---------------- */
  var AD = {
    a1: { fr: 'Forfait rééducation TCM (6 séances)', desc_fr: 'Acupuncture + tuina + plantes, une fois par jour en rééducation' },
    a2: { fr: 'Visite urbaine demi-journée accompagnant × 2', desc_fr: 'Guide + voiture privée, rythme adapté à la tolérance post-traitement' },
    a3: { fr: 'Extension hôtel de rééducation 3 nuits', desc_fr: 'Hôtel de rééducation à proximité après la sortie : repas, surveillance des constantes quotidienne, kiné de base' },
    a4: { fr: 'Upgrade interprète médical à temps plein', desc_fr: 'Interprète en dehors des heures de clinique : conseils médicamenteux et communication familiale' },
    a5: { fr: 'Retraite source chaude / bord de mer 3 jours', desc_fr: 'Séjour de rééducation à faible intensité après les soins, 1 infirmier accompagnant' }
  };
  D.ADDONS.forEach(function (a) {
    var t = AD[a.id];
    if (t) {
      Object.assign(a, { fr: t.fr });
      if (a.desc) Object.assign(a.desc, { fr: t.desc_fr });
    }
  });

  /* ---------------- MEDICAL ---------------- */
  var MED = {
    oncology: {
      procedure: { fr: 'Thérapie ciblée de précision + immunothérapie (inhibiteur PD-1)' },
      outcome:   { fr: 'Taux de réponse objectif ~62 %' },
      ward:      { fr: 'Chambre individuelle oncologie (avec lit accompagnant)' },
      reg:       { fr: 'Consultation d\'expert VIP · couloir rapide international' },
      stages: [
        { fr: 'Revue des dossiers à distance + consultation de lames anatomopathologiques' },
        { fr: 'Stadification TEP-CT + séquençage de nouvelle génération (NGS)' },
        { fr: 'Conseil pluridisciplinaire (MDT) pour confirmer le protocole de première ligne' },
        { fr: 'Combinaison ciblée + immunothérapie, cycle 1' },
        { fr: 'Surveillance des effets indésirables & soins de support' },
        { fr: 'Évaluation de la réponse par imagerie (RECIST 1.1)' },
        { fr: 'Médicaments de sortie, calendrier de perfusion, suivi à domicile' }
      ]
    },
    ortho: {
      procedure: { fr: 'Prothèse de genou / hanche mini-invasive assistée par robot' },
      outcome:   { fr: 'Survie de l\'implant à 10 ans > 95 %' },
      ward:      { fr: 'Chambre individuelle orthopédique · salle de bain accessible' },
      reg:       { fr: 'Consultation de chirurgie articulaire · planification opératoire' },
      stages: [
        { fr: 'Imagerie pré-op, alignement & analyse de la marche' },
        { fr: 'Évaluation anesthésie & bilans sanguins pré-op' },
        { fr: 'Arthroplastie assistée par robot (~90 min)' },
        { fr: 'Monitoring 24 h & analgésie multimodale' },
        { fr: 'Rééducation deux fois par jour (CPM + entraînement de la marche)' },
        { fr: 'Évaluation de l\'autonomie à la déambulateur & revue pré-sortie' },
        { fr: 'Plan de rééducation à domicile & suivi à distance' }
      ]
    },
    cardio: {
      procedure: { fr: 'Coronarographie + ballonnet actif / tuteur biorésorbable' },
      outcome:   { fr: 'Succès de la procédure 98 %+, réadmission à 30 j < 2 %' },
      ward:      { fr: 'Désengorgement USC + chambre individuelle cardiologie' },
      reg:       { fr: 'Consultation de cardiologie · planification du laboratoire de cathétérisme' },
      stages: [
        { fr: 'Échocardiographie + angioscanner coronaire' },
        { fr: 'Consultation cardiologique & stratification du risque' },
        { fr: 'Angiographie + intervention (voie radiale)' },
        { fr: 'Monitoring USC 48 h' },
        { fr: 'Rééducation cardiaque phase I' },
        { fr: 'Nouveau test de tolérance à l\'effort' },
        { fr: 'Schéma antiagrégant double & suivi' }
      ]
    },
    ivf: {
      procedure: { fr: 'FIV PGT-A · stimulation antagoniste individualisée' },
      outcome:   { fr: 'Taux de grossesse clinique ~58 % (âge < 35)' },
      ward:      { fr: 'Hospitalisation de jour · observation 6 h post-prélèvement' },
      reg:       { fr: 'Consultation centre de fertilité · ouverture du dossier' },
      stages: [
        { fr: 'Bilan de fertilité du couple (AMH / analyse du sperme)' },
        { fr: 'Protocole de stimulation individualisé' },
        { fr: 'Stimulation & monitoring des follicules (10-12 jours)' },
        { fr: 'Prélèvement d\'ovocytes + ICSI' },
        { fr: 'Culture du blastocyste + dépistage PGT-A' },
        { fr: 'Transfert d\'embryon congelé-décongelé' },
        { fr: 'Confirmation de grossesse (hCG + échographie transvaginale)' }
      ]
    },
    aesthetic: {
      procedure: { fr: 'Rafraîchissement facial complet · appareil énergétique + comblement + lifting par fils' },
      outcome:   { fr: 'Satisfaction 96 % au suivi à 6 mois' },
      ward:      { fr: 'Observation de jour (sans nuit)' },
      reg:       { fr: 'Consultation de médecine esthétique' },
      stages: [
        { fr: 'Imagerie cutanée & conception esthétique 3D' },
        { fr: 'Traitement par énergie séance 1 (HIFU / RF)' },
        { fr: 'Comblement & lifting par fils' },
        { fr: 'Soins de réparation post-procédure & refroidissement' },
        { fr: 'Traitement par énergie séance 2' },
        { fr: 'Évaluation du résultat & plan de soins à domicile' },
        { fr: 'Suivi en ligne à 6 mois' }
      ]
    },
    checkup: {
      procedure: { fr: 'Dépistage approfondi complet · oncologie + cardiovasculaire + génomique' },
      outcome:   { fr: 'Détection des lésions précoces ~3,2× plus élevée' },
      ward:      { fr: 'Suite VIP de gestion de la santé' },
      reg:       { fr: 'Réservation VIP gestion de la santé' },
      stages: [
        { fr: 'Questionnaire de santé & risque antécédents familiaux' },
        { fr: 'Bilan d\'une journée complète (imagerie + endoscopie + laboratoire)' },
        { fr: 'Dépistage précoce du cancer TEP-MR' },
        { fr: 'Profil génomique & métabolomique' },
        { fr: 'Consultation individuelle des résultats' },
        { fr: 'Second avis spécialisé (si anormal)' },
        { fr: 'Plan d\'intervention & suivi à domicile' }
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
