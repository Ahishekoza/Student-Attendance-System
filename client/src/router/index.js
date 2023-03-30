import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeachersPage from '../components/TeachersPage.vue'
import store from '../store/index'
import StudentLoginVue from '@/components/StudentLogin.vue'
import TeacherContent from '@/components/TeachersContentPage.vue'
import PunchInOut from '@/components/PunchInOut.vue'
import StudentAttendanceInfoVue from '@/components/StudentAttendanceInfo.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AdminTeacher',
    name: 'TeachersPage',
    beforeEnter: guardRouteTeacher,
    component:TeachersPage,
    children:[
      {
        path:'Content',
        name:'TeacherContent',
        component:TeacherContent
      },
      {
        path:'AttendeesPage',
        name:'AttendeesPage',
        component:StudentAttendanceInfoVue
      }
    ]
    
  },
  {
    path:'/studentLogin',
    name:'StudentsPage',
    component:StudentLoginVue
  },
  {
    path:'/PunchInOut',
    name:'PunchInOut',
    beforeEnter:guardRouteStudent,
    component:PunchInOut
  }
]


function guardRouteTeacher(req,res,next) {
  if(localStorage.getItem('Teacher')) {
    next()
  }
  else{
    next({name:'home'})
  }
}

function guardRouteStudent(req,res,next) {
  if(localStorage.getItem('Student')) {
    next()
  }else{
    next({name:'StudentsPage'})
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
