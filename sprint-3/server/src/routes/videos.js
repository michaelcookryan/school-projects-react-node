const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");
const videosJsonFile = `${__dirname}/../model/videos.json`;
const videos = helper.readJSONFile(videosJsonFile);
const videoDetailsJsonFile = `${__dirname}/../model/videoDetails.json`;
const videoDetails = helper.readJSONFile(videoDetailsJsonFile);


router.get("/", (req,res) => {
    return res.send(videos)
})

router.get("/:id", (req, res) => {
    console.log(videoDetails[req.params.id])
    return res.send(videoDetails[req.params.id])
})
module.exports = router;