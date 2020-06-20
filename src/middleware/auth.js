const jwt = require("jsonwebtoken");
const User = require("../models/users");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies['auth_token'];
        const decoded = jwt.verify(token, "SayHiToTheHacker");
        const user = await User.findOne({
            _id: decoded._id,
            token: token,
        });
        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;
    } catch (e) {
        res.status(401).send({ error: "Not Allowed" });
    }
    next();
};

module.exports = auth;
