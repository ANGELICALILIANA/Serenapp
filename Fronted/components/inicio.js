import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';

export default function inicio(props) {
    return (
        <View
            style={styles.margenesVista}>
            <ImageBackground
                source={require('../assets/Fondohomeunoserenapp.png')}
                style={styles.imagenFondoInicio}>
                <View>
                    <Image
                        style={styles.iconoinicio}
                        source={require('../assets/iconohomeunotransparente.png')} />
                </View>
                <View style={styles.Descripcion}>
                    <View style={styles.Boton}>
                        <Button
                            title="INICIAR SESIÓN"
                            titleStyle={{ color: "white", fontSize: 20 }}
                            buttonStyle={{ backgroundColor: '#2B8850', borderRadius: 25, marginLeft: 'auto', marginRight: 'auto', color: "white", width: 200, marginBottom: 10 }}>
                        </Button>
                        <Button
                            title="REGISTRARSE"
                            titleStyle={{ color: "white", fontSize: 20 }}
                            buttonStyle={{ backgroundColor: '#2B8850', borderRadius: 25, marginLeft: 'auto', marginRight: 'auto', color: "white", width: 200 }}>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imagenFondoInicio: {
        position: 'absolute',
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    margenesVista: {
        flex: 1,
        justifyContent: 'center'
    },
    iconoinicio: {
        width: 180,
        height: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '-27%',
    },
    texto: {
        width: '90%',
        color: '#2B8850',
        fontSize: 40,
        flex: 1,
        textAlign: 'center'
    },
    Descripcion: {
        paddingTop: 5,
        width: '100%',
        height: 175,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
});