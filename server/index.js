const express = require("express");
const session = require("express-session")
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: "replace this string... k12jh40918e4019u3",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 100 * 100 * 1000 }
}));

const backend = express.Router();
app.use("/server", backend);


// login / session handlers
backend.post("/login", (req, res) => {
    if (req.body.user === "phong" && req.body.pass === "123456") {
        const user = { id: 1, name: "Admin" };
        req.session.user = user;
        res.send(user);
    } else {
        res.send(null);
    }
});

backend.post("/login/status", (req, res) => {
    res.send(req.session.user || null);
});
backend.post("/logout", (req, res) => {
    delete req.session.user;
    res.send({});
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));