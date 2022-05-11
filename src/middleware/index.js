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
        const compRes = await bcrypt.compare(req.body.password, req.body.db.password);
        if (compRes) {
            res.status(200).send("User successfully signed in");
        } else {
            res.status(401).send("Bad credentials");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}