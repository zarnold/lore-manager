var mongoose = require('mongoose');

const create = ({ Albums }, { config }) => async (req, res, next) => {

    const {title} = req.params;

    console.log(title)
    try {
        const album = new Albums({title:title})
        album.save();
        res.json({ 'status':'created' })
    } catch (error) {
        next(error);
    }
};

module.exports = { create };