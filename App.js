import React from 'react'
import { View, styleSheet, Text, TouchableOpacity, Alert, Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Writer from './components/Writer'

const TAMANHO_CIRCULO = 100


const Circulo = ({ onPress }) => {
  return (
    <View style={[StyleSheet.absoluteFillobject, styles.containerCirculo]}>
      <Text style={styles.titulo}>Animações em React Native</Text>
      <Writer/>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.circulo]}>
          <AntDesign name="arrowright" size={28} color={"#8C4227"} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  const onPress = () => {
    let mensagem = "Você clicou!"
    if (Platform.OS === 'web') {
      alert(mensagem)
    } else {
      Alert.alert(
        'Aviso',
        mensagem,
        [{
          text: 'Cancelar',
          onPress: () => console.log('Pressionou o cancelar'),
          style: 'cancel'
        },
        {
          text: 'Ok',
          onPress: () => console.log('Pressionou o OK')
        }], {
        cancelable: false
      })
    }
  }

  return (
    <View style={styleSheet.container}>
      <Circulo onPress={onPress}></Circulo>

    </View>

  )
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#F2CDAC",

    alignItems: 'center'

  },
  titulo: {
    fontsize: 25,
    color: "#D99873",
    paddingTop: 20
  },
  containerCirculo: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },
  Circulo: {
    backgroundColor: "#D99873",
    width: 100,
    height: 100,
    borderRadius: TAMANHO_CIRCULO,
    justifyContent: 'center',
    alignItems: 'center'
  }

})