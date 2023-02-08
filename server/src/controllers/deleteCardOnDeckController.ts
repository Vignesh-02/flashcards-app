import { Request, Response} from "express"
import Deck from "../models/Deck"

const deleteCardOnDeckController = async (req: Request,res: Response) => {
    const deckId = req.params.deckId
    const index = req.params.index
    const deck = await Deck.findById(deckId)
    if(!deck) return res.status(400).json({ message: 'Deck not found '})
    deck.cards.splice(parseInt(index),1)
    await deck.save()
    res.json(deck)
}

export default deleteCardOnDeckController