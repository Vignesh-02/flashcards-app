import { Request, Response} from "express"
import Deck from "../models/Deck"

const createDeckController = async (req: Request,res: Response) => {
    const { title } = req.body
    const newDeck = new Deck({
        title
    })
    const createdDeck = await newDeck.save()
    res.json(createdDeck) 
}

export default createDeckController