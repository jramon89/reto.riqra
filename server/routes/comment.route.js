const express = require('express'),
    router = express.Router(),
    controllers = require('../controllers/comments.controller');

router.route('/comments')
    .get(controllers.getComments);


module.exports = router;
