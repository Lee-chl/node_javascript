const express = require('express');

const router = express.Router();

router.get('/profile',(req,res) => {
    res.render('profile', { title: '내 정보 - Nodesnss',user : null});
});

router.get('/join',(req,res) => {
    res.render('join', {
        title:'회원 가입 - Nodesnss',
        user: null,
        joinError: req.flash('joinError'),
    });
});

router.get('/',(req,res,next) => {
    res.render('main', {
        title: 'NodeSNSs',
        twits: [],
        user: null,
        loginError : req.flash('loginError'),
    });
});

module.exports = router;