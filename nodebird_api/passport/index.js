const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');

module.exports = () => {
    passport.serializeUser((user, done) => {
        // 로그인시 실행
        // req.session()객체에 어떤 데이터를 저장할 지 정하는 메서드
        // 매개변수로 user를 받고
        // done함수로 user.id를 넘김
        // done함수의 첫 번째 인수는 에러 발생 시 사용. 두번째 인수에는 저장하고 싶은 데이터
        // done(에러발생시, 저장하고 싶은 데이터)
        done(null, user.id);
    })

    passport.deserializeUser((id,done) => {
        // 매 요청시 실행.
        // server.js에서 설정해두었던 passport.session()미들웨어가 이 메서드'deserializeUser'를 매 요청 시 실행
        // serializeUser의 done()함수에서 두번째 인수로 넣어주었던 데이터가 deserializeUser의 매개변수가 된다.
        User.findOne({
            where:{id},
            include: [{
                model: User,
                attributes: ['id', 'nick'],
                as: 'Followers',
              }, {
                model: User,
                attributes: ['id', 'nick'],
                as: 'Followings',
              }],
        })
        .then(user => done(null, user))
        // done()함수를 통해 req.user에 저장.
        .catch(err => done(err))
    })

    local();
}

// 즉 serializeUser는 사용자 정보 객체를 세션에 아이디로 저장하는 것
// deserializeUser는 세션에 저장한 아이디를 통해 사용자 정보 객체를 불러오는 것.