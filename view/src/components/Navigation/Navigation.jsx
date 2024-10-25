import React from 'react'
import {getHello } from '../../utils/utils'
import { useEffect, useState } from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'


export const Navigation = () => {
const [hello, setHello] = useState({})

const makeHello = async () => {
  const data = await getHello();
  console.log(data)
  setHello(data)
}

useEffect(() => {
  makeHello();
}, [])


  return (
    <nav className={styles.Navigation}>
        <h4>Planes</h4>
        <h4>Log In</h4>
        <img className={styles.cartIcon} src="\src\assets\luggage-cart-solid-svgrepo-com.svg" alt="" />

    </nav>
  )
}
