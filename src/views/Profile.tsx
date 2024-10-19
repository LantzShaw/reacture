import { useEffect, useRef, useState } from "react"

export default function Profile() {
  const [name, setName] = useState('Lantz')
  const domRef = useRef(null)
  // 数据改变后 - 页面不会重新更新
  const data = useRef('')

  useEffect(() => {
    console.log('=========ref=========', domRef.current)

    setName('Lantz')

    data.current =  name
  }, [])

  return <>
    <div ref={domRef}></div>
    <div>{data.current}</div>
  </>
}
