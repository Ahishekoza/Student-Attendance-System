const router =  require('express').Router()
const TeacherController = require('../controller/TeacherController')


router.post('/Teacher',TeacherController.FindTeacher)
router.post('/AddTeacher',TeacherController.AddTeachers)




module.exports = router