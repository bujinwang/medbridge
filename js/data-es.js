/* ============================================================
   MedBridge · extra data strings  (es — Español)
   Augments the live window.DATA objects at load time.
   ============================================================ */
(function () {
  'use strict';
  if (!window.DATA) return;
  var D = window.DATA;

  /* ---------------- CITIES ---------------- */
  var CN = {
    shanghai:  { es: 'Shanghái' },
    beijing:   { es: 'Pekín' },
    guangzhou: { es: 'Guangzhou' },
    chengdu:   { es: 'Chengdu' },
    hangzhou:  { es: 'Hangzhou' },
    boao:      { es: 'Boao, Hainan' }
  };
  D.CITIES.forEach(function (c) { if (CN[c.id]) Object.assign(c.name, CN[c.id]); });

  /* ---------------- TIERS flightClass ---------------- */
  var FL = {
    A: { es: 'Clase ejecutiva' },
    B: { es: 'Económica premium' },
    C: { es: 'Económica' }
  };
  D.TIERS.forEach(function (t) { if (FL[t.id]) Object.assign(t.flightClass, FL[t.id]); });

  /* ---------------- TRANSFER_MODELS ---------------- */
  var TM = {
    van_gl8:  { es: 'Furgoneta de negocios GL8 (con conductor)' },
    amb_c:    { es: 'Ambulancia · Clase C' },
    amb_b:    { es: 'Ambulancia · Clase B' },
    amb_a:    { es: 'Ambulancia · Clase A' },
    van_alph: { es: 'Toyota Alphard (con conductor)' }
  };
  D.TRANSFER_MODELS.forEach(function (m) { if (TM[m.id]) Object.assign(m.name, TM[m.id]); });

  /* ---------------- TRANSFER_GRADES ---------------- */
  var TG = {
    A: {
      label: { es: 'Deambula' },
      desc:  { es: 'Chequeo, seguimiento, ambulatorio, estética, FIV, casos leves' }
    },
    B: {
      label: { es: 'Necesita ayuda / silla de ruedas' },
      desc:  { es: 'Recuperación postoperatoria, movilidad limitada, constantes estables' }
    },
    C: {
      label: { es: 'Camilla / oxígeno' },
      desc:  { es: 'Regreso postoperatorio, encamado, drenaje, oxígeno, monitorización cardíaca' }
    },
    D: {
      label: { es: 'Crítico / traslado UCI' },
      desc:  { es: 'Soporte vital (ventilador, bomba de infusión) o traslado crítico transfronterizo' }
    }
  };
  Object.keys(TG).forEach(function (g) {
    if (D.TRANSFER_GRADES[g]) { Object.assign(D.TRANSFER_GRADES[g].label, TG[g].label); Object.assign(D.TRANSFER_GRADES[g].desc, TG[g].desc); }
  });

  /* ---------------- BUDGETS ---------------- */
  var BD = {
    b1: { es: 'Menos de 100k' },
    b2: { es: '100k – 200k' },
    b3: { es: '200k – 300k' },
    b4: { es: '300k – 500k' },
    b5: { es: 'Más de 500k' }
  };
  D.BUDGETS.forEach(function (b) { if (BD[b.id]) Object.assign(b, BD[b.id]); });

  /* ---------------- ADDONS ---------------- */
  var AD = {
    a1: { es: 'Paquete de rehabilitación MTC (6 sesiones)', desc_es: 'Acupuntura + tuina + hierbas, una vez al día durante la recuperación' },
    a2: { es: 'Visita urbana de medio día para acompañante × 2', desc_es: 'Guía + coche privado, ritmo adaptado a la tolerancia postratamiento' },
    a3: { es: 'Extensión de hotel de recuperación 3 noches', desc_es: 'Hotel de recuperación cercano tras el alta: comidas, control diario de constantes, fisioterapia básica' },
    a4: { es: 'Mejora de intérprete médico a tiempo completo', desc_es: 'Intérprete fuera del horario de clínica: orientación sobre medicación y comunicación familiar' },
    a5: { es: 'Retiro de aguas termales / playa 3 días', desc_es: 'Estancia de recuperación de baja intensidad tras el tratamiento, 1 enfermero acompañante' }
  };
  D.ADDONS.forEach(function (a) {
    var t = AD[a.id];
    if (t) {
      Object.assign(a, { es: t.es });
      if (a.desc) Object.assign(a.desc, { es: t.desc_es });
    }
  });

  /* ---------------- MEDICAL ---------------- */
  var MED = {
    oncology: {
      procedure: { es: 'Terapia dirigida de precisión + inmunoterapia (inhibidor PD-1)' },
      outcome:   { es: 'Tasa de respuesta objetiva ~62 %' },
      ward:      { es: 'Habitación individual de oncología (con cama de acompañante)' },
      reg:       { es: 'Consulta de especialista VIP · vía rápida internacional' },
      stages: [
        { es: 'Revisión de historia clínica a distancia + consulta de laminillas anatomopatológicas' },
        { es: 'Estadificación PET-TC + secuenciación de nueva generación (NGS)' },
        { es: 'Comité MDT confirma el protocolo de primera línea' },
        { es: 'Combinación dirigida + inmunoterapia, ciclo 1' },
        { es: 'Monitorización de efectos adversos y cuidados de soporte' },
        { es: 'Evaluación de la respuesta por imagen (RECIST 1.1)' },
        { es: 'Medicación al alta, calendario de perfusión, seguimiento en casa' }
      ]
    },
    ortho: {
      procedure: { es: 'Prótesis de rodilla / cadera mínimamente invasiva asistida por robot' },
      outcome:   { es: 'Supervivencia del implante a 10 años > 95 %' },
      ward:      { es: 'Habitación individual ortopédica · baño accesible' },
      reg:       { es: 'Consulta de cirugía articular · programación quirúrgica' },
      stages: [
        { es: 'Imagen preop, alineación y análisis de la marcha' },
        { es: 'Evaluación de anestesia y analítica preop' },
        { es: 'Artroplastia asistida por robot (~90 min)' },
        { es: 'Monitorización 24 h y analgesia multimodal' },
        { es: 'Rehabilitación dos veces al día (CPM + entrenamiento de la marcha)' },
        { es: 'Evaluación de marcha independiente con andador y revisión previa al alta' },
        { es: 'Plan de rehabilitación en casa y seguimiento a distancia' }
      ]
    },
    cardio: {
      procedure: { es: 'Coronariografía + balón con fármaco / endoprótesis reabsorbible' },
      outcome:   { es: 'Éxito del procedimiento 98 %+, reingreso a 30 días < 2 %' },
      ward:      { es: 'Transición de UCI + habitación individual de cardiología' },
      reg:       { es: 'Consulta de cardiología · programación de sala de cateterismo' },
      stages: [
        { es: 'Ecocardiografía + angio-TC coronario' },
        { es: 'Consulta de cardiología y estratificación de riesgo' },
        { es: 'Angiografía + intervención (acceso radial)' },
        { es: 'Monitorización UCI 48 h' },
        { es: 'Rehabilitación cardíaca fase I' },
        { es: 'Nueva prueba de tolerancia al esfuerzo' },
        { es: 'Régimen antiagregante doble y seguimiento' }
      ]
    },
    ivf: {
      procedure: { es: 'FIV PGT-A · estimulación antagonista individualizada' },
      outcome:   { es: 'Tasa de embarazo clínico ~58 % (edad < 35)' },
      ward:      { es: 'Hospital de día · observación 6 h tras la extracción' },
      reg:       { es: 'Consulta de centro de fertilidad · apertura de historia' },
      stages: [
        { es: 'Estudio de fertilidad de la pareja (AMH / análisis de semen)' },
        { es: 'Protocolo de estimulación individualizado' },
        { es: 'Estimulación y monitorización de folículos (10-12 días)' },
        { es: 'Extracción de ovocitos + ICSI' },
        { es: 'Cultivo de blastocisto + cribado PGT-A' },
        { es: 'Transferencia de embrión congelado-deshielo' },
        { es: 'Confirmación de embarazo (hCG + ecografía transvaginal)' }
      ]
    },
    aesthetic: {
      procedure: { es: 'Rejuvenecimiento facial integral · dispositivo de energía + relleno + lifting con hilos' },
      outcome:   { es: 'Satisfacción 96 % en el seguimiento a 6 meses' },
      ward:      { es: 'Observación de día (sin pernoctar)' },
      reg:       { es: 'Consulta de medicina estética' },
      stages: [
        { es: 'Imagen de la piel y diseño estético 3D' },
        { es: 'Tratamiento basado en energía sesión 1 (HIFU / RF)' },
        { es: 'Relleno y lifting con hilos' },
        { es: 'Cuidado de reparación postratamiento y enfriamiento' },
        { es: 'Tratamiento basado en energía sesión 2' },
        { es: 'Evaluación del resultado y plan de cuidado en casa' },
        { es: 'Seguimiento en línea a 6 meses' }
      ]
    },
    checkup: {
      procedure: { es: 'Cribado profundo de cuerpo completo · oncología + cardiovascular + genómica' },
      outcome:   { es: 'Detección de lesiones precoces ~3,2× mayor' },
      ward:      { es: 'Suite VIP de gestión de la salud' },
      reg:       { es: 'Reserva VIP de gestión de la salud' },
      stages: [
        { es: 'Cuestionario de salud y riesgo por antecedentes familiares' },
        { es: 'Estudio de un día completo (imagen + endoscopia + laboratorio)' },
        { es: 'Cribado temprano de cáncer PET-RM' },
        { es: 'Perfil genómico y metabolómico' },
        { es: 'Consulta individual de resultados' },
        { es: 'Segunda opinión de especialista (si anormal)' },
        { es: 'Plan de intervención y seguimiento en casa' }
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
