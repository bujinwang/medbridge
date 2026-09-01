/* ============================================================
   MedBridge · clickable prototype — view router & renderers
   ============================================================ */
(function () {
  'use strict';

  var T = I18N.t, D = DATA, fmt = D.fmt;
  var KEY = 'mb.state.v2';

  var DEFAULT_INPUT = {
    dept: 'oncology', origin: 'ru-mow', city: 'shanghai', budget: 'b3',
    date: '2026-10', companions: 1, travel: true, disease: '', files: [], mobility: 'A'
  };

  /* ------------------------------------------------ state */
  var S = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var o = JSON.parse(raw);
        o.input = Object.assign({}, DEFAULT_INPUT, o.input || {});
        o.plans = o.plans || [];
        o.bookings = o.bookings || {};
        o.paidTier = o.paidTier || 0;
        o.role = o.role || 'patient';
        return o;
      }
    } catch (e) {}
    return {
      view: 'home', input: Object.assign({}, DEFAULT_INPUT),
      plans: [], selected: null, paidTier: 0, tab: 'overview', bookings: {}, role: 'patient'
    };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ------------------------------------------------ backend state (separate store) */
  var BK_KEY = 'mb.backend.v1';
  var BK = loadBackend();
  function loadBackend() {
    try {
      var raw = localStorage.getItem(BK_KEY);
      if (raw) {
        var o = JSON.parse(raw);
        o.orders = o.orders || D.seedOrders();
        o.cases = o.cases || D.seedCases();
        return o;
      }
    } catch (e) {}
    return { orders: D.seedOrders(), cases: D.seedCases() };
  }
  function saveBackend() { try { localStorage.setItem(BK_KEY, JSON.stringify(BK)); } catch (e) {} }

  /* ------------------------------------------------ agent / B2B store (separate store) */
  var AG_KEY = 'mb.agent.v1';
  var AG = loadAgent();
  function loadAgent() {
    try {
      var raw = localStorage.getItem(AG_KEY);
      if (raw) {
        var o = JSON.parse(raw);
        o.referrals = o.referrals || D.seedReferrals();
        return o;
      }
    } catch (e) {}
    return { referrals: D.seedReferrals() };
  }
  function saveAgent() { try { localStorage.setItem(AG_KEY, JSON.stringify(AG)); } catch (e) {} }

  /* ------------------------------------------------ helpers */
  function lang() { return I18N.getLang(); }
  /** bilingual (zh/en) picker — hospital & clinical content */
  function L(o) { if (!o) return ''; var l = lang(); return o[l] || o.en || o.zh || ''; }
  /** bilingual + trilingual body picker for itinerary day objects (zh/en/ru/ja/ar) */
  function LB(o) { if (!o) return ''; var l = lang(); return o[l + 'Body'] || o.enBody || o.zhBody || ''; }
  /** fully translated city name */
  function CN(c) { return (c && c.name && (c.name[lang()] || c.name.en)) || ''; }
  function money(n) { return T('common.currency') + fmt(n); }
  function moneyRange(a, b) { return T('common.currency') + fmt(a) + ' – ' + T('common.currency') + fmt(b); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function blur(text) { return '<span class="blur">' + esc(text) + '</span>'; }

  var ICONS = {
    oncology: '<circle cx="12" cy="12" r="9"/><path d="M8 5.5c0 6.5 8 6.5 8 13M16 5.5c0 6.5-8 6.5-8 13"/>',
    ortho: '<path d="M6 7.5v9M18 7.5v9"/><circle cx="7" cy="12" r="2.6"/><circle cx="17" cy="12" r="2.6"/><path d="M9.6 12h4.8"/>',
    cardio: '<path d="M12 20.2S4.2 15.3 4.2 10.1A4.1 4.1 0 0 1 12 7.2a4.1 4.1 0 0 1 7.8 2.9c0 5.2-7.8 10.1-7.8 10.1z"/>',
    ivf: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.1"/><path d="M12 4v4.9M12 15.1V20"/>',
    aesthetic: '<path d="M12 3l2.1 5.4L19.5 10l-5.4 2.1L12 17.5 9.9 12.1 4.5 10l5.4-1.6z"/>',
    checkup: '<circle cx="11" cy="11" r="6.2"/><path d="M20 20l-4.6-4.6"/><path d="M8.6 11h4.8M11 8.6v4.8"/>',
    lock: '<rect x="5" y="10.5" width="14" height="9.5" rx="2.2"/><path d="M8.2 10.5V8a3.8 3.8 0 0 1 7.6 0v2.5"/>',
    check: '<path d="M4.5 12.5l5 5 10-11"/>',
    cross: '<path d="M6 6l12 12M18 6L6 18"/>',
    shield: '<path d="M12 3l7.5 3v5.4c0 4.6-3.1 8.3-7.5 9.6-4.4-1.3-7.5-5-7.5-9.6V6z"/><path d="M9 12.2l2.2 2.2 4-4.4"/>',
    plane: '<path d="M3.5 13.5l17-6.5-3.8 12-3.2-3.6-6 2.6.6-4z"/>',
    bed: '<path d="M3.5 18v-8.5h13a3.5 3.5 0 0 1 3.5 3.5V18M3.5 12.5h17"/><path d="M7.5 9.5V7h5v2.5"/>',
    car: '<path d="M4 16.5V13l1.8-4.6A2 2 0 0 1 7.7 7h8.6a2 2 0 0 1 1.9 1.4L20 13v3.5"/><circle cx="7.5" cy="16.5" r="1.7"/><circle cx="16.5" cy="16.5" r="1.7"/><path d="M4 13h16"/>',
    pin: '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
    user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.8 20c1.1-3.7 3.8-5.6 7.2-5.6s6.1 1.9 7.2 5.6"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 2"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    book: '<path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2zM5 4v14"/><path d="M9 8h7M9 12h7"/>',
    list: '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1.4"/><circle cx="4" cy="12" r="1.4"/><circle cx="4" cy="18" r="1.4"/>'
  };
  function icon(name, size, cls) {
    var s = size || 18;
    return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" width="' + s + '" height="' + s +
      '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      (ICONS[name] || '') + '</svg>';
  }

  /* ------------------------------------------------ toast & modal */
  function toast(msg) {
    var root = document.getElementById('toastRoot');
    var el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = icon('check', 15) + '<span>' + esc(msg) + '</span>';
    root.appendChild(el);
    setTimeout(function () { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2400);
    setTimeout(function () { el.remove(); }, 2800);
  }

  function openModal(opt) {
    var root = document.getElementById('modalRoot');
    root.innerHTML =
      '<div class="modal">' +
        '<div class="modal__head"><div><h3>' + esc(opt.title) + '</h3>' +
          (opt.sub ? '<p>' + esc(opt.sub) + '</p>' : '') + '</div>' +
          '<button class="modal__x" data-act="closeModal">&times;</button></div>' +
        '<div class="modal__body">' + opt.body + '</div>' +
        (opt.foot ? '<div class="modal__foot">' + opt.foot + '</div>' : '') +
      '</div>';
    root.classList.add('is-open');
    root.setAttribute('aria-hidden', 'false');
  }
  function closeModal() {
    var root = document.getElementById('modalRoot');
    root.classList.remove('is-open');
    root.setAttribute('aria-hidden', 'true');
    root.innerHTML = '';
  }

  /* ------------------------------------------------ navigation */
  var VIEWS = {
    home: renderHome,
    intake: renderIntake,
    plans: renderPlans,
    'plan-detail': renderPlanDetail,
    pricing: renderPricing,
    booking: renderBookingIn,
    trips: renderTrips,
    backend: renderBackendHub,
    'ops-orders': renderOrders,
    'hospital-verify': renderVerify,
    'ops-cases': renderCases,
    'agent-dashboard': renderAgentDashboard,
    'agent-referrals': renderAgentReferrals,
    'agent-new': renderAgentNew,
    'agent-commission': renderAgentCommission
  };

  function go(view, params) {
    S.view = view;
    if (params) { Object.keys(params).forEach(function (k) { S[k] = params[k]; }); }
    save();
    paint();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function paint() {
    var v = document.getElementById('view');
    var fn = VIEWS[S.view] || renderHome;
    v.innerHTML = fn();
    v.classList.remove('is-enter');
    void v.offsetWidth;
    v.classList.add('is-enter');
    renderNav();
    renderRoleSwitch();
    bindStatic();
  }

  /* role switcher in the top bar */
  function renderRoleSwitch() {
    var el = document.getElementById('roleSwitch');
    if (!el) return;
    var roles = [['patient', '患者端'], ['agent', 'Agent 端'], ['hospital', '医院端'], ['ops', '运营后台']];
    el.innerHTML = roles.map(function (r) {
      return '<button class="rolepill' + (S.role === r[0] ? ' is-on' : '') + '" data-act="setRole" data-role="' + r[0] + '">' + r[1] + '</button>';
    }).join('');
  }
  function renderNav() {
    var nav = document.getElementById('mainnav');
    if (!nav) return;
    var items;
    if (S.role === 'patient') {
      items = [['home', T('nav.home')], ['intake', T('nav.intake')], ['plans', T('nav.plans')], ['pricing', T('nav.pricing')], ['trips', T('nav.trips')]];
    } else if (S.role === 'agent') {
      items = [['agent-dashboard', '工作台'], ['agent-referrals', '我的转诊'], ['agent-new', '新建转诊'], ['agent-commission', '佣金分成']];
    } else {
      items = [['backend', '工作台'], ['ops-orders', '订单'], ['hospital-verify', '核实工作台'], ['ops-cases', '案例库']];
    }
    nav.innerHTML = items.map(function (it) {
      var active = (S.view === it[0]) ||
        (S.role !== 'patient' && it[0] === 'backend' && (S.view === 'ops-orders' || S.view === 'hospital-verify' || S.view === 'ops-cases')) ||
        (S.role === 'patient' && it[0] === 'plans' && (S.view === 'plan-detail' || S.view === 'booking'));
      return '<button class="nav__item' + (active ? ' is-active' : '') + '" data-nav="' + it[0] + '"><i>' + it[1] + '</i></button>';
    }).join('');
  }

  function bindStatic() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      el.textContent = T(el.getAttribute('data-i18n'));
    });
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = lang();
  }

  /* ============================================================
     HOME
     ============================================================ */
  function renderHome() {
    var hospitalCount = Object.keys(D.HOSPITALS).reduce(function (a, k) { return a + D.HOSPITALS[k].length; }, 0);
    var caseCount = D.DEPT_IDS.reduce(function (a, k) { return a + D.MEDICAL[k].conf; }, 0);

    var stats = [
      [hospitalCount, T('home.stat1')],
      [fmt(caseCount), T('home.stat2')],
      [I18N.LANGS.length, T('home.stat3')]
    ].map(function (s) {
      return '<div class="hero__stat"><strong>' + s[0] + '</strong><span>' + esc(s[1]) + '</span></div>';
    }).join('');

    var steps = [1, 2, 3].map(function (n) {
      return '<div class="step">' +
        '<div class="step__no">' + n + '</div>' +
        '<span class="tag ' + (n === 3 ? 'tag--accent' : 'tag--success') + ' step__lock">' + T('home.step' + n + 'Lock') + '</span>' +
        '<h3>' + T('home.step' + n + 'Title') + '</h3>' +
        '<p>' + T('home.step' + n + 'Body') + '</p>' +
        '</div>';
    }).join('');

    var depts = D.DEPT_IDS.map(function (id) {
      var m = D.MEDICAL[id];
      return '<button class="dept" data-act="pickDept" data-id="' + id + '">' +
        '<span class="dept__ico">' + icon(id, 22) + '</span>' +
        '<strong>' + T('dept.' + id + '.name') + '</strong>' +
        '<span>' + T('dept.' + id + '.desc') + '</span>' +
        '<em>' + fmt(m.conf) + ' ' + T('home.casesUnit') + '</em>' +
        '</button>';
    }).join('');

    var trust = [1, 2, 3, 4].map(function (n) {
      return '<div class="step">' +
        '<span class="dept__ico" style="background:var(--primary-100);color:var(--primary-700)">' + icon(n === 3 ? 'shield' : n === 4 ? 'spark' : n === 2 ? 'check' : 'user', 20) + '</span>' +
        '<h3>' + T('home.trust' + n + 't') + '</h3>' +
        '<p>' + T('home.trust' + n + 'd') + '</p>' +
        '</div>';
    }).join('');

    return '' +
      '<section class="hero">' +
        '<div class="hero__inner">' +
          '<h1>' + T('home.heroTitle') + '</h1>' +
          '<p>' + T('home.heroSub') + '</p>' +
          '<div class="hero__cta">' +
            '<button class="btn btn--accent btn--lg" data-act="go" data-view="intake">' + T('home.ctaPrimary') + '</button>' +
            '<button class="btn btn--ghost btn--lg" data-act="go" data-view="pricing">' + T('home.ctaSecondary') + '</button>' +
          '</div>' +
          '<div class="hero__stats">' + stats + '</div>' +
        '</div>' +
      '</section>' +

      '<section class="section">' +
        '<div class="section__head"><h2>' + T('home.howTitle') + '</h2><p>' + T('home.howSub') + '</p></div>' +
        '<div class="steps">' + steps + '</div>' +
      '</section>' +

      '<section class="section">' +
        '<div class="section__head"><h2>' + T('home.deptTitle') + '</h2><p>' + T('home.deptSub') + '</p></div>' +
        '<div class="dept-grid">' + depts + '</div>' +
      '</section>' +

      '<section class="section">' +
        '<div class="section__head"><h2>' + T('home.trustTitle') + '</h2><p>' + T('home.trustSub') + '</p></div>' +
        '<div class="steps">' + trust + '</div>' +
      '</section>' +

      '<section class="card card__pad" style="display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap">' +
        '<div><h3 style="font-size:17px">' + T('home.ctaTitle') + '</h3><p class="muted tiny" style="margin-top:4px">' + T('home.ctaBody') + '</p></div>' +
        '<button class="btn btn--primary btn--lg" data-act="go" data-view="intake">' + T('home.ctaBtn') + ' ' + icon('arrow', 16) + '</button>' +
      '</section>';
  }

  /* ============================================================
     INTAKE
     ============================================================ */
  function renderIntake() {
    var i = S.input;

    var deptChips = D.DEPT_IDS.map(function (id) {
      return '<button class="chip' + (i.dept === id ? ' is-on' : '') + '" data-act="set" data-field="dept" data-val="' + id + '">' +
        T('dept.' + id + '.name') + '</button>';
    }).join('');

    var originOpts = D.ORIGINS.map(function (o) {
      return '<option value="' + o.id + '"' + (i.origin === o.id ? ' selected' : '') + '>' + esc(o.label) + '</option>';
    }).join('');

    var cityOpts = D.CITIES.map(function (c) {
      return '<option value="' + c.id + '"' + (i.city === c.id ? ' selected' : '') + '>' + esc(CN(c)) + '</option>';
    }).join('');

    var budgetOpts = D.BUDGETS.map(function (b) {
      return '<option value="' + b.id + '"' + (i.budget === b.id ? ' selected' : '') + '>' + esc(L(b)) + ' ' + T('common.currency') + '</option>';
    }).join('');

    var compOpts = [0, 1, 2, 3].map(function (n) {
      return '<option value="' + n + '"' + (parseInt(i.companions, 10) === n ? ' selected' : '') + '>' + n + ' ' + T('common.perPerson').replace('/', '') + '</option>';
    }).join('');

    var files = i.files.map(function (f, idx) {
      return '<div class="file-item">' +
        '<span class="file-item__ico">' + esc(f.name.split('.').pop().toUpperCase()) + '</span>' +
        '<span class="file-item__meta"><strong>' + esc(f.name) + '</strong><span>' + esc(f.size) + '</span></span>' +
        '<button class="x" data-act="rmFile" data-idx="' + idx + '">' + icon('cross', 15) + '</button>' +
        '</div>';
    }).join('');

    var sideSteps = [1, 2, 3, 4].map(function (n) {
      return '<div class="proc__item"><span class="proc__dot">' + n + '</span>' +
        '<span class="proc__body"><strong>' + T('intake.sideStep' + n + 't') + '</strong>' +
        '<span>' + T('intake.sideStep' + n + 'd') + '</span></span></div>';
    }).join('');

    return '' +
      '<div class="page-head"><div>' +
        '<div class="eyebrow">' + T('nav.intake') + '</div>' +
        '<h1>' + T('intake.title') + '</h1>' +
        '<p class="sub">' + T('intake.sub') + '</p>' +
      '</div></div>' +

      '<div class="intake-wrap">' +
        '<div class="form-card">' +
          '<div class="form-card__head"><h2>' + T('intake.secMedical') + '</h2><p>' + T('intake.deptHint') + '</p></div>' +
          '<div class="form-card__body">' +

            '<div class="field">' +
              '<label class="field__label">' + T('intake.dept') + '<span class="req">*</span></label>' +
              '<div class="chips">' + deptChips + '</div>' +
            '</div>' +

            '<div class="field">' +
              '<label class="field__label">' + T('intake.disease') + '<span class="req">*</span></label>' +
              '<input class="input" id="fDisease" value="' + esc(i.disease) + '" placeholder="' + esc(T('intake.diseasePh')) + '" data-field="disease" data-act="input">' +
              '<div class="field__hint">' + T('intake.diseaseHint') + '</div>' +
            '</div>' +

            '<div class="field">' +
              '<label class="field__label">' + T('intake.reports') + '</label>' +
              '<div class="uploader" data-act="addFile">' +
                '<div class="uploader__ico">' + icon('checkup', 26) + '</div>' +
                '<strong>' + T('intake.uploadTitle') + '</strong>' +
                '<span>' + T('intake.uploadDesc') + '</span>' +
              '</div>' +
              (files ? '<div class="files">' + files + '</div>' : '') +
              '<div class="field__hint">' + T('intake.reportsHint') + '</div>' +
            '</div>' +

            '<div class="field">' +
              '<label class="field__label">' + T('intake.mobility') + '</label>' +
              '<div class="chips">' +
                ['A', 'B', 'C', 'D'].map(function (g) {
                  return '<button class="chip' + (i.mobility === g ? ' is-on' : '') + '" data-act="set" data-field="mobility" data-val="' + g + '">' +
                    '<b>' + g + '</b> · ' + esc(L(D.TRANSFER_GRADES[g].label)) + '</button>';
                }).join('') +
              '</div>' +
              '<div class="field__hint">' + T('intake.mobilityHint') + '</div>' +
            '</div>' +

        '</div>' +
          '<div class="form-card__head" style="border-top:1px solid var(--border)"><h2>' + T('intake.secPref') + '</h2><p>' + T('intake.cityHint') + '</p></div>' +
          '<div class="form-card__body">' +
            '<div class="field__row">' +
              '<div class="field">' +
                '<label class="field__label">' + T('intake.origin') + '<span class="req">*</span></label>' +
                '<select class="select" data-field="origin" data-act="input">' + originOpts + '</select>' +
                '<div class="field__hint">' + T('intake.originHint') + '</div>' +
              '</div>' +
              '<div class="field">' +
                '<label class="field__label">' + T('intake.city') + '<span class="req">*</span></label>' +
                '<select class="select" data-field="city" data-act="input">' + cityOpts + '</select>' +
              '</div>' +
            '</div>' +
            '<div class="field__row">' +
              '<div class="field">' +
                '<label class="field__label">' + T('intake.budget') + '</label>' +
                '<select class="select" data-field="budget" data-act="input">' + budgetOpts + '</select>' +
              '</div>' +
              '<div class="field">' +
                '<label class="field__label">' + T('intake.date') + '</label>' +
                '<input class="input" type="month" value="' + esc(i.date) + '" data-field="date" data-act="input">' +
              '</div>' +
            '</div>' +
            '<div class="field__row">' +
              '<div class="field">' +
                '<label class="field__label">' + T('intake.companions') + '</label>' +
                '<select class="select" data-field="companions" data-act="input">' + compOpts + '</select>' +
              '</div>' +
              '<div class="field">' +
                '<label class="field__label">' + T('intake.travelPref') + '</label>' +
                '<div class="chips">' +
                  '<button class="chip' + (i.travel ? ' is-on' : '') + '" data-act="set" data-field="travel" data-val="1">' + T('common.optional') + '</button>' +
                  '<button class="chip' + (!i.travel ? ' is-on' : '') + '" data-act="set" data-field="travel" data-val="0">' + T('common.notIncluded') + '</button>' +
                '</div>' +
                '<div class="field__hint">' + T('intake.travelHint') + '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="form-card__foot">' +
            '<span class="tiny muted">' + T('intake.disclaimer') + '</span>' +
            '<button class="btn btn--primary btn--lg" data-act="generate">' + T('intake.submit') + ' ' + icon('arrow', 16) + '</button>' +
          '</div>' +
        '</div>' +

        '<div>' +
          '<div class="side-card"><h3>' + icon('spark', 16) + ' ' + T('intake.sideTitle') + '</h3>' +
            '<div class="proc">' + sideSteps + '</div>' +
          '</div>' +
          '<div class="note note--info">' + icon('shield', 15) + '<span>' + T('pricing.noteScope') + '</span></div>' +
        '</div>' +
      '</div>';
  }

  /* ---------------- generation animation ---------------- */
  function runGeneration() {
    var keys = ['gen.s1', 'gen.s2', 'gen.s3', 'gen.s4', 'gen.s5'];
    var ov = document.createElement('div');
    ov.className = 'generating';
    ov.innerHTML =
      '<div class="generating__box">' +
        '<div class="spinner"></div>' +
        '<h2>' + T('gen.title') + '</h2>' +
        '<p>' + T('gen.sub') + '</p>' +
        '<div class="gen-steps">' + keys.map(function (k) {
          return '<div class="gen-step"><span class="gen-step__ico"></span><span>' + T(k) + '</span></div>';
        }).join('') + '</div>' +
      '</div>';
    document.body.appendChild(ov);

    var items = ov.querySelectorAll('.gen-step');
    var i = 0;
    var iv = setInterval(function () {
      if (i > 0) items[i - 1].className = 'gen-step is-done';
      if (i < items.length) items[i].className = 'gen-step is-active';
      i++;
      if (i > items.length) {
        clearInterval(iv);
        setTimeout(function () {
          ov.remove();
          S.plans = D.buildPlans(S.input);
          S.selected = S.plans[1].id;
          S.paidTier = 0;
          S.bookings = {};
          go('plans');
        }, 480);
      }
    }, 600);
  }

  /* ============================================================
     PLANS LIST
     ============================================================ */
  function planById(id) {
    return S.plans.filter(function (p) { return p.id === id; })[0] || S.plans[0];
  }
  function addonsTotal(p) {
    return D.ADDONS.reduce(function (a, x) {
      return a + ((p.addons || []).indexOf(x.id) >= 0 ? x.price : 0);
    }, 0);
  }
  function grandTotal(p) { return p.total + addonsTotal(p); }

  function renderPlans() {
    if (!S.plans.length) {
      return '<div class="empty"><div class="empty__ico">' + icon('spark', 40) + '</div>' +
        '<h3>' + T('trips.empty1') + '</h3><p>' + T('trips.empty2') + '</p>' +
        '<button class="btn btn--primary" data-act="go" data-view="intake">' + T('trips.emptyBtn') + '</button></div>';
    }

    var inp = S.input;
    var resultsFor = T('dept.' + inp.dept + '.name') + ' · ' + CN(D.city(inp.city)) + ' · ' + L(D.budget(inp.budget));

    var cards = S.plans.map(function (p, idx) {
      var locked = S.paidTier === 0;
      var sel = S.selected === p.id;
      var ribbon = idx === 1 ? '<span class="plan-card__ribbon">' + T('plans.recommend') + '</span>' : '';
      return '<div class="plan-card' + (sel ? ' is-pick' : '') + '">' + ribbon +
        '<div class="plan-card__top">' +
          '<div class="plan-card__badges">' +
            '<span class="tag tag--violet">' + T('plans.' + p.tierKey) + '</span>' +
            (locked
              ? '<span class="tag tag--warn tag--dot">' + T('plans.aiBadge') + '</span>'
              : '<span class="tag tag--success tag--dot">' + T('plans.verifiedBadge') + '</span>') +
          '</div>' +
          '<h3>' + esc(L({ zh: p.hospital.zh.split(' · ')[0], en: p.hospital.en.split(' · ')[0] })) + '</h3>' +
          '<div class="plan-card__hosp">' + icon('pin', 13) + ' ' + esc(CN(p.city)) + ' · ' + esc(L(p.hospital.level)) + '</div>' +
        '</div>' +
        '<div class="plan-card__price">' +
          '<span class="from">' + T('common.total') + ' · ' + (locked ? T('plans.priceNote') : T('plans.exactPrice')) + '</span>' +
          (locked
            ? '<strong>' + esc(moneyRange(p.lowTotal, p.highTotal)) + '</strong>'
            : '<strong>' + esc(money(grandTotal(p))) + '</strong><span class="per">' + T('common.per') + '</span>') +
          (locked ? '<div class="range">' + T('plans.costHint') + '</div>' : '') +
        '</div>' +
        '<div class="plan-card__specs">' +
          spec('user', T('plans.doctor'), locked ? blur(L(p.doctor)) : esc(L(p.doctor))) +
          spec('bed', T('plans.stay'), p.stayDays + ' ' + T('common.days')) +
          spec('clock', T('plans.duration'), p.durationDays + ' ' + T('common.days')) +
          spec('check', T('plans.success'), locked ? blur(L(p.medical.outcome)) : esc(L(p.medical.outcome))) +
          spec('plane', T('plan.airline'), esc(p.origin.carrierName)) +
        '</div>' +
        '<div class="plan-card__foot">' +
          '<button class="btn btn--ghost" data-act="openPlan" data-id="' + p.id + '">' + T('plans.viewPlan') + '</button>' +
          '<button class="btn ' + (sel ? 'btn--soft' : 'btn--primary') + '" data-act="selectPlan" data-id="' + p.id + '">' +
            (sel ? icon('check', 15) + ' ' + T('plans.picked') : T('plans.pickPlan')) + '</button>' +
        '</div>' +
      '</div>';
    }).join('');

    return '' +
      '<div class="page-head"><div>' +
        '<div class="eyebrow">' + T('nav.plans') + '</div>' +
        '<h1>' + T('plans.title') + '</h1>' +
        '<p class="sub">' + T('plans.sub') + '</p>' +
      '</div>' +
      '<button class="btn btn--ghost" data-act="go" data-view="intake">' + T('plans.regenerate') + '</button></div>' +

      '<div class="matchbar">' +
        '<div class="matchbar__left">' +
          '<div class="score"><strong>' + (S.plans[1] ? S.plans[1].score : 90) + '</strong><span>' + T('plans.match').toUpperCase() + '</span></div>' +
          '<div><strong style="font-size:14px">' + esc(resultsFor) + '</strong>' +
          '<div class="tiny muted">' + T('plans.matchSub') + '</div></div>' +
        '</div>' +
        '<div class="tiny muted" style="max-width:420px">' + (S.paidTier === 0 ? T('plans.freeNote') : T('plan.verifiedTitle')) + '</div>' +
      '</div>' +

      '<div class="plan-grid">' + cards + '</div>' +

      (S.paidTier === 0
        ? '<div class="note" style="margin-top:22px">' + icon('lock', 16) +
          '<span>' + T('plans.freeNote') + ' <button class="btn btn--sm btn--accent" style="margin-left:8px" data-act="go" data-view="pricing">' + T('plans.unlockCta') + '</button></span></div>'
        : '<div class="note note--info" style="margin-top:22px">' + icon('check', 16) +
          '<span>' + T('plan.verifiedTitle') + ' · <button class="btn btn--sm btn--primary" style="margin-left:8px" data-act="go" data-view="booking">' + T('nav.plans') + ' → ' + T('booking.title') + '</button></span></div>');
  }

  function spec(ic, k, v) {
    return '<div class="spec"><span class="spec__ico">' + icon(ic, 15) + '</span>' +
      '<span class="spec__k">' + esc(k) + '</span><span class="spec__v">' + v + '</span></div>';
  }

  /* ============================================================
     PLAN DETAIL
     ============================================================ */
  function renderPlanDetail() {
    if (!S.plans.length) { S.view = 'plans'; return renderPlans(); }
    var p = planById(S.selected);
    var locked = S.paidTier === 0;
    var at = addonsTotal(p);
    var tab = S.tab || 'overview';

    var tabs = [
      ['overview', 'plan.tabOverview'], ['timeline', 'plan.tabTimeline'], ['medical', 'plan.tabMedical'],
      ['cost', 'plan.tabCost'], ['travel', 'plan.tabTravel']
    ].map(function (x) {
      return '<button class="tab' + (tab === x[0] ? ' is-active' : '') + '" data-act="tab" data-val="' + x[0] + '">' + T(x[1]) + '</button>';
    }).join('');

    var body =
      tab === 'overview' ? tabOverview(p, locked) :
      tab === 'timeline' ? tabTimeline(p) :
      tab === 'medical'  ? tabMedical(p, locked) :
      tab === 'cost'     ? tabCost(p, locked, at) :
                           tabTravel(p);

    return '' +
      '<div class="page-head"><div>' +
        '<button class="btn btn--ghost btn--sm" data-act="go" data-view="plans">← ' + T('plan.backToList') + '</button>' +
        '<h1 style="margin-top:12px">' + T('plans.' + p.tierKey) + ' · ' + T('dept.' + p.dept + '.name') + '</h1>' +
      '</div></div>' +

      '<div class="detail-head">' +
        '<div class="detail-card">' +
          '<div class="detail-card__top">' +
            '<div class="detail-card__meta" style="margin:0 0 10px">' +
              '<span class="tag tag--violet">' + T('plans.' + p.tierKey) + '</span>' +
              (locked
                ? '<span class="tag tag--warn tag--dot">' + T('plans.aiBadge') + '</span>'
                : '<span class="tag tag--success tag--dot">' + T('plans.verifiedBadge') + '</span>') +
              '<span class="tag">' + T('plans.match') + ' ' + p.score + '%</span>' +
            '</div>' +
            '<h1>' + esc(L(p.hospital)) + '</h1>' +
            '<p class="muted" style="margin-top:4px">' + icon('pin', 13) + ' ' + esc(CN(p.city)) + ' · ' +
              esc(L(p.hospital.level)) + ' · ' + esc(p.hospital.acc) + '</p>' +
          '</div>' +
          '<div class="detail-card__body">' +
            '<div class="kv-grid">' +
              kv(T('plan.city'), esc(CN(p.city))) +
              kv(T('plan.accred'), esc(p.hospital.acc)) +
              kv(T('plan.stayDays'), p.stayDays + ' ' + T('common.days')) +
              kv(T('plan.tripDays'), p.durationDays + ' ' + T('common.days')) +
              kv(T('plan.wardType'), esc(L(p.medical.ward))) +
              kv(T('plan.registration'), esc(L(p.medical.reg))) +
            '</div>' +
            (locked ? '' :
              '<div class="stamp" style="margin-top:18px">' +
                '<span class="stamp__ico">' + icon('shield', 16) + '</span>' +
                '<span class="stamp__t"><strong>' + T('plan.verifiedTitle') + ' · ' + esc(p.refNo) + '</strong>' +
                '<span>' + T('plan.bedHold') + ' <b>' + esc(p.bedHold) + '</b> · ' + T('plan.verifiedAt') + ' ' + esc(p.verifiedAt) + '</span></span>' +
              '</div>') +
          '</div>' +
        '</div>' +

        '<div class="summary">' +
          '<div class="summary__head">' + T('common.total') + '</div>' +
          '<div class="summary__body">' +
            (locked
              ? '<div style="font-size:26px;font-weight:700;letter-spacing:-.02em">' + esc(moneyRange(p.lowTotal, p.highTotal)) + '</div>' +
                '<div class="tiny muted" style="margin-top:6px">' + T('plans.priceNote') + '</div>'
              : '<div style="font-size:26px;font-weight:700;letter-spacing:-.02em">' + esc(money(grandTotal(p))) + '</div>' +
                '<div class="tiny muted" style="margin-top:6px">' + T('plans.exactPrice') + ' · ' + T('plan.perCompanion', { n: p.companions }) + '</div>') +
            '<div class="summary__row" style="margin-top:14px"><span class="muted">' + T('plan.confidence') + '</span><span>' + T('plan.confidenceNote', { n: fmt(p.cases) }) + '</span></div>' +
          '</div>' +
          '<div class="summary__foot">' +
            (locked
              ? '<button class="btn btn--accent btn--block btn--lg" data-act="go" data-view="pricing">' + icon('lock', 15) + ' ' + T('plan.lockedBtn') + '</button>'
              : '<button class="btn btn--primary btn--block btn--lg" data-act="go" data-view="booking">' + T('booking.title') + ' ' + icon('arrow', 16) + '</button>') +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="card">' +
        '<div class="tabs">' + tabs + '</div>' +
        '<div class="tabpanel">' + body + '</div>' +
      '</div>';
  }

  function kv(k, v) {
    return '<div class="kv"><span class="kv__k">' + k + '</span><span class="kv__v">' + v + '</span></div>';
  }

  function lockWrap(inner) {
    return '<div class="lockwrap">' + inner +
      '<div class="lockwrap__veil"><div class="lockbox">' +
        '<div class="lockbox__ico">' + icon('lock', 22) + '</div>' +
        '<h4>' + T('plan.lockedTitle') + '</h4>' +
        '<p>' + T('plan.lockedBody') + '</p>' +
        '<button class="btn btn--primary btn--sm" data-act="go" data-view="pricing">' + T('plan.lockedBtn') + '</button>' +
      '</div></div></div>';
  }

  function tabOverview(p, locked) {
    var docHtml =
      '<div class="doctor">' +
        '<div class="doctor__av">' + esc(locked ? '—' : L(p.doctor).slice(0, 1)) + '</div>' +
        '<div class="doctor__body">' +
          '<h3>' + (locked ? blur(L(p.doctor)) : esc(L(p.doctor))) + '</h3>' +
          '<div class="doctor__title">' + (locked ? blur(L({ zh: p.doctor.tz, en: p.doctor.te })) : esc(L({ zh: p.doctor.tz, en: p.doctor.te }))) + '</div>' +
          '<div class="doctor__rows">' +
            '<span class="doctor__row">' + T('plan.specialty') + ' <b>' + esc(L(p.doctor.spec)) + '</b></span>' +
            '<span class="doctor__row">' + T('plan.experience') + ' <b>' + (locked ? '—' : p.doctor.exp) + '</b></span>' +
            '<span class="doctor__row">' + T('plan.languages') + ' <b>' + esc(p.doctor.lang) + '</b></span>' +
            '<span class="doctor__row">' + T('plan.casesDone') + ' <b>' + (locked ? '—' : fmt(p.doctor.cases)) + '</b></span>' +
          '</div>' +
        '</div>' +
      '</div>';

    return '' +
      '<div class="block-title">' + T('plan.medicalTeam') + '</div>' +
      (locked ? lockWrap(docHtml) : docHtml) +

      '<div class="block-title">' + T('plan.hospitalInfo') + '</div>' +
      '<div class="kv-grid">' +
        kv(T('plan.city'), esc(CN(p.city))) +
        kv(T('plan.level'), esc(L(p.hospital.level))) +
        kv(T('plan.accred'), esc(p.hospital.acc)) +
        kv(T('plan.beds'), fmt(p.hospital.beds)) +
      '</div>' +

      '<div class="block-title">' + T('plan.treatmentPlan') + '</div>' +
      '<div class="kv-grid">' +
        kv(T('plan.procedure'), esc(L(p.medical.procedure))) +
        kv(T('plan.wardType'), esc(L(p.medical.ward))) +
        kv(T('plan.stayDays'), p.stayDays + ' ' + T('common.days')) +
        kv(T('plan.registration'), esc(L(p.medical.reg))) +
      '</div>' +

      '<div class="block-title">' + T('plan.logistics') + '</div>' +
      '<div class="kv-grid">' +
        kv(T('plan.airline'), esc(p.origin.carrierName) + ' · ' + esc(p.origin.code)) +
        kv(T('plan.cabin'), esc(L(p.cabin))) +
        kv(T('plan.duration'), p.origin.hours + ' h') +
        kv(T('plan.hotel'), esc(L(p.hotelName))) +
        kv(T('plan.distance'), esc(p.distance)) +
        kv(T('plan.transfer'), esc(L(p.transfer.vehicleName)) + (p.transfer.nurse ? ' · ' + T('plan.transferNurse') : '') + ' · ' + T('plan.transferGrade') + ' ' + p.transfer.grade) +
      '</div>';
  }

  function tabTimeline(p) {
    var items = p.itinerary.map(function (it) {
      var chips = (it.chips || []).map(function (c) {
        var label = c === 'flight' ? T('plan.flight') : c === 'reg' ? T('plan.registration') :
          c === 'ward' ? T('plan.wardType') : c === 'hotel' ? T('plan.hotel') :
          c === 'discharge' ? T('plan.stayDays') : T('plan.treatmentPlan');
        return '<span class="tag tag--primary">' + label + '</span>';
      }).join('');
      return '<div class="tl tl--' + it.kind + '">' +
        '<span class="tl__dot">' + icon(it.kind === 'flight' ? 'plane' : it.kind === 'hotel' ? 'bed' : 'check', 10) + '</span>' +
        '<div class="tl__head"><span class="tl__day">' + esc(it.d) + '</span><span class="tl__title">' + esc(L(it)) + '</span></div>' +
        '<div class="tl__body">' + esc(LB(it)) + '</div>' +
        (it.more && it.more.length
          ? '<div class="tl__note">' + it.more.map(function (s) { return '· ' + esc(L(s)); }).join('<br>') + '</div>'
          : '') +
        (chips ? '<div class="tl__chips">' + chips + '</div>' : '') +
      '</div>';
    }).join('');

    return '<div class="page-head" style="margin-bottom:18px"><div>' +
        '<h1 style="font-size:18px">' + T('plan.itineraryTitle') + '</h1>' +
        '<p class="sub tiny">' + T('plan.itinerarySub') + '</p></div></div>' +
      '<div class="timeline">' + items + '</div>';
  }

  function tabMedical(p, locked) {
    var stages = p.medical.stages.map(function (s, i) {
      return '<div class="tl tl--medical">' +
        '<span class="tl__dot">' + (i + 1) + '</span>' +
        '<div class="tl__head"><span class="tl__day">' + T('plan.stage') + ' ' + (i + 1) + '</span>' +
        '<span class="tl__title">' + esc(L(s)) + '</span></div>' +
      '</div>';
    }).join('');

    return '' +
      '<div class="block-title">' + T('plan.treatmentPlan') + '</div>' +
      '<div class="card card__pad" style="box-shadow:none;background:var(--surface-2)">' +
        '<strong style="font-size:15px">' + esc(L(p.medical.procedure)) + '</strong>' +
      '</div>' +

      '<div class="block-title">' + T('plan.stages') + '</div>' +
      '<div class="timeline">' + stages + '</div>' +

      '<div class="block-title">' + T('plan.successRate') + '</div>' +
      '<div class="card card__pad" style="box-shadow:none;background:var(--surface-2)">' +
        (locked
          ? '<div style="display:flex;align-items:center;gap:14px">' + blur(L(p.medical.outcome)) +
            '<span class="tag tag--warn">' + T('plans.priceNote') + '</span></div>'
          : '<div style="display:flex;align-items:center;gap:14px"><strong style="font-size:15px">' + esc(L(p.medical.outcome)) + '</strong>' +
            '<span class="tag tag--success">' + T('plans.verifiedBadge') + '</span></div>') +
        '<div class="tiny muted" style="margin-top:8px">' + T('plan.confidenceNote', { n: fmt(p.cases) }) + '</div>' +
      '</div>';
  }

  function tabCost(p, locked, at) {
    var rows = [
      [T('plan.medicalFee'), locked ? moneyRange(Math.round(p.costs.medical * .92), Math.round(p.costs.medical * 1.12)) : money(p.costs.medical)],
      [T('plan.flightFee'), locked ? moneyRange(Math.round(p.costs.flight * .9), Math.round(p.costs.flight * 1.25)) : money(p.costs.flight) + ' · ' + p.heads + ' ' + T('common.perPerson').replace('/', '')],
      [T('plan.hotelFee'), locked ? moneyRange(p.costs.hotel, Math.round(p.costs.hotel * 1.2)) : money(p.costs.hotel) + ' · ' + p.nights + ' ' + T('common.night')],
      [T('plan.transferFee') + ' · ' + L(p.transfer.vehicleName), locked ? moneyRange(p.costs.transfer, Math.round(p.costs.transfer * 1.3)) : money(p.costs.transfer)],
      [T('plan.serviceFee'), money(p.costs.service)]
    ];
    if (at > 0) rows.push([T('plan.travelAddon'), money(at)]);

    var html = rows.map(function (r) {
      return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>';
    }).join('');

    var totalRow = locked
      ? '<tr class="is-sum"><td>' + T('common.total') + ' <span class="tag tag--warn" style="margin-left:8px">' + T('plan.estimate') + '</span></td>' +
        '<td>' + esc(moneyRange(p.lowTotal + at, p.highTotal + at)) + '</td></tr>'
      : '<tr class="is-sum"><td>' + T('common.total') + ' <span class="tag tag--success" style="margin-left:8px">' + T('plan.exact') + '</span></td>' +
        '<td>' + esc(money(grandTotal(p))) + '</td></tr>';

    return '' +
      '<div class="page-head" style="margin-bottom:14px"><div>' +
        '<h1 style="font-size:18px">' + T('plan.costTitle') + '</h1>' +
        '<p class="sub tiny">' + T('plan.perCompanion', { n: p.companions }) + ' · ' + (locked ? T('plan.estimate') : T('plan.exact')) + '</p>' +
      '</div></div>' +
      '<table class="cost-table">' + html + totalRow + '</table>' +
      (locked
        ? '<div class="note" style="margin-top:20px">' + icon('lock', 16) +
          '<span>' + T('plan.lockedBody') + ' <button class="btn btn--sm btn--accent" style="margin-left:8px" data-act="go" data-view="pricing">' + T('plan.lockedBtn') + '</button></span></div>'
        : '<div class="note note--info" style="margin-top:20px">' + icon('shield', 16) +
          '<span>' + T('pricing.noteScope') + '</span></div>');
  }

  function transferCard(p) {
    var t = p.transfer;
    var vName = L(t.vehicleName);
    var gradeTag = '<span class="tag" style="background:' + t.color + '22;color:' + t.color + ';font-weight:600">' +
      T('plan.transferGrade') + ' ' + t.grade + ' · ' + esc(L(t.label)) + '</span>';
    var sub = [];
    if (t.nurse) sub.push('<span class="tag tag--warn">' + T('plan.transferNurse') + '</span>');
    if (t.accessibility) sub.push('<span class="tag tag--primary">♿ ' + T('plan.transferAccessible') + '</span>');
    var bookTag = t.included
      ? '<span class="tag tag--success">' + T('plan.transferPlatformBook') + '</span>'
      : '<span class="tag tag--warn">' + T('plan.transferSelfBook') + '</span>';
    return '' +
      '<div class="block-title">' + T('plan.transfer') + ' · ' + gradeTag + '</div>' +
      '<div class="card card__pad" style="box-shadow:none;background:var(--surface-2);margin-bottom:18px">' +
        '<div style="font-size:15px;font-weight:650;margin-bottom:4px">' + esc(vName) + '</div>' +
        '<div class="tiny muted" style="margin-bottom:12px">' + esc(L(t.desc)) + '</div>' +
        (sub.length ? '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">' + sub.join('') + '</div>' : '') +
        '<div class="kv-grid">' +
          kv(T('plan.transferPerTrip'), money(t.perTrip)) +
          kv(T('plan.transferRound'), money(t.total)) +
          kv(T('plan.transferBook'), bookTag) +
        '</div>' +
        '<div class="tiny muted" style="margin:10px 0 0">' + T('plan.transferKm', { n: t.km }) + '</div>' +
        '<div class="note" style="margin-top:14px">' + icon('car', 15) + '<span>' + T('plan.transferSource') + '</span></div>' +
      '</div>';
  }

  function tabTravel(p) {
    var items = D.ADDONS.map(function (a) {
      var on = (p.addons || []).indexOf(a.id) >= 0;
      return '<div class="addon' + (on ? ' is-on' : '') + '" data-act="toggleAddon" data-val="' + a.id + '">' +
        '<span class="addon__chk">' + icon('check', 11) + '</span>' +
        '<span class="addon__body"><strong>' + esc(L(a)) + '</strong>' +
        '<p>' + esc(L(a.desc)) + '</p>' +
        '<div class="addon__price">' + money(a.price) + ' · ' + (on ? T('plan.travelAdded') : T('plan.travelAdd')) + '</div></span>' +
      '</div>';
    }).join('');

    return '' +
      '<div class="page-head" style="margin-bottom:14px"><div>' +
        '<h1 style="font-size:18px">' + T('plan.travelTitle') + '</h1>' +
        '<p class="sub tiny">' + T('intake.travelHint') + '</p></div></div>' +
      transferCard(p) +
      '<div class="addons">' + items + '</div>' +
      '<div class="summary" style="margin-top:20px"><div class="summary__body">' +
        '<div class="summary__row"><span>' + T('plan.travelAddon') + '</span><span>' + money(addonsTotal(p)) + '</span></div>' +
        '<div class="summary__row summary__row--sum"><span>' + T('common.total') + '</span><span>' + money(grandTotal(p)) + '</span></div>' +
      '</div></div>';
  }

  /* ============================================================
     PRICING
     ============================================================ */
  /* Service packages (a/b/c): A = verified plan only (self-book logistics);
     B = A + flights / pickup / hotel booked; C = B + private assistant + VIP */
  var FEATS = ['ai3', 'range', 'verify', 'doctor', 'bed', 'exact', 'flightBook', 'pickup', 'hotelBook', 'assistant', 'vip'];
  var TIER_FEATS = {
    0: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], // A 自理版
    1: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // B 全包版
    2: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // C 私人助理版
  };
  var TIER_PRICE = [99, 499, 1299];
  var TIER_LETTER = ['A', 'B', 'C'];

  function renderPricing() {
    var tiers = [0, 1, 2].map(function (n) {
      var owned = S.paidTier > n;
      var hot = n === 1;
      var letter = TIER_LETTER[n];
      var feats = FEATS.map(function (f, i) {
        var on = TIER_FEATS[n][i];
        return '<div class="tier__feat tier__feat--' + (on ? 'yes' : 'no') + '">' +
          '<span class="i">' + (on ? icon('check', 13) : icon('cross', 13)) + '</span>' +
          '<span>' + T('pricing.feat.' + f) + '</span></div>';
      }).join('');

      var btn;
      if (owned) btn = '<button class="btn btn--soft" disabled>' + icon('check', 15) + ' ' + T('pricing.paid') + '</button>';
      else btn = '<button class="btn ' + (hot ? 'btn--primary' : 'btn--ghost') + '" data-act="pay" data-tier="' + n + '">' +
        (S.paidTier > 0 ? T('pricing.upgrade') : T('pricing.pay')) + '</button>';

      return '<div class="tier' + (hot ? ' is-hot' : '') + (owned ? ' is-owned' : '') + '">' +
        (hot && !owned ? '<span class="tier__pop">' + T('pricing.popular') + '</span>' : '') +
        '<h3 class="tier__name"><span class="tier__tag">' + letter + '</span>' + T('pricing.pkg' + letter + 'Name') + '</h3>' +
        '<p class="tier__desc">' + T('pricing.pkg' + letter + 'Desc') + '</p>' +
        '<div class="tier__price"><strong>' + T('common.currency') + TIER_PRICE[n] + '</strong></div>' +
        '<div class="tier__unit">' + T('plan.serviceFee') + '</div>' +
        '<div class="tier__feats">' + feats + '</div>' +
        btn +
      '</div>';
    }).join('');

    return '' +
      '<div class="page-head"><div>' +
        '<div class="eyebrow">' + T('nav.pricing') + '</div>' +
        '<h1>' + T('pricing.title') + '</h1>' +
        '<p class="sub">' + T('pricing.sub') + '</p>' +
      '</div></div>' +
      '<div class="tiers">' + tiers + '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:24px">' +
        '<div class="note">' + icon('shield', 16) + '<span>' + T('pricing.noteRefund') + '</span></div>' +
        '<div class="note note--info">' + icon('lock', 16) + '<span>' + T('pricing.noteScope') + '</span></div>' +
      '</div>';
  }

  function openPayModal(tier) {
    var price = TIER_PRICE[tier];
    var methods = [
      ['pmCard', 'pmCardSub', '#1A1F71', 'VISA'],
      ['pmWallet', 'pmWalletSub', '#06A35B', 'Pay'],
      ['pmBank', 'pmBankSub', '#0E7C86', 'TT']
    ].map(function (m, i) {
      return '<div class="pay-method' + (i === 0 ? ' is-on' : '') + '" data-act="pickPay">' +
        '<span class="pay-method__ico" style="background:' + m[2] + '">' + m[3] + '</span>' +
        '<span class="pay-method__body"><strong>' + T('pricing.' + m[0]) + '</strong><span>' + T('pricing.' + m[1]) + '</span></span>' +
        '<span class="pay-method__radio"></span></div>';
    }).join('');

    openModal({
      title: T('pricing.payTitle'),
      sub: T('pricing.paySub'),
      body:
        '<div class="summary" style="box-shadow:none;margin-bottom:20px"><div class="summary__body">' +
          '<div class="summary__row"><span class="muted">' + T('pricing.pkg' + TIER_LETTER[tier] + 'Name') + '</span><span>' + T('common.currency') + price + '</span></div>' +
          '<div class="summary__row summary__row--sum"><span>' + T('common.total') + '</span><span>' + T('common.currency') + price + '</span></div>' +
        '</div></div>' +
        '<div class="block-title" style="margin-top:0">' + T('pricing.payMethod') + '</div>' +
        '<div class="pay-methods">' + methods + '</div>' +
        '<div class="note">' + icon('shield', 16) + '<span>' + T('pricing.noteRefund') + '</span></div>',
      foot:
        '<button class="btn btn--ghost" data-act="closeModal">' + T('common.cancel') + '</button>' +
        '<button class="btn btn--primary" data-act="confirmPay" data-tier="' + tier + '">' + T('pricing.pay') + ' · ' + T('common.currency') + price + '</button>'
    });
  }

  /* ============================================================
     BOOKING (third-party payment)
     ============================================================ */
  var BOOK_KEYS = [
    ['reg', 'hospital'], ['flight', 'ctrip'], ['hotel', 'booking'], ['transfer', 'didi'], ['travel', 'ctrip']
  ];

  function bookingItems() {
    var p = planById(S.selected);
    if (!p) return [];
    var at = addonsTotal(p);
    return BOOK_KEYS.map(function (k) {
      var amount = k[0] === 'reg' ? p.costs.medical
        : k[0] === 'flight' ? p.costs.flight
        : k[0] === 'hotel' ? p.costs.hotel
        : k[0] === 'transfer' ? p.costs.transfer
        : at;
      var cap = k[0][0].toUpperCase() + k[0].slice(1);
      var label = T('booking.item' + cap) + (k[0] === 'transfer' ? ' · ' + L(p.transfer.vehicleName) : '');
      return {
        key: k[0], label: label,
        partnerKey: k[1], partner: D.PARTNERS[k[0]], amount: amount
      };
    }).filter(function (x) { return x.amount > 0; });
  }

  function renderBookingIn() {
    if (!S.plans.length) { S.view = 'intake'; return renderIntake(); }
    var p = planById(S.selected);
    var items = bookingItems();
    var paidCount = items.filter(function (x) { return S.bookings[p.id + '|' + x.key] === 'paid'; }).length;

    var list = items.map(function (x) {
      var paid = S.bookings[p.id + '|' + x.key] === 'paid';
      return '<div class="partner">' +
        '<span class="partner__logo" style="background:' + x.partner.color + '">' + esc(x.partner.mark) + '</span>' +
        '<span class="partner__body"><strong>' + esc(x.label) + '</strong>' +
          '<p>' + T('booking.provider') + ' · <b>' + T('partners.' + x.partnerKey) + '</b></p></span>' +
        '<span class="partner__meta"><strong>' + money(x.amount) + '</strong>' +
          '<span>' + (paid ? '<span class="tag tag--success">' + T('common.included') + '</span>' : '<span class="tag tag--warn">' + T('plan.estimate') + '</span>') + '</span></span>' +
        '<button class="btn ' + (paid ? 'btn--soft' : 'btn--primary') + '" ' + (paid ? 'disabled' : '') +
          ' data-act="book" data-key="' + x.key + '">' + (paid ? icon('check', 14) + ' ' + T('common.included') : T('booking.goPay')) + '</button>' +
      '</div>';
    }).join('');

    var sumRows = items.map(function (x) {
      return '<div class="summary__row"><span class="muted">' + esc(x.label) + '</span><span>' + money(x.amount) + '</span></div>';
    }).join('');

    var thirdTotal = items.reduce(function (a, x) { return a + x.amount; }, 0);

    return '' +
      '<div class="page-head"><div>' +
        '<div class="eyebrow">' + T('nav.plans') + '</div>' +
        '<h1>' + T('booking.title') + '</h1>' +
        '<p class="sub">' + T('booking.sub') + '</p>' +
      '</div></div>' +

      '<div class="book-grid">' +
        '<div>' +
          '<div class="note note--info" style="margin-bottom:18px">' + icon('shield', 16) +
            '<span><b>' + T('booking.noteTitle') + '</b> — ' + T('booking.noteBody') + '</span></div>' +
          list +
          (paidCount === items.length && items.length
            ? '<div class="note" style="margin-top:16px">' + icon('check', 16) + '<span>' + T('booking.doneTitle') + ' · ' + T('booking.doneBody') + '</span></div>'
            : '') +
        '</div>' +
        '<div class="summary">' +
          '<div class="summary__head">' + T('booking.summary') + '</div>' +
          '<div class="summary__body">' + sumRows +
            '<div class="summary__row summary__row--sum"><span>' + T('common.total') + '</span><span>' + money(thirdTotal) + '</span></div>' +
            '<div class="summary__row" style="border-top:1px dashed var(--border);margin-top:10px;padding-top:12px">' +
              '<span class="muted tiny">' + T('booking.platformFee') + '<br><span class="tiny" style="color:var(--text-3)">' + money(p.costs.service) + ' · ' + T('booking.platformFeeNote') + '</span></span>' +
              '<span class="muted tiny">' + T('common.notIncluded') + '</span></div>' +
          '</div>' +
          '<div class="summary__foot">' +
            '<button class="btn btn--ghost btn--block" data-act="go" data-view="plan-detail">' + T('plans.viewPlan') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ============================================================
     TRIPS
     ============================================================ */
  function renderTrips() {
    if (!S.plans.length) {
      return '<div class="page-head"><div><div class="eyebrow">' + T('nav.trips') + '</div>' +
        '<h1>' + T('trips.title') + '</h1><p class="sub">' + T('trips.sub') + '</p></div></div>' +
        '<div class="empty"><div class="empty__ico">' + icon('plane', 40) + '</div>' +
        '<h3>' + T('trips.empty1') + '</h3><p>' + T('trips.empty2') + '</p>' +
        '<button class="btn btn--primary" data-act="go" data-view="intake">' + T('trips.emptyBtn') + '</button></div>';
    }

    var p = planById(S.selected);
    var items = bookingItems();
    var paidCount = items.filter(function (x) { return S.bookings[p.id + '|' + x.key] === 'paid'; }).length;
    var allPaid = items.length > 0 && paidCount === items.length;
    var step = S.paidTier > 0 ? (allPaid ? 5 : 4) : 2;

    var pipe = [1, 2, 3, 4, 5].map(function (n) {
      var cls = n < step ? 'is-done' : (n === step ? 'is-current' : '');
      return '<div class="pipe ' + cls + '"><div class="pipe__dot">' + (n < step ? '✓' : n) + '</div>' +
        '<div class="pipe__label">' + T('trips.s' + n) + '</div></div>';
    }).join('');

    var rows = items.map(function (x) {
      var paid = S.bookings[p.id + '|' + x.key] === 'paid';
      return '<div class="summary__row"><span>' + esc(x.label) + ' · <span class="tiny muted">' + T('partners.' + x.partnerKey) + '</span></span>' +
        '<span>' + (paid ? '<span class="tag tag--success">' + T('common.included') + '</span>' : '<span class="tag tag--warn">' + T('booking.goPay') + '</span>') + '</span></div>';
    }).join('');

    return '' +
      '<div class="page-head"><div><div class="eyebrow">' + T('nav.trips') + '</div>' +
        '<h1>' + T('trips.title') + '</h1><p class="sub">' + T('trips.sub') + '</p></div></div>' +

      '<div class="trip-card">' +
        '<div class="trip-card__head">' +
          '<div><h3>' + esc(L(p.hospital)) + '</h3>' +
            '<p>' + T('trips.orderNo') + ' <b>' + esc(p.refNo) + '</b> · ' + T('trips.created') + ' 2026-09-01 · ' +
            T('plans.' + p.tierKey) + ' · ' + T('dept.' + p.dept + '.name') + '</p></div>' +
          '<div style="text-align:right"><div style="font-size:22px;font-weight:700">' + money(grandTotal(p)) + '</div>' +
            '<div class="tiny muted">' + T('plan.perCompanion', { n: p.companions }) + '</div></div>' +
        '</div>' +
        '<div class="trip-card__body">' +
          '<div class="block-title" style="margin-top:0">' + T('trips.pipeline') + '</div>' +
          '<div class="pipeline">' + pipe + '</div>' +
          '<div class="block-title">' + T('trips.booking') + '</div>' +
          '<div class="summary" style="box-shadow:none;border:1px solid var(--border)"><div class="summary__body">' + rows + '</div></div>' +
          '<div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap">' +
            '<button class="btn btn--primary" data-act="go" data-view="plan-detail">' + T('trips.viewPlan') + '</button>' +
            (S.paidTier === 0
              ? '<button class="btn btn--accent" data-act="go" data-view="pricing">' + T('plans.unlockCta') + '</button>'
              : '<button class="btn btn--ghost" data-act="go" data-view="booking">' + (allPaid ? T('booking.title') : T('trips.payNow')) + '</button>') +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* ============================================================
     BACKEND — 医院端 / 运营后台（中文界面）
     ============================================================ */
  /* ---------- helpers ---------- */
  function getOrder(id) { return BK.orders.filter(function (o) { return o.id === id; })[0]; }
  function getCase(id) { return BK.cases.filter(function (c) { return c.id === id; })[0]; }
  function val(id) { var e = document.getElementById(id); return e ? e.value : ''; }
  function nowStamp() {
    var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
  }
  function statusTag(s) {
    var map = { pending: ['tag--warn', '待核实'], verifying: ['tag--primary', '核实中'], verified: ['tag--success', '已核实'], rejected: ['tag--danger', '已退回'] };
    var m = map[s] || map.pending;
    return '<span class="tag ' + m[0] + ' tag--dot">' + m[1] + '</span>';
  }
  function deptName(k) { return (D.MEDICAL[k] && T('dept.' + k + '.name')) || k; }
  function tierName(t) { return t === 'A' ? 'A 自理版' : t === 'B' ? 'B 全包版' : 'C 私人助理版'; }

  /* ---------- 工作台 hub ---------- */
  function renderBackendHub() {
    var roleName = S.role === 'patient' ? '患者端' : S.role === 'agent' ? 'Agent 端' : S.role === 'hospital' ? '医院端' : '运营后台';
    var cards = [
      ['ops-orders', '订单', '查看患者端生成的所有行程订单，跟踪核实与支付状态。', 'list'],
      ['hospital-verify', '医院核实工作台', '逐条核实 AI 生成的方案：医师档期、床位、准确报价与医师署名。', 'shield'],
      ['ops-cases', '案例库管理', '维护脱敏历史案例——AI 匹配与组合的来源。支持增删改与发布控制。', 'book']
    ].map(function (c) {
      return '<button class="hub-card" data-act="go" data-view="' + c[0] + '">' +
        '<span class="hub-card__ico">' + icon(c[3], 22) + '</span>' +
        '<strong>' + c[1] + '</strong>' +
        '<span>' + c[2] + '</span>' +
        '<span class="hub-card__go">进入 →</span></button>';
    }).join('');
    return '<div class="page-head"><div>' +
      '<div class="eyebrow">后台 · ' + roleName + '</div>' +
      '<h1>后台工作台</h1>' +
      '<p class="sub">医院与运营人员入口。下方三块对应「订单、医院核实工作台、案例库管理」。</p>' +
      '</div></div>' +
      (S.role === 'patient'
        ? '<div class="note note--info" style="margin-bottom:22px">' + icon('shield', 15) + '<span>当前为前台患者视图，切换到「医院端 / 运营后台」即可进入管理界面。</span></div>'
        : '') +
      '<div class="hub-grid">' + cards + '</div>';
  }

  /* ---------- 订单 ---------- */
  function orderRow(o) {
    var a = o.amounts, total = a.medical + a.flight + a.hotel + a.transfer + a.service;
    return '<div class="order-row">' +
      '<div class="order-row__main">' +
        '<div class="order-row__top"><strong>' + esc(o.refNo) + '</strong>' + statusTag(o.status) +
          '<span class="tag">' + esc(deptName(o.dept)) + '</span>' +
          '<span class="tag">' + esc(L(o.cityName)) + '</span>' +
          '<span class="tag">' + esc(L(o.hospital)) + '</span></div>' +
        '<div class="order-row__meta">' + esc(o.patient) + ' · ' + tierName(o.tier) + ' · 创建于 ' + esc(o.createdAt) + '</div>' +
      '</div>' +
      '<div class="order-row__side"><strong class="order-row__amt">' + money(total) + '</strong>' +
        '<button class="btn btn--primary btn--sm" data-act="viewOrder" data-id="' + o.id + '">查看订单</button></div>' +
      '</div>';
  }
  function renderOrders() {
    var orders = BK.orders;
    var body = orders.length ? orders.map(orderRow).join('') :
      '<div class="empty"><div class="empty__ico">' + icon('clock', 40) + '</div><h3>暂无订单</h3></div>';
    return '<div class="page-head"><div>' +
      '<div class="eyebrow">订单</div><h1>订单</h1>' +
      '<p class="sub">患者端生成的行程订单，按状态跟踪核实与支付。</p></div></div>' +
      '<div style="display:flex;justify-content:flex-end;margin-bottom:14px">' +
        '<button class="btn btn--ghost btn--sm" data-act="resetOrders">' + icon('arrow', 13) + ' 重置示例订单</button></div>' +
      '<div class="order-list">' + body + '</div>';
  }
  function openOrderModal(id) {
    var o = getOrder(id); if (!o) return;
    var a = o.amounts, total = a.medical + a.flight + a.hotel + a.transfer + a.service;
    function row(k, v) { return '<tr><td>' + esc(k) + '</td><td>' + esc(v) + '</td></tr>'; }
    var kvHtml = kv('患者', esc(o.patient)) + kv('科室', esc(deptName(o.dept))) +
      kv('城市', esc(L(o.cityName))) + kv('医院', esc(L(o.hospital))) +
      kv('创建时间', esc(o.createdAt)) + kv('状态', statusTag(o.status));
    var costHtml = '<table class="cost-table">' +
      row('医疗费', money(a.medical)) + row('机票', money(a.flight)) + row('住宿', money(a.hotel)) +
      row('接驳', money(a.transfer)) + row('服务费', money(a.service)) +
      '<tr class="is-sum"><td>合计</td><td>' + money(total) + '</td></tr></table>';
    var verifyBlock = (o.status === 'verified')
      ? '<div class="stamp" style="margin-top:14px"><span class="stamp__ico">' + icon('check', 16) + '</span>' +
        '<span class="stamp__t"><strong>核实完成</strong>' +
        '<span>床位预留号 <b>' + esc(o.bedHold) + '</b> · 医师署名 ' + esc(o.doctorSign) + ' · 核实时间 ' + esc(o.verifiedAt) + '</span></span></div>'
      : '';
    var noteBlock = (o.status !== 'verified')
      ? '<div class="field" style="margin-top:14px"><label class="field__label">核实备注</label>' +
        '<textarea class="textarea" id="orderNote" placeholder="填写核实结论，如「已确认主刀档期与床位」">' + esc(o.notes || '') + '</textarea></div>'
      : '';
    var actions = (o.status === 'verified')
      ? '<button class="btn btn--ghost" data-act="closeModal">关闭</button>'
      : '<button class="btn btn--ghost" data-act="closeModal">取消</button>' +
        '<button class="btn btn--soft" data-act="orderVerifying" data-id="' + o.id + '">标记核实中</button>' +
        '<button class="btn btn--ghost btn--danger" data-act="orderRejected" data-id="' + o.id + '">退回补充资料</button>' +
        '<button class="btn btn--primary" data-act="orderVerified" data-id="' + o.id + '">标记已核实</button>';
    openModal({
      title: '订单详情 · ' + esc(o.refNo), sub: esc(o.patient) + ' · ' + esc(deptName(o.dept)),
      body: kvHtml + verifyBlock + '<div class="block-title" style="margin-top:18px">金额明细</div>' + costHtml + noteBlock,
      foot: actions
    });
  }

  /* ---------- 医院核实工作台 ---------- */
  function renderVerify() {
    var need = BK.orders.filter(function (o) { return o.status !== 'verified'; });
    var done = BK.orders.length - need.length;
    var body = need.length ? need.map(orderRow).join('') :
      '<div class="empty"><div class="empty__ico">' + icon('check', 40) + '</div><h3>全部已核实</h3><p>当前没有待处理的核实任务。</p></div>';
    return '<div class="page-head"><div>' +
      '<div class="eyebrow">医院端 · 核实工作台</div><h1>医院核实工作台</h1>' +
      '<p class="sub">逐条核实 AI 方案，给出医师署名、床位预留号与准确报价。</p></div></div>' +
      '<div class="matchbar"><div class="matchbar__left">' +
        '<div class="score"><strong>' + need.length + '</strong><span>待核实</span></div>' +
        '<div><strong>医院核实工作台</strong><div class="tiny muted">已核实 ' + done + ' 笔</div></div>' +
      '</div></div>' +
      '<div class="order-list">' + body + '</div>';
  }

  /* ---------- 案例库管理 ---------- */
  function caseRow(c) {
    var tags = c.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join(' ');
    var stateTag = c.status === 'published'
      ? '<span class="tag tag--success tag--dot">已发布</span>'
      : '<span class="tag tag--warn tag--dot">草稿</span>';
    return '<tr>' +
      '<td><strong>' + esc(c.id) + '</strong></td>' +
      '<td>' + esc(deptName(c.dept)) + '</td>' +
      '<td>' + esc(L(D.city(c.city).name)) + '</td>' +
      '<td>' + esc(c.hospital) + '</td>' +
      '<td>' + esc(c.outcome) + '</td>' +
      '<td class="mono-num">' + money(c.low) + ' – ' + money(c.high) + '</td>' +
      '<td>' + tags + '</td>' +
      '<td class="mono-num">' + fmt(c.usage) + '</td>' +
      '<td>' + stateTag + '</td>' +
      '<td class="case-row__act">' +
        '<button class="btn btn--soft btn--sm" data-act="toggleCase" data-id="' + c.id + '">发布/草稿</button>' +
        '<button class="btn btn--ghost btn--sm" data-act="editCase" data-id="' + c.id + '">编辑</button>' +
        '<button class="btn btn--ghost btn--sm btn--danger" data-act="deleteCase" data-id="' + c.id + '">' + icon('cross', 13) + '</button>' +
      '</td></tr>';
  }
  function renderCases() {
    var cases = BK.cases;
    var table = cases.length
      ? '<table class="compare case-table"><thead><tr>' +
        ['案例编号', '科室', '城市', '医院', '疗效指标', '费用区间', '标签', '被引用', '状态', '操作'].map(function (h) { return '<th>' + h + '</th>'; }).join('') +
        '</tr></thead><tbody>' + cases.map(caseRow).join('') + '</tbody></table>'
      : '<div class="empty"><div class="empty__ico">' + icon('book', 40) + '</div><h3>案例库为空</h3></div>';
    return '<div class="page-head"><div>' +
      '<div class="eyebrow">运营后台 · 案例库</div><h1>案例库管理</h1>' +
      '<p class="sub">脱敏历史案例，是 AI 匹配与组合的来源。</p></div></div>' +
      '<div style="display:flex;justify-content:space-between;gap:12px;margin-bottom:14px;flex-wrap:wrap">' +
        '<button class="btn btn--primary" data-act="addCase">' + icon('plus', 14) + ' 新增案例</button>' +
        '<button class="btn btn--ghost btn--sm" data-act="resetCases">重置案例库</button>' +
      '</div>' + table;
  }
  function openCaseModal(id) {
    var c = id ? getCase(id) : null;
    var deptOpts = D.DEPT_IDS.map(function (d) {
      return '<option value="' + d + '"' + (c && c.dept === d ? ' selected' : '') + '>' + esc(T('dept.' + d + '.name')) + '</option>';
    }).join('');
    var cityOpts = D.CITIES.map(function (cc) {
      return '<option value="' + cc.id + '"' + (c && c.city === cc.id ? ' selected' : '') + '>' + esc(L(cc.name)) + '</option>';
    }).join('');
    var statusOpts = [['published', '已发布'], ['draft', '草稿']].map(function (s) {
      return '<option value="' + s[0] + '"' + (c && c.status === s[0] ? ' selected' : '') + '>' + s[1] + '</option>';
    }).join('');
    openModal({
      title: (c ? '编辑案例' : '新增案例') + ' · 案例信息',
      body:
        '<div class="field__row">' +
          '<div class="field"><label class="field__label">科室</label><select class="select" id="cfDept">' + deptOpts + '</select></div>' +
          '<div class="field"><label class="field__label">城市</label><select class="select" id="cfCity">' + cityOpts + '</select></div>' +
        '</div>' +
        '<div class="field"><label class="field__label">医院</label><input class="input" id="cfHosp" value="' + (c ? esc(c.hospital) : '') + '"></div>' +
        '<div class="field"><label class="field__label">疗效指标</label><input class="input" id="cfOutcome" value="' + (c ? esc(c.outcome) : '') + '"></div>' +
        '<div class="field__row">' +
          '<div class="field"><label class="field__label">费用下限</label><input class="input" type="number" id="cfLow" value="' + (c ? c.low : '') + '"></div>' +
          '<div class="field"><label class="field__label">费用上限</label><input class="input" type="number" id="cfHigh" value="' + (c ? c.high : '') + '"></div>' +
        '</div>' +
        '<div class="field"><label class="field__label">标签（逗号分隔）</label><input class="input" id="cfTags" value="' + (c ? esc(c.tags.join(', ')) : '') + '"></div>' +
        '<div class="field"><label class="field__label">状态</label><select class="select" id="cfStatus">' + statusOpts + '</select></div>',
      foot: '<button class="btn btn--ghost" data-act="closeModal">取消</button>' +
        '<button class="btn btn--primary" data-act="saveCase" data-id="' + (c ? c.id : '') + '">保存</button>'
    });
  }
  function pushOrderFromPlan(p) {
    if (!p) return;
    if (BK.orders.some(function (o) { return o.refNo === p.refNo; })) return;
    BK.orders.unshift({
      id: 'O' + (BK.orders.length + 1) + 'x' + (Date.now() % 1000),
      refNo: p.refNo, dept: p.dept, city: p.city.id, cityName: p.city.name, origin: p.origin.id, tier: p.tier,
      hospital: p.hospital, patient: '演示患者 · ' + (S.input.disease || deptName(p.dept)),
      createdAt: nowStamp(), status: 'pending',
      amounts: { medical: p.costs.medical, flight: p.costs.flight, hotel: p.costs.hotel, transfer: p.costs.transfer, service: p.costs.service },
      notes: '', verifiedAt: '', bedHold: '', doctorSign: ''
    });
    saveBackend();
  }

  /* ============================================================
     AGENT / B2B — 合作机构端（中文界面）
     ============================================================ */
  function aHead(t, s, e) {
    return '<div class="page-head"><div">' +
      (e ? '<div class="eyebrow">' + e + '</div>' : '') +
      '<h1>' + t + '</h1><p class="sub">' + s + '</p></div></div>';
  }
  function agentTierName(t) { return t === 'A' ? 'A 自理版' : t === 'B' ? 'B 全包版' : 'C 私人助理版'; }
  function refStatusTag(s) {
    var map = {
      submitted:   ['tag--warn',    '已提交'],
      consulting:  ['tag--primary', '沟通中'],
      paid:        ['tag--violet',  '已付费·待结算'],
      settled:     ['tag--success', '已结算'],
      lost:        ['tag--danger',  '已流失']
    };
    var m = map[s] || map.submitted;
    return '<span class="tag ' + m[0] + ' tag--dot">' + m[1] + '</span>';
  }
  function refRow(r) {
    return '<div class="order-row">' +
      '<div class="order-row__main">' +
        '<div class="order-row__top"><strong>' + esc(r.refNo) + '</strong>' + refStatusTag(r.status) +
          '<span class="tag">' + esc(deptName(r.dept)) + '</span>' +
          '<span class="tag">' + esc(L(D.city(r.city).name)) + '</span>' +
          '<span class="tag">' + esc(agentTierName(r.tier)) + '</span></div>' +
        '<div class="order-row__meta">' + esc(r.patient) + ' · 来源 ' + esc(D.origin(r.origin).label || '') + ' · 创建于 ' + esc(r.createdAt) + '</div>' +
      '</div>' +
      '<div class="order-row__side"><strong class="order-row__amt">' + money(r.commission) + '</strong>' +
        '<button class="btn btn--primary btn--sm" data-act="viewReferral" data-id="' + r.id + '">查看</button></div>' +
    '</div>';
  }

  function renderAgentDashboard() {
    var rs = AG.referrals;
    var inProg = rs.filter(function (r) { return r.status === 'submitted' || r.status === 'consulting'; }).length;
    var pending = rs.filter(function (r) { return r.status === 'paid'; }).reduce(function (a, r) { return a + r.commission; }, 0);
    var settled = rs.filter(function (r) { return r.status === 'settled'; }).reduce(function (a, r) { return a + r.commission; }, 0);
    var kpis = [
      [rs.length, '总转诊数', ''],
      [inProg, '进行中', '已提交 / 沟通中'],
      [money(pending), '待结算佣金', '患者已付费 · 待平台结算'],
      [money(settled), '已结算佣金', '已打入合作机构账户']
    ].map(function (k) {
      return '<div class="kpi"><div class="k">' + k[1] + '</div><div class="v">' + k[0] + '</div><div class="n">' + k[2] + '</div></div>';
    }).join('');
    var recent = rs.slice(0, 5).map(refRow).join('');
    return aHead('合作机构工作台', '跨境医疗合作机构 / 转诊代理入口（演示）', 'Agent 端') +
      '<div class="kpi-row">' + kpis + '</div>' +
      '<div class="note note--info" style="margin-bottom:22px">' + icon('shield', 15) +
        '<span>本入口面向东南亚等地区的医疗合作机构 / 转诊代理（Agent）。机构在此提交病人转诊、跟踪进度并查看佣金分成，是平台在该地区的低成本获客渠道。</span></div>' +
      '<div class="block-title">最近转诊</div>' +
      '<div class="order-list">' + recent + '</div>' +
      '<div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap">' +
        '<button class="btn btn--primary" data-act="go" data-view="agent-new">' + icon('plus', 14) + ' 新建转诊</button>' +
        '<button class="btn btn--ghost" data-act="go" data-view="agent-commission">查看佣金分成</button>' +
      '</div>';
  }

  function renderAgentReferrals() {
    var rs = AG.referrals;
    var body = rs.length ? rs.map(refRow).join('') :
      '<div class="empty"><div class="empty__ico">' + icon('list', 40) + '</div><h3>暂无转诊</h3></div>';
    return aHead('我的转诊', '合作机构提交的全部病人转诊与佣金状态。', 'Agent 端 · 我的转诊') +
      '<div style="display:flex;justify-content:space-between;gap:12px;margin-bottom:14px;flex-wrap:wrap">' +
        '<button class="btn btn--primary" data-act="go" data-view="agent-new">' + icon('plus', 14) + ' 新建转诊</button>' +
        '<button class="btn btn--ghost btn--sm" data-act="resetReferrals">重置示例数据</button>' +
      '</div>' +
      '<div class="order-list">' + body + '</div>';
  }

  function renderAgentNew() {
    var deptOpts = D.DEPT_IDS.map(function (d) { return '<option value="' + d + '">' + esc(T('dept.' + d + '.name')) + '</option>'; }).join('');
    var cityOpts = D.CITIES.map(function (c) { return '<option value="' + c.id + '">' + esc(L(c.name)) + '</option>'; }).join('');
    var originOpts = D.ORIGINS.map(function (o) { return '<option value="' + o.id + '">' + esc(o.label) + '</option>'; }).join('');
    var tierOpts = ['A', 'B', 'C'].map(function (t) {
      var c = D.commissionFor(t);
      return '<option value="' + t + '">' + esc(agentTierName(t)) + ' · 佣金约 ' + money(c.amount) + '</option>';
    }).join('');
    return aHead('新建转诊', '提交一例病人转诊，平台将进入需求评估与方案生成流程。', 'Agent 端 · 新建转诊') +
      '<div class="intake-wrap"><div class="form-card"><div class="form-card__body">' +
        '<div class="field"><label class="field__label">病人称呼<span class="req">*</span></label><input class="input" id="fPatient" placeholder="如 Nguyen Thi H."></div>' +
        '<div class="field__row">' +
          '<div class="field"><label class="field__label">科室<span class="req">*</span></label><select class="select" id="fDept">' + deptOpts + '</select></div>' +
          '<div class="field"><label class="field__label">目标城市</label><select class="select" id="fCity">' + cityOpts + '</select></div>' +
        '</div>' +
        '<div class="field__row">' +
          '<div class="field"><label class="field__label">来源国家 / 地区</label><select class="select" id="fOrigin">' + originOpts + '</select></div>' +
          '<div class="field"><label class="field__label">预期服务包</label><select class="select" id="fTier">' + tierOpts + '</select></div>' +
        '</div>' +
        '<div class="field"><label class="field__label">转诊备注</label><textarea class="textarea" id="fNote" placeholder="简要病情、期望时间、特殊需求等"></textarea></div>' +
        '<div class="field__hint">提交后转诊进入「已提交」状态，病人付费后佣金计入待结算。</div>' +
      '</div>' +
      '<div class="form-card__foot"><span class="tiny muted">演示数据，不接入真实 HIS</span>' +
        '<button class="btn btn--primary" data-act="saveReferral">提交转诊 ' + icon('arrow', 16) + '</button></div>' +
      '</div>' +
      '<div><div class="side-card"><h3>' + icon('spark', 16) + ' 转诊即获客</h3><div class="proc">' +
        [1, 2, 3, 4].map(function (n) {
          var t = ['提交转诊', '平台生成方案', '病人付费', '佣金结算'];
          var d = ['填写病人与科室信息', 'AI 生成 3 套跨境行程方案', '按所购服务包档位计佣', '行程结束无争议后打款至机构账户'];
          return '<div class="proc__item"><span class="proc__dot">' + n + '</span><span class="proc__body"><strong>' + t[n - 1] + '</strong><span>' + d[n - 1] + '</span></span></div>';
        }).join('') +
      '</div></div>' +
      '<div class="note note--info">' + icon('shield', 15) + '<span>合作机构通过本入口提交转诊，是平台在东南亚等地区的低成本获客渠道。</span></div>' +
      '</div></div>';
  }

  function renderAgentCommission() {
    var rs = AG.referrals;
    var earned = rs.reduce(function (a, r) { return a + (r.status === 'paid' || r.status === 'settled' ? r.commission : 0); }, 0);
    var settled = rs.reduce(function (a, r) { return a + (r.status === 'settled' ? r.commission : 0); }, 0);
    var pending = earned - settled;
    var ledger = rs.map(function (r) {
      var c = D.commissionFor(r.tier);
      return '<tr>' +
        '<td><strong>' + esc(r.refNo) + '</strong></td>' +
        '<td>' + esc(r.patient) + '</td>' +
        '<td>' + esc(agentTierName(r.tier)) + '</td>' +
        '<td class="mono-num">' + Math.round(c.rate * 100) + '%</td>' +
        '<td class="mono-num">' + money(c.price) + '</td>' +
        '<td class="mono-num"><b>' + money(r.commission) + '</b></td>' +
        '<td>' + refStatusTag(r.status) + '</td>' +
        '<td class="mono-num tiny muted">' + esc(r.settledAt || '—') + '</td>' +
      '</tr>';
    }).join('');
    var ruleRows = ['A', 'B', 'C'].map(function (t) {
      var c = D.commissionFor(t);
      return '<tr><td><b>' + esc(agentTierName(t)) + '</b></td><td class="mono-num">' + money(c.price) + '</td><td class="mono-num">' + Math.round(c.rate * 100) + '%</td><td class="mono-num"><b>' + money(c.amount) + '</b></td></tr>';
    }).join('');
    return aHead('佣金分成', '合作机构按所荐病人实际购买的服务包档位获得分成。', 'Agent 端 · 佣金分成') +
      '<div class="matchbar"><div class="matchbar__left">' +
        '<div class="score"><strong>' + money(earned) + '</strong><span>已产生</span></div>' +
        '<div><strong>佣金总览</strong><div class="tiny muted">待结算 ' + money(pending) + ' · 已结算 ' + money(settled) + '</div></div>' +
      '</div></div>' +
      '<div class="card card__pad" style="margin-bottom:22px">' +
        '<div class="block-title" style="margin-top:0">分成规则（演示）</div>' +
        '<table class="cost-table">' +
          '<tr><td>服务包档位</td><td class="mono-num">平台服务费</td><td class="mono-num">Agent 分成比例</td><td class="mono-num">单笔佣金</td></tr>' +
          ruleRows +
        '</table>' +
        '<div class="note" style="margin-top:14px">' + icon('shield', 15) + '<span>佣金在病人完成支付后计入「待结算」；病人行程结束、无争议后由平台结算至合作机构账户。分成比例与结算周期以正式合作协议为准。</span></div>' +
      '</div>' +
      '<div class="block-title">佣金明细</div>' +
      '<table class="case-table"><thead><tr>' +
        ['转诊号', '病人', '套餐', '费率', '基数', '佣金', '状态', '结算时间'].map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' + ledger + '</tbody></table>';
  }

  function openReferralModal(id) {
    var r = AG.referrals.filter(function (x) { return x.id === id; })[0];
    if (!r) return;
    var c = D.commissionFor(r.tier);
    var kvs = kv('病人', esc(r.patient)) + kv('科室', esc(deptName(r.dept))) +
      kv('目标城市', esc(L(D.city(r.city).name))) + kv('来源国家', esc(D.origin(r.origin).label || '')) +
      kv('预期套餐', esc(agentTierName(r.tier))) + kv('创建时间', esc(r.createdAt)) + kv('状态', refStatusTag(r.status));
    var comm = '<table class="cost-table">' +
      '<tr><td>平台服务费基数</td><td class="mono-num">' + money(c.price) + '</td></tr>' +
      '<tr><td>Agent 分成比例</td><td class="mono-num">' + Math.round(c.rate * 100) + '%</td></tr>' +
      '<tr class="is-sum"><td>本笔佣金</td><td class="mono-num">' + money(r.commission) + '</td></tr></table>';
    var note = r.note ? '<div class="field" style="margin-top:14px"><label class="field__label">转诊备注</label><div class="tiny muted">' + esc(r.note) + '</div></div>' : '';
    var actions;
    if (r.status === 'submitted' || r.status === 'consulting') {
      actions = '<button class="btn btn--ghost btn--danger" data-act="refLost" data-id="' + r.id + '">标记流失</button>' +
        '<button class="btn btn--ghost" data-act="closeModal">关闭</button>' +
        '<button class="btn btn--primary" data-act="refPaid" data-id="' + r.id + '">标记患者已付费</button>';
    } else if (r.status === 'paid') {
      actions = '<button class="btn btn--ghost" data-act="closeModal">关闭</button>' +
        '<button class="btn btn--primary" data-act="refSettled" data-id="' + r.id + '">结算佣金</button>';
    } else {
      actions = '<button class="btn btn--ghost" data-act="closeModal">关闭</button>';
    }
    openModal({
      title: '转诊详情 · ' + esc(r.refNo), sub: esc(r.patient) + ' · ' + esc(deptName(r.dept)),
      body: kvs + '<div class="block-title" style="margin-top:18px">佣金</div>' + comm + note,
      foot: actions
    });
  }

  /* ============================================================
     EVENTS
     ============================================================ */
  document.addEventListener('click', function (e) {
    var node = e.target.closest ? e.target.closest('[data-act],[data-nav]') : null;
    if (!node) return;

    var nav = node.getAttribute('data-nav');
    if (nav) { go(nav); return; }

    var act = node.getAttribute('data-act');
    if (!act) return;

    switch (act) {
      case 'go':
        go(node.getAttribute('data-view'));
        break;

      case 'pickDept':
        S.input.dept = node.getAttribute('data-id');
        save();
        go('intake');
        break;

      case 'set': {
        var f = node.getAttribute('data-field'), v = node.getAttribute('data-val');
        S.input[f] = (v === '1') ? true : (v === '0') ? false : v;
        save(); paint();
        break;
      }

      case 'addFile': {
        var pool = D.SAMPLE_FILES;
        S.input.files = S.input.files || [];
        if (S.input.files.length < 4) {
          S.input.files.push(pool[S.input.files.length % pool.length]);
          save(); paint();
          toast(T('common.save'));
        }
        break;
      }

      case 'rmFile':
        S.input.files.splice(parseInt(node.getAttribute('data-idx'), 10), 1);
        save(); paint();
        break;

      case 'generate': {
        var el = document.getElementById('fDisease');
        if (el) S.input.disease = el.value.trim();
        if (!S.input.disease) S.input.disease = T('dept.' + S.input.dept + '.name');
        save();
        runGeneration();
        break;
      }

      case 'selectPlan':
        S.selected = node.getAttribute('data-id');
        save(); paint();
        break;

      case 'openPlan':
        S.selected = node.getAttribute('data-id');
        S.tab = 'overview';
        go('plan-detail');
        break;

      case 'tab':
        S.tab = node.getAttribute('data-val');
        save(); paint();
        break;

      case 'toggleAddon': {
        var pid = node.getAttribute('data-val');
        var pl = planById(S.selected);
        pl.addons = pl.addons || [];
        var ix = pl.addons.indexOf(pid);
        if (ix >= 0) pl.addons.splice(ix, 1); else pl.addons.push(pid);
        save(); paint();
        break;
      }

      case 'pay':
        openPayModal(parseInt(node.getAttribute('data-tier'), 10));
        break;

      case 'pickPay':
        Array.prototype.forEach.call(document.querySelectorAll('.pay-method'), function (m) { m.classList.remove('is-on'); });
        node.classList.add('is-on');
        break;

      case 'confirmPay': {
        var tier = parseInt(node.getAttribute('data-tier'), 10);
        S.paidTier = Math.max(S.paidTier, tier + 1);
        pushOrderFromPlan(planById(S.selected));
        save();
        closeModal();
        toast(T('pricing.successTitle'));
        go(S.plans.length ? 'plan-detail' : 'plans');
        break;
      }

      case 'book': {
        var key = node.getAttribute('data-key');
        var it = bookingItems().filter(function (x) { return x.key === key; })[0];
        if (!it) return;
        openModal({
          title: T('booking.redirectTitle', { p: T('partners.' + it.partnerKey) }),
          sub: T('booking.provider') + ' · ' + T('partners.' + it.partnerKey),
          body:
            '<div class="summary" style="box-shadow:none;margin-bottom:18px"><div class="summary__body">' +
              '<div class="summary__row"><span class="muted">' + esc(it.label) + '</span><span>' + money(it.amount) + '</span></div>' +
              '<div class="summary__row summary__row--sum"><span>' + T('common.total') + '</span><span>' + money(it.amount) + '</span></div>' +
            '</div></div>' +
            '<div class="note">' + icon('arrow', 16) + '<span>' + T('booking.redirectBody') + '</span></div>',
          foot:
            '<button class="btn btn--ghost" data-act="closeModal">' + T('common.cancel') + '</button>' +
            '<button class="btn btn--primary" data-act="confirmBook" data-key="' + key + '">' + T('booking.redirectBtn') + '</button>'
        });
        break;
      }

      case 'confirmBook': {
        var kk = node.getAttribute('data-key');
        S.bookings[planById(S.selected).id + '|' + kk] = 'paid';
        save();
        closeModal();
        toast(T('booking.goPay') + ' ✓');
        paint();
        break;
      }

      case 'closeModal':
        closeModal();
        break;

      /* ---------------- 后台：角色切换 ---------------- */
      case 'setRole': {
        var r = node.getAttribute('data-role');
        S.role = r; save();
        go(r === 'patient' ? 'home' : (r === 'agent' ? 'agent-dashboard' : 'backend'));
        break;
      }

      /* ---------------- 后台：订单 ---------------- */
      case 'viewOrder':
        openOrderModal(node.getAttribute('data-id'));
        break;
      case 'orderVerifying': {
        var ov = getOrder(node.getAttribute('data-id'));
        if (ov) { var nv = val('orderNote'); if (nv) ov.notes = nv; ov.status = 'verifying'; saveBackend(); closeModal(); toast('已标记核实中'); paint(); }
        break;
      }
      case 'orderVerified': {
        var ovf = getOrder(node.getAttribute('data-id'));
        if (ovf) {
          var nvf = val('orderNote'); if (nvf) ovf.notes = nvf;
          ovf.status = 'verified';
          ovf.verifiedAt = nowStamp();
          ovf.bedHold = (ovf.tier.toUpperCase()) + '-' + ovf.city.slice(0, 3).toUpperCase() + '-' + (4100 + Math.floor(Math.random() * 900));
          ovf.doctorSign = 'Dr. ' + (D.DOCTORS[ovf.dept] ? D.DOCTORS[ovf.dept][0].en : 'Staff');
          saveBackend(); closeModal(); toast('已核实'); paint();
        }
        break;
      }
      case 'orderRejected': {
        var ovr = getOrder(node.getAttribute('data-id'));
        if (ovr) { var nvr = val('orderNote'); ovr.notes = nvr || '(无备注)'; ovr.status = 'rejected'; saveBackend(); closeModal(); toast('已退回'); paint(); }
        break;
      }
      case 'resetOrders':
        BK.orders = D.seedOrders(); saveBackend(); toast('已重置示例订单'); paint();
        break;

      /* ---------------- 后台：案例库 ---------------- */
      case 'addCase':
        openCaseModal();
        break;
      case 'editCase':
        openCaseModal(node.getAttribute('data-id'));
        break;
      case 'saveCase': {
        var cid = node.getAttribute('data-id');
        var dept = val('cfDept'), city = val('cfCity'), hospital = val('cfHosp').trim(),
          outcome = val('cfOutcome').trim(), low = parseInt(val('cfLow'), 10) || 0, high = parseInt(val('cfHigh'), 10) || 0,
          tags = val('cfTags').split(',').map(function (s) { return s.trim(); }).filter(Boolean), status = val('cfStatus');
        if (!hospital || !outcome) { toast('请填写医院与疗效指标'); break; }
        var ex = getCase(cid);
        if (ex) {
          ex.dept = dept; ex.city = city; ex.hospital = hospital; ex.outcome = outcome;
          ex.low = low; ex.high = high; ex.tags = tags; ex.status = status; ex.updatedAt = nowStamp();
        } else {
          BK.cases.unshift({ id: 'C' + (BK.cases.length + 1) + '_' + Date.now().toString().slice(-3), dept: dept, city: city, hospital: hospital, outcome: outcome, low: low, high: high, tags: tags, status: status, usage: 0, updatedAt: nowStamp() });
        }
        saveBackend(); closeModal(); toast('已保存'); paint();
        break;
      }
      case 'deleteCase': {
        var dcid = node.getAttribute('data-id'), dc = getCase(dcid);
        openModal({ title: '删除案例', sub: '确认删除该案例？', body: '<p class="muted">' + esc(dc ? dc.id : '') + '</p>',
          foot: '<button class="btn btn--ghost" data-act="closeModal">取消</button>' +
            '<button class="btn btn--ghost btn--danger" data-act="confirmDeleteCase" data-id="' + dcid + '">删除</button>' });
        break;
      }
      case 'confirmDeleteCase': {
        var cdid = node.getAttribute('data-id');
        BK.cases = BK.cases.filter(function (c) { return c.id !== cdid; });
        saveBackend(); closeModal(); toast('已删除'); paint();
        break;
      }
      case 'toggleCase': {
        var tc = getCase(node.getAttribute('data-id'));
        if (tc) { tc.status = tc.status === 'published' ? 'draft' : 'published'; tc.updatedAt = nowStamp(); saveBackend(); toast(tc.status === 'published' ? '已发布' : '已转为草稿'); paint(); }
        break;
      }
      case 'resetCases':
        BK.cases = D.seedCases(); saveBackend(); toast('已重置案例库'); paint();
        break;

      /* ---------------- 合作机构端（Agent） ---------------- */
      case 'viewReferral':
        openReferralModal(node.getAttribute('data-id'));
        break;
      case 'refPaid': {
        var rp = AG.referrals.filter(function (x) { return x.id === node.getAttribute('data-id'); })[0];
        if (rp) { rp.status = 'paid'; saveAgent(); closeModal(); toast('已标记患者付费'); paint(); }
        break;
      }
      case 'refSettled': {
        var rset = AG.referrals.filter(function (x) { return x.id === node.getAttribute('data-id'); })[0];
        if (rset) { rset.status = 'settled'; rset.settledAt = nowStamp(); saveAgent(); closeModal(); toast('佣金已结算'); paint(); }
        break;
      }
      case 'refLost': {
        var rlost = AG.referrals.filter(function (x) { return x.id === node.getAttribute('data-id'); })[0];
        if (rlost) { rlost.status = 'lost'; saveAgent(); closeModal(); toast('已标记流失'); paint(); }
        break;
      }
      case 'saveReferral': {
        var pname = document.getElementById('fPatient'); pname = pname ? pname.value.trim() : '';
        if (!pname) { toast('请填写病人称呼'); break; }
        var fdept = val('fDept'), fcity = val('fCity'), fori = val('fOrigin'), ftier = val('fTier');
        var fnote = document.getElementById('fNote'); fnote = fnote ? fnote.value : '';
        var n = AG.referrals.length + 1;
        AG.referrals.unshift({
          id: 'R' + n, refNo: 'AG-2026-' + (1000 + n), patient: pname, dept: fdept, city: fcity,
          origin: fori, tier: ftier, status: 'submitted', createdAt: nowStamp(),
          commission: D.commissionFor(ftier).amount, note: fnote, settledAt: ''
        });
        saveAgent(); toast('转诊已提交'); go('agent-referrals');
        break;
      }
      case 'resetReferrals':
        AG.referrals = D.seedReferrals(); saveAgent(); toast('已重置示例数据'); paint();
        break;

      default:
        break;
    }
  });

  /* live typing for the diagnosis field */
  document.addEventListener('input', function (e) {
    var f = e.target.getAttribute && e.target.getAttribute('data-field');
    if (!f) return;
    var act = e.target.getAttribute('data-act');
    if (act !== 'input') return;
    S.input[f] = e.target.value;
    save();
  });

  /* close modal on backdrop click / ESC */
  document.getElementById('modalRoot').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* language switcher */
  (function initLang() {
    var sel = document.getElementById('langSelect');
    sel.innerHTML = I18N.LANGS.map(function (l) {
      return '<option value="' + l.code + '">' + l.label + '</option>';
    }).join('');
    sel.value = lang();
    sel.addEventListener('change', function () {
      I18N.setLang(sel.value);
      save();
      paint();
    });
  })();

  document.addEventListener('mb:langchange', function () { paint(); });

  /* boot */
  I18N.setLang(lang());
  paint();

  /* expose a tiny console API for demos */
  window.MB = {
    state: S,
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); }
  };
})();
