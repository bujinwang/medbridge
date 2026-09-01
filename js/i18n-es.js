/* ============================================================
   MedBridge · extra i18n  (es — Español)
   Merged into the live DICT at load time by js/i18n.js
   (global.MB_DICT). Falls back to en/zh for any missing key.
   NOTE: AI-generated first-pass Spanish. Needs native review
   before production.
   ============================================================ */
(function () {
  'use strict';
  if (!window.MB_DICT) return;

  var EXTRA = {
    es: {
      brand: { tagline: 'Planificador de itinerarios de tratamiento transfronterizo' },
      nav: { home: 'Inicio', intake: 'Evaluación', plans: 'Planes de tratamiento', pricing: 'Desbloquear versión verificada', trips: 'Mis viajes' },
      common: {
        demoBadge: 'Prototipo · Datos de muestra', next: 'Siguiente', back: 'Atrás', confirm: 'Confirmar', cancel: 'Cancelar',
        close: 'Cerrar', viewDetail: 'Ver detalle', select: 'Seleccionar', optional: 'Opcional', perPerson: '/pers.',
        total: 'Total', from: 'desde', included: 'Incluido', notIncluded: 'No incluido', days: 'días', night: 'noche',
        loading: 'Procesando…', continue: 'Continuar', currency: '¥', save: 'Guardar', edit: 'Editar', per: 'por'
      },
      footer: { disclaimer: 'Prototipo clicable para debate de producto. Todos los hospitales, médicos, precios y cifras de resultados son ilustrativos y no constituyen asesoramiento médico ni una oferta.', demo: 'Prototipo v0.9' },

      dept: {
        oncology:  { name: 'Oncología de precisión', desc: 'Dirigida / inmunoterapia / consejo MDT' },
        ortho:     { name: 'Ortopedia y articulaciones', desc: 'Prótesis de cadera y rodilla asistida por robot' },
        cardio:    { name: 'Cardiovascular', desc: 'Angiografía / stent / rehabilitación' },
        ivf:       { name: 'Fertilidad (FIV)', desc: 'PGT-A / estimulación personalizada' },
        aesthetic: { name: 'Estética y antienvejecimiento', desc: 'Rejuvenecimiento facial / dispositivos de energía' },
        checkup:   { name: 'Chequeo ejecutivo', desc: 'PET-RM / genómica / cardiovascular' }
      },

      home: {
        heroTitle: 'Planifica todo el viaje de tratamiento al extranjero — en tu idioma',
        heroSub: 'Introduce tu diagnóstico y tus resultados de pruebas. En pocos minutos obtén tres itinerarios de tratamiento completos: vuelo, traslado, hotel, registro, habitación, médico tratante, protocolo de tratamiento y coste detallado. Empieza gratis con un plan de simulación IA; desbloquea la versión verificada por el hospital cuando estés listo para reservar.',
        ctaPrimary: 'Generar mi plan gratis', ctaSecondary: 'Cómo funciona la plataforma',
        stat1: 'Hospitales asociados', stat2: 'Casos reales emparejables', stat3: 'Idiomas compatibles',
        howTitle: 'Tres pasos: de « no sé adónde ir » a « reserva confirmada »',
        howSub: 'El paciente se queda en su idioma materno. La plataforma gestiona la traducción, la validación de precios y la coordinación.',
        step1Title: 'Describe tu estado en tu idioma', step1Body: 'Completa el diagnóstico y sube escáneres o informes de laboratorio en tu propio idioma. El sistema genera un resumen médico normalizado traducido para la mesa internacional del hospital.', step1Lock: 'Gratis',
        step2Title: 'La IA construye tres itinerarios', step2Body: 'La plataforma consulta la biblioteca de casos reales pasados y devuelve tres opciones — hospital, cirujano, protocolo, duración de la estancia, vuelo, hotel y coste detallado.', step2Lock: 'Gratis',
        step3Title: 'Desbloquea la versión verificada y reserva', step3Body: 'Tras el pago, la mesa internacional del hospital confirma el protocolo, la disponibilidad del médico y las camas, y emite un presupuesto exacto. El vuelo y el hotel se pagan en plataformas de terceros.', step3Lock: 'De pago',
        deptTitle: 'Seis departamentos cubiertos', deptSub: 'Cada departamento cuenta con una biblioteca de casos reales anónimos emparejados y recombinados por la IA.',
        cases: '{n} casos emparejables', casesUnit: 'casos',
        trustTitle: 'Por qué los hospitales se unen', trustSub: 'No vendemos tráfico. Entregamos solicitudes estructuradas y una traducción inicial, reduciendo el coste de comunicación de la mesa internacional.',
        trust1t: 'Las solicitudes llegan estructuradas', trust1d: 'El hospital recibe un resumen médico traducido y completo — no una pila de informes extranjeros ilegibles.',
        trust2t: 'Filtrado antes de aceptar', trust2d: 'La preemparejamiento IA filtra los casos inadecuados, así el hospital solo gestiona consultas con indicación real de tratamiento.',
        trust3t: 'Los pagos permanecen fuera de la plataforma', trust3d: 'El vuelo y el hotel los cobran OTA de terceros; el hospital solo factura sus propios servicios médicos. Sin fondos centralizados, sin exposición de cumplimiento.',
        trust4t: 'Los resultados se acumulan', trust4d: 'Los datos de seguimiento postratamiento vuelven a la biblioteca de casos, construyendo tasas de éxito consultables y rangos de precios reales.',
        ctaTitle: 'Prueba con un escenario realista', ctaBody: 'Sin registro. Elige un departamento, introduce un diagnóstico y recorre todo el flujo en pocos minutos.', ctaBtn: 'Empezar evaluación'
      },

      intake: {
        title: 'Evaluación médica', sub: 'Responde en tu idioma — nosotros traducimos para el hospital. Los campos marcados con * son obligatorios.',
        secBasic: 'Básico', secMedical: 'Estado y documentos', secPref: 'Preferencias de viaje',
        origin: 'País / ciudad de salida', originHint: 'Se usa para estimar la duración del vuelo y la tarifa',
        dept: 'Departamento', deptHint: 'Elige la coincidencia más cercana si tienes dudas',
        disease: 'Diagnóstico', diseaseHint: 'Puedes escribirlo en tu idioma.',
        diseasePh: 'p. ej. Adenocarcinoma gástrico T3N1M0',
        reports: 'Resultados de pruebas', reportsHint: 'Sube informes TC / RM / anatomía patológica / sangre (este prototipo no sube archivos realmente)',
        uploadTitle: 'Haz clic para subir un informe o imagen', uploadDesc: 'PDF / JPG / DICOM · hasta 200 MB por archivo',
        city: 'Ciudad de destino preferida', cityHint: 'Influye en el hospital, el hotel y el coste del vuelo',
        budget: 'Rango de presupuesto (CNY)', date: 'Fecha de salida preferida', companions: 'Familiares acompañantes',
        travelPref: 'Añadir opciones turísticas', travelHint: 'Retiro de rehabilitación, turismo o rehabilitación TCM tras el tratamiento',
        sideTitle: 'Qué ocurrirá a continuación', sideStep1t: 'La IA busca casos similares', sideStep1d: 'Busca los casos históricos más cercanos en tu departamento',
        sideStep2t: 'Se generan tres itinerarios', sideStep2d: 'Cada uno con plan de tratamiento, logística y coste completos',
        sideStep3t: 'Desbloqueas uno para validación', sideStep3d: 'El hospital confirma cada línea y emite un presupuesto exacto y una reserva de cama',
        sideStep4t: 'Pago en plataforma de terceros', sideStep4d: 'El vuelo y el hotel se pagan en Trip.com / Booking y similares',
        submit: 'Generar itinerario gratis', mobility: 'Clasificación de necesidades de traslado', mobilityHint: 'Adapta el vehículo y la atención adecuados — no cambia el plan médico', disclaimer: 'Prototipo: el envío usa datos de muestra para simulación. Nada se sube ni se envía.'
      },

      gen: { title: 'Construyendo tu itinerario', sub: 'La IA busca casos pasados y ensambla el viaje', s1: 'Traducir y normalizar el resumen médico', s2: 'Buscar en la biblioteca de casos del departamento', s3: 'Emparejar disponibilidad de hospital y médico', s4: 'Ensamblar vuelo, hotel y traslado', s5: 'Generar estimación de coste detallada' },

      plans: {
        title: 'Tres itinerarios de tratamiento para ti', sub: 'Combinaciones de simulación IA basadas en casos reales pasados. Los campos clave solo muestran valores reales tras desbloquear la versión verificada por el hospital.',
        match: 'Emparejamiento', matchSub: 'Según tu estado, presupuesto y calendario', resultsFor: 'Cáncer de estómago · Shanghái · 200k-300k CNY',
        regenerate: 'Regenerar', tierA: 'Premium', tierB: 'Equilibrado', tierC: 'Económico',
        tierADesc: 'Mejor centro internacional terciario, el jefe de departamento como cirujano', tierBDesc: 'Hospital terciario sólido en la misma ciudad, buena relación calidad-precio', tierCDesc: 'Hospital reputado en una ciudad de bajo coste',
        recommend: 'Recomendado', popular: 'Más elegido', value: 'Mejor relación calidad-precio',
        hospital: 'Hospital', doctor: 'Médico tratante', stay: 'Hospitalización', ward: 'Habitación', duration: 'Duración', success: 'Resultado',
        viewPlan: 'Ver plan completo', pickPlan: 'Elegir este plan', picked: 'Elegido',
        priceNote: 'Estimación IA', exactPrice: 'Presupuesto hospital', aiBadge: 'Simulación IA', verifiedBadge: 'Verificado por hospital',
        freeNote: 'Estás viendo un plan de simulación IA gratuito: nombre del médico, coste exacto, reserva de cama y datos de resultados son marcadores de posición.',
        unlockCta: 'Desbloquear la versión verificada por el hospital', costHint: 'Los costes son rangos estimados; al desbloquear se muestra el precio detallado exacto'
      },

      plan: {
        tabOverview: 'Resumen', tabTimeline: 'Itinerario', tabMedical: 'Tratamiento', tabCost: 'Coste', tabTravel: 'Opciones',
        backToList: 'Volver a los planes', itineraryTitle: 'Itinerario diario completo', itinerarySub: 'Cada día, desde la salida hasta el regreso',
        hospitalInfo: 'Hospital', city: 'Ciudad', level: 'Nivel', accred: 'Acreditación', beds: 'Camas',
        medicalTeam: 'Equipo médico', chief: 'Médico tratante', specialty: 'Especialidad', experience: 'Años de práctica', languages: 'Idiomas de consulta', casesDone: 'Casos realizados',
        treatmentPlan: 'Plan de tratamiento', procedure: 'Procedimiento principal', stages: 'Fases del protocolo', stage: 'Fase', successRate: 'Métricas de resultado',
        stayDays: 'Días de hospitalización', wardType: 'Tipo de habitación', registration: 'Registro',
        logistics: 'Logística', flight: 'Vuelo internacional', airline: 'Transportista', cabin: 'Clase', duration: 'Duración del vuelo', tripDays: 'Duración del viaje',
        transfer: 'Transporte terrestre', transferGrade: 'Nivel de traslado', transferVehicle: 'Vehículo recomendado', transferNurse: 'Enfermero a bordo', transferPerTrip: 'Por trayecto', transferRound: 'Ida y vuelta (recogida + entrega)', transferSelfBook: 'Reservar uno mismo · la plataforma sugiere', transferPlatformBook: 'Reservado por la plataforma', transferSource: 'Nota de flota: furgoneta de uso propio operada por la plataforma; ambulancia subcontratada en régimen marco, facturada por trayecto.', transferKm: 'Aeropuerto → hospital ~{n} km', transferAccessible: 'Rampa accesible para silla de ruedas', transferBook: 'Reservar', hotel: 'Alojamiento', room: 'Tipo de habitación', distance: 'Del hospital',
        costTitle: 'Coste detallado', medicalFee: 'Honorarios médicos', flightFee: 'Billete de avión', hotelFee: 'Alojamiento', transferFee: 'Transporte terrestre',
        serviceFee: 'Tarifa de servicio de plataforma', travelAddon: 'Opciones turísticas', total: 'Total', estimate: 'Estimación IA', exact: 'Presupuesto hospital',
        perCompanion: 'Incluye {n} familiar(es)',
        travelTitle: 'Opciones turísticas y de rehabilitación', travelAdd: 'Añadir al viaje', travelAdded: 'Añadido',
        lockedTitle: 'Este campo solo muestra valores reales tras la verificación del hospital',
        lockedBody: 'La versión gratuita es una simulación IA basada en casos pasados: nombre del médico, coste detallado, número de reserva de cama y datos de resultados son marcadores de posición. Al desbloquear, la mesa internacional del hospital confirma y firma cada línea.',
        lockedBtn: 'Desbloquear la versión verificada por el hospital',
        verifiedTitle: 'Verificado por el hospital', verifiedBy: 'Verificado por', verifiedAt: 'Verificado el', bedHold: 'Número de reserva de cama',
        doctorSign: 'Firma del médico', hospitalRef: 'Número de solicitud del hospital', confidence: 'Confianza del plan',
        confidenceNote: 'Basado en {n} casos similares pasados'
      },

      pricing: {
        title: 'Desbloquear el plan verificado por el hospital', sub: 'Lo gratuito te da la dirección. Lo de pago te da una fecha reservable y un precio exacto.',
        t1Name: 'Simulación IA', t1Desc: 'Ve primero la dirección y la magnitud del coste', t1Price: 'Gratis', t1Unit: 'Siempre gratis, sin registro',
        t2Name: 'Verificado por hospital', t2Desc: 'Confirmado línea por línea, listo para reservar', t2Unit: 'Pago único · por plan',
        t3Name: 'Concierge completo', t3Desc: 'Verificación + visado, intérprete, traslado', t3Unit: 'Pago único · incluye todos los beneficios del nivel verificado',
        pay: 'Desbloquear ahora', paid: 'Desbloqueado', current: 'Actual', upgrade: 'Mejorar', popular: 'Más elegido',
        payTitle: 'Confirmar pago', paySub: 'Tras el desbloqueo, la mesa internacional del hospital completa la verificación en 1-2 días laborables', payMethod: 'Método de pago',
        pmCard: 'Tarjeta internacional', pmCardSub: 'Visa / Mastercard / JCB', pmWallet: 'Monedero electrónico', pmWalletSub: 'Alipay / WeChat Pay / Apple Pay',
        pmBank: 'Transferencia bancaria', pmBankSub: 'Para pagos médicos mayores · 1-3 días laborables',
        successTitle: 'Pago recibido — verificación solicitada', successBody: 'La mesa internacional del hospital tiene tu resumen médico y confirmará el protocolo, la disponibilidad del médico y las camas en 1-2 días laborables. Esta página se actualiza automáticamente al confirmar.',
        successBtn: 'Ver plan verificado',
        noteRefund: 'Reembolso íntegro si el hospital considera que no hay indicación de tratamiento o no puede aceptar el caso.',
        noteScope: 'Esta tarifa solo cubre la verificación y coordinación — no el vuelo, el hotel ni el tratamiento hospitalario, que se pagan en plataformas de terceros.',
        pkgAName: 'Plan DIY', pkgADesc: 'Plan de tratamiento verificado; reserva vuelo / hotel / traslado tú mismo', pkgBName: 'Todo incluido', pkgBDesc: 'Plan verificado + vuelo / recogida / hotel reservados por ti', pkgCName: 'Asistente personal', pkgCDesc: 'Todo incluido + asistente personal dedicado, nivel superior',

        feat: {
          ai3: '3 itinerarios de simulación IA', range: 'Estimación de rango de coste', verify: 'Protocolo verificado por el hospital',
          doctor: 'Firma del médico + credenciales', bed: 'Número de cama / slot quirúrgico', exact: 'Precio hospitalario detallado exacto',
          visa: 'Carta de invitación de visado médico + guía', interp: 'Traducción médica completa (clínica + habitación)', airport: 'Traslado aeropuerto + acompañamiento a citas',
          accompany: 'Coordinación de viaje para 1 familiar', insurance: 'Cobertura de complicaciones (límite 1 M CNY)',
          flightBook: 'Reserva de vuelo (Trip.com)', pickup: 'Recogida / entrega aeropuerto privado', hotelBook: 'Reserva de hotel (Booking.com)', assistant: 'Asistente personal dedicado', vip: 'Canal prioritario VIP'
        }
      },

      booking: {
        title: 'Reserva y pago', sub: 'El vuelo, el hotel y el registro hospitalario se pagan cada uno en su propia plataforma. MedBridge nunca recauda ni retiene estos fondos.',
        noteTitle: 'Por qué el pago está dividido', noteBody: 'El vuelo y el hotel siguen las normas de cambio de aerolíneas y OTA; el registro hospitalario es un servicio médico. Dividirlos da a cada transacción su propio recibo y canal de reembolso, e impide a MedBridge gestionar una cuenta centralizada.',
        itemFlight: 'Vuelo internacional', itemHotel: 'Alojamiento', itemReg: 'Registro y cama', itemTransfer: 'Traslado privado', itemTravel: 'Opciones turísticas',
        provider: 'Plataforma de pago', goPay: 'Pagar ahora', payOnPartner: 'Completa el pago en {p}',
        redirectTitle: 'Redirigiendo a {p}', redirectBody: 'Serás dirigido a una plataforma de terceros para completar este pago. El pago, los cambios y los reembolsos son gestionados íntegramente por esa plataforma.',
        redirectBtn: 'Entendido, continuar',
        summary: 'Lista de pagos', platformFee: 'Tarifa de servicio de plataforma', platformFeeNote: 'Ya pagado al desbloquear',
        doneTitle: 'Todas las reservas enviadas', doneBody: 'Cada pago tiene su propio recibo. Una vez confirmado el viaje, el itinerario, los detalles de recogida y los recordatorios de citas aparecen en Mis viajes.',
        itemsPending: '{n} pendientes', itemsPaid: '{n} pagados'
      },

      trips: {
        title: 'Mis viajes', sub: 'Sigue el estado y el recibo de cada reserva.',
        empty1: 'Aún no hay viajes en curso', empty2: 'Los planes que generes aparecerán aquí tras la evaluación.',
        emptyBtn: 'Empezar evaluación',
        orderNo: 'Número de viaje', created: 'Creado el', viewPlan: 'Ver plan', payNow: 'Pagar ahora',
        s1: 'Solicitud enviada', s2: 'Plan IA generado', s3: 'Verificado por hospital', s4: 'Esperando pago', s5: 'Reserva confirmada', s6: 'Viaje en curso',
        pipeline: 'Avance', booking: 'Reserva'
      },

      partners: { ctrip: 'Vuelo Trip.com', booking: 'Booking.com', hospital: 'Sistema de registro hospitalario', didi: 'Servicio de traslado privado', airbnb: 'Apartamentos y alojamiento' }
    }
  };

  Object.keys(EXTRA).forEach(function (k) { if (EXTRA[k]) window.MB_DICT[k] = EXTRA[k]; });
  if (window.I18N && window.I18N.LANGS) {
    window.I18N.LANGS.push(
      { code: 'es', label: 'Español', dir: 'ltr' }
    );
  }
})();
