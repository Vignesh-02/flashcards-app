import React, { useEffect, useState } from 'react'

type TDeck = {
  title: string;
  _id: string;
}



function App() {
  const [title, setTitle] = useState("")
  const [decks, setDecks] = useState<TDeck[]>([])

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('http://localhost:5002/decks',{
      method: 'POST',
      body: JSON.stringify({
        title: title
      }),
      headers: {
        "Content-Type": "application/json" 
      },
    })
    setTitle("")

  }

  useEffect(() => {
    async function fetchDecks(){
     const response =  await fetch('http://localhost:5002/decks')
     const newDecks = await response.json()
     setDecks(newDecks)
    }

    fetchDecks()

    return () => {
      console.log("cleaning")
    }
  },[decks])

  return (
    <div className='h-screen  justify-center items-center flex flex-col bg-gray-200'>
      <ul className='grid grid-cols-3 gap-4 text-black mx-auto '>
        {
          decks.map((deck) => (
            <li className=' w-48 h-24 bg-white shadow-xl flex justify-center items-center 
            hover:bg-gray-300 cursor-pointer
            my-1' key={deck._id}>{deck.title}</li>
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
