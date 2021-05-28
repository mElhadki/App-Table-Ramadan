import React, {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Home from './app/screens/Home'
import Login from './app/screens/Login'
import SingUp from './app/screens/SingUp'
import Aide from './app/screens/AddAide'
import AddPlace from './app/screens/AddPlace'
import AddAide from './app/screens/AddAide'
import MapPlace from './app/screens/MapPlace'
import MapFutor from './app/screens/MapFutor'

 function HomeScreen() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/singUp' component={SingUp} />
        <Route exact path='/aide' component={Aide} />
        <Route exact path='/map-place' component={MapPlace} />
        <Route exact path='/map-futor' component={MapFutor} />
        <Route exact path='/add-place' component={AddPlace} />
        <Route exact path='/add-aide' component={AddAide} />

      </Switch>
    </NativeRouter>
  );
}
export default HomeScreen
