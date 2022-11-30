import { API_URL } from "./config"

const createDeck = async (title: string) => {
    const response = await fetch(`${API_URL}/decks`,{
        method: 'POST',
        body: JSON.stringify({
          title: title
        }),
        headers: {
          "Content-Type": "application/json" 
        },
      })

  return response.json()
}

export default createDeck