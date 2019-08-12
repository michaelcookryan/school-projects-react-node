const express = require("express")
const videosRouter = require("./routes/videos")
const uploadRouter = require("./routes/upload-video")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/videos", videosRouter);
app.use("/upload-video", uploadRouter);

app.listen(8080, () => {
    console.log("Listening on port 8080...")
})