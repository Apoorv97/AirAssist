import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import MoviesAndTV from './Home'
import Music from './Boarding_Pass'
import Books from './Settings'

import SmsAndroid  from 'react-native-get-sms-android'

/**
  *SMS READING FEATURE
*/

var filter = {
    box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
    // the next 4 filters should NOT be used together, they are OR-ed so pick one
    read: 1, // 0 for unread SMS, 1 for SMS already read
    _id: 1, // specify the msg id
    address: '(990)216-3215', // sender's phone number
    body: 'Your', // content to match
    // the next 2 filters can be used for pagination
    indexFrom: 0, // start from index 0
    maxCount: 10, // count of SMS to return each time
};

SmsAndroid.list(JSON.stringify(filter), (fail) => {
        console.log("Failed with this error: " + fail)
    },
    (count, smsList) => {
        console.log('Count: ', count);
        console.log('List: ', smsList);
        var arr = JSON.parse(smsList);
        
        /*arr.forEach(function(object){
            console.log("Object: " + obj);
            console.log("-->" + obj.date);
            console.log("-->" + obj.body);
        })*/
    });


/**
 * react-navigation's TabNavigator.
 */
const App = TabNavigator({
  MoviesAndTV: { screen: MoviesAndTV },
  Music: { screen: Music },
  Books: { screen: Books }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        MoviesAndTV: {
          barBackgroundColor: '#37474F'
        },
        Music: {
          barBackgroundColor: '#00796B'
        },
        Books: {
          barBackgroundColor: '#5D4037'
        }
      }
    }
  }
})

export default App;
