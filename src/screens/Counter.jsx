import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from '../redux/slice/CounterSlices'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title='Increment' onPress={()=>dispatch(increment())}/>
      <Button title='Decrement' onPress={()=>dispatch(decrement())}/>
      <Button title='Reset' onPress={()=>dispatch(reset())}/>
    </View>
  )
}

export default Counter