import { Login, validLogin } from './pages/login/index.js';
import Error404 from './pages/404';
import Error500 from './pages/500';
import { Registration, validRegister } from './pages/registration/index.js';
import { links, Home } from './pages/home';
import { Post, create } from './pages/post';

const routes = [
  {
    path: '/404',
    view: Error404,
  },
  {
    path: '/500',
    view: Error500,
  },
  {
    path: '/login',
    view: Login,
  },
  {
    path: '/registration',
    view: Registration,
  },
  {
    path: '/',
    view: Home,
  },
  {
    path: '/post',
    view: Post,
  },

  //...
];

const router = async () => {
  let isMatch = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });
  let match = isMatch.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  let matchedView = match.route.view;

  document
    .querySelector('#app')
    .appendChild(await matchedView.prototype.render());

  if (location.pathname === '/login') {
    validLogin();
  }
  if (location.pathname === '/registration') {
    validRegister();
  }
  if (location.pathname === '/') {
    links();
  }

  if (location.pathname === '/registration') {
    validRegister();
  }
  if (location.pathname === '/post') {
    create();
    links();
  }
};
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
  AmagiLoader.hide();
  loader.hidden=true;
  router();
}, 1000);
});
