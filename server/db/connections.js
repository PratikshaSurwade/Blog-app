const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blogappdata",{
    useNewUrlParser:true,
    // useCreateIndex:true, 
    useUnifiedTopology:true
}).then( () => {
    console.log("Conection is successful");
}).catch( (e) => {
    console.log("No Connection");
})