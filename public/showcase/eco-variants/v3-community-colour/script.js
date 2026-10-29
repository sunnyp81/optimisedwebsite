(function () {
  var form = document.getElementById('quote-form');
  if (!form) return;
  var done = document.getElementById('form-done');
  var checks = [
    { id: 'q-name', ok: function (v) { return v.trim().length > 1; } },
    { id: 'q-contact', ok: function (v) {
        v = v.trim();
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || v.replace(/[^\d]/g, '').length >= 10;
      } },
    { id: 'q-service', ok: function (v) { return v !== ''; } }
  ];

  function setState(field, valid) {
    var err = document.getElementById(field.id + '-err');
    field.setAttribute('aria-invalid', valid ? 'false' : 'true');
    var hint = field.id === 'q-contact' ? 'q-contact-hint ' : '';
    if (valid) { field.setAttribute('aria-describedby', hint.trim() || ''); if (!hint) field.removeAttribute('aria-describedby'); }
    else field.setAttribute('aria-describedby', hint + err.id);
    err.hidden = valid;
  }

  checks.forEach(function (c) {
    var f = document.getElementById(c.id);
    f.addEventListener('blur', function () { if (f.value) setState(f, c.ok(f.value)); });
    f.addEventListener('input', function () { if (f.getAttribute('aria-invalid') === 'true') setState(f, c.ok(f.value)); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var firstBad = null;
    checks.forEach(function (c) {
      var f = document.getElementById(c.id);
      var ok = c.ok(f.value);
      setState(f, ok);
      if (!ok && !firstBad) firstBad = f;
    });
    if (firstBad) { done.hidden = true; firstBad.focus(); return; }
    var name = document.getElementById('q-name').value.trim().split(' ')[0];
    done.textContent = 'Thanks ' + name + '. This is a design preview, so nothing has been sent. On the live site your request would go to the shop.';
    done.hidden = false;
    done.focus();
  });
})();
