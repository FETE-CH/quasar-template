import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let routeList = [];
const context = require.context('../modules', true, /routes\.js$/);
context.keys().forEach(r => {
    const {default: routes} = context(r);
    routeList = routeList.concat(routes);
});
routeList.push({path: '*', name: 'NotFound', meta: {top: true, noAuth: true}, component: () => import('../components/404')});

//顶级路由
const topRouteList = routeList.filter(r => r?.meta?.top);
const noAuthRoutes = topRouteList.filter(r => r?.meta?.noAuth).map(r => r.name);
//子级路由
const children = routeList.filter(r => !r?.meta?.top);
//主页路由
const Index = topRouteList.find(r => r?.path === '/');
Index.children = children;

const router = new Router({
    mode: 'history',
    routes: topRouteList,
});

router.beforeEach((to, from, next) => {
    window.np.start();
    next();
});

router.afterEach(() => {
    window.np.done();
});

export default router;
