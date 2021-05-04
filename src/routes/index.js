import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AsksView from '../views/AsksView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import HomeView from '../views/HomeView.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            // path : url address
            // component : url 주소로 갔을때 표시될 컴포넌트
            path: '/',
            redirect: '/home',
        },
        {
            name: 'news',
            path: '/news',
            component: NewsView,

        },
        {
            name: 'ask',
            path: '/asks',
            component: AsksView,
        },
        {
            name: 'jobs',
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            name: 'items',
            path: '/items',
            component: ItemView,
        },
        {
            name: 'home',
            path: '/home',
            component: HomeView,
        },
        {
    
            path: '/item/:id',
            component: ItemView,
        }

    ]
});