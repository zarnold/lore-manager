var mongoose = require('mongoose');


const get = ({ Albums }, { config }) => async (req, res, next) => {

    const { _id} = req.params;


    try {
        const albums = await Albums.findOne({_id:_id});
        res.json({ albums })
    } catch (error) {
        next(error);
    }
};

module.exports = { get };