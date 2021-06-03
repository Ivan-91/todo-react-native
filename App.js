import React, {useState, useRef} from 'react';
import { SafeAreaView,
  
  ImageBackground,
  Animated,
  useWindowDimensions,
  KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Dimensions } from 'react-native';
import Time from './screens/Time';
import ToDo from './screens/ToDo';

export default function App() {
  return(
    
        <ScrollView 
          horizontal={true}
          
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          snapToInterval={Dimensions.get('screen').width} 
          contentContainerStyle={{minHeight: '100%'}}
          
        >
          <ToDo />
          <Time />

          
          </ScrollView>
        

  )
}

const styles = StyleSheet.create({
  container: {
    //flex:1,
    width:'200%',
    //alignItems: "center",
    //justifyContent: "center"
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center"
  },

});

