const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Ayush:Ayush@cluster0.sxljh0h.mongodb.net/users?retryWrites=true&w=majority", {

    
}).then(()=>{
    console.log("connection successful");
}).catch((error) =>{
    console.log(error);
})