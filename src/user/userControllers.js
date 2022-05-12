const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send({ user: newUser.username });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username});
        req.body.db = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send({ users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const confirmation = await User.updateOne(req.body.filter, req.body.update)
        res.status(200).send({ confirmation });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const confirmation = await User.deleteOne(req.body)
        res.status(200).send({ confirmation })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}