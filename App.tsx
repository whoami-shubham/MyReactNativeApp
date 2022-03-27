/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Text,
  View,
} from 'react-native';

const App: () => JSX.Element = () => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{color:"blue",fontSize:30}}>{"Hello World !"}</Text>
    </View>
  )
};



export default App;
