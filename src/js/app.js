import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AllMeetUpsPage from '../pages/AllMeetUps'
import FavouritesPage from '../pages/Favourites'
import NewMeetUpPage from '../pages/NewMeetUp'

function App() {
  // localhost:3000/
  // my-page.com/

  return (
    <Routes>
      <Route path="/" element={<AllMeetUpsPage />} />
      <Route path="/new-meetup" element={<NewMeetUpPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
    </Routes>
  )
}

export default App
