import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import first from '../views/first/first.vue'
import follow from '../views/follow/follow.vue'
import videoList from '../views/first/components/videoList.vue'
import city from '../views/first/components/city.vue'
import changeCity from '../views/changeCity/changeCity.vue'
import followList from '../views/follow/components/followList.vue'
import message from '../views/message/message.vue'
import personal from '../views/personal/personal.vue'
import worksList from '../views/personal/components/worksList.vue'
import player from '../views/player/player.vue'
import user from '../views/user/user.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component: home,
    children: [{
      path: '/',
      // name: 'first',
      component: first,
      children: [{
        path: '/',
        name: 'videoList',
        component: videoList
      }, {
        path: 'city',
        name: 'city',
        component: city
      }
      ]
    }, {
      path: 'follow',
      // name: 'follow',
      component: follow,
      children: [{
        path: '/',
        // name: 'followList',
        component: followList
      },{
        path: '/friend',
        name: 'friend',
        component: followList
      }
      ]
    }, {
      path: 'message',
      name: 'message',
      component: message
    }, {
      path: 'personal',
      name: 'personal',
      component: personal,
      children: [{
        path: '/',
        name: 'worksList',
        component: worksList
      }, {
        path: '/likeList',
        name: 'likeList',
        component: worksList
      }, {
        path: '/dynamicList',
        name: 'dynamicList',
        component: followList
      }]
    }
    ]
  }, 
  {
    path: '/changeCity',
    name: 'changeCity',
    component: changeCity
  },
  {
    path: '/player',
    name: 'player',
    component: player
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    children: [{
      path: '/',
      name: 'personals',
      component: personal,
      children: [{
        path: '/',
        name: 'worksList',
        component: worksList
      }, {
        path: '/likeListUser',
        name: 'likeList',
        component: worksList
      }, {
        path: '/dynamicListUser',
        name: 'dynamicList',
        component: followList
      }]
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
