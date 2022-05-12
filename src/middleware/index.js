const bcrypt = require("bcryptjs");

exports.hashPass = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

exports.comparePass = async (req, res) => {
    try {
        const match = await bcrypt.compare(req.body.password, req.body.db.password);
        if (match) {
            res.status(200).send("User successfully signed in");
        } else {
            res.status(401).send("Bad credentials");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.checkEmailValid = async (req, res, next) => {
    try {
        const valid = await req.body.email.match(/.+\@.+\..+/);
        if (valid) {
            next();
        } else {
            res.status(400).send("Invalid Email Address");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.checkEmailValidUpdate = async (req, res, next) => {
    try {
        const valid = req.body.update.email.match(/.+\@.+\..+/);
        if (valid) {
            next();
        } else {
            res.status(400).send("New Email Address is Invalid");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}