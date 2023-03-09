import express, { Request, Response} from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from "dotenv"
config()

import Deck from "./models/Deck"
import deckRoutes from './routes/decks'

console.log(Deck)
const app = express()
const PORT=5002

const site_url = process.env.SITE_URL

app.use(cors({
    origin: 'http://localhost:5173' || site_url
}))
app.use(express.json())

app.use("/decks", deckRoutes)

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

 