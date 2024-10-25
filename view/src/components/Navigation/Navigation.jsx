import React from 'react'
import {getHello } from '../../utils/utils'
import { useEffect, useState } from 'react'

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
    <nav>
        <h2>{hello.message}</h2>
        <h2>click me</h2>
        <h2>click me</h2>

    </nav>
  )
}
