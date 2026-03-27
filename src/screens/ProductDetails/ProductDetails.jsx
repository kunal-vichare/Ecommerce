import { View, Text,Image ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import Cart from 'react-native-vector-icons/Ionicons'
import Buy from 'react-native-vector-icons/MaterialIcons'
import Star from 'react-native-vector-icons/Entypo'

const ProductDetails = () => {
  const route = useRoute();
  const item = route.params?.item;
  const navigation = useNavigation();
  // console.log("Products: "+Products)
  
  const perc = item.rating.rate/0.05;
  const rating = 
  perc>80 ? 
  5 : perc>60 ?  
  4 : perc>40 ? 
  3 : perc>20 ?
  2 : 1
    
  
  // const rating=5;
  console.log("Rating: "+rating);
  
  return (
    <View style={styles.container}>
      <Image 
        source={{uri : item.image}}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text ellipsizeMode="tail" style={styles.title}>
          {item.title}
        </Text>
        <Text ellipsizeMode="tail" style={styles.category}>
          {item.category}
        </Text>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text>
          {[...Array(rating)].map((k,index)=>
          <View key={index}>
            <Star key={index} name="star" size={29} color="#c8b811"/> 
          </View>
          )}
        </Text>
          <Text style={styles.ratingCount}>{item.rating.count}</Text>
      </View>
      <Text ellipsizeMode="tail" style={styles.price}>
        ₹{item.price}
      </Text>
      <Text style={styles.productDetails}>Product Details</Text>
      <Text ellipsizeMode="tail" style={styles.description}>
       {item.description}
      </Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.singleBtn}>
          <Cart name="cart" size={40} style={styles.cart}/>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Drawer',{
            screen: 'BottomTabs',
            params : {
                      screen : 'Cart'
                    }
          })}
          style={styles.cartBtn}
        >
          <Text style={styles.cartText}>Go to cart</Text>
        </TouchableOpacity>
        </View>
        {/* <View style={styles.buySingleBtn}>
           <Buy name="touch-app" size={40} style={styles.buyCart}/>
        <TouchableOpacity
          style={styles.buyBtn}
        >
          <Text style={styles.cartText}>Buy Now</Text>
        </TouchableOpacity>
        </View> */}
        </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    // height:600
    flex:1,
    // flexDirection:'row'
    padding:15
  },
  image : {
    // flex:1,
    height:210, 
    width:'100%',
    // borderRadius:55,
    marginTop:30,
    resizeMode:'contain'
  },
  title : {
    fontSize:20,
    fontWeight:'700',
    marginTop:10,
  },
  category : {
    fontSize:20,
    fontWeight:'500',
    marginTop:5,
    marginBottom:5
  },
  price : {
    fontSize:20,
    fontWeight:'700',
    marginTop:5,
    marginBottom:5
  },
  productDetails : {
    fontSize:20,
    fontWeight:'800'
  },
  description : {
    fontSize:15,
    fontWeight:'400',
    fontStyle:'italic'
  },
  btnContainer: {
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-evenly',
    alignItems:'center',
    // backgroundColor:'blue',
    // paddingLeft:20,
    // paddingRight:5,
    // paddingTop:5,
    // paddingBottom:5,
    // marginLeft:130,
    // marginRight:130,
    borderRadius:5
  },
  cartBtn : {
    
  },
  buyBtn : {

  },
  cartText : {
    color:'#fff',
    fontSize:20,
    fontWeight:'800'
  },
  cart : {
    position:'absolute',
    color:'#fff',
    backgroundColor:'blue',
    borderRadius:30,
    borderWidth:1,
    padding:5,
    // top:485,
    // bottom:0,
    left:-35,
    zIndex:1
    // right:0,
  },
  buyCart : {
    position:'absolute',
    color:'#fff',
    backgroundColor:'green',
    borderRadius:30,
    borderWidth:1,
    padding:5,
    // top:485,
    // bottom:0,
    left:-35,
    zIndex:1
    // right:0,
  },
  singleBtn : {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#1e00ff',
    paddingLeft:20,
    paddingTop:10,
    paddingBottom:10,
    paddingRight:10,
    borderRadius:10,
  },
  buySingleBtn : {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#1e863f',
    paddingLeft:20,
    paddingTop:10,
    paddingBottom:10,
    paddingRight:10,
    borderRadius:10,
  },
  ratingCount:{
    fontSize:15,
    fontWeight:'400',
    fontStyle:'italic',
    marginLeft:10
  },
  textContainer:{
    padding:10
  }

})

export default ProductDetails