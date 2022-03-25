import React, { useContext } from 'react'
import FavouritesContext from '../store/favourites-context'

import MeetUpList from '../components/meetups/MeetUpList'

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext)

  //for if there are no favourites
  let content

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You have no favourites yet. Start adding some?</p>
  } else {
    content = <MeetUpList meetups={favouritesCtx.favourites} />
  }

  return (
    <section>
      <h1>Favourites Page</h1>
      {content}
    </section>
  )
}
export default FavouritesPage
