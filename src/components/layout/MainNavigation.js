import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import classes from '../../scss/scoped/layout/_MainNavigation.module.scss'

import FavouritesContext from '../../store/favourites-context'

function MainNavigation() {
  favouritesCtx = useContext(FavouritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
            <p>{favouritesCtx.totalFavourites}</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
