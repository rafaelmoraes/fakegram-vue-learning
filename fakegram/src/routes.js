import Home from './components/home/Home.vue';
// import Register from './components/register/Register.vue';
const Register = () => System.import('./components/register/Register.vue')
  .then(m => m.default);

  export const routes = [
  {path: '/', name: 'home', component: Home, label: "Home"},
  {path: '/register', name: 'register', component: Register, label: "New Picture"},
  {path: '/:id/edit', name: 'edit', component: Register},
  {path: "*", component: Home}
];
