import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import createCard from './api/createCard';
import createDeck from './api/createDeck';
import deleteDeck from './api/deleteDeck';
import getDeck , {TDeck } from './api/getDeck';
import { useParams } from 'react-router-dom'
import deleteCard from './api/deleteCard';

const Deck = () => {
  const [deck, setDeck] = useState<TDeck | undefined>()
  const [cards, setCards] = useState<string[]>([])
  const [text, setText] = useState("")
  const { deckId } = useParams()
  // const [decks, setDecks] = useState<any[]>([])

  const handleCreateDeck = async  (e: React.FormEvent) => {
    e.preventDefault()
    
    const { cards: serverCards } = await createCard(deckId!, text)
    setCards(serverCards)
    setText("") 

  }

  const handleDeleteCard = async (index: number) => {
    if(!deckId) return
   const delDeck = await deleteCard(deckId, index)
    setCards(delDeck.cards)
       
  }

  useEffect(() => {
    async function fetchDeck(){
      if (!deckId) return
      const Deck = await getDeck(deckId!)
      setDeck(Deck)
      setCards(Deck.cards)
    }

    fetchDeck()
  },[deckId])

  return (
    <div className='h-screen  justify-center items-center flex flex-col bg-gray-200'>
      <div className='text-2xl mb-32'>{deck?.title}</div>
      <ul className='grid grid-cols-3 gap-4 text-black mx-auto '>
        {
          cards.map((card,index) => (
            <li className=' w-48 h-32 bg-white shadow-xl flex justify-center items-center 
           cursor-pointer relative px-2 py-7 bg-rad rounded-md
            my-1' key={index}>
              
               <button onClick={() => handleDeleteCard(index)}
              className=' items-end absolute top-1 right-1  hover:bg-gray-300 '
              > 
                X
              </button>
              {card}
              </li>
          ))
        }
      </ul>
      <form onSubmit={handleCreateDeck} className='flex gap-4 my-4'>
        <label 
        htmlFor='card-text'
        className='text-2xl px-4 hover:text-red-500'>Card Text</label>
        <input
          id='card-text'
          className='mx-auto py-3 px-4 border border-red-500 hover:border-orange-300' 
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value)
          }}
         /> 
         <button className='mx-5  px-5 py-4 bg-red-500'>
          Create Card
         </button>
      </form>
    </div>
  )
}

export default Deck