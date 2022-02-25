const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const sessionController = require("./controller/session-controller");
const roleController = require("./controller/role-controller");
const userController = require("./controller/user-controller");

dotenv.config();

//middle ware
app.use(express.json()); //mobile -> accept json data from request and set data into body
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connenction Established"))
    .catch((err) => {
        console.log(err);
    });

app.get("/", function (req, res) {
    res.write("Hello Welcome!");
    res.end();
});

app.get("/login", sessionController.login);
app.get("/signup", sessionController.signup);
app.post("/saveuser", sessionController.saveuser);

//role
app.post("/roles", roleController.addRole);
app.get("/roles", roleController.getAllRoles);
app.delete("/roles/:roleId", roleController.deleteRole);
app.put("/roles", roleController.updateRole);

//user
app.post("/users", userController.addUser);
app.get("/users", userController.getAllUsers);
app.delete("/users/:userId", userController.deleteUser);
app.put("/users", userController.updateUser);
app.post("/login", userController.login);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
