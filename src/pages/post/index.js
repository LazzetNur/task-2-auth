import { createPost, readPost, Service } from '../../service';
export class Post {
  render() {
    const node = document.createElement('div');
    node.classList.add('body');
    node.innerHTML = `
    <header class="header">
    <span class="links">👍 Best MVP</span>
    <a href="#" class="links" id="homepage">🚀 Главная</a>
    <a href="#" class="links" id="addpost">✅ Добавить пост</a>
    <a href="#" class="links" id="logout">🔴 Выход</a>
  </header>
  <div class="logo"><h1>Лента постов</h1></div>
  <div class="create">
    <p class="title">Добавить пост</p>
    <div class="post">
    <form id="form" class="form" name="post">
      <input type="text" class="inputpost" id = "title" placeholder="title" />
      <input type="text" class="inputpost" id = "description" placeholder="content" />
      <button class="btn" type="submit" class="btnpost">Добавить</button>
    </form>
      <button class="btn" type="submit" id="buttontemp" class="btnposting">Добавить</button>
      </div>
  </div>
    `;
    return node;
  }
}
export function create() {

  const buttontemp = document.getElementById('buttontemp');
  form.addEventListener('submit', postSubmit);
  buttontemp.onclick=temp;
  // buttontemp.addEventListener('submit', temp);
}
async function postSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const data = {
    title: title,
    description: description,
  };
  console.log(data);
  createPost(data);
}
async function temp(e){
  e.preventDefault();
  await readPost();
}
