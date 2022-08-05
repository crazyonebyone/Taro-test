import { Component } from 'react'
import './app.scss'

class App extends Component {
  async componentDidMount() {
    await __non_webpack_require__.async('cartPackages/common')
  }
  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
