const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const config = require('./config');
const postRoute = require('./routes/api/post.js')
const userRoute = require('./routes/api/user.js')
// app 설정
const app = express();

// mongodb 설정
mongoose.connect(config.db, { useNewUrlParser: true });

// 미들웨어
app.use(bodyParser.json())
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
//라우터 연결
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)
// 서버
let server;
if(process.env.NODE_ENV !== config.test) {
  server = app.listen(config.port);
  console.log(`서버 포트는 ${config.port}`)
} else {
  server = app.listen(config.test_port);
  console.log(`서버 포트는 ${config.test_port}`)
};


module.exports = server;


