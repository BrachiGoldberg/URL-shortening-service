import express from "express";
import connectDB from "./database.js";
import link from './routes/link.js';
import user from './routes/user.js'
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import LinkController from "./controllers/link_controller.js";




dotenv.config();

const port = 300

const app = express()

app.use(bodyParser.json());


connectDB()

app.use('/link', link)

app.use('/user', user)


app.get('/', (req, res) => {
    res.send("hi everyone!")
})

app.get('/:id', (req, res) => {
    try {
        let myLink = LinkController.getLinkById(req, res)
        const ip = req.socket.remoteAddress
        myLink.clicks.push({ date: new Date(), ipAddress: ip })
        myLink.save()
        console.log("i am here 3")
        res.json(myLink)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})




app.listen(port, () => {
    console.log(`this application listen at http://localhost:${port}`)
})
