const router = require('express').Router()
const StudentController = require('../controller/StudentController')

router.post('/Student', StudentController.FindStudent)
router.post('/AddStudent', StudentController.AddStudent)

module.exports= router