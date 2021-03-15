import express from 'express';
import http from 'http';
import cookieParse from 'cokeie-parser';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';

const app = express();

requestAnimationFrame('dotenv').config();

app.use(express.jason());
app.use(express.unlencoded({ extended: false}));
app.use(cookieParse());
app.use(express.static(path.resolve(__direname,'../view')));
app.use(morgan('dev'))
app.use(cors());

app.use(session({
    secret: pcocess.env.APP_KEY,
    resave:false,
    saveUninitialized:false,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api',(req,res,next)=>{
    res.status(200).json({message: 'Hi!'})
})

const server = http.createServer(app);

server.listen(3000)

server.on('listening',()=>{
    const addr = server.address();
    console.log(`This sever is on ${addr.port}`});
})