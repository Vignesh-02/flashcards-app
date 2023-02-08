import { API_URL } from "./config";

export type TDeck = {
    title: string;
    cards: string[];
    _id: string;  
}

const getDeck = async (deckId: string): Promise<TDeck> => {
  
    const response =  await fetch(`${API_URL}/decks/${deckId}`)
    return response.json()

}

export default getDeck