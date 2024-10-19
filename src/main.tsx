import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const container = document.getElementById('root')!

const root = ReactDOM.createRoot(container)

const element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// const element = (
//   <div classname="wrapper">
//     <div>
//       <span
//         style={{
//           color: '#f40',
//         }}
//       >
//         name:
//       </span>
//       <span>Lantz Shaw</span>
//     </div>
//     <div id="gender">
//       <span>gender:</span>
//       <span>male</span>
//     </div>
//   </div>
// )

// const element = React.createElement(
//   'div',
//   {
//     className: 'wrapper',
//   },
//   React.createElement(
//     'div',
//     null,
//     React.createElement('span', { style: { color: '#f40' } }, 'name:'),
//     React.createElement('span', null, 'Lantz Shaw')
//   ),
//   React.createElement(
//     'div',
//     { id: 'gender' },
//     React.createElement('span', null, 'gender:'),
//     React.createElement('span', null, 'male')
//   )
// )

root.render(element)
