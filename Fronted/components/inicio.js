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
                style={styles.imagenFondoEtologia}>
                <View>
                    <Image
                        style={styles.iconoetologia}
                        source={require('../assets/Iconocabezotesinmesadetrabajo.png')} />
                </View>
                <View style={styles.Descripcion}>
                <Text style={styles.texto}>
                    Serenapp
                </Text>
                </View>
                <View style={styles.Descripcion}>
                    <View style={styles.Boton}>
                        <Button
                            title="INICIAR SESIÓN"
                            titleStyle={{ color: "white", fontSize: 20 }}
                            buttonStyle={{ backgroundColor: '#2B8850', borderRadius: 25, margin: 'auto', color: "white", width: 200 }}>
                        </Button>
                        <Button
                            title="REGISTRARSE"
                            titleStyle={{ color: "white", fontSize: 20 }}
                            buttonStyle={{ backgroundColor: '#2B8850', borderRadius: 25, margin: 'auto', color: "white", width: 200 }}>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    imagenFondoEtologia: {
        position: 'absolute',
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    margenesVista: {
        flex: 1,
        justifyContent: 'center'
    },
    iconoetologia: {
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '-27%',
    },
    texto: {
        width: '90%',
        color: '#2B8850',
        fontSize: 100,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 'auto',
        marginTop: 'auto',
    },
    Descripcion: {
        paddingTop: 5,
        width: '100%',
        height: 175,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify',
        marginLeft: '5%',
    },
});