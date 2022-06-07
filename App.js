import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import HomeScreen from './screens/Home';
import SessionScreen from './screens/Session';
import ProfileScreen from './screens/Profile';
import AppHeader from './components/AppHeader';
import Reminder from './screens/ReminderScreen';

export default class App extends React.Component{
  render(){
    return(
      
      <AppContainer/>
      
      
    )
  }
  
}

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Session: {screen: SessionScreen},
  Reminder:{screen: Reminder},
  Profile: {screen: ProfileScreen}
})

const AppContainer = createAppContainer(TabNavigator)