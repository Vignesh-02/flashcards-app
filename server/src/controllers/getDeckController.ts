import { Request, Response} from "express"
import Deck from "../models/Deck"

const getDeckController = async (req: Request,res: Response) => {
    const deckId  = req.params.deckId
    const deck = await Deck.findById(deckId)
    if(!deck) res.json({ "message": "No deck was found"})
    res.status(200).json(deck)
}

export default getDeckController