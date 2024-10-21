
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text ,TouchableOpacity} from "react-native";

const ButtonComponent = ({ title, navigation }) => {
  return (
      <TouchableOpacity 
        onPress={()=>{
          navigation.navigate("Problems");
          global.title={title}}}
        style={styles.button}
        underlayColor='#fff'>
          <Text style={[styles.text]}>{title}</Text>
          </TouchableOpacity>
    
  );
};
const styles = StyleSheet.create({
  button: {
    marginRight: '5%',
  marginLeft: '5%',
  marginTop: '5%',
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: '#68a0cf',
  borderRadius: 15,
  borderWidth: 2.5,
  borderColor: '#fff',
  overflow: 'hidden'  
  },
  text: {
    color: '#fff',
    fontSize:25,
  textAlign: 'center',
  }
})
export default ButtonComponent;