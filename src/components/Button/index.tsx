import React, { useState } from 'react'

export const Button = () => {
  const [click, setClick] = useState(0)
  return (
    <>
      <h1>{click}</h1>
      <button onClick={() => setClick(click + 1)}>+1</button>
    </>
  )
}
