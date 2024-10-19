import React, { useState } from 'react'

export default function UseMemoExample() {
  const [count, setCount] = useState<number>(0)

  const clickHandler = () => setCount(count + 1)

  return (
    <>
      <div>count: {count}</div>
      <button onClick={clickHandler}>Click me</button>
      {/* <Child onClick={clickHandler} /> */}
    </>
  )
}
