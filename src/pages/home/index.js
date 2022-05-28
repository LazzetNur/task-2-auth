import { Service, readPost } from '../../service';

export class Home {
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
    <div class="posts">
      <div class="post">
        <span class="user">@user</span>
        <span class="date">date</span>
        <div class="content">
          <p>content</p>
        </div>
      </div>
      <div class="post">
        <span class="user">@user</span>
        <span class="date">date</span>
        <div class="content">
          <p>content</p>
        </div>
      </div>
    </div>
    `;
    return node;
  }
}
export function links() {
  const homepage = document.getElementById('homepage');
  homepage.onclick = () => {
    document.location.replace('/');
    await readPost();
  };
  const addpost = document.getElementById('addpost');
  addpost.onclick = () => {
    document.location.replace('/post');
  };
  const logout = document.getElementById('logout');
  logout.onclick = () => {
    sessionStorage.removeItem('access_token');
    let token = sessionStorage.getItem('access_token')
    !token ? document.location.replace('/login') : false;
  }; 
}
