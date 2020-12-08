// const jocke = require("../models/joeks.model.js");

const jocke = require("../models/joeks.model.js");


class JokeController{

    getAll(req, res) {
       
        jocke.find({})
            .then(restaurants => res.json(restaurants))
            .catch(err => res.json(err));
    }
    


    getOne(req, res) {
        // getting back one restaurant at a time
        jocke.findOne({_id: req.params._id})
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    }
    

    create(req, res) {
        // when creating the err object can contain validation errors!
        jocke.create(req.body)
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    }


    update(req, res) {
        jocke.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({msg: "ok"}))
            .catch(err => res.json(err));
    }
    
    delete(req, res) {
        jocke.deleteOne({_id: req.params._id})
            .then(() => res.json({msg: "ok"}))
            .catch(err => res.json(err));
    }
    


}

module.exports = new JokeController ();