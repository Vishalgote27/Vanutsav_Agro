const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config({ path: "./.env" })
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
    // origin: "http://localhost:4200"
}))

app.use("/api", require("./routes/userRoute"))

app.use("*", (req, res) => {
    res.json({
        message: "404:Resource Not Found"
    })
})

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("DB is Connected")
    app.listen(process.env.PORT, console.log("Server Running"))
})
