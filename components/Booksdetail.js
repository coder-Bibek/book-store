import React, { useEffect, useState } from 'react'
import { View, Text, Image,Linking,ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import EndStack from './EndStack'
import { Button, Searchbar } from 'react-native-paper';

const Booksdetail = ({route}) => {

    const[loading,setLoading]=useState(true)
    const[kitab,setKitab]=useState([])
    const{image}=route.params
    const{title}=route.params
    const{subtitle}=route.params
    const hold = title
    const API=`https://api.itbook.store/1.0/search/${hold}`
    useEffect(()=>{
getrelatedBooks()
    },[hold])
    const goThere =()=>{
        kitab.map((book,i)=>{
            Linking.openURL(book.url).catch((err)=>{
                console.log(err)
            })
        })
    }
    const getrelatedBooks =async()=>{
        const response = await fetch(API);
        const data=await response.json()
        setKitab(data.books)
        setLoading(false)
    }
    return (
        <View style={{flex:1}}>
             <View style={{flex:1,justifyContent:"center"}}>
              {loading?<ActivityIndicator size="large" style={{alignSelf:"center"}}/>:
          <ScrollView style={{flex:1,top:50}}>
              <Image source={{uri:image}} style={{width:300,height:300,alignSelf:"center",backgroundColor:'aliceblue'}} />
                <Text style={{fontSize:22,fontWeight:"bold",textAlign:"center",flexWrap:"wrap",margin:5}}>{title}</Text>
                 <Text style={{fontSize:18,textAlign:"center",flexWrap:"wrap",margin:10}}>Subtitle: {subtitle == undefined ? <Text>N.A</Text>
                  
                 :subtitle}</Text>
                  <Button mode="contained" style={{padding:5,margin:10}} onPress={goThere}>Book Preview</Button>
        </ScrollView>  
}
</View>
        <View>
            <EndStack />
        </View>
        </View>
    )
}

export default Booksdetail
