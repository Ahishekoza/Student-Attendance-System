const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const {sequelize} = require('./models');
const TeacherRouter = require('./routes/TeacherRouter');
const StudentRouter = require('./routes/StudentRouter');
const PunchIn_OutRouter = require('./routes/PunchInOutRouter');

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


app.use('/api',TeacherRouter,StudentRouter,PunchIn_OutRouter);


sequelize.sync({force:false}).then((res)=>{
    app.listen(3000,()=>{
        console.log('listening on port 3000')
    });
})