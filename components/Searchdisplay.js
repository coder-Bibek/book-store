import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState,useRef,useCallback } from 'react'
import { View, Text,StyleSheet, ActivityIndicator, Alert,FlatList, RefreshControl,BackHandler, Image,Linking } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Searchbar } from 'react-native-paper';
import Booksdisplay from './Booksdisplay';
import EndStack from './EndStack'; 
const Searchdisplay = ({route}) => {
    const {hold} =  route.params
    const API=`https://api.itbook.store/1.0/search/${hold}`
    const[loading,setLoading]=useState(true)
    const[kitab,setKitab]=useState([])
  
    useEffect(()=>{
      
    
      getrelatedBooks()
     
   
      return()=>{setLoading(false)}
    },[hold])
    
    const getrelatedBooks =async()=>{
        const response = await fetch(API);
        const data=await response.json()
        setKitab(data.books)
        setLoading(false)
    }
    const goThere =()=>{
        kitab.map((book,i)=>{
            Linking.openURL(book.url).catch((err)=>{
                console.log(err)
            })
        })
    }
    return (
       
        <View style={styles.container} >
            {/* {console.log(kitab)} */}
        <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Manakamana Book Store</Text>
        </View>
       
         <View style={{flex:1,justifyContent:"center"}}>
         {loading?<ActivityIndicator size="large" style={{alignSelf:"center"}}/>:
         <ScrollView style={{flex:1,top:5}}
         scrollsToTop={true}
         >
              <View style={{flexDirection:"row",alignItems:"center"}}>
    <Text style={{fontSize:18,margin:5,color:"blue"}}>Results Found : </Text>
    <Text style={{fontSize:18,color:"red"}}>{kitab.length<1?"No such items":kitab.length}</Text>
    </View>
        {kitab.map((book,i)=><View  key={i} style={{borderWidth:1, padding:10,margin:10,flexDirection:"row",justifyContent:"space-between"}}>
            <View>
        <Image source={{uri:book.image}} style={{width:160,height:180,backgroundColor:"aliceblue"}} />
    <Text style={{width:160,flexWrap:"wrap",fontWeight:"bold"}}>{book.title}</Text>
    </View>
    <View style={{margin:10}} >
    <Text style={{fontWeight:"bold"}}>ISBN:{book.isbn13}</Text>
    <Text style={{margin:10}}>Price:{book.price}</Text>
    <Button mode="contained" style={{padding:5,top:80}} onPress={goThere}>Book Preview</Button>
    </View>
        </View>)}
           
         
             
        
               <Text style={{margin:10}}></Text>

         </ScrollView>
        }
        </View>
         <View>
             <EndStack/>
         </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
   
    container:{
        flex:1,
    

    },
    searchContainer:{
        backgroundColor:"aliceblue",
        padding:25,
       
    },
    searchText:{
        textAlign:"center",
        color:"red",
        fontSize:18,
        margin:5,
        top:10
    }
})

export default Searchdisplay
