const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    confirmpassword: {
        type: String,
        require: true,
    },
    userType:{
        type:String,
        default:"user"
    }
})
const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel; 