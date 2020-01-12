var mongoose = require('mongoose');

const update = ({ Albums }, { config }) => async (req, res, next) => {

    const {title} = req.params;
    
    try {
        const album = new Album({title:title})
        res.json({ 'status':'patched' })
    } catch (error) {
        next(error);
    }
};

module.exports = { update };