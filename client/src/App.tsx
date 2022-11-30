import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import createDeck from './api/createDeck';
import deleteDeck from './api/deleteDeck';
import getDecks from './api/getDecks';





function App() {
  const [title, setTitle] = useState("")
  const [decks, setDecks] = useState<any[]>([])

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault()
   
    const deck = await createDeck(title)
    setDecks([...decks, deck])
    setTitle("")

  }

  const handleDelete = async (deckId: string) => {
    
   const delDeck = await deleteDeck(deckId)

    console.log(delDeck)
    setDecks(decks.filter((deck) => deck._id !== deckId))
    
  }

  useEffect(() => {
    async function fetchDecks(){
      const newDecks = await getDecks()
      setDecks(newDecks)
    }

    fetchDecks()
  })

  return (
    <div className='h-screen  justify-center items-center flex flex-col bg-gray-200'>
      <ul className='grid grid-cols-3 gap-4 text-black mx-auto '>
        {
          decks.map((deck) => (
            <li className=' w-48 h-24 bg-white shadow-xl flex justify-center items-center 
           cursor-pointer relative
            my-1' key={deck._id}>
              <button onClick={() => handleDelete(deck._id)}
              className=' items-end absolute top-1 right-1  hover:bg-gray-300 '
              > 
                X
              </button>
              <Link to={`decks/${deck._id}`}>{deck.title}</Link>
              </li>
          ))
        }
      </ul>
      <form onSubmit={handleSubmit} className='flex gap-4 my-4'>
        <label 
        htmlFor='deck-title'
        className='text-2xl px-4 hover:text-red-500'>Deck Title</label>
        <input
          id='deck-title'
          className='mx-auto py-3 px-4 border border-red-500 hover:border-orange-300' 
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value)
          }}
         />
         <button className='mx-5  px-5 py-4 bg-red-500'>
          Create Deck
         </button>
      </form>
    </div>
  )
}

export default App
