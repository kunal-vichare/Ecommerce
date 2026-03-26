import { View, Text,Image,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const FlatlistData = ({item}) => {
    const navigation = useNavigation();
    const [heart,setHeart] = useState(false);
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
            <TouchableOpacity 
              onPress={()=>setHeart(!heart)}
              style={styles.heart}
            >
              {!heart ? <Icon name="heart-outline" size={24} /> : <Icon name="heart" size={24} style={{color:'#ff0101'}}/>}
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{flexShrink:1}}>
                  <Text style={styles.textHeading}>Title :</Text> {item.title}
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{flexShrink:1}}>
                  <Text style={styles.textHeading}>Price :</Text>  {item.price}
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{flexShrink:1}}>
                  <Text style={styles.textHeading}>Category :</Text> {item.category}
              </Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    // height:600
    // width:'100%',
    // flexDirection:'row'
  },
  image : {
    // flex:1,
    height:110, 
    width:'85%',
    // borderRadius:55,
    // marginLeft:10,
    resizeMode:'contain'
  },
  productContainer : {
    flex:1,
    // width:180,
    margin:8,
    backgroundColor:'#fff',
    padding:12,
    elevation:3,
    borderRadius:10,
  },
  textContainer : {
    marginTop:10,
    width : '100%'
  },
  textHeading : {
    fontWeight:'500'
  },
  heart : {
    position:'absolute',
    right:0,
    padding:10
  }
})

export default FlatlistData