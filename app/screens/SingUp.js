
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from "../firebase/firebase"

const db = firebase.firestore();

export default function  singUp ({history}) {

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitPlace = async () => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        history.push('/login')
    } catch (err) {
        setError(err.message);
    }
    const db = firebase.firestore();

    if(db){
      db.collection('singUp').add({
        firstName: firstname,
        lastName:lastname ,
        email:email ,
        password:password
      })
     

    }

}
 
    return (
      <View style={styles.container}>
        <Text style={styles.logo} onPress={()=>history.push("/")}>SingUp</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="FirstName..." 
            placeholderTextColor="#003f5c"
            value={firstname}
            onChangeText={setFirstname}
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="lastName..." 
            placeholderTextColor="#003f5c"
            value={lastname}
            onChangeText={setLastname}
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText={setPassword}
            />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
    
   
        <TouchableOpacity style={styles.loginBtn}
                onPress={() => {submitPlace()}}>
          <Text style={styles.loginText}>SingUp </Text>
        </TouchableOpacity>
      
        <TouchableOpacity>
          <Text style={styles.loginSingup} onPress={()=>history.push("/login")}>Login</Text>
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
  }
});

