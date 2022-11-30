import { Request, Response} from "express"
import Deck from "../models/Deck"

 const deleteDeckController = async (req: Request,res: Response) => {
    const deckId = req.params.deckId

    const result = await Deck.findByIdAndDelete(deckId).exec()
    res.json(result)
 }
 
 export default deleteDeckController