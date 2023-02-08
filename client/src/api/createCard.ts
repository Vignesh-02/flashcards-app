import { API_URL } from "./config"
import { TDeck } from "./getDecks"

const createCard = async (deckId: string,text: string): Promise<TDeck> => {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards`,{
        method: 'POST',
        body: JSON.stringify({
          text: text
        }),
        headers: {
          "Content-Type": "application/json" 
        },
      })

  return response.json()
}

export default createCard