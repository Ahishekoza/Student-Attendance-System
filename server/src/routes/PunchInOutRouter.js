const router = require('express').Router()
const  PunchInOut = require ('../controller/PunchInOut')

router.post('/AddPunchIn_Out',PunchInOut.PunchInOutInfo)
router.get('/GetAllPunchIn_Out',PunchInOut.GetAllPunchOut)


module.exports = router