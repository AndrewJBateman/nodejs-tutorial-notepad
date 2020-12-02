const express = require("express");

const path = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = router;
