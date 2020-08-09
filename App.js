
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStories from './screens/writeStories';
import ReadStories from './screens/ReadStories';

export default class App extends React.Component{
  render(){
    return(
<View>
<AppContainer/>
</View>
    );
  }
}
const bottomTabNavigator = createBottomTabNavigator({
  read: {screen: ReadStories},
  write:{ screen: WriteStories}
});
const AppContainer = createAppContainer(bottomTabNavigator);
