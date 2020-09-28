import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Book from "react-native-vector-icons/Feather"
import Category from "react-native-vector-icons/AntDesign"
import Language from "react-native-vector-icons/FontAwesome"
import {useNavigation} from "@react-navigation/native"

const EndStack = ({color}) => {
    const navigation =useNavigation()
    const handleBookcolor=async()=>{
 
       navigation.navigate("Main")
  
    }
    const handleCatcolor=()=>{
        
        navigation.navigate("category")
      
    }
    const handleLangcolor=()=>{
       
    }
    return (
        <View style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-around",
            borderWidth:StyleSheet.hairlineWidth,
            backgroundColor:"rgba(245,222,194,1)",
            margin:-2
            
        }}>
            <View >
            <Book name="book-open" size={26}  style={{margin:10,right:5}} color="brown"  onPress={handleBookcolor}/>
            <Text style={{fontSize:18,bottom:10,right:5}}>Books</Text>
            </View>
            <View>
            <Category name="profile" size={26}  style={{margin:10,left:8}}  color="brown" onPress={handleCatcolor}/>
            <Text style={{fontSize:18,bottom:10,left:2}}>Category</Text>
            </View>
            <View>
            <Language name="language" size={26}  style={{margin:10,left:10}} color="brown"  onPress={handleLangcolor}/>
            <Text style={{fontSize:18,bottom:10}}>Language</Text>
            </View>
           
        </View>
    )
}

export default EndStack
