import React from 'react'
import {View, StyleSheet} from 'react-native'
import AnimatedText from './AnimatedText'

const Task = ({text}) => {
    return(
        <View style={styles.item}>
            <AnimatedText content={text}/>
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
});

export default Task