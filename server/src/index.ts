import express, { Request, Response} from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from "dotenv"
config()

import Deck from "./models/Deck"

console.log(Deck)
const app = express()
const PORT=5002

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

app.post("/decks", async (req: Request,res: Response) => {
    const { title } = req.body
    const newDeck = new Deck({
        title
    })
    const createdDeck = await newDeck.save()
    res.json(createdDeck)
})

app.get("/decks", async (req: Request,res: Response) => {
    const decks = await Deck.find()
    if(!decks) res.json({ "message": "No flash card decks found"})
    res.status(200).json(decks)
})

app.get("/", (req: Request,res: Response) => {
    res.send('henlo world')
})
app.get("/henlo", (req: Request,res: Response) => {
    res.send('henlo world')
})

mongoose.connect(process.env.ATLAS_URI!)
.then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
}) 

 