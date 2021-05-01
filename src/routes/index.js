import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AsksView from '../views/AsksView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
Vue.use(VueRouter);

export const router = new VueRouter ({
  mode : 'history',
  routes : [
    {
        // path : url address
        // component : url 주소로 갔을때 표시될 컴포넌트
        path:'/',
        redirect:'/news',
    },
    {
        path:'/news',
        component:NewsView,
    },
    {
        path:'/asks',
        component:AsksView,
    },
    {
        path:'/jobs',
        component:JobsView,
    },
    {
        path:'/users',
        component:UserView,
    },
    {
        path:'/items',
        component:ItemView,
    }
  ]
});