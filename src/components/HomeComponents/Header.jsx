import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.openDrawer()} style={styles.menuIcon}>
        <Icon name="menu" size={30} />
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
        <Image source={require('../../assets/BottomTab/logo.png')} style={{height:30,width:30,resizeMode:'stretch',marginRight:10}}/>
        <Text style={styles.logoTxt}>
          Stylish
        </Text>
      </View>
      <TouchableOpacity 
        // onPress={()=>navigation.navigate('Profile')}
        onPress={()=>navigation.navigate('Counter')}
      >
      <Image source={require('../../assets/BottomTab/Profile.png')} style={{height:30,width:30,resizeMode:'stretch'}}/>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    // flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'red',
    // padding:10,
    // top:0,
    // left:0,
    // right:0,
    marginTop:30,
    marginLeft:10,
    marginRight:10,
    // alignItems:'center'
    alignContent:'center'
  },
  logoTxt : {
    fontWeight:'700',
    fontStyle:'italic',
    fontSize:22,
    lineHeight:22,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default Header