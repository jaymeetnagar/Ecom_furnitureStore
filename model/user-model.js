const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    
        firstName:{
            type:String,
            required:true
        },

        email:{
            type:String,
            unique: true
        },
        password:{
            type:String
        },
        role : {
                type:mongoose.Schema.Types.ObjectId,
                ref:"role"
        }
})


const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel 