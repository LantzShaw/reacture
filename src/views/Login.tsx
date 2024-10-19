import { Component } from "react"

export default class Login extends Component {
  //   state = {}

  constructor(props) {
    super(props)

    this.state = {}
  }

  // UNSAFE_componentWillMount() { }

  componentDidMount() {}

  // UNSAFE_componentWillReceiveProps(props) { }

  shouldComponentUpdate(nextProps) {}

  // UNSAFE_componentWillUpdate(props) { }

  componentDidUpdate(prevProps) {}

  componentWillUnmount() {}

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo)
  }

  render() {
    return <div>Login Page</div>
  }
}
