import { useEffect, useRef } from 'react'

// export function usePrevious(state) {
//     const prevState = useRef(null)

//     useEffect(() => {
//         prevState.current = state
//     })

//     return prevState
// }

export function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

// 组件中使用
// function Counter() {
//   const [count, setCount] = useState(0);
//   const prevCount = usePrevious(count);
//   return <h1>Now: {count}, before: {prevCount}</h1>;
// }
