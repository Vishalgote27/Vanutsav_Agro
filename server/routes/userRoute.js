const { sendEmail } = require("../controller/userController")

const router = require("express").Router()

router


    .post("/send-email", sendEmail)


module.exports = router