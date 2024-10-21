import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text ,TouchableOpacity} from "react-native";

const TextComponent = ({ title, navigation }) => {
    console.log(title)
  return (
      
          <Text style={[styles.text]}>{title}</Text>

    
  );
};
const styles = StyleSheet.create({
  parent: {
      flex:0.07,
      width: '90vw',
      margin: '5vw',
  },

  text: {
    color: '#fff',
    fontSize:25,
  textAlign: 'center',
  }
})
export default TextComponent;