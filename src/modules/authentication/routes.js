const Login = () => import('./views/Login');

export default [
    {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: {top: true, noAuth: true},
    },
];
