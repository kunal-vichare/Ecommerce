import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View style={styles.container}>
        <View style={styles.productContainer}>
            <TouchableOpacity style={styles.btnContainer}>
                <Image source={require('../../assets/BottomTab/Beauty.png')} style={styles.img}/>
            </TouchableOpacity>
            <Text style={styles.text}>Beauty</Text>
        </View>
        <View style={styles.productContainer}>
            <TouchableOpacity style={styles.btnContainer}>
                <Image source={require('../../assets/BottomTab/Fashion.jpg')} style={styles.img}/>
            </TouchableOpacity>
            <Text style={styles.text}>Fashion</Text>
        </View>
        <View style={styles.productContainer}>
            <TouchableOpacity style={styles.btnContainer}>
                <Image source={require('../../assets/BottomTab/kids.jpg')} style={styles.img}/>
            </TouchableOpacity>
            <Text style={styles.text}>Kids</Text>
        </View>
        <View style={styles.productContainer}>
            <TouchableOpacity style={styles.btnContainer}>
                <Image source={require('../../assets/BottomTab/Mens.jpg')} style={styles.img}/>
            </TouchableOpacity>
            <Text style={styles.text}>Mens</Text>
        </View>
        <View style={styles.productContainer}>
            <TouchableOpacity style={styles.btnContainer}>
                <Image source={require('../../assets/BottomTab/Women.jpg')} style={styles.img}/>
            </TouchableOpacity>
            <Text style={styles.text}>Womens</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    btnContainer : {
        marginTop:20,
        // borderWidth:1
        // height:40,
        // width:40,
        // borderRadius:15,
    },
    container : {
        // flex:1,
        justifyContent:'space-evenly',
        flexDirection : 'row'
    },
    productContainer:{
        alignItems:'center',
    },
    img : {
        height:60,
        width:60,
        borderRadius:30,
        // borderWidth:1,
        resizeMode:'cover'
    },
    text : {
        fontWeight:'600',
        marginTop:10
    }
})
export default Category