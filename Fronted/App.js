import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './components/inicio';
import Login from './components/login';
import RegistroMusico from './components/registroMusico';
import OpcionesRegistro from './components/registroOpciones';

const Stack = createStackNavigator();

function inicioApp({ navigation }) {
  return (
    <Inicio navigation={navigation} />
  );
}

function LoginScreen({ navigation }) {
  return (
    <Login navigation={navigation} />
  );
}

function RegistroMusicoScreen({ navigation }) {
  return (
    <OpcionesRegistro navigation={navigation} />

  );
}

function RegistroOpcionesScreen({ navigation }) {
  return (
    <OpcionesRegistro navigation={navigation} />

  );
}


function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" headerMode="none">
      {/* <Text>Prueba</Text>  */}
        <Stack.Screen name="Inicio" component={inicioApp} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OpcionesRegistro" component={RegistroOpcionesScreen} /> 
        <Stack.Screen name="RegistroMusico" component={RegistroMusicoScreen} /> 
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
