(function () {
  'use strict';
  var doc = document, root = doc.documentElement;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gbp = function (n) { return '£' + Number(n).toLocaleString('en-GB'); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var NEW = ' target="_blank" rel="noopener noreferrer"', NT = '<span class="sr-only"> (opens in a new tab)</span>';
  var ARW = '<svg class="arw" viewBox="0 0 20 16" aria-hidden="true" focusable="false"><path d="M1 8h15M10 2l6 6-6 6"/></svg>';

  /* First-screen comparison and type candidates: ?v=c, ?font=outfit or ?font=jakarta */
  var qs = new URLSearchParams(location.search);
  var v = qs.get('v'), f = qs.get('font');
  if (v === 'c') root.setAttribute('data-v', v);
  if (f === 'outfit' || f === 'jakarta') root.setAttribute('data-font', f);
  if (v === 'c') { var cd = $('.care-doors'), sc = $('.stage-c'); if (cd && sc) sc.appendChild(cd); }

  var DATA = JSON.parse($('#data').textContent);
  var byId = {}; DATA.clinics.forEach(function (c) { byId[c.id] = c; });
  var svcById = {}; DATA.services.forEach(function (s) { svcById[s.id] = s; });

  /* Today's hours, as listed on each clinic's own page. London time. */
  var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var dayName = new Intl.DateTimeFormat('en-GB', { weekday: 'long', timeZone: 'Europe/London' }).format(new Date());
  var di = Math.max(0, DAYS.indexOf(dayName));
  function today(c) {
    if (c.soon) return 'Coming soon';
    var h = c.hours ? c.hours[di] : '';
    if (h && h !== 'Closed') return 'Today: ' + h;
    var lead = h === 'Closed' ? 'Closed today. ' : dayName + ' hours not listed. ';
    for (var k = 1; k < 7; k++) { var n = c.hours ? c.hours[(di + k) % 7] : ''; if (n && n !== 'Closed') return lead + DAYS[(di + k) % 7] + ': ' + n; }
    return 'Call for opening hours';
  }
  function gpPrice(c) { return c.tesco ? 45 : 75; }

  var state = { clinic: 'fulham', svc: 'gp' };
  try { var saved = localStorage.getItem('mhc-clinic'); if (saved && byId[saved]) state.clinic = saved; } catch (e) {}

  /* ===== The door: the chosen clinic and the chosen appointment ===== */
  var door = $('.door'), dImg = $('#door-img'), dNo = $('#door-nophoto');
  var clinicSel = $('#pick-clinic'), svcSel = $('#pick-svc');
  function miles(a, b) { var r = Math.PI / 180, x = Math.sin((b.lat - a.lat) * r / 2), y = Math.sin((b.lon - a.lon) * r / 2); return 7918 * Math.asin(Math.sqrt(x * x + Math.cos(a.lat * r) * Math.cos(b.lat * r) * y * y)); }
  function paintDoor(c, animate) {
    if (!door) return;
    var s = svcById[state.svc];
    var apply = function () {
      if (c.photo) { dImg.src = c.photo.file; dImg.alt = c.photo.alt; dImg.hidden = false; dNo.hidden = true; }
      else { dImg.hidden = true; dNo.hidden = false; dNo.innerHTML = '<span>A photo of the ' + esc(c.name) + ' clinic goes here.</span>'; }
      $('#door-name').textContent = c.name;
      $('#door-addr').textContent = c.addr;
      var price = s.id === 'gp' ? gpPrice(c) : s.price;
      $('#door-price').innerHTML = '<b>' + (price ? gbp(price) : 'Free') + '</b><span>' + esc(s.name) + ', ' + (s.was ? 'usually ' + gbp(s.was) : esc(s.len.toLowerCase())) + '</span>';
      var t = today(c), chips = ['<span class="chip ' + (t.indexOf('Today') === 0 ? 'chip-leaf' : 'chip-quiet') + '">' + esc(t) + '</span>'];
      if (c.dental && s.dept !== 'dent') chips.push('<span class="chip chip-extra">Dentist here too</span>');
      if (s.id === 'dental') chips.push('<span class="chip">Monday to Friday</span>');
      if (c.tesco) chips.push('<span class="chip">Inside Tesco Extra</span>');
      $('#door-chips').innerHTML = chips.join('');
      $('#door-act').innerHTML = s.where === 'none'
        ? '<a class="btn btn-leaf btn-sm" href="tel:' + DATA.phone.tel + '">Call ' + DATA.phone.label + ' to book</a><span class="plate-hint">Online appointments are booked by phone.</span>'
        : '<a class="btn btn-leaf btn-sm" href="' + DATA.book[s.link] + '"' + NEW + '>Book this appointment' + ARW + NT + '</a><span class="plate-hint">Choose ' + esc(c.name) + ' on the booking page.</span>';
      $('#door-credit').innerHTML = c.photo ? 'Photo: ' + esc(c.photo.shows) + ', not the clinic itself. ' + esc(c.photo.author) + ', <a href="' + c.photo.page + '"' + NEW + '>' + esc(c.photo.licence) + NT + '</a>.' : 'This concept has no licensed photo for ' + esc(c.name) + ' yet.';
    };
    if (animate && !reduce && c.photo && dImg.getAttribute('src') !== c.photo.file) {
      var pre = new Image();
      pre.onload = pre.onerror = function () { door.classList.remove('swap', 'tick'); apply(); void door.offsetWidth; door.classList.add('swap'); };
      pre.src = c.photo.file;
    } else { apply(); if (animate && !reduce) { door.classList.remove('swap', 'tick'); void door.offsetWidth; door.classList.add('tick'); } }
  }

  /* ===== One clinic, everywhere on the page ===== */
  var mine = $('#mine'), dialBtns = $$('.dial-list button'), pts = $$('.map .pt'), rows = $$('.clist li');
  function clinicsFor(s) { return DATA.clinics.filter(function (c) { return !c.soon && (s.where !== 'dental' || c.dental); }); }
  function fitSelect(sel) {
    if (!sel) return;
    var m = fitSelect.m || (fitSelect.m = doc.body.appendChild(doc.createElement('span')));
    var cs = getComputedStyle(sel);
    m.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;left:-9999px;top:0;font-family:' + cs.fontFamily + ';font-size:' + cs.fontSize + ';font-weight:' + cs.fontWeight + ';letter-spacing:' + cs.letterSpacing;
    m.textContent = sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].text : '';
    sel.style.width = Math.ceil(m.getBoundingClientRect().width + parseFloat(cs.fontSize) * 1.6 + 16) + 'px';
  }
  function syncSentence() {
    if (!svcSel) return;
    var s = svcById[state.svc], list = clinicsFor(s);
    svcSel.value = state.svc;
    $('#say-where').hidden = s.where === 'none';
    clinicSel.innerHTML = list.map(function (c) { return '<option value="' + c.id + '">' + esc(c.name) + '</option>'; }).join('');
    clinicSel.value = state.clinic;
    fitSelect(svcSel); fitSelect(clinicSel);
  }
  function setClinic(id, opts) {
    var c = byId[id]; if (!c || c.soon) return;
    opts = opts || {};
    var m0 = $('#dial-msg'); if (m0) m0.textContent = '';
    state.clinic = id;
    if (svcById[state.svc].where === 'dental' && !c.dental) state.svc = 'gp';
    try { localStorage.setItem('mhc-clinic', id); } catch (e) {}
    syncSentence();
    paintDoor(c, opts.animate !== false);
    if (mine) { mine.textContent = 'My clinic: ' + c.short; mine.title = c.name; }
    dialBtns.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-id') === id ? 'true' : 'false'); });
    pts.forEach(function (p) { p.classList.toggle('is-on', p.getAttribute('data-id') === id); });
    rows.forEach(function (li) {
      var on = li.getAttribute('data-id') === id; li.classList.toggle('is-on', on);
      var b = $('button', li); if (b) b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }
  if (svcSel) {
    svcSel.addEventListener('change', function () {
      state.svc = svcSel.value;
      var s = svcById[state.svc], cur = byId[state.clinic], list = clinicsFor(s);
      if (list.indexOf(cur) === -1) {
        var near = list.map(function (c) { return { c: c, d: miles(cur, c) }; }).sort(function (a, b) { return a.d - b.d; })[0];
        setClinic(near.c.id);
        var msg0 = $('#dial-msg'); if (msg0) msg0.textContent = cur.name + ' has no dentist, so this shows ' + near.c.name + ', the nearest clinic with one.';
      } else setClinic(state.clinic);
    });
    clinicSel.addEventListener('change', function () { setClinic(clinicSel.value); });
    window.addEventListener('resize', function () { fitSelect(svcSel); fitSelect(clinicSel); });
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { fitSelect(svcSel); fitSelect(clinicSel); });
  }

  /* ===== Dial and Near me ===== */
  dialBtns.forEach(function (b) { b.addEventListener('click', function () { setClinic(b.getAttribute('data-id'), { from: 'dial' }); }); });
  var msg = $('#dial-msg');
  $$('.near').forEach(function (btn) {
    if (!navigator.geolocation) { btn.hidden = true; return; }
    btn.addEventListener('click', function () {
      if (msg) msg.textContent = 'Finding your nearest clinic.';
      navigator.geolocation.getCurrentPosition(function (p) {
        var me = { lat: p.coords.latitude, lon: p.coords.longitude };
        var best = DATA.clinics.filter(function (c) { return !c.soon; }).map(function (c) { return { c: c, d: miles(me, c) }; }).sort(function (a, b) { return a.d - b.d; })[0];
        setClinic(best.c.id, { from: 'dial' });
        if (msg) msg.textContent = best.c.name + ' is your nearest clinic, ' + (best.d < 1 ? 'less than 1 mile' : 'about ' + Math.round(best.d) + ' miles') + ' away in a straight line.';
      }, function () { if (msg) msg.textContent = 'Your location was not shared. Choose a clinic below.'; }, { timeout: 8000 });
    });
  });
  if (mine) mine.addEventListener('click', function () { var t = $('#clinics'); if (t) t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); });

  /* ===== Map and list ===== */
  var mapSvg = $('.map'), filter = 'all', expanded = false, countEl = $('#flt-count'), moreBtn = $('#clist-more');
  function fits(c) { return filter === 'all' || (filter === 'dental' && c.dental) || (filter === 'tesco' && c.tesco); }
  function applyFilter() {
    var n = 0;
    rows.forEach(function (li) { var ok = fits(byId[li.getAttribute('data-id')]); li.hidden = !ok; li.classList.toggle('show', expanded); if (ok) n++; });
    pts.forEach(function (p) { p.classList.toggle('is-out', !fits(byId[p.getAttribute('data-id')])); });
    if (countEl) countEl.textContent = filter === 'all' ? '17 clinics open. Reading is coming soon.' : filter === 'dental' ? n + ' clinics with a dentist, all in London.' : (n - 1) + ' clinics open inside Tesco Extra. Reading is coming soon.';
    if (moreBtn) moreBtn.textContent = expanded ? 'Show fewer clinics' : 'Show all clinics';
  }
  $$('.flt button').forEach(function (b) {
    b.addEventListener('click', function () {
      filter = b.getAttribute('data-f');
      $$('.flt button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      expanded = filter !== 'all' || expanded; applyFilter();
    });
  });
  if (moreBtn) moreBtn.addEventListener('click', function () { expanded = !expanded; applyFilter(); });
  rows.forEach(function (li) {
    var id = li.getAttribute('data-id'), b = $('button', li);
    if (b) b.addEventListener('click', function () { setClinic(id, { from: 'map' }); });
    li.addEventListener('mouseenter', function () { pts.forEach(function (p) { p.classList.toggle('is-hover', p.getAttribute('data-id') === id); }); });
    li.addEventListener('mouseleave', function () { pts.forEach(function (p) { p.classList.remove('is-hover'); }); });
    var h = $('.c-h', li); if (h) h.textContent = today(byId[id]);
  });
  if (mapSvg) {
    mapSvg.setAttribute('role', 'group');
    pts.forEach(function (p, i) {
      p.setAttribute('role', 'button'); p.setAttribute('tabindex', i === 0 ? '0' : '-1'); p.setAttribute('aria-label', p.getAttribute('data-label'));
      var id = p.getAttribute('data-id');
      p.addEventListener('click', function () { setClinic(id, { from: 'map' }); });
      p.addEventListener('mouseenter', function () { rows.forEach(function (li) { li.classList.toggle('is-hover', li.getAttribute('data-id') === id); }); });
      p.addEventListener('mouseleave', function () { rows.forEach(function (li) { li.classList.remove('is-hover'); }); });
      p.addEventListener('keydown', function (e) {
        var vis = pts.filter(function (x) { return !x.classList.contains('is-out'); }), k = vis.indexOf(p), n = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = vis[(k + 1) % vis.length];
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = vis[(k - 1 + vis.length) % vis.length];
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setClinic(id, { from: 'map' }); return; }
        if (n) { e.preventDefault(); p.setAttribute('tabindex', '-1'); n.setAttribute('tabindex', '0'); n.focus(); }
      });
    });
  }

  /* ===== Implant estimator ===== */
  var chart = $('.chart');
  if (chart) {
    chart.setAttribute('role', 'group');
    chart.setAttribute('aria-label', 'Dental chart with 28 teeth. Choose the teeth you want to replace. Use the arrow keys to move and Space to choose.');
    var teeth = $$('.tooth', chart), totalEl = $('#est-total'), countE = $('#est-count'), noteEl = $('#est-note'), ARCH = 9995;
    teeth.forEach(function (t, i) { t.setAttribute('role', 'button'); t.setAttribute('tabindex', i === 6 ? '0' : '-1'); t.setAttribute('aria-pressed', 'false'); t.setAttribute('aria-label', t.getAttribute('data-label')); });
    var tier = function () { var r = $('input[name="tier"]:checked'); return { p: +r.value, n: r.getAttribute('data-name') }; };
    var update = function () {
      var on = teeth.filter(function (t) { return t.getAttribute('aria-pressed') === 'true'; });
      var up = on.filter(function (t) { return t.getAttribute('data-jaw') === 'upper'; }).length, lo = on.length - up, tr = tier();
      totalEl.textContent = gbp(on.length * tr.p);
      countE.textContent = on.length ? on.length + (on.length === 1 ? ' tooth' : ' teeth') + ' (' + up + ' upper, ' + lo + ' lower), ' + tr.n + ' at ' + gbp(tr.p) + ' each' : 'No teeth chosen yet';
      var heavy = [['upper', up], ['lower', lo]].filter(function (j) { return j[1] * tr.p > ARCH; });
      var per = function (j) { return gbp(j[1] * tr.p); };
      noteEl.textContent = !on.length ? 'Tap teeth on the chart to see a list-price total.'
        : heavy.length === 2 ? 'Your selected implants cost ' + (up === lo ? per(heavy[0]) + ' per jaw' : per(heavy[0]) + ' for the upper jaw and ' + per(heavy[1]) + ' for the lower jaw') + ' at list price. All-on-4 is listed at ' + gbp(ARCH) + ' per jaw. Ask your dentist to explain the treatment options.'
        : heavy.length ? 'At list price, ' + heavy[0][1] + ' ' + tr.n + ' implants in your ' + heavy[0][0] + ' jaw cost more than All-on-4 for a whole jaw (' + gbp(ARCH) + '). Ask which suits you at the free consultation.'
        : 'List price before any offer. Your dentist confirms the plan and price at the free consultation.';
    };
    teeth.forEach(function (t, i) {
      var toggle = function () { t.setAttribute('aria-pressed', t.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); teeth.forEach(function (x) { x.setAttribute('tabindex', x === t ? '0' : '-1'); }); update(); };
      t.addEventListener('click', toggle);
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = teeth[(i + 1) % teeth.length];
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = teeth[(i - 1 + teeth.length) % teeth.length];
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); return; }
        if (n) { e.preventDefault(); t.setAttribute('tabindex', '-1'); n.setAttribute('tabindex', '0'); n.focus(); }
      });
    });
    $$('input[name="tier"]').forEach(function (r) { r.addEventListener('change', update); });
    var clr = $('#teeth-clear'); if (clr) clr.addEventListener('click', function () { teeth.forEach(function (t) { t.setAttribute('aria-pressed', 'false'); }); update(); });
    update();
  }

  /* ===== Membership: your household ===== */
  var fam = { a: 1, c: 0 };
  function paintFam() {
    $('#fam-a').textContent = fam.a; $('#fam-c').textContent = fam.c;
    var who = fam.a + (fam.a === 1 ? ' adult' : ' adults') + (fam.c ? ' and ' + fam.c + (fam.c === 1 ? ' child' : ' children') : '');
    $$('.mem li').forEach(function (li) {
      var t = fam.a * +li.getAttribute('data-a') + fam.c * +li.getAttribute('data-c');
      $('.m-t', li).innerHTML = gbp(t) + ' <small>a month</small>';
      $('.m-b', li).textContent = 'For ' + who + ', from the listed prices.';
    });
  }
  $$('.step button').forEach(function (b) {
    b.addEventListener('click', function () {
      var k = b.getAttribute('data-k'), d = +b.getAttribute('data-d');
      fam[k] = Math.max(k === 'a' ? 1 : 0, Math.min(6, fam[k] + d)); paintFam();
    });
  });
  if ($('#fam-a')) paintFam();

  /* ===== Review count rolls up once ===== */
  var rn = $('.rev-n');
  if (rn && !reduce && 'IntersectionObserver' in window) {
    var target = +rn.getAttribute('data-n');
    new IntersectionObserver(function (es, ob) {
      if (!es[0].isIntersecting) return; ob.disconnect();
      var t0 = performance.now();
      (function tick(now) { var k = Math.min(1, (now - t0) / 1400), e = 1 - Math.pow(1 - k, 3); rn.textContent = Math.round(target * e).toLocaleString('en-GB'); if (k < 1) requestAnimationFrame(tick); })(t0);
    }, { threshold: 0.4 }).observe(rn);
  }

  applyFilter();
  setClinic(state.clinic, { animate: false });
})();
