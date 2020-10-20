var express = require('express');
var router = express.Router();

/* GET product listing. */
router.get('/', function (req, res, next) {
    // res.send('Display All Products');
    res.render("product", { title: "Products" });
});

module.exports = router;