import React from 'react'
import { View, Text,ScrollView, StyleSheet } from 'react-native'
import EndStack from './EndStack'

const Category = ({navigation,route}) => {
    const arrvalue =["Science Fictional","Horror","Magic","Robotics","Border Designing","My SQL","Deep Learning","Artificial Intelligence"]
    return (
        <View style={{flex:1}}>
            
         
              <View style={styles.searchContainer}>
        
                <Text style={styles.searchText} >Manakamana Book Store</Text>
         </View>
             
            <ScrollView >
              
        {arrvalue.map((data,i)=>
                <Text style={styles.text} key={i} onPress={()=>navigation.navigate("display",{hold:arrvalue[i].toLowerCase()})}>{data}</Text>
        )}

            
              
             
              
            </ScrollView>
           
            <View><EndStack  /></View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
borderWidth:1,
textAlign:"center",
borderRadius:10,
padding:15,
fontSize:24,
fontWeight:"bold",
margin:10,
borderStyle:"dotted"
    },
    searchContainer:{
        backgroundColor:"aliceblue",
      padding:25
    
    },
    searchText:{
        textAlign:"center",
        color:"red",
        margin:5,
        top:10,
        fontSize:18
    }
})


export default Category
