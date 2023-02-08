import React from 'react'
import { Routes, Route } from 'react-router-dom';
import FlashCards from './FlashCards'
import Deck from './Deck';
import Layout from './Layout'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<FlashCards />} />
            <Route path='/decks/:deckId' element={<Deck />} />
        </Route>
        
    </Routes>
  )
}

export default App