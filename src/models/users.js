const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Question = require("./questions");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
        },
        name: {
            type: String,
            require: true,
            trim: true,
        },
        contact: {
            type: Number,
            required: true,
            trim: true,
            minlength: 10,
        },
        token: {
            type: String,
            // required: true,
        },
    },
    {
        timestamps: true,
    }
);
userSchema.virtual("questions", {
    ref: "Question",
    localField: "_id",
    foreignField: "owner",
});
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.token;
    return userObject;
};
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, "SayHiToTheHacker");
    user.token = token;
    await user.save();
    return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
