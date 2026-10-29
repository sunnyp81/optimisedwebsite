(function () {
  var form = document.getElementById('quote-form');
  if (!form) return;
  var status = document.getElementById('q-status');

  function check(id, ok) {
    var el = document.getElementById(id);
    var err = document.getElementById(id + '-err');
    el.setAttribute('aria-invalid', ok ? 'false' : 'true');
    if (ok) { el.removeAttribute('aria-describedby'); err.hidden = true; }
    else { el.setAttribute('aria-describedby', id + '-err'); err.hidden = false; }
    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var phone = v('q-phone').replace(/[\s()-]/g, '');
    var email = v('q-email');
    var results = [
      check('q-name', v('q-name').length > 1),
      check('q-phone', /^(\+44|0)\d{9,10}$/.test(phone)),
      check('q-email', email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)),
      check('q-service', v('q-service') !== ''),
      check('q-details', v('q-details').length > 3)
    ];
    var ids = ['q-name', 'q-phone', 'q-email', 'q-service', 'q-details'];
    var first = results.indexOf(false);
    status.className = 'form__status field--wide';
    if (first > -1) {
      status.textContent = 'Please check the highlighted fields.';
      document.getElementById(ids[first]).focus();
      return;
    }
    status.classList.add('is-ok');
    status.textContent = 'Thanks. This is a design preview, so nothing has been sent. On the live site the shop would get back to you.';
    form.reset();
  });
})();
