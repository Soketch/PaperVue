import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home/Home.vue'),
    },
    {
        path: '/Search',
        name: 'Search',
        component: () => import('../views/Search/Search.vue'),
        meta: {
            hideHeader: false,
            hideFooter: true
        }
    },
    {
        path: '/Reading',
        name: 'Reading',
        component: () => import('../views/Reading/Reading.vue'),
        meta: {
            hideHeader: true,
            hideFooter: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/Login.vue'),
        meta: {
            hideHeader: true,
            hideFooter: true
        }
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/Test/index.vue')
    },
    {
        path: '/WorkBench',
        name: 'WorkBench',
        component: () => import('../views/WorkBench/WorkBench.vue'),
        meta: {
            hideHeader: true,
            hideFooter: true
        },
        children: [
            {
                path: '/WorkBench/ChatGroup',
                name: 'ChatGroup',
                component: () => import('../views/ChatGroup/ChatGroup.vue')
            },
            {
                path: '/WorkBench/User',
                name: 'User',
                component: () => import('../views/User/User.vue')
            },
            {
                path: '/WorkBench/',
                name: 'Crawling',
                component: () => import('../views/Crawling/Crawling.vue')
            },
            {
                path: '/WorkBench/Subscribe',
                name: 'Subscribe',
                component: () => import('../views/Subscribe/Subscribe.vue')
            },
            {
                path: '/WorkBench/PaperEdit',
                name: 'PaperEdit',
                component: () => import('../views/PaperEdit/PaperEdit.vue')
            }
            ,
            {
                path: '/WorkBench/UserMsgForm',
                name: 'UserMsgForm',
                component: () => import('../views/UserMsgForm/UserMsgForm.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

