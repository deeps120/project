import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStories extends React.Component{
  render(){
    return(

<Text style={styles.text}>read stories!</Text>

    );
  }
}
const styles = StyleSheet.create({
 text:{
     color:'black',
     textAlign:'center',
     fontSize:20,
     fontStyle:'oblique'
 }
});
