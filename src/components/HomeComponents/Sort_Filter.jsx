import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Sort from 'react-native-vector-icons/Fontisto'
import Filter from 'react-native-vector-icons/Feather'
import { RotateInDownRight } from 'react-native-reanimated'

const Sort_Filter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>All Featured</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
                Sort
            </Text>
            <Sort name="arrow-swap" size={24} style={{transform : [{rotate:'90deg'}]}}/>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>
                Filter
            </Text>
            <Filter name="filter" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    },
    btnContainer : {
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // flexDirection:'row',
        left:135,
        marginRight:10,
        backgroundColor:'#d8d4d4',
        padding:2,
        borderRadius:5
    },
    headingText : {
        fontSize:18,
        fontWeight:'900',
        marginLeft:20
    },
    btnText : {
        fontSize : 15,
        fontWeight: '700',
        marginRight:5
    },
    btn : {
        // btnContainer: '#b9b8b8',
        flexDirection:'row',
        // marginRight:20
    }
})

export default Sort_Filter