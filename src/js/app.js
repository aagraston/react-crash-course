import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AllMeetUpsPage from '../pages/AllMeetUps'
import FavouritesPage from '../pages/Favourites'
import NewMeetUpPage from '../pages/NewMeetUp'
import Layout from '../components/layout/Layout'

function App() {
  // localhost:5000/
  // my-page.com/

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  )
}

export default App
