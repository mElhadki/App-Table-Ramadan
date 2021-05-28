import React from 'react';
import { ImageBackground,StyleSheet,Text,TouchableOpacity, View } from 'react-native';

function Home ({history}) {
    return (
        <View style={styles.container}>

<Text style={styles.home}>Home</Text>
<TouchableOpacity style={styles.btn} onPress={()=>history.push("/login")}><Text style={styles.loginText}>login</Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/singUp")}><Text style={styles.loginText}> SingUp</Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/add-aide")}><Text style={styles.loginText}>Add Futor </Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/add-place")}><Text style={styles.loginText}>Add Place </Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/map-place")}><Text style={styles.loginText}>Place list </Text></TouchableOpacity>
<TouchableOpacity  style={styles.btn} onPress={()=>history.push("/map-futor")}><Text style={styles.loginText}>Futor list </Text></TouchableOpacity>

        </View>


    )
}
const styles = StyleSheet.create({
    btn:{
      width:"65%",
      backgroundColor:"#00FFFF",
      borderRadius:10,
      height:40,
      alignItems:"center",
      justifyContent:"center",
      marginTop:60,
      marginBottom:10,
      marginLeft:66

    },
  
    loginText:{
      color:"white",
    },
})
export default Home;