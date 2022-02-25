const mongoose = require("mongoose");

//defining schema
let RoleSchema = new mongoose.Schema({
    roleName: {
        type: String,
    },
});

//defining model
let RoleModel = mongoose.model("role", RoleSchema); //roles

module.exports = RoleModel;
