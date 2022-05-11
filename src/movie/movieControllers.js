const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.updateMovie = async (req, res) => {
    try {
        const confirmation = await Movie.updateOne(req.body.filter, req.body.update)
        res.status(200).send({ confirmation });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const confirmation = await Movie.deleteOne(req.body)
        res.status(200).send({ confirmation })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}