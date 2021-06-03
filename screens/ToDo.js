import React, {useState} from 'react';
import { 
  KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Dimensions } from 'react-native';
import Task from '../components/Task';

export default function ToDo() {
  
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={!!task ? () => handleAddTask() : null}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Send</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width, 
    height: Dimensions.get('screen').height,
    flex: 1,    
    backgroundColor: '#fafafa',
  },
  tasksWrapper: {
    paddingTop: 140,
    paddingHorizontal: 20,
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
    
  },
  writeTaskWrapper: {
    position: 'absolute',
    top: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 15,
    paddingRight: 15
    //alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 290,
    height: 90
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

const stylesMy = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  taskWrapper:{
    paddingTop: 120,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight:'bold'
  },
  items:{
    marginTop: 60
  },
  writeTaskWrapper:{
    position:'absolute',
    top:60,
    width:100,
    flexDirection:'row',
    justifyContent:'space-between',
    

  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal:10,
    backgroundColor: '#FFF',
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:280,
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    

    
  },
  addWrapper:{
    backgroundColor:'#FFF',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
    borderRadius: 10,
    

  },
  addText:{},
  text:{
    
  }
});