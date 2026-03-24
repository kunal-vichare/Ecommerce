import { View, Text,Image ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import Cart from 'react-native-vector-icons/Ionicons'

const ProductDetails = () => {
  const route = useRoute();
  const item = route.params?.item;
  const navigation = useNavigation();
  return (
    <View>
      <Image 
      source={{uri : item.image}}
      style={styles.image}
      />
      <View style={{flexWrap:'wrap'}}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={{flexShrink:1}}>
        Title : {item.title}
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail" style={{flexShrink:1}}>
        Description : {item.description}
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail">
        Price :  {item.price}
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail" >
        Category : {item.category}
      </Text>
      </View>
      <View>
        <TouchableOpacity
          // onPress={()=>navigation.navigate('BottomTabs',{screen: 'Cart'})}
          onPress={()=>navigation.goBack()}
        >
          <Cart name="cart" size={30} />
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
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

export default ProductDetails