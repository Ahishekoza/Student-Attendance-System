import { createStore } from 'vuex'

export default createStore({
  state: {
    AdminTeacher:'',
    StudentLogin:''
  },
  getters: {
  },
  mutations: {
    setUser(state, userInfo) {
      state.AdminTeacher = userInfo
    },
    setStudent(state, Student) {
      state.StudentLogin=Student
    }
  },
  actions: {
    setUser({commit},userInfo){
      commit('setUser',userInfo)
    },
    setStudent({commit},Student){
      commit('setStudent',Student)
    }
  },
  modules: {
  }
})
