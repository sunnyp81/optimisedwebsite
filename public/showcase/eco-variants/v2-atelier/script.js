(function () {
  var form = document.getElementById('quote-form');
  var select = document.getElementById('q-service');

  document.querySelectorAll('[data-service]').forEach(function (a) {
    a.addEventListener('click', function () {
      var v = a.getAttribute('data-service');
      for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].text === v) { select.selectedIndex = i; break; }
      }
    });
  });

  function flag(input, errEl, bad) {
    if (input) input.setAttribute('aria-invalid', bad ? 'true' : 'false');
    errEl.hidden = !bad;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name, phone = form.elements.phone, email = form.elements.email, msg = form.elements.message;
    var ok = document.getElementById('q-ok');
    ok.hidden = true;
    var badName = !name.value.trim();
    var phoneOk = phone.value.replace(/[^0-9]/g, '').length >= 10;
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    var badContact = !phoneOk && !emailOk;
    var badMsg = !msg.value.trim();
    flag(name, document.getElementById('q-name-err'), badName);
    flag(null, document.getElementById('q-contact-err'), badContact);
    phone.setAttribute('aria-invalid', badContact ? 'true' : 'false');
    email.setAttribute('aria-invalid', badContact ? 'true' : 'false');
    flag(msg, document.getElementById('q-msg-err'), badMsg);
    if (badName) { name.focus(); return; }
    if (badContact) { phone.focus(); return; }
    if (badMsg) { msg.focus(); return; }
    ok.textContent = 'Thanks, ' + name.value.trim() + '. This is a design preview, so nothing was sent. On the live site this would reach the shop.';
    ok.hidden = false;
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  var els = document.querySelectorAll('.sec-head, .garment, .alter__list, .board__col, .themes li, .towns');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 4000);
})();
