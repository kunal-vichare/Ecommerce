import { View, Text, FlatList } from 'react-native'
import React from 'react'
// import {Header,SearchBar,Sort_Filter,Category,FlatlistIems} from '../../components/HomeComponents/index'
import Header from '../../components/HomeComponents/Header'
import SearchBar from '../../components/HomeComponents/SearchBar'
import Sort_Filter from '../../components/HomeComponents/Sort_Filter'
import Category from '../../components/HomeComponents/Category'
// import Corousal from '../../components/HomeComponents/Corousal'
import FlatlistIems from '../../components/HomeComponents/FlatlistItems'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const Products = useSelector((state)=>state.Products.item)
  return (
    <View>
      <Header/>
      <SearchBar/>
      <Sort_Filter/>
      <FlatList
        data={Products}
        renderItem={({item})=>(  
          <View>
            <Text>{item.title}</Text>
          </View>
          )}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default Wishlist