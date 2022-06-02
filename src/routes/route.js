const express = require('express');
const externalModule = require('./logger')

const helper = require("../util/helper")

const router = express.Router();

router.get('/test-me', function (req, res) {
   
    res.send('My first ever api!')
    externalModule.welcome()

    helper.printDate()
    helper.printmonth()
});

module.exports = router;
// adding this comment for no reason