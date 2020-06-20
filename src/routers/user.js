const express = require("express");
const User = require("../models/users");
const mongoose = require("mongoose");
const Question = require("../models/questions");
const { ObjectId } = require("mongodb");
const app = express.Router();

app.get("/", async (req, res) => {
    res.render("index");
});
app.post("/", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.header("Authorization", "Bearer " + token);
        res.cookie('auth_token', token)
        res.status(201).redirect("/question01"); //?token=" + token + ""
    } catch (e) {
        res.render("errorHandle",{
            message:"Email Already exists"
        });
    }
});



module.exports = app;
