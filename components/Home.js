import React, { Component } from 'react'
import { View, Text } from 'react-native'
//import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class MoviesAndTV extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => <Icon size={24} name="home" color="white" />
  }

  render() {
    return <View><Text>Home</Text></View>
  }
}
