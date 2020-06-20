const express = require("express");
require("./db/mongoose");
const path = require("path");
const hbs = require("hbs");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./routers/user");
const questionRouter = require("./routers/questions");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "..", "public");
const templateDirectory = path.join(__dirname, "..", "templates");
const partialsDirectory = path.join(__dirname, "..", "templates", "partials");

app.use(express.static(publicDirectory));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "hbs");
app.set("views", templateDirectory);
hbs.registerPartials(partialsDirectory);

app.use(express.json());
app.use(userRouter);
app.use(questionRouter);

app.listen(port, () => {
    console.log("Server is runnig on PORT:-", port);
});
