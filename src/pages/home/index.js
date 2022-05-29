import { Service, readPost} from '../../service';

export class Home {
  render() {
    const node = document.createElement('div');
    node.classList.add('body');
    node.innerHTML = `
    <header class='header'>
    <span class='links'>👍 Best MVP</span>
    <a href='#' class='links' id='homepage'>🚀 Главная</a>
    <a href='#' class='links' id='addpost'>✅ Добавить пост</a>
    <a href='#' class='links' id='logout'>🔴 Выход</a>
  </header>
  <div class='logo'><h1>Лента постов</h1></div>
  <button class='btn' type='submit' id='buttontemp' class='btnposting' >Показать</button>
    <div class='posts' id = 'posts'>
    </div>
    `;
    return node;
  }
}
export async function links() {
  if(sessionStorage.length === 0){
    document.location.replace('/login');
  }
  const homepage = document.getElementById('homepage');
  homepage.onclick = () => {
    document.location.replace('/');
    readPost();
  };
  const addpost = document.getElementById('addpost');
  addpost.onclick = () => {
    document.location.replace('/post');
  };
  const logout = document.getElementById('logout');
  logout.onclick = () => {
    sessionStorage.removeItem('access_token');
    document.location.replace('/login');
    
 
  }; 
  const buttontemp = document.getElementById('buttontemp');
  buttontemp.onclick= async()=>{
  const result = await readPost();
  for(let i = result.length-1; i>=0; i--){
    const owner_name = result[i].owner_name;
    const title = result[i].title;
    const description = result[i].description;
    const posts = document.getElementById('posts');
  
    const post = document.createElement('div');
    const user = document.createElement('span');
    const content = document.createElement('div');
    const contentp = document.createElement('p');
    const post_title = document.createElement('span');
    post.classList.add('post');
    user.classList.add('user');
    content.classList.add('content');
    post_title.classList.add('date');
    contentp.textContent = description;
    post_title.textContent = title;
    user.textContent = owner_name;
    post.appendChild(user);
    post.appendChild(content);
    content.appendChild(contentp);
    post.appendChild(post_title);
    posts.appendChild(post);
  }
  }
}