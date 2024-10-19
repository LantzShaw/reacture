// export default class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { hasError: false }
//   }


//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true }
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     logErrorToMyService(error, errorInfo)
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>
//     }

//     return this.props.children
//   }
// }


import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}