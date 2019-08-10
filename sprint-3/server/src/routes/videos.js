const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");
const videosJsonFile = `${__dirname}/../model/videos.json`;
const videos = helper.readJSONFile(videosJsonFile);
const videoDetailsJsonFile = `${__dirname}/../model/videoDetails.json`;
const videoDetails = helper.readJSONFile(videoDetailsJsonFile);


router.get("/", (req, res) => {
    return res.send(Object.values(videos))
})

router.get("/:id", (req, res) => {
    const details = videoDetails.find(video => video.id === req.params.id)
    return res.send(details)
})
module.exports = router;