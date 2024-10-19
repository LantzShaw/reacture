import { forwardRef, useRef, useImperativeHandle } from "react"

function Card(_, ref) {
  const inputRef = useRef(null)

  // NOTE: 第二个参数返回的一个对象，否则返回undefined
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        console.log('------card focused------')

        inputRef.current.focus()
      }
    }
  })


  return <>
    <input type="text" ref={inputRef} />
  </>
}

// NOTE: 由于函数式组件没有实例 所以父组件通过ref 无法获取到dom 需要通过ref转发
export default forwardRef(Card)