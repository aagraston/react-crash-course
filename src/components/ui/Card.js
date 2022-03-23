import React from 'react'
import classes from '../../scss/scoped/ui/_Card.module.scss'

//props.children is the content wrapped by this component
function Card(props) {
  return <div className={classes.card}>{props.children}</div>
}

export default Card
