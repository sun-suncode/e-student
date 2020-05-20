import Vue from 'vue';
import Router from 'vue-router';
// import VueRouter from 'vue-router';

Vue.use(Router);



/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}




const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/mycenter",
            name: "MyCenter",
            component: () => import('../components/mycenter/MyCenter.vue')
        },
        {
            path: "/basic-info",
            name: "BasicInfo",
            component: () => import('../components/basicinfo/BasicInfo.vue')
        },
        {
            path: "/learing-management",
            name: "LearingManagement",
            component: () => import('../components/learingmanagement/LearingManagement.vue')
        },
        {
            path: "/job-management",
            name: "JobManagement",
            component: () => import('../components/jobmanagement/JobManagement.vue')
        },
        {
            path: "/myqa",
            name: "MyQA",
            component: () => import('../components/myqa/MyQA.vue')
        },
        {
            path: "/integration-center",
            name: "IntegrationCenter",
            component: () => import('../components/integrationcenter/IntegrationCenter.vue')
        }

    ]
})

export default router


