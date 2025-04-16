const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
    type:String,
    required:true,

},
email:{
    type:String,
    required :true,
    unique:true
},
password:{
    type:String,
    required:true,
    minlenght:8,
    maxlenght:20
}

});

module.exports = mongoose.model('User',userSchema)