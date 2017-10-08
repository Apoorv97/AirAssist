import React, { Component } from 'react'
import { View, Text } from 'react-native'
//import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Music extends Component {
  static navigationOptions = {
    tabBarLabel: "Boarding Pass",
    tabBarIcon: () => <Icon size={24} name="airline-seat-flat" color="white" />
  }

  render() {
    return <View><Text>Boarding Pass</Text></View>
  }
}
