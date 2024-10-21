import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text } from "react-native";

const ButtonComponent = ({ title }) => {
  return (
    <View style={styles.parent}>
      <Button 
        title={title} 
        onPress={()=>props.navigation.navigate("problems") }
        style={styles.button}
        />
    </View>
    
  );
};
const styles = StyleSheet.create({
  parent: {
      width: '90vw',
      margin: '5vw',
  },
  button: {
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      elevation:3,
  },
  text: {
      fontSize: 16,
      fontWeight: 'bold',
  }
})
export default ButtonComponent;