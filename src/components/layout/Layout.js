import React from 'react'
import classes from '../../scss/scoped/layout/_Layout.module.scss'
import MainNavigation from './MainNavigation'

function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout
