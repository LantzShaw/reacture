// import { useReducer } from "react";

// export default function useForceUpdate() {
//     const [, forceUpdate] = useReducer(v => v + 1, 0)

//     return forceUpdate
// }

import { useState } from 'react'

export default function useForceUpdate() {
    const [, forceUpdate] = useState()

    return forceUpdate
}

// NOTE: 方式一:
// useState + useCallback
// import React, { useState , useCallback} from "react";

// export default function App() {
//     const [, updateState] = useState();
//     const handleForceupdateMethod = useCallback(() => updateState({}), []);

//     // Check your console
//     console.log("Rendering...");

//     return (
//         <div className="App">
//             <h1>Hello StackAbuse</h1>
//             <h3>Random Number: { Math.random() }</h3>

//             {/*
//                 Clicking on the button will force to re-render like force update does
//             */}
//             <button onClick={handleForceupdateMethod}>Force re-render</button>
//         </div>
//     );
// }

// NOTE: 方式二:
// import React, { useState } from "react";

// // Create your forceUpdate hook
// function useForceUpdate() {
//     let [value, setState] = useState(true);
//     return () => setState(!value);
// }

// export default function App() {
//     // Call your hook here
//     const handleForceupdateMethod = useForceUpdate();

//     return (
//         <div className="App">
//             <h1>Hello StackAbuse </h1>
//             <h3>Random Number: { Math.random() }</h3>

//             {/*
//                 Clicking on the button will force to re-render like force update does
//             */}
//             <button onClick={handleForceupdateMethod}>Force re-render</button>
//         </div>
//     );
// }

// NOTE: 方式三
// const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

// function handleClick() {
//     forceUpdate()
// }
