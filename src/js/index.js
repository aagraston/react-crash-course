import '../scss/app.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './app'
import { FavouritesContextProvider } from '../store/favourites-context'

ReactDOM.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>,
  document.getElementById('root')
)
