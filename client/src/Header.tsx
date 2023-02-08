import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-12 text-center items-center
    text-2xl text-red-500 gap-4 justify-between
    flex flex-row  bg-white mx-5'>
        <div>
            <a href="/" className=''>VIGU'S FLASHCARDS</a>
        </div>
        <div>
            <a href="/" className=''>Decks</a>
        </div>

        <div> LOGIN </div>
    </div>
  )
}

export default Header