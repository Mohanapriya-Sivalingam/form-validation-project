document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.myform');
  const fname = document.querySelector('#fname');
  const lname = document.querySelector('#lname');
  const dob = document.querySelector('#dobId');
  const mobile = document.querySelector('#mobileId');
  const mail = document.querySelector('#mailId');
  const password = document.querySelector('#passId');
  const confirmP = document.querySelector('#confirm');

  form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
      e.preventDefault(); // stop submit if invalid
    }

  });


  //   form.addEventListener('submit', (e) => {
  //       let ok = true;
  //       fields.forEach((el) => {
  //         touched.add(el);
  //         if (!validateField(el)) ok = false;
  //       });
  //       if (!ok) e.preventDefault();
  //     });

  // function validateField(el) {
  //       const v = el.value.trim();
  //       switch (el.id) {
  //         case 'fname':
  //         case 'lname':
  //         case 'dob':
  //           return required(el, v);
  //         case 'mobile':
  //           if (!required(el, v)) return false;
  //           if (!/^\d{10}$/.test(v)) return setError(el, 'Enter 10 digits'), false;
  //           return setSuccess(el), true;
  //         case 'mail':
  //           if (!required(el, v)) return false;
  //           if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return setError(el, 'Invalid email'), false;
  //           return setSuccess(el), true;
  //         case 'password':
  //           if (!required(el, v)) return false;
  //           if (v.length < 8) return setError(el, 'At least 8 characters'), false;
  //           return setSuccess(el), true;
  //         case 'confirmP':
  //           if (!required(el, v)) return false;
  //           if (v !== document.querySelector('#passId').value.trim())
  //             return setError(el, 'Passwords do not match'), false;
  //           return setSuccess(el), true;
  //         default:
  //           return true;
  //       }
  //     }
  function validateInputs() {
    let ok = true;

    if (!fname.value.trim()) { setError(fname, "Required!"); ok = false; } else setSuccess(fname);
    if (!lname.value.trim()) { setError(lname, "Required!"); ok = false; } else setSuccess(lname);
    if (!dob.value.trim()) { setError(dob, "Required!"); ok = false; } else setSuccess(dob);

    if (!mobile.value.trim()) {
      setError(mobile, "Required!");
      ok = false;
    } else if (!/^\d{10}$/.test(mobile.value.trim())) {
      setError(mobile, "Invalid Number!");
      ok = false;
    } else setSuccess(mobile);

    if (!mail.value.trim()) {
      setError(mail, "Required!");
      ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail.value.trim())) {
      setError(mail, "Invalid email");
      ok = false;
    } else setSuccess(mail);

    if (!password.value.trim()) {
      setError(password, "Required!");
      ok = false;
    } else if (password.value.length < 8) {
      setError(password, "Password must be at least 8 characters");
      ok = false;
    } else setSuccess(password);

    if (!confirmP.value.trim()) {
      setError(confirmP, "Required!");
      ok = false;

    }
    else if (confirmP.value !== password.value) {
      setError(confirmP, "Passwords do not match");
      ok = false;
    } else setSuccess(confirmP);

    return ok;
    alert('submitted')
  }

  function setError(input, msg) {
    const group = input.closest('.input-group');
    const err = group.querySelector('.error');
    err.textContent = msg;
    group.classList.add('error');
    group.classList.remove('success');
  }

  function setSuccess(input) {
    const group = input.closest('.input-group');
    const err = group.querySelector('.error');
    err.textContent = "";
    group.classList.add('success');
    group.classList.remove('error');
  }
});
