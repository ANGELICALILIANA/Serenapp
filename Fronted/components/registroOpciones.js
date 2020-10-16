import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, Linking, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function registroOpciones(props){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('../assets/Fondohomeunoserenapp.png')} style={styles.image}>
            <View>
            <TouchableHighlight onPress={()=>{ props.navigation.navigate('Inicio')}}>
            <Image source={require('../assets/Iconoatrasazul.png')} style={styles.Cerrar}></Image>
            </TouchableHighlight>
            </View>
            <View>
                <TouchableHighlight onPress={()=>{ props.navigation.navigate('RegistroMusico')}}>
                <Image style={styles.iconoinicio} source={require('../assets/Iconomusicos.png')} />
                </TouchableHighlight>                
            </View>
            <View>
                <TouchableHighlight onPress={()=>{ props.navigation.navigate('RegistroUser')}}>
                <Image style={styles.iconoinicio} source={require('../assets/Iconousuarios.png')} />
                </TouchableHighlight>                
            </View>
            </ImageBackground>
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
    imgLogo: {
        width: 180,
        height: 180,
        marginLeft: 90,
        marginRight: 90,
        marginBottom: 10
    },
    Cerrar:{
      width: 40,
      height: 40,
      marginBottom: '20%',
      marginLeft: 5
    },
    iconoinicio: {
      width: 180,
      height: 180,
      marginLeft: 90,
      marginRight: 90,
      marginBottom: 100
    }  
  });