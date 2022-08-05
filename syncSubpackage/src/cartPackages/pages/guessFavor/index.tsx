import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import CusButton from '../../components/button'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>猜你喜欢!</Text>
        <CusButton onClick={() => null} />
      </View>
    )
  }
}
