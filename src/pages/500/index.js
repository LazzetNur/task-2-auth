export default class Error500 {
  render() {
    const div = document.createElement('div');
    div.classList.add('err');
    div.innerHTML = `
        <    <h1>500</h1>
        <p>Ошибка сервера, пытаемся исправить</p>
        <a href="login.html">Назад</a>
    `;
    return div;
  }
}
