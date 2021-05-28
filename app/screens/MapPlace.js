import React, { useState, useEffect } from 'react'
import {View, StyleSheet, Button} from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import firebase from './../firebase/firebase'
import database from '@react-native-firebase/database';
const db = firebase.firestore();
export default function MapPlace() {
    
   
    const [mapp, setMap] = useState([])
    
   

    useEffect(() => {
        const loadData = async  () => {
            const assistances = firebase.firestore().collection('place')
            const querySnapshot = await assistances.get()
            const tempDoc = await querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() }
            })
           
            setMap(tempDoc)
    
    
    
        }
        loadData();
    },[])

    console.log(mapp);

   

    return (
        <View>
           

            <MapView
        provider = {PROVIDER_GOOGLE}
        style = {styles.map}
        initialRegion = {{
          latitude : 32.29512789087331,
          longitude : -9.233774559186537,
          latitudeDelta : 0.0222,
          longitudeDelta : 0.0121 
        }}
        >
     
            
                {
                   mapp && mapp.map(item => {
                       return (
                        <Marker  coordinate={{latitude: item.latitude , longitude: item.longitude }}
                        title="hello world" ></Marker> 
                       )
                   })
                }
            
        </MapView>
          
        </View>
    )
}


const styles = StyleSheet.create({

    map: {
      height : '100%',
      width : '100%',
    }
  });