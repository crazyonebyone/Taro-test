import { Component } from 'react'
import { View, Text } from '@tarojs/components'

export default class Index extends Component<{ onClick: () => void }> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text onClick={this.props.onClick}>文案啦!</Text>
      </View>
    )
  }
}
