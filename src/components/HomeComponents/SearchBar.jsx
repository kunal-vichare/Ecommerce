import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Search from 'react-native-vector-icons/Feather';
import Mic from 'react-native-vector-icons/Feather';

const SearchBar = () => {
  const[search,setSearch]=useState("")
  return (
    <View style={styles.searchBar}>
      <Search name="search" size={24} style={styles.searchIcon}/>
      <TextInput
        placeholder='Search users'
        placeholderTextColor={"#474646"}
        value={search}
        onChangeText={setSearch}
        style= {styles.search}
      />
      <TouchableOpacity style={styles.micIcon}>
        <Mic name="mic" size={24} />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    searchBar : {
        // position: 'relative',
        // flexDirection:'row',
        // backgroundColor: '#fff',
        // marginLeft:15,
        // marginRight:15,
        // alignItems:'center',
    },
  search : {
        // borderColor : 'black',
        paddingLeft :40,
        paddingRight :40,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor : '#fff',
        // marginRight: 12,
        marginLeft: 12,
        width:'92%',
        // opacity:5,
        // shadowColor:'black',
        // shadowOpacity:5
  },
    searchIcon : {
        position :'absolute', 
        zIndex:1,
        top:30,
        left:20
        // marginTop:18,
        // marginLeft:10,
    },
    micIcon : {
        position :'absolute', 
        zIndex:1,
        top:30,
        right:30
    }
})

export default SearchBar