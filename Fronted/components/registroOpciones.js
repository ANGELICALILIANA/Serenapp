import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, Linking, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function registroOpciones(props){
    return(
        <View>

        </View>
    );
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
        marginRight: 90,
        marginBottom: 10
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
      marginBottom: '10%',
      marginLeft: 5
    },
    textInput:{
      borderColor: "#B4B4B4",
      width: "90%",
      margin: 10,
      fontSize: 23,      
      textAlign: "center"
    }  
  });