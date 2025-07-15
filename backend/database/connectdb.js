const mongoose = require('mongoose');

const db = process.env.DATABASE;

const mydb = mongoose.connect(db).then(()=>{
    console.log("connected db");
})

module.exports = mydb
