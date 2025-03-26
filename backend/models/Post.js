const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true
    },
    decription: {
        type: String,
        required: true,
    },
    authorphoto: {
        type: String,
        required: false,
    },
    photo1: {
        type: String,
        required: false,
        default: "https://res.cloudinary.com/dn9hxyxud/image/upload/v1678788600/l8eld3iqo27fbw8ghzdd.png",
    },
    photo2: {
        type: String,
        required: false,
        default: "https://res.cloudinary.com/dn9hxyxud/image/upload/v1678788600/l8eld3iqo27fbw8ghzdd.png",
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
        default: undefined
    },
    claps: {
        type: String,
        required: false,
        default: 10,
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }),
    },
    time: {
        type: String,
        required: false,
        default: "2 min read",
    },
    tag1: {
        type: String,
        required: false,
        // default:categories[1],
    },
    tag2: {
        type: String,
        required: false,
    },
    tag3: {
        type: String,
        required: false,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema)