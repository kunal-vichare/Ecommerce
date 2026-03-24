import { View, Text,Image,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FlatlistData = ({item}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.productContainer}
            onPress={()=>navigation.navigate("Product Details Screen",{item:item})}
        >
            <Image 
            source={{uri : item.image}}
            style={styles.image}
            />
            <View style={{flexWrap:'wrap'}}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{flexShrink:1}}>
                Title : {item.title}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
                Price :  {item.price}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" >
                Category : {item.category}
            </Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  image : {
    // flex:1,
    height:110, 
    width:110,
    // borderRadius:55,
    marginLeft:10,
    resizeMode:'contain'
  },
  container:{
    // height:600
    // flex:1,
    // flexDirection:'row'
  },
  productContainer : {
    width:240,
    padding:20
  }
})

export default FlatlistData