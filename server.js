import express from "express"
import cors from "cors"

const app = express()

const PORT = 6000

app.use(cors())
app.use(express.json())

app.get("/" ,(req, res) => {
    res.json("hello world")
} )


app.get("/randomNumber", (req, res) => {
    res.json(Math.floor(Math.random() * 100).toString());
});


app.listen(PORT, () => {
    console.log("server is running")
})
