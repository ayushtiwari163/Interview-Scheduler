const express =  require('express')
const router = express.Router()
const Interview = require('../models/Interview')
const User = require('../models/User')

router.get('/',async(req,res) => {
    try {
        const interview = await Interview.find()
        res.send(interview)
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
})