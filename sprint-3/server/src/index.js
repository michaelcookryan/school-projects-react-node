const express = require("express")
const videosRouter = require("./routes/videos")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/videos", videosRouter);

app.listen(8080, () => {
    console.log("Listening on port 8080...")
})