const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");
const videosJsonFile = `${__dirname}/../model/videos.json`;
const videos = helper.readJSONFile(videosJsonFile);
const videoDetailsJsonFile = `${__dirname}/../model/videoDetails.json`;
const videoDetails = helper.readJSONFile(videoDetailsJsonFile);
const uidGenerator = require('node-unique-id-generator');

router.get("/", (req, res) => {
    return res.send(Object.values(videos))
})

router.get("/:id", (req, res) => {
    const details = videoDetails.find(video => video.id === req.params.id)
    return res.send(details)
})

router.post("/:id/comments", (req, res) => {
    const details = videoDetails.find(video => video.id === req.params.id)

    let nextComment = {

        name: req.body.name,
        comment: req.body.comment,
        id: uidGenerator.generateGUID(),
        likes: 0,
        timestamp: req.body.timestamp

    }

    details.comments.push(nextComment)

    helper.writeJSONFile(videoDetailsJsonFile, videoDetails)

    return res.json(nextComment)
})

module.exports = router;
