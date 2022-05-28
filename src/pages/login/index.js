import { Service, fetchLogin } from '../../service';
export class Login {
  render() {
    const node = document.createElement('div');
    node.classList.add('auth');
    node.innerHTML = `
     <form id="form" class="form" name="login">
        <h2>Логин</h2>
        <input
          id="username"
          class="input"
          name="username"
          required
          minlength="3"
          maxlength="15"
          placeholder="Логин"
        />
        <span id="error" hidden>invalid login!</span><br />
        <input
          id="password"
          class="input"
          name="password"
          type="password"
          placeholder="Пароль"
          onblur="onblurpass()"
        />
        <span id="errorpass" hidden>invalid password!</span><br />
        <button id="abtn" class="btn" type="submit">Войти</button><br />
        <a href="#" id = "registernow">Нет аккаунта? Регистрация</a>
      </form>
    `;
    return node;
  }
}

export function validLogin() {
  const form = document.getElementById('form');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const error = document.getElementById('error');
  const errorpass = document.getElementById('errorpass');

  const registernow = document.getElementById('registernow');

  registernow.onclick = () => {
    document.location.replace('/registration');
  };

  username.onblur = onblurlogin;
  password.onblur = onblurpass;

  function onblurlogin() {
    const regUsername = new RegExp(
      '(?=^[W+a-zA-Z0-9-_-]{3,15}$)(?=.[a-zA-Z].)'
    );
    if (!regUsername.test(document.getElementById('username').value)) {
      error.classList.add('invalid');
      document.getElementById('error').hidden = false;
    } else {
      document.getElementById('error').hidden = true;
    }
  }
  function onblurpass() {
    const regPas = new RegExp(
      '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*~]{8,30}$'
    );
    if (!regPas.test(document.getElementById('password').value)) {
      errorpass.classList.add('invalid');
      document.getElementById('errorpass').hidden = false;
    } else {
      document.getElementById('errorpass').hidden = true;
    }
  }
  form.addEventListener('submit', loginSubmit);
}
async function loginSubmit(e) {
  e.preventDefault();
  const data = { username: username.value, password: password.value };
  await fetchLogin(data);
  // let token = sessionStorage.getItem(access_token);
}
