import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from 'react-native';

const Time = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    
    let hours = new Date().getHours(); 
    let min = new Date().getMinutes(); 
    let sec = new Date().getSeconds(); 
    const interval = setInterval(() => {
      setCurrentDate(
        (hours<10 ? '0'+hours : hours) + ':' + (min<10 ? '0'+min : min) + ':' + (sec<10 ? '0'+sec : sec)
      );
    }, 1000);
    return ()=> clearInterval(interval)
  }, [currentDate]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        
          
          <Text style={styles.textStyle}>{currentDate}</Text>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width, 
    height: Dimensions.get('screen').height,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 33,
    color: 'black',
  },
});

export default Time;