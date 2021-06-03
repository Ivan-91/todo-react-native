import React, { useEffect } from 'react'
import {View, Text, StyleSheet, Animated} from 'react-native'

const AnimatedText = ({content}) =>{
  const animatedValues = []
  const textArr = content.trim().split(' ')
  textArr.forEach((_,i)=>{
    animatedValues[i] = new Animated.Value(0)
  })
  const animated = (toValue=1) =>{
    const animations = textArr.map((_,i)=>{
      return Animated.timing(animatedValues[i], {
        toValue,
        duration:500,
        useNativeDriver: true
      })
    })
    Animated.stagger(100, animations).start()
  }
  useEffect(() => {
    animated()
    
  }, [])
  return(
    <View style={styles.textWrapper}>
      {textArr.map((word, idx)=>{
        return(
          <Animated.Text key={`${word}-${idx}`} style={{
            
            opacity:animatedValues[idx],
            
            }}>
            {word}
            {' '}
          </Animated.Text>
        )
      })}
    </View>
  )

}

const styles = StyleSheet.create({
  textWrapper:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
})

export default AnimatedText