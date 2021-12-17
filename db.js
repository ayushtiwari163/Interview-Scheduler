const mongoose = require('mongoose')
require('dotenv').config();
//console.log(process.env.MONGO_URL);
try{
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    console.log("MONGO Connected");
}
catch(err) {
    console.log(err.message);
    process.exit(1);
}
