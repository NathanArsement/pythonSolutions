import TextComponent from '../text';
import { database } from '../firebase';
import React, { useEffect, useState } from 'react';
import { getDatabase, ref , get, child} from "firebase/database";
import { View , StyleSheet, Text, Button , ScrollView} from 'react-native';


const ThirdScreen = ({ navigation }) => {
    var [buttonsData, setButtonsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(global.title)
      const dbRef = ref(database, '/main/'+global.title);
      temp=global.title.split('/')
      global.title=temp[0]+'/'
      get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          
          var val = [];
          for(keys in data){
            var elements = keys;
            val.push(elements)
          }
          setButtonsData(val);
        //   console.log(val)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
     fetchData();
  }, []);
  buttonsData.map((buttonData, index)=>{
    // console.log(buttonData)
    // console.log(index)

  });

  return (
    <View style={styles.container}>
      <ScrollView>
      {buttonsData.map((buttonData, index) => (
        
        <TextComponent key={index} title={buttonData} navigation={navigation}/>
      ))}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'top',
      backgroundColor: "green" 
    }});

export default ThirdScreen;