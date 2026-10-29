(function () {
  'use strict';
  // Prices from the published shop list. p = pence; null = priced on request.
  var CATS = [
    { id: 'suits', label: 'Suits and jackets', items: [
      ['2 piece suit', 1350], ['3 piece suit', 1795], ['Dinner, linen or silk suit', 1550],
      ['Jacket', 895], ['Trousers', 750], ['Tie', 450]] },
    { id: 'shirts', label: 'Shirts and tops', items: [
      ['Shirt, laundered', 295], ['Shirt, dry cleaned', 475], ['Blouse', 695, 1], ['Woollen jumper', 495, 1]] },
    { id: 'dresses', label: 'Dresses and skirts', items: [
      ['Skirt, plain', 750, 1], ['Dress, plain day', 1395, 1], ['Dress, plain long', 1895, 1], ['Dress, evening or cocktail', 2495, 1]] },
    { id: 'coats', label: 'Coats', items: [
      ['Coat, three-quarter length', 1350, 1], ['Coat, long', 1995, 1], ['Re-proofing', 800]] },
    { id: 'bedding', label: 'Bedding', items: [
      ['Duvet, single', 1850], ['Duvet, double', 1995], ['Duvet, king', 2195], ['Duvet, super king', 2450],
      ['Feather duvet, single or double', 3000, 1], ['Feather duvet, king or super king', 3500, 1],
      ['Pillow', 995, 1], ['Feather pillow', 1750, 1]] },
    { id: 'alter', label: 'Alterations', items: [
      ['Shorten trousers', 1400], ['New zip', 1400], ['Trouser waist adjustment', 1600],
      ['Shorten a dress', 1800, 1], ['Collar turn-up', 2000],
      ['Prom dress shortening', null], ['Wedding dress alterations', null]] },
    { id: 'ask', label: 'We will price it', note: 'These depend on the item, so we price them when we see them. Add them here and describe them in step 3.', items: [
      ['Wedding dress', null], ['Leather, suede or fur', null], ['Curtains', null], ['Blackout curtains', null],
      ['Lehenga, saree or embroidered outfit', null], ['Wash and fold load', null]] }
  ];

  // Drawn garment for each item (SVG symbols in index.html)
  var SYM = {
    '2 piece suit': 'g-suit', '3 piece suit': 'g-suit3', 'Dinner, linen or silk suit': 'g-dinner', 'Jacket': 'g-jacket',
    'Trousers': 'g-trousers', 'Tie': 'g-tie', 'Shirt, laundered': 'g-shirt', 'Shirt, dry cleaned': 'g-shirt-dc',
    'Blouse': 'g-blouse', 'Woollen jumper': 'g-jumper', 'Skirt, plain': 'g-skirt', 'Dress, plain day': 'g-dress',
    'Dress, plain long': 'g-dress-long', 'Dress, evening or cocktail': 'g-dress-evening',
    'Coat, three-quarter length': 'g-coat', 'Coat, long': 'g-coat-long', 'Re-proofing': 'g-reproof',
    'Duvet, single': 'g-duvet', 'Duvet, double': 'g-duvet', 'Duvet, king': 'g-duvet', 'Duvet, super king': 'g-duvet',
    'Feather duvet, single or double': 'g-duvet-feather', 'Feather duvet, king or super king': 'g-duvet-feather',
    'Pillow': 'g-pillow', 'Feather pillow': 'g-pillow-feather',
    'Shorten trousers': 'g-alt-hem', 'New zip': 'g-zip', 'Trouser waist adjustment': 'g-alt-waist',
    'Shorten a dress': 'g-alt-dress', 'Collar turn-up': 'g-collar', 'Prom dress shortening': 'g-alt-prom',
    'Wedding dress alterations': 'g-alt-gown', 'Wedding dress': 'g-gown', 'Leather, suede or fur': 'g-leather',
    'Curtains': 'g-curtains', 'Blackout curtains': 'g-blackout', 'Lehenga, saree or embroidered outfit': 'g-lehenga',
    'Wash and fold load': 'g-basket'
  };
  var NS = 'http://www.w3.org/2000/svg';
  function thumb(name, cls) {
    var wrap = el('span', cls); wrap.setAttribute('aria-hidden', 'true');
    var svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '0 0 64 64'); svg.setAttribute('focusable', 'false');
    var u = document.createElementNS(NS, 'use'); u.setAttribute('href', '#' + (SYM[name] || 'g-shirt'));
    svg.appendChild(u); wrap.appendChild(svg); return wrap;
  }

  var form = document.getElementById('builder');
  if (!form) return;
  var F = form.elements;
  var tabsEl = document.getElementById('tabs');
  var panelsEl = document.getElementById('panels');
  var qty = {}; // key -> count
  var all = {}; // key -> item
  var live = document.getElementById('live');

  function money(p) { return '£' + (p / 100).toFixed(2); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  // Build tabs and panels
  CATS.forEach(function (c, ci) {
    var t = el('button', 'tab');
    t.type = 'button'; t.id = 'tab-' + c.id; t.setAttribute('role', 'tab');
    t.setAttribute('aria-controls', 'panel-' + c.id);
    t.setAttribute('aria-selected', ci === 0 ? 'true' : 'false');
    t.tabIndex = ci === 0 ? 0 : -1;
    t.appendChild(el('span', null, c.label));
    var cnt = el('span', 'tab-c'); cnt.id = 'cnt-' + c.id; cnt.setAttribute('aria-hidden', 'true');
    t.appendChild(cnt);
    tabsEl.appendChild(t);

    var p = el('div', 'panel'); p.id = 'panel-' + c.id; p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', t.id); p.tabIndex = -1; if (ci) p.hidden = true;
    if (c.note) p.appendChild(el('p', 'panel-note', c.note));
    var ul = el('ul', 'items');
    c.items.forEach(function (it, ii) {
      var key = c.id + '-' + ii;
      all[key] = { name: it[0], p: it[1], from: !!it[2], cat: c.id };
      qty[key] = 0;
      var li = el('li', 'item'); li.dataset.key = key;
      var info = el('div');
      info.appendChild(el('span', 'item-name', it[0]));
      var pr = el('span', 'item-price' + (it[1] == null ? ' ask' : ''));
      if (it[1] == null) pr.textContent = 'We will price it';
      else { if (it[2]) pr.appendChild(el('small', null, 'from')); pr.appendChild(document.createTextNode(money(it[1]))); }
      info.appendChild(pr);
      var st = el('div', 'stepper'); st.setAttribute('role', 'group'); st.setAttribute('aria-label', it[0] + ' quantity');
      var minus = el('button', null, '−'); minus.type = 'button'; minus.dataset.d = '-1'; minus.setAttribute('aria-label', 'Remove one ' + it[0]); minus.disabled = true;
      var out = el('output', null, '0'); out.setAttribute('aria-live', 'off');
      var plus = el('button', null, '+'); plus.type = 'button'; plus.dataset.d = '1'; plus.setAttribute('aria-label', 'Add one ' + it[0]);
      st.appendChild(minus); st.appendChild(out); st.appendChild(plus);
      li.appendChild(thumb(it[0], 'thumb')); li.appendChild(info); li.appendChild(st);
      ul.appendChild(li);
    });
    p.appendChild(ul);
    panelsEl.appendChild(p);
  });

  var tabs = Array.prototype.slice.call(tabsEl.querySelectorAll('[role=tab]'));
  function selectTab(id, focus) {
    tabs.forEach(function (t) {
      var on = t.id === 'tab-' + id;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      if (on) { if (focus) t.focus(); t.scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
    });
  }
  tabsEl.addEventListener('click', function (e) {
    var t = e.target.closest('[role=tab]'); if (t) selectTab(t.id.slice(4));
  });
  tabsEl.addEventListener('keydown', function (e) {
    var i = tabs.indexOf(document.activeElement); if (i < 0) return;
    var n = null;
    if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = tabs.length - 1;
    if (n !== null) { e.preventDefault(); selectTab(tabs[n].id.slice(4), true); }
  });

  // Stepper
  panelsEl.addEventListener('click', function (e) {
    var b = e.target.closest('.stepper button'); if (!b) return;
    var key = b.closest('.item').dataset.key;
    setQty(key, qty[key] + Number(b.dataset.d));
  });

  function setQty(key, n) {
    n = Math.max(0, Math.min(99, n));
    qty[key] = n;
    var li = panelsEl.querySelector('[data-key="' + key + '"]');
    var out = li.querySelector('output');
    out.textContent = n;
    out.classList.remove('bump'); void out.offsetWidth; out.classList.add('bump');
    li.querySelector('[data-d="-1"]').disabled = n === 0;
    li.classList.toggle('on', n > 0);
    render();
    var tot = totals();
    live.textContent = all[key].name + ': ' + n + '. ' + (tot.count ? 'Quote total ' + (tot.from ? 'from ' : '') + money(tot.pence) + (tot.ask ? ', plus ' + tot.ask + ' to price' : '') : 'Quote is empty') + '.';
  }

  function totals() {
    var t = { pence: 0, count: 0, from: false, ask: 0 };
    Object.keys(qty).forEach(function (k) {
      var n = qty[k]; if (!n) return;
      var it = all[k]; t.count += n;
      if (it.p == null) t.ask += n; else { t.pence += it.p * n; if (it.from) t.from = true; }
    });
    return t;
  }

  var sumList = document.getElementById('sum-list');
  var sumEmpty = document.getElementById('sum-empty');
  var sumAmt = document.getElementById('sum-amt');
  var sumLabel = document.getElementById('sum-label');
  var sumNote = document.getElementById('sum-note');
  var mb = document.getElementById('minibar');
  var mbCount = document.getElementById('mb-count');
  var mbTotal = document.getElementById('mb-total');

  function render() {
    sumList.textContent = '';
    var catCount = {};
    Object.keys(qty).forEach(function (k) {
      var n = qty[k]; if (!n) return;
      var it = all[k]; catCount[it.cat] = (catCount[it.cat] || 0) + n;
      var li = el('li');
      var nm = el('span', 'nm'); nm.appendChild(thumb(it.name, 'sthumb')); nm.appendChild(el('span', 'q', n + '×')); nm.appendChild(document.createTextNode(it.name));
      var pr = el('span', 'p' + (it.p == null ? ' ask' : ''), it.p == null ? 'to price' : (it.from ? 'from ' : '') + money(it.p * n));
      var rm = el('button', null, '×'); rm.type = 'button'; rm.setAttribute('aria-label', 'Remove ' + it.name); rm.dataset.key = k;
      li.appendChild(nm); li.appendChild(pr); li.appendChild(rm);
      sumList.appendChild(li);
    });
    CATS.forEach(function (c) { document.getElementById('cnt-' + c.id).textContent = catCount[c.id] || ''; });
    var t = totals();
    sumEmpty.hidden = t.count > 0;
    sumLabel.textContent = t.from ? 'Total, from' : 'Total';
    sumAmt.textContent = money(t.pence);
    var notes = [];
    if (t.ask) notes.push('Plus ' + t.ask + (t.ask === 1 ? ' item' : ' items') + ' we will price when we see ' + (t.ask === 1 ? 'it' : 'them') + '.');
    if (t.from) notes.push('"From" items can cost more for heavier fabrics or trims.');
    sumNote.textContent = notes.join(' ');
    mbCount.textContent = t.count + (t.count === 1 ? ' item' : ' items') + (t.ask ? ', ' + t.ask + ' to price' : '');
    mbTotal.textContent = (t.from ? 'from ' : '') + money(t.pence);
    updateBar();
  }

  sumList.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var key = b.dataset.key;
    setQty(key, 0);
    var next = sumList.querySelector('button') || tabs.filter(function (t) { return t.tabIndex === 0; })[0];
    if (next) next.focus();
  });

  // Mini bar on mobile: shown when there are items and the builder is on screen
  var inView = false;
  function updateBar() {
    var show = totals().count > 0 && inView && document.getElementById('done').hidden;
    mb.hidden = false;
    mb.classList.toggle('show', show);
    mb.setAttribute('aria-hidden', show ? 'false' : 'true');
    mb.querySelector('a').tabIndex = show ? 0 : -1;
    document.body.classList.toggle('has-bar', show);
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { inView = en[0].isIntersecting; updateBar(); }, { rootMargin: '0px 0px -30% 0px' })
      .observe(document.querySelector('.steps'));
  } else { inView = true; }

  // Drop-off or collection
  var townRow = document.getElementById('town-row');
  var town = document.getElementById('town');
  var sumHow = document.getElementById('sum-how');
  function howText() {
    var collect = F.how.value === 'collect';
    townRow.hidden = !collect;
    sumHow.textContent = collect ? (town.value ? 'Collection from ' + town.value : 'Collection: choose your town') : 'Drop off at 113 Bridge Road';
  }
  form.addEventListener('change', function (e) {
    if (e.target.name === 'how' || e.target === town) { howText(); if (e.target === town && town.value) clearErr(town); }
  });

  // Links that open a tab
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-tab]'); if (!a) return;
    selectTab(a.dataset.tab);
  });

  // Validation
  function setErr(input, msg) {
    input.setAttribute('aria-invalid', 'true');
    document.getElementById(input.id + '-err').textContent = msg;
  }
  function clearErr(input) {
    input.removeAttribute('aria-invalid');
    document.getElementById(input.id + '-err').textContent = '';
  }
  ['name', 'phone', 'notes'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () { clearErr(this); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = F.name.value.trim();
    var phone = F.phone.value.replace(/[\s()-]/g, '');
    var notes = F.notes.value.trim();
    var t = totals();
    var bad = [];
    [F.name, F.phone, F.notes, town].forEach(clearErr);
    if (F.how.value === 'collect' && !town.value) { setErr(town, 'Choose your town so we know where to collect from.'); bad.push(town); }
    if (name.length < 2) { setErr(F.name, 'Please tell us your name.'); bad.push(F.name); }
    if (!/^(\+44|0)\d{9,10}$/.test(phone)) { setErr(F.phone, 'Enter a UK phone number, for example 07700 900123.'); bad.push(F.phone); }
    if (!t.count && !notes) { setErr(F.notes, 'Add at least one item in step 1, or tell us here what you need.'); bad.push(F.notes); }
    if (bad.length) { bad[0].focus(); live.textContent = bad.length + (bad.length === 1 ? ' thing needs' : ' things need') + ' fixing before sending.'; return; }

    var done = document.getElementById('done');
    done.textContent = '';
    done.appendChild(el('h3', null, 'Thanks, ' + name.split(' ')[0] + '. This is where your request would be sent.'));
    var ul = el('ul');
    Object.keys(qty).forEach(function (k) { if (qty[k]) ul.appendChild(el('li', null, qty[k] + ' × ' + all[k].name)); });
    if (ul.children.length) done.appendChild(ul);
    done.appendChild(el('p', null, (t.from ? 'Guide total from ' : 'Guide total ') + money(t.pence) + (t.ask ? ', plus ' + t.ask + ' to price' : '') + '. ' + sumHow.textContent + '.'));
    var p = el('p'); p.appendChild(document.createTextNode('Design preview: nothing has been sent. To book now, call '));
    var a = el('a', null, '01628 631162'); a.href = 'tel:+441628631162'; p.appendChild(a);
    p.appendChild(document.createTextNode('.'));
    done.appendChild(p);
    done.hidden = false;
    updateBar();
    done.focus();
  });

  howText();
  render();
})();
