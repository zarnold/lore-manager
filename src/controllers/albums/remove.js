var mongoose = require('mongoose');

const remove = ({ Albums }, { config }) => async (req, res, next) => {

    const {title} = req.params;
    
    try {
        const album = new Album({title:title})
        res.json({ 'status':'deleted' })
    } catch (error) {
        next(error);
    }
};

module.exports = { remove };