const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.send(currencies);
});

module.exports = router;