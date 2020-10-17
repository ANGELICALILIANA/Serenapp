import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, Modal, Linking, TouchableHighlight, Picker} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function registroMusico(props){
  const [selectedValue, setSelectedValue] = useState("Mariachi");
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../assets/Fondohomeunoserenapp.png')} style={styles.image}>      
      {/* <View>
      <TouchableHighlight onPress={()=>{ props.navigation.navigate('OpcionesRegistro')}}>
      <Image source={require('../assets/Iconoatrasazul.png')} style={styles.Cerrar}></Image>
      </TouchableHighlight>
      </View> */}
      <Text style={styles.textlbl2}>Registro Músicos</Text>
      <Text style={styles.textlbl}>Nombre de Grupo</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Nombre de Encargado</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Género Musical</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 70, width: '90%', marginLeft: 20}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Mariachi" value="1"/>
        <Picker.Item label="Vallenato" value="2" />
        <Picker.Item label="Trio" value="3" />
        <Picker.Item label="Norteña" value="4" />
        <Picker.Item label="Llanera" value="5" />
        <Picker.Item label="Papayera" value="6" />
        <Picker.Item label="Jazz" value="7" />
        <Picker.Item label="Popular" value="8" />
        <Picker.Item label="Salsa" value="9" />
        <Picker.Item label="Rock" value="10" />
      </Picker>
      <Text style={styles.textlbl}>E-mail</Text>
      <Input style={styles.textInput}/>
      <Text style={styles.textlbl}>Teléfono</Text>
      <Input style={styles.textInput} />
      <Text style={styles.textlbl}>Contraseña</Text>
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
      marginBottom: '-2%',
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