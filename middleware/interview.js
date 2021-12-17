const Interview = require('../models/Interview')
const User = require('../models/User')
const check = async(req,res,next) => {
    if(req.body.user.length<2){
        return res.status(401).send({error : "must have atleast two users"})
    }
    const users = req.body.user
    const startTime = req.body.startTime
    const endTime = req.body.endTime
    const current_date = new Date().toLocaleDateString()
    const current_time = new Date().toLocaleTimeString('en-IN')

    if(startTime > endTime)
    return res.status(401).send({error : "start time should be less than end time"})
    

}