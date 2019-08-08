const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");
const videosJsonFile = `${__dirname}/../model/videos.json`;
const videos = helper.readJSONFile(videosJsonFile);
const cors = require('cors')

// router.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });
router.use(cors())

router.get("/", (req,res) => {
    return res.send(videos)
})

router.get("/:id", (req, res) => {
    console.log(videos[req.params.id])
    return res.send(videos[req.params.id])
})
module.exports = router;