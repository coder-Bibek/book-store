import React, { useEffect, useState,useRef,useCallback } from 'react'
import {StatusBar} from "expo-status-bar"
import { View, Text,StyleSheet, ActivityIndicator, Alert,FlatList, RefreshControl,BackHandler } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import Booksdisplay from './Booksdisplay';
import EndStack from './EndStack';
import {useFocusEffect} from "@react-navigation/native"
const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  
const MainScreen = ({navigation}) => {
    const [refreshing, setRefreshing] =useState(false);
    const[search,setSearch]=useState("")
    const[hold,setHold]=useState("robots,horror")
    const[bold,setBold]=useState("java,elixir")
    const[gold,setGold]=useState("game,horror")
    const API=`https://api.itbook.store/1.0/search/${hold}`
    const API2 = `https://api.itbook.store/1.0/search/${bold}`
    const API3 = `https://api.itbook.store/1.0/search/${gold}`
    const[loading,setLoading]=useState(true)
    const[kitab,setKitab]=useState([])
    const[kitab2,setKitab2]=useState([])
    const[kitab3,setKitab3]=useState([])
    const onRefresh = useCallback(() => {
        setRefreshing(true);
     
            let many=["variable,robots","magic,story","html,css","AI,rich"]
            let rand = Math.floor(many.length*Math.random(1))
            setHold(`"${many[rand]}"`)
        
        wait(2000).then(() => setRefreshing(false));
      }, []);
    useEffect(()=>{
      
    
      getrelatedBooks()
      getviewedBooks()
      getlovedBooks()
   
      return()=>{setLoading(false)}
    },[hold])
    const getrelatedBooks =async()=>{
        const response = await fetch(API);
        const data=await response.json()
        setKitab(data.books)
       
    }
    const getviewedBooks =async()=>{
        const response = await fetch(API2);
        const data=await response.json()
        setKitab2(data.books)
    }
    const getlovedBooks =async()=>{
        const response = await fetch(API3);
        const data=await response.json()
        setKitab3(data.books)
        setLoading(false)
    }
    useFocusEffect(
        useCallback(() => {
          const onBackPress = () => {
            Alert.alert("Alert", "Do you want to exit this app?", [
              { text: "yes", onPress: () => BackHandler.exitApp() },
              { text: "no" },
            ]);
    
            return true;
          };
    
          BackHandler.addEventListener("hardwareBackPress", onBackPress);
    
          return () =>
            BackHandler.removeEventListener("hardwareBackPress", onBackPress);
        })
      );
      const getSearch=()=>{
        (search.length==0 || search.trim()=="")?
        navigation.navigate("Main") 
        :navigation.navigate("display",{hold:search.toLowerCase().trim()})
       setSearch("")
      }
    return (
    
        <View style={styles.container} >
         <View style={styles.searchContainer}>
         
         <Searchbar
             placeholder="Search"
             value={search}
             onChangeText={(text=>setSearch(text))}
            onSubmitEditing={ getSearch}
        />
        
        <Text style={styles.searchText}>Manakamana Book Store</Text>
         </View>
         <View style={{flex:1,justifyContent:"center"}}>
         {loading?<ActivityIndicator size="large" style={{alignSelf:"center"}}/>:
         <ScrollView style={{flex:1,top:30}}
         refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        
         >
             <Text style={{color:"blue",fontWeight:"bold",top:3,left:5}}>Top related Books</Text>
           
         
             
            <FlatList
               
                 data={kitab}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item}) =>
                 <Booksdisplay image={item.image} text={item.title}/>
                 }
                 keyExtractor={item => item.isbn13}
               />
         <Text style={{color:"green",fontWeight:"bold",left:5}}>Top Viewed Books</Text>
        <FlatList
               
                 data={kitab2}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item}) =>
                 <Booksdisplay image={item.image} text={item.title}/>
                 }
                 keyExtractor={item => item.isbn13}
               />
                 <Text style={{color:"brown",fontWeight:"bold",left:5}}>Favourite Books</Text>
                <FlatList
     
                 data={kitab3}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item}) =>
                 <Booksdisplay image={item.image} text={item.title} subtitle={item.subtitle}/>
                 }
               
                 keyExtractor={item => item.isbn13}
               />
               <Text style={{margin:10}}></Text>
                
                 
                
              
               
             
 
                
                 
             
                 
         
           
        
             
            

         </ScrollView>
        }
        </View>
         <View>
             <EndStack color="brown"/>
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
        padding:10,
        top:28,
        
        
    },
    searchText:{
        textAlign:"center",
        color:"red",
        margin:5
    }
})

export default MainScreen
