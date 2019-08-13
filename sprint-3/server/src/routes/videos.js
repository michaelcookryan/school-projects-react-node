const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");

const uidGenerator = require('node-unique-id-generator');

router.get("/", (req, res) => {

    const videosJsonFile = `${__dirname}/../model/videos.json`;
    const videos = helper.readJSONFile(videosJsonFile);

    return res.send(Object.values(videos))

})

router.get("/:id", (req, res) => {

    const videoDetailsJsonFile = `${__dirname}/../model/videoDetails.json`;
    const videoDetails = helper.readJSONFile(videoDetailsJsonFile);

    const details = videoDetails.find(video => video.id === req.params.id)

    return res.send(details)
})

router.post("/:id/comments", (req, res) => {

    const videoDetailsJsonFile = `${__dirname}/../model/videoDetails.json`;
    const videoDetails = helper.readJSONFile(videoDetailsJsonFile);

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
router.post("/", (req, res) => {

    const videosJsonFile = `${__dirname}/../model/videos.json`;
    const videos = helper.readJSONFile(videosJsonFile);

    let uniqueId = uidGenerator.generateGUID().slice(0, 7)
    let nextVideo = {

        id: uniqueId,
        title: req.body.title,
        channel: "Michael",
        image: req.body.image

    }

    videos.push(nextVideo)
    helper.writeJSONFile(videosJsonFile, videos)

    const videoDetailsJsonFile = `${__dirname}/../model/videoDetails.json`;
    const videoDetails = helper.readJSONFile(videoDetailsJsonFile);

    let current = new Date()

    let nextVideoDetail = {

        id: uniqueId,
        title: req.body.title,
        channel: "Michael",
        description: req.body.description,
        image: req.body.image,
        views: "1968",
        likes: "27",
        duration: "1:00",
        video: 'https://project-2-api.herokuapp.com/stream',
        timestamp: current.getTime(),
        comments: [
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.", "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!", "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!", "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            }]

    }

    videoDetails.push(nextVideoDetail)

    helper.writeJSONFile(videoDetailsJsonFile, videoDetails)

    return res.json(nextVideo)
})
module.exports = router;
