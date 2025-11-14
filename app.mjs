import express from "express"
import nodeCron from "node-cron"
import "./Telegram.mjs"

const app = express()
app.use(express.json())

app.get("/api", (_req, res) => {
    return res.status(200).send({ message: "success" })
})

nodeCron.schedule("* * * * *", async () => {
    try {
        const response = await fetch(`${process.env.SERVER}/api`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})