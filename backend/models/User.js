const mongoose = require("mongoose");

const validator = require('validator');

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        required :true,
        unique: [true, 'That username is taken.'],
        validate: [validator.isAlphanumeric, 'Usernames may only have letters and numbers.']
    },
    profilepic:{
        type:String,
        default:"https://images.indianexpress.com/2013/12/untitled-3.jpg",
    },
    password:{
        type:String,
        required: [true, 'Enter a password.'],
        minLength: [4, 'Password should be at least four characters'],
    }
},
{timestamps:true}
);

module.exports = mongoose.model("User", UserSchema)