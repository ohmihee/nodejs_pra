const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');

const app = express();

app.set('port',process.env.PORT||3000);
app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    watch:true
})

sequelize.sync({force:true})
    .then(()=>{
        console.log('db success')
    })
    .catch((err) => {
        console.error(err)
    })

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
})

app.use((err,req,res,next)=>{
    res.locals.message = err.messaga;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'),()=>{
    console.log('server start',app.get('port'))
})