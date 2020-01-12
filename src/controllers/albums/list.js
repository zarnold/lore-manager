var mongoose = require('mongoose');

const list = ({ Albums }, { config }) => async (req, res, next) => {

    try {
        const albums = await Albums.find({});
        res.json({ albums })
    } catch (error) {
        next(error);
    }
};

module.exports = { list };