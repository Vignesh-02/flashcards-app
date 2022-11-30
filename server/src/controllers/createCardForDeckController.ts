import { Request, Response} from "express"
import Deck from "../models/Deck"

const createCardForDeckController = async (req: Request,res: Response) => {
    const deckId = req.params.deckId
    const deck = await Deck.findById(deckId)
    if(!deck) return res.status(400).json({ message: 'Deck not found '})
    const { text } = req.body
    deck.cards.push(text)
    await deck.save()
    res.json(deck)
}

export default createCardForDeckController