const express = require("express");
const itemController = require('./../controllers/itemController');
const router = express.Router();


router
.route("/additem")
.post(itemController.createItem)//create item
router
.route("/getitems")
.get(itemController.getItems)//get items



module.exports = router;