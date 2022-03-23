import React from 'react'
import classes from '../../scss/scoped/meetups/_MeetUpItem.modules.scss'

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.addess}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favourites</button>
      </div>
    </li>
  )
}

export default MeetupItem
