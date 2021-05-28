
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import firebase from "../firebase/firebase"


function Login ({history}) {
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const signIn = async () => {
      try {
          const response = await firebase.auth().signInWithEmailAndPassword(email, password);
          history.push('/');
        } catch (err) {
          setError(err.message);
      }

  }
    return (
      <View style={styles.container}>
        <Text onPress={()=>history.push("/")} style={styles.logo}> LOGIN</Text>
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
      
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}  onPress={() => signIn()} >LOGIN</Text>
        </TouchableOpacity>
      
        <TouchableOpacity>
          <Text style={styles.loginSingup} onPress={()=>history.push("/singUp")}>Signup</Text>
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

export default Login;