import express from "express";
import connectDB from "./database.js";
import link from './routes/link.js';
import user from './routes/user.js'
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import LinkModel from './models/link_model.js'



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

app.get('/:id', async (req, res) => {
    try {
        const myLink = await LinkModel.findById(req.params.id)
        if (!myLink)
            res.status(400).json({ message: "Not found" })
        const ip = req.socket.remoteAddress
        myLink.clicks.push({ date: new Date(), ipAddress: ip })
        myLink.counts++;
        console.log(myLink)
debugger
        await myLink.save()
        res.redirect(301, myLink.link);

    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})




app.listen(port, () => {
    console.log(`this application listen at http://localhost:${port}`)
})
