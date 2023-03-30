const path = require('path');


module.exports={
    port:3000,
    db:{
        database:'Attendance System',
        user:'Attendance System',
        password:'Attendance System',
        options:{
            dialect:'sqlite',
            host:'localhost',
            storage:path.resolve(__dirname, '../../AttendanceSystem.sqlite'),
        }
    }
}