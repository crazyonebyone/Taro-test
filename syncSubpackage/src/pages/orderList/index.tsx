import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import CusButton from '../../cartPackages/components/button'
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
        <Text>订单列表</Text>
        <CusButton onClick={() => this.setState({isShow: true})} />
      </View>
    )
  }
}
