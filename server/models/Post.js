const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    decription:{
        type:String,
        required:true,
    },
    authorphoto:{
        type:String,
        required:false,
    },
    photo1:{
        type:String,
        required: false,
    },
    photo2:{
        type:String,
        required: false,
    },
    username:{
        type:String,
        required: true,
    },
    categories:{
        type:Array,
        required: false,
    },
    claps:{
        type:String,
        required: false,
    },
    date:{
        type: String, 
        default: new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}),
    },
    time:{
        type:String,
        required: false,
    },
    tag1:{
        type:String,
        required: false,
    },
    tag2:{
        type:String,
        required: false,
    },
    tag3:{
        type:String,
        required: false,
    },

},
{timestamps:true}
);

module.exports = mongoose.model("Post", PostSchema)