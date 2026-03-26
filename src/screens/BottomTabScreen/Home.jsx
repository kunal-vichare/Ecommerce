import { View, Text,StatusBar, ScrollViewBase, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/HomeComponents/Header'
import SearchBar from '../../components/HomeComponents/SearchBar'
import Sort_Filter from '../../components/HomeComponents/Sort_Filter'
// import Category from '../../components/HomeComponents/Category'
// import Corousal from '../../components/HomeComponents/Corousal'
import FlatlistIems from '../../components/HomeComponents/FlatlistItems'

const Home = () => {
  return (
    <View style={{flex:1}}>
      <Header />
      <SearchBar/>
      <FlatlistIems/>
    </View>
  )
}

export default Home