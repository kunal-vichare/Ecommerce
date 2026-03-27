import { View, Text, FlatList,Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {getAllProducts} from '../../services/api'
import { useFocusEffect } from '@react-navigation/native'
import FlatlistData from '../HomeComponents/SubComponent/FlatlistData'
import Loader from '../../screens/Loader/Loader'
// import SearchBar from './SearchBar'
import Sort_Filter from './Sort_Filter'
import Category from './Category'
import Corousal from './Corousal'
import { useDispatch,useSelector } from 'react-redux'
import { setProducts } from '../../redux/slice/ProductSlice'

const FlatlistItems = () => {
  const [loader,setLoader] = useState(false);
  // const [myData,setMyData] = useState([]);
  const dispatch = useDispatch();
  const Products = useSelector((state)=>state.Products.item)

  const loadUsers = async()=>{
    try {
      setLoader(true);
      const data = await getAllProducts();
      // setMyData(data);
      dispatch(setProducts(data))
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

  const[refreshing,setRefreshing]= useState(false);
  const onRefresh = async ()=> {
    setRefreshing(true);
    await loadUsers();
    setRefreshing(false);
  };

  const numColumns=2
  
  return (
    <View style={{}}>
    {
      loader ? <Loader/> : 
      <FlatList 
          data={Products}
          renderItem={({item})=>(
          <FlatlistData item={item} />  
          )}
          keyExtractor={(item)=>item.id}
          numColumns={numColumns}
          columnWrapperStyle={{justifyContent:'space-between'}}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ListHeaderComponent={
            <>
              <Sort_Filter/>
              <Category />
            </>
          }
      />
    }
    </View>
  )
}
const styles = StyleSheet.create({

})
export default FlatlistItems