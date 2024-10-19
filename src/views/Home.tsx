/**
 * React Hooks
 * https://juejin.cn/post/7030733515482202119
 */

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Card from "../comonents/Card"

export default function Home() {
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(1)
  const cardRef = useRef(null)

  console.log('-------rendering---------')

  // useEffect(() => {
  //   console.log('mounted effect')
  //   setCount(2)
  //   setCount(prev => {
  //   setPrice(prev + 3)
  //     return prev
  //   })
  // }, [])


  // NOTE: 如果setPrice 依赖与setCount的最新值 需要添加依赖项count 否则setPrice中count是旧值
  useEffect(() => {
    console.log('mount')

    // set一次就会渲染一次

    setCount(2) // 该useEffect会执行一次

    setPrice(count + 1) // 该useEffect会执行一次
    // count可以打印最新的值，但price不能 因为没有监听
    console.log('=======card ref=======', cardRef.current, count, price)
  }, [count, price]) // 这个StrictMode 开发模式下会执行四次，在非StrictMode下执行三次

  useEffect(()=> {

    // 在StrictMode 模式下 并且在开发环境下 useEffect 会执行两次
    // 参考文章: https://juejin.cn/post/7137654077743169573
    console.log('=======card ref2=======', cardRef.current)
  }, [])

  const onClick = () => {
    console.log(cardRef.current)
    cardRef.current.focus()
  }

  useLayoutEffect(() => {
    console.log('layout', count)
  }, [count])

  const clickHandler = () => {

    setCount(count + 1)
    console.log('count', count)
  }

  return <>
    <div>
      <button onClick={onClick}>Click Me</button>
      <button onClick={clickHandler}>update</button>
      <p>count: {count}</p>
      <p>price: {price}</p>

      <Card ref={cardRef} />
    </div>
  </>
}
