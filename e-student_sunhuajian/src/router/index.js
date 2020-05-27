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
            path: '/', redirect: '/mycenter',
            component: () => import('../components/mycenter/MyCenter.vue')
        },
        {
            path: "/mycenter",
            name: "MyCenter",
            component: () => import('../components/mycenter/MyCenter.vue')

        },
        {
            path: "/basic-info",
            name: "BasicInfo",
            component: () => import('../components/basicinfo/BasicInfo.vue'),
            children: [
                {
                    path: "",
                    redirect: "my-info",
                    name: "MyInfo",
                    component: () => import('../components/basicinfo/MyInfo.vue'),
                },
                {
                    path: "my-info",
                    name: "MyInfo",
                    component: () => import('../components/basicinfo/MyInfo.vue'),
                },
                {
                    path: "school-info",
                    name: "SchoolInfo",
                    component: () => import('../components/basicinfo/SchoolInfo.vue'),
                },
                {
                    path: "password-manager",
                    name: "PasswordManager",
                    component: () => import('../components/basicinfo/PasswordManager.vue'),
                }
            ]
        },
        {
            path: "/learning-management",
            name: "LearningManagement",
            component: () => import('../components/learningmanagement/LearningManagement.vue'),
            children: [
                {
                    path: "",
                    redirect: "my-course",
                    name: "MyCourse",
                    component: () => import('../components/learningmanagement/MyCourse.vue'),
                },
                {
                    path: "my-course",
                    name: "MyCourse",
                    component: () => import('../components/learningmanagement/MyCourse.vue'),
                },
                {
                    path: "my-collect",
                    name: "MyCollect",
                    component: () => import('../components/learningmanagement/MyCollect.vue'),
                },
                {
                    path: "my-activity",
                    name: "MyActivity",
                    component: () => import('../components/learningmanagement/MyActivity.vue'),
                }
            ]
        },
        {
            path: "/job-management",
            name: "JobManagement",
            component: () => import('../components/jobmanagement/JobManagement.vue'),
            children: [
                {
                    path: "",
                    redirect: "resume-manager",
                    name: "ResumManager",
                    component: () => import('../components/jobmanagement/ResumManager.vue'),
                },
                {
                    path: "resume-manager",
                    name: "ResumManager",
                    component: () => import('../components/jobmanagement/ResumManager.vue'),
                },
                {
                    path: "offer-manager",
                    name: "OfferManager",
                    component: () => import('../components/jobmanagement/OfferManager.vue'),
                },
                {
                    path: "career-development",
                    name: "CareerDevelopment",
                    component: () => import('../components/jobmanagement/CareerDevelopment.vue'),
                }
            ]
        },
        {
            path: "/myqa",
            name: "MyQA",
            component: () => import('../components/myqa/MyQA.vue'),
            children: [{

                path: "",
                name: "MyQuestion",
                redirect: "my-question",
                component: () => import('../components/myqa/MyQuestion.vue'),
            },{

                path: "my-question",
                name: "MyQuestion",
                component: () => import('../components/myqa/MyQuestion.vue'),
            },
            {

                path: "my-answer",
                name: "MyAnswer",
                component: () => import('../components/myqa/MyAnswer.vue'),
            }
        ]
        },
        {
            path: "/integration-center",
            name: "IntegrationCenter",
            component: () => import('../components/integrationcenter/IntegrationCenter.vue'),
            children: [
                {
                    path: "",
                    name: "InteCenter",
                    redirect: "inte-center",
                    component: () => import('../components/integrationcenter/InteCenter.vue'),
                },
                {
                    path: "inte-center",
                    name: "InteCenter",
                    component: () => import('../components/integrationcenter/InteCenter.vue'),
                }
            ]
        }

    ]
})

export default router


