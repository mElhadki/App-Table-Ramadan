
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from "../firebase/firebase"

const db = firebase.firestore();


export default function AddAide (props) {
  
    const [description, setDescription] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const submitPlace = () => {
        try{
           if(db){
             db.collection('futor').add({
               description: description,
               latitude: Number(latitude),
               longitude: Number(longitude)
             })

             props.history.push('/map-futor')
           }
        }catch(err){
          console.log(err);
        }
    }


    return (
      <View style={styles.container}>
        <Text style={styles.logo} onPress={()=>history.push("/")}>Add Futor</Text>
        <View style={styles.inputView} >
        <TextInput
        onChangeText={setDescription}
        value={description}
      style={styles.inputDescription}
      placeholder="Description..." 
      placeholderTextColor="#003f5c"

    />
    
        </View>
        <View style={styles.inputView} >
          <TextInput  
          onChangeText={setLatitude}
          value={latitude}
            style={styles.inputText}
            placeholder="latitude..." 
            placeholderTextColor="#003f5c"
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
          onChangeText={setLongitude}
          value={longitude}
            style={styles.inputText}
            placeholder="longitude..." 
            placeholderTextColor="#003f5c"
           />
        </View>
       
       
      
        <TouchableOpacity style={styles.loginBtn}
                onPress={() => {submitPlace()}}>
          <Text style={styles.loginText}>Add </Text>
        </TouchableOpacity>
      
      
  
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#00FFFF",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#00FFFF",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white",
  },
  loginSingup:{
    marginTop:15
  },
  inputDescription:{
height:150,
// backgroundColor:"black"
  }
});

