const express = require("express");
const { query } = require("../database/database");
const { getCat, getDuas, getSubCat } = require("../controllers/controllers");

const router = express.Router();

router.get("/cat", getCat);

router.get("/subcat/:id", getSubCat);

router.get("/duas/:id", getDuas);

module.exports = router;
