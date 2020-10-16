import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, Linking, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function registroUsuarios(props){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../assets/Fondohomeunoserenapp.png')} style={styles.image}>      
      <View>
      <TouchableHighlight onPress={()=>{ props.navigation.navigate('OpcionesRegistro')}}>
      <Image source={require('../assets/Iconoatrasazul.png')} style={styles.Cerrar}></Image>
      </TouchableHighlight>
      </View>
      <Text style={styles.textlbl2}>Registro Usuarios</Text>
      <Text style={styles.textlbl}>Nombre de usuario</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Teléfono</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Email</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Contraseña</Text>
      <Input secureTextEntry={true}/>
      <Text style={styles.textlbl}>Confirmar Contraseña</Text>
      <Input secureTextEntry={true}/>
      <Button
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      title="Registrarse" 
      buttonStyle={{ backgroundColor: '#2B8850', 
      width: 300, 
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 8, 
      borderRadius: 20, 
      color: "white"}}></Button>      
      <Text style={styles.text}>
        ¿Ya estoy registrado?
        <Text style={styles.textLink} onPress={()=>{props.navigation.navigate('Login')}}> Iniciar Sesión</Text>
      </Text>      
      </ImageBackground>              
    </View>
    )
}

const styles = StyleSheet.create({    
    image: {
      flex: 1,
      position: "absolute",    
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%',
      height: '100%',
    },
    text: {
      color: "#000000",
      fontSize: 16,
      textAlign: "center",
      fontWeight: "bold",
      marginTop: 10    
    },
    textLink: {
      color: "#2B8850",
      fontSize: 16,
      textAlign: "center",
      fontWeight: 'bold',
      marginTop: 10    
    },
    imgLogo: {
        width: 180,
        height: 180,
        marginLeft: 90,
        marginRight: 90
    },
    textlbl: {
      color: "#2B8850",
      fontSize: 23,
      textAlign: "left",
      fontWeight: 'bold',
      marginLeft: 20
    },
    Cerrar:{
      width: 40,
      height: 40,
      marginBottom: '8%',
      marginLeft: 5
    },
    textInput:{
      borderColor: "#B4B4B4",
      width: "90%",
      fontSize: 23,      
      textAlign: "center"
    },
    textlbl2:{
      color: "#2B8850",
      fontSize: 42,
      textAlign: "center",
      fontWeight: 'bold',
      marginBottom: '10%'
    }  
  });