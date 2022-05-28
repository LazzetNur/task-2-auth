import { fetchRegister, Service } from '../../service';

export class Registration {
  render() {
    const node = document.createElement('div');
    node.classList.add('register');
    node.innerHTML = `
     <form id="form" class="form" name="register">
        <h2 class="register-head">Регистрация</h2>
        <input
          id="email"
          class="input"
          name="email"
          placeholder="email"
          type="email"
        /><br />
        <span id="erroremail" hidden>invalid email!</span><br />
        <input
          id="username"
          class="input"
          name="username"
          required
          minlength="3"
          maxlength="15"
          placeholder="Логин"
        /><br /><span id="error" hidden>invalid login!</span><br />
        <input
          id="first_name"
          class="input"
          name="first_name"
          type="text"
          placeholder="Имя"
        /><br /><span id="errorname" hidden>invalid name!</span><br />
        <input
          id="last_name"
          class="input"
          name="last_name"
          type="text"
          placeholder="Фамилия"
        /><br />
        <span id="errorsurname" hidden>invalid surname!</span><br />
        <input
          id="telephone"
          class="input"
          name="telephone"
          type="number"
          required
          minlength="8"
          maxlength="15"
          placeholder="Телефон"
        /><br />
        <span id="errorphone" hidden>invalid phone number!</span><br />
        <input
          id="password"
          class="input"
          name="password"
          type="password"
          required
          minlength="8"
          maxlength="30"
          placeholder="Пароль"
        /><br /><span id="errorpass" hidden>invalid password!</span><br />
        <input
          id="password2"
          class="input"
          name="password2"
          type="password"
          required
          minlength="8"
          maxlength="30"
          placeholder="Повторите пароль"
        /><br /><span id="errorpass2" hidden
          >invalid password or does not match!</span
        ><br />
        <button class="btn" type="submit">Регистрация</button>
      </form>
    `;
    return node;
  }
}

export function validRegister() {
  const email = document.getElementById('email');
  const username = document.getElementById('username');
  const first_name = document.getElementById('first_name');
  const last_name = document.getElementById('last_name');
  const telephone = document.getElementById('telephone');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');

  const regEmail = new RegExp('[a-zA-Z0-9!@#$%^&*]+@[a-z]+[.][a-z]{2,3}');
  const regPas = new RegExp(
    '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*~]{8,30}$'
  );
  const regName = new RegExp('^[W+S+D+a-zA-Zа-яёА-ЯЁ-]+$');
  const regUsername = new RegExp('(?=^[W+a-zA-Z0-9-_-]{3,15}$)(?=.[a-zA-Z].)');
  const regPhone = new RegExp('^[0-9]{8,15}$');

  email.onblur = onbluremail;
  username.onblur = onblurlogin;
  first_name.onblur = onblurname;
  last_name.onblur = onblursurname;
  telephone.onblur = onblurphone;
  password.onblur = onblurpass;
  password2.onblur = onblurpass2;

  function onbluremail() {
    if (!regEmail.test(email.value)) {
      erroremail.classList.add('invalid');
      erroremail.hidden = false;
    } else {
      document.getElementById('erroremail').hidden = true;
    }
  }
  function onblurlogin() {
    if (!regUsername.test(username.value)) {
      error.classList.add('invalid');
      document.getElementById('error').hidden = false;
    } else {
      document.getElementById('error').hidden = true;
    }
  }
  function onblurname() {
    if (!regName.test(first_name.value)) {
      errorname.classList.add('invalid');
      document.getElementById('errorname').hidden = false;
    } else {
      document.getElementById('errorname').hidden = true;
    }
  }
  function onblursurname() {
    if (!regName.test(last_name.value)) {
      errorsurname.classList.add('invalid');
      document.getElementById('errorsurname').hidden = false;
    } else {
      document.getElementById('errorsurname').hidden = true;
    }
  }
  function onblurphone() {
    if (!regPhone.test(telephone.value)) {
      errorphone.classList.add('invalid');
      document.getElementById('errorphone').hidden = false;
    } else {
      document.getElementById('errorphone').hidden = true;
    }
  }

  function onblurpass() {
    if (!regPas.test(password.value)) {
      errorpass.classList.add('invalid');
      document.getElementById('errorpass').hidden = false;
    } else {
      document.getElementById('errorpass').hidden = true;
    }
  }

  function onblurpass2() {
    if (
      !regPas.test(
        document.getElementById('password2').value || password !== password2
      )
    ) {
      errorpass.classList.add('invalid');
      document.getElementById('errorpass2').hidden = false;
    } else {
      document.getElementById('errorpass2').hidden = true;
    }
  }
  form.addEventListener('submit', registerSubmit);
}

async function registerSubmit(e) {
  e.preventDefault();

  const data = {
    email: email.value,
    username: username.value,
    first_name: first_name.value,
    last_name: last_name.value,
    telephone: telephone.value,
    password: password.value,
  };
  console.log(data);
  fetchRegister(data);
}
