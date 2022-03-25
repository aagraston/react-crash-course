import { createContext, useState } from 'react'

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupID) => {},
  determineFavourite: (meetupID) => {},
})

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState()

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: handleAddFavourite,
    removeFavourite: handleRemoveFavourite,
    determineFavourite: handleDetermineIfFavourite,
  }

  function handleAddFavourite(favouriteMeetup) {
    setUserFavourites((previousUserFavourites) => {
      return previousUserFavourites.concat(favouriteMeetup)
    })
  }

  function handleRemoveFavourite(meetupID) {
    setUserFavourites((previousUserFavourites) => {
      return previousUserFavourites.filter((meetup) => {
        if (meetup.id !== meetupID) {
          return true
        } else {
          return false
        }
      })
    })
  }

  function handleDetermineIfFavourite(meetupID) {
    return userFavourites.some((meetup) => {
      if (meetup.id === meetupID) {
        return true
      } else {
        return false
      }
    })
  }

  return (
    <FavouritesContext.Provider value={context}>
      {props.chilrden}
    </FavouritesContext.Provider>
  )
}

export default FavouritesContext
