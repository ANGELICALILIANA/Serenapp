import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './components/inicio';

const Stack = createStackNavigator();

function inicioApp({ navigation }) {
  return (
    <Inicio navigation={navigation} />
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" headerMode="none"> 
        <Stack.Screen name="Inicio" component={inicioApp} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
