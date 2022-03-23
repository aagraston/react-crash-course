import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AllMeetUpsPage from '../pages/AllMeetUps'
import FavouritesPage from '../pages/Favourites'
import NewMeetUpPage from '../pages/NewMeetUp'

import MainNavigation from '../components/layout/MainNavigation'

function App() {
  // localhost:5000/
  // my-page.com/

  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  )
}

export default App
