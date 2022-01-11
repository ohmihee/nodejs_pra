const express = require('express');
const { v4: uuidv4 } = requier('uuid');
// uuid ==> 고유한 문자열을 만들어내는데 사용
const { User,Domain } = require('../models');

const router = express.Router();

router.get('/', async (req,res,next) => {
    try{
        const user = await User.findOne({
            where: {id}
        })
    }
})