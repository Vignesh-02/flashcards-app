import { Request, Response} from "express"
import Deck from "../models/Deck"

const getDecksController = async (req: Request,res: Response) => {
    const decks = await Deck.find()
    if(!decks) res.json({ "message": "No flash card decks found"})
    res.status(200).json(decks)
}

export default getDecksController