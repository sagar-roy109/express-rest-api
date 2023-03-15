const express = require('express');
const router = express.Router();
const helloController = require("../controller/HelloController");


router.post('/hello-post', helloController.Hello);


module.exports = router;
