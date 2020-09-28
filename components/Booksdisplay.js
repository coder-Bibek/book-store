import React from 'react'
import { View, Text, Image,ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from "@react-navigation/native"
const Booksdisplay = ({image,text,subtitle}) => {
    const navigation= useNavigation()
    let data ={image:image,title:text,subtitle:subtitle}
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>{
           navigation.navigate("details",data)
        }} >
       
            <Image source={{uri:image}} style={{width:100,height:140}}/>
            <Text style={{textAlign:"center",flexWrap:"wrap",width:100,margin:2}}>{text}</Text>
    </TouchableOpacity>

    ) 
}

export default Booksdisplay
