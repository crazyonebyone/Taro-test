import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import CusButton from '../../cartPackages/components/button'
import TextShow from '../../cartPackages/components/textShow'
import './index.scss'
export default class Index extends Component<null, { isShow: boolean }> {
  constructor (props: any) {
     super(props)
     this.state = {
       isShow: false
     }
  }
  async componentWillMount () {
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    
    return (
      <View className='index'>
        你好啊
        {
          this.state.isShow && <Text>Hello world!</Text>
        }
        <CusButton onClick={() => this.setState({isShow: true})} />
        <TextShow onClick={() => console.log('点击')}></TextShow>
      </View>
    )
  }
}
