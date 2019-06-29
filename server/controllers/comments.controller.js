const comments = require('../models/comments');


const cartController = {
    getComments: function(req, res) {
        comments.findAll().then(list => {
            console.log('LIST', list)
            res.json(list);
        });
    },
    setComment: function (req, res) {
        comments.create({content: ''}).then(list => {
            console.log('ADDED LIST', list)
            res.json(list);
        });
    },
    deleteCommet: function (req, res) {

    }
};

module.exports = cartController;