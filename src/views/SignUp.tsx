/**
 * useEffect 与 useLayoutEffect
 * 
 * 参考文章: https://juejin.cn/post/6859602611901825037
 */

import { useEffect,useLayoutEffect, useState } from "react"

function SignUp() {
    const [count, setCount] = useState(0)


    // NOTE: 这个会闪烁 重绘多次
    useEffect(() => {
        if(count === 0)  {
            const randomNum = 10 + Math.random()*200
        setCount(10 + Math.random()*200)
        setCount(20 + Math.random()*200)
            }
    }, [count])

    // NOTE: 这个不会闪烁 同步的 只会重绘1次
    // useLayoutEffect(() => {
    //     if(count === 0)  {
    //         const randomNum = 10 + Math.random()*200
    //     setCount(10 + Math.random()*200)
    //     setCount(20 + Math.random()*200)
    //         }
    // }, [count])

    return <>
        <div onClick={() => setCount(0)}>{count}</div>
    </>

}

export default SignUp



// import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
// import { render } from 'react-dom';

// function App() {
//   const [count, setCount] = useState(0);
  
//   useLayoutEffect(() => {
//     if (count === 0) {
//       const randomNum = 10 + Math.random()*200
//       setCount(10 + Math.random()*200);
//     }
//   }, [count]);

//   return (
//       <div onClick={() => setCount(0)}>{count}</div>
//   );
// }

// render(<App />, document.getElementById('root'));