import React, { useRef, useState } from 'react'
import { View, styleSheet, Text, TouchableOpacity, Alert, Platform, Animated } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Writer from './components/Writer'

const TAMANHO_CIRCULO = 100


const Circulo = ({ onPress, animatedValue }) => {
const animatedeBackground = animatedValue.interpolate({
  inputRange:[0, 0.0001, 0.5, 0.5001, 1],
  outputRange:["#F2CDAC","#F2CDAC","#F2CDAC","#8c4227","#8c4227"]
})

  const animatedText = animatedValue.interpolate({
    inputRange:[0, 0.5, 1],
    outputRange: [20, 35, 20]
  })

  const animatedColor = animatedValue.interpolate({
    inputRange:[0, 0.5, 1],
    outputRange: ["#8C4227", "#fff", "#f2CDAC"]
  })

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, styles.containerCirculo, 
                                      {backgroundColor: animatedeBackground}]}>
      <Text style={styles.titulo}>Animações em React Native</Text>
      <Writer />
      <Animated.Text
        style={{
          fontSize: animatedText,
          margin: 10
        }}
       >Frase importante</Animated.Text>
     
      <Animated.View style={[styles.circulo,{
        transform:[
          {
            rotateY: animatedValue.interpolates({
              inputRange: [0,0.5,1],
              outputRange:['0deg', '-90deg', '-180deg']
            })
          },
          {
            scale: animatedValue.interpolate({
            inputRange:[0, 0.25, 0.5, 0.75, 1],
            outputRange:[1, 5, 1]
          })}
          ]
        }]}>

        <TouchableOpacity onPress={onPress}>
          <View style={[styles.circulo]}>
            <AntDesign name="arrowright" size={28} color={"#8C4227"} />
          </View>
        </TouchableOpacity>

      </Animated.View>
    </Animated.View>
  )
}


export default function App() {
  /*useRef é um hook que retorna um objeto mutável, no qual a propriedade current é
  inicializado com o argumento passado.
  O objeto retornado persistirá durante todo o ciclo de vida do componente
  https://pt-br.reactjs.org/docs/hooks-reference.html#useref
  */

  const animatedValue = useRef(new Animated.Value(0)).current
  const[indice, setIndice] =useState(0)
  const animation = (toValue) => Animated.timing(animatedValue, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: false
  })


  const onPress = () => {
    setIndice(indice === 1 ? 0 : 1)
    animation(indice === 1 ? 0 : 1).start()
  }

  return (
    <View style={styleSheet.container}>
      <Circulo onPress={onPress} animatedValue={animatedValue}/>

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