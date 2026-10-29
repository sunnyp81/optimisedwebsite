(function () {
  var form = document.getElementById('quote');
  if (!form) return;
  var ok = form.querySelector('.ok');
  var checks = [
    ['q-name', function (v) { return v.trim().length > 1 ? '' : 'Please tell us your name.'; }],
    ['q-phone', function (v) {
      v = v.trim();
      if (!v) return 'Please add a phone number or email so we can reply.';
      var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      var phone = v.replace(/[\s()+-]/g, '').length >= 10 && /^[\d\s()+-]+$/.test(v);
      return email || phone ? '' : 'That does not look like a phone number or email address.';
    }],
    ['q-svc', function (v) { return v ? '' : 'Please choose what the quote is for.'; }],
    ['q-msg', function (v) { return v.trim().length > 4 ? '' : 'Please tell us a little about the item.'; }]
  ];
  function run(id, fn) {
    var el = document.getElementById(id);
    var err = document.getElementById(id + '-err');
    var msg = fn(el.value);
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    var desc = (el.getAttribute('aria-describedby') || '').replace(id + '-err', '').trim();
    if (msg) { err.textContent = msg; err.hidden = false; desc = (desc + ' ' + id + '-err').trim(); }
    else { err.textContent = ''; err.hidden = true; }
    if (desc) el.setAttribute('aria-describedby', desc); else el.removeAttribute('aria-describedby');
    return !msg;
  }
  checks.forEach(function (c) {
    var el = document.getElementById(c[0]);
    el.addEventListener('blur', function () { if (el.value) run(c[0], c[1]); });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    ok.textContent = '';
    var first = null;
    checks.forEach(function (c) { if (!run(c[0], c[1]) && !first) first = document.getElementById(c[0]); });
    if (first) { first.focus(); return; }
    ok.textContent = 'Thanks, that all looks right. This is a design preview, so nothing has been sent. Please call 01628 631162.';
    form.reset();
  });
})();
