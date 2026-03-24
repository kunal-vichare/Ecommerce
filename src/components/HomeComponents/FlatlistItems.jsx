import { View, Text, FlatList,Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {getAllProducts} from '../../services/api'
import { useFocusEffect } from '@react-navigation/native'
import FlatlistData from '../HomeComponents/SubComponent/FlatlistData'

const FlatlistItems = () => {
  const [myData,setMyData] = useState({});
  const [loader,setLoader] = useState(false);

  const loadUsers = async()=>{
    try {
      setLoader(true);
      const data = await getAllProducts();
      setMyData(data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false);
    }
  }

    useFocusEffect(
    React.useCallback(() => {
      loadUsers();
      return () => {
        // loadUsers();
      };
    }, [])
  );
  const numColumns=2
  
  return (
    <View>
      <FlatList 
          data={myData}
          renderItem={({item})=>(
          <FlatlistData item={item} />         
          )}
          keyExtractor={(item)=>item.id}
          numColumns={numColumns}
          // refreshing={refreshing}
          // onRefresh={onRefresh}
          // ItemSeparatorComponent={<View style={{height:2,backgroundColor:'#999797'}}/>}
      />
    </View>
  )
}
const styles = StyleSheet.create({

})
export default FlatlistItems