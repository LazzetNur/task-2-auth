export default class Error404 {
  render() {
    const div = document.createElement('div');
    div.classList.add('err');
    div.innerHTML = `
        <h1>404</h1>
        <p>Страница неп найдена</p>
        <a href="" id="btnBack">Назад</a>
    `;
    return div;
  }
}
