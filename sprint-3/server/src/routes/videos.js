const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");
const videosJsonFile = `${__dirname}/../model/videos.json`;
const videos = helper.readJSONFile(videosJsonFile);

router.get("/", (req,res) => {
    return res.send(Object.values(videos))
})
module.exports = router;