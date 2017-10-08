import React, { Component } from 'react'
import { View, Text } from 'react-native'
//import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Books extends Component {
  static navigationOptions = {
    tabBarLabel: "Settings",
    tabBarIcon: () => <Icon size={24} name="settings" color="white" />
  }

  render() {
    return <View><Text>Settings</Text></View>
  }
}
