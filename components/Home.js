import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
//import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'


const BACON_IPSUM = 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const FIRST = () => {
  return(
    <Card>
      {/* <CardImage source={{uri: 'http://placehold.it/480x270'}} title="Above all i am here"/> */}
      <CardTitle title="This is title" subtitle="This is sub title"/>
      <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile"/>
      <CardAction seperator={true} inColumn={false}>
        <CardButton
          onPress={() => {}}
          title="Push"
          color='blue'
        />
        <CardButton
          onPress={() => {}}
          title="Later"
          color='blue'
        />
      </CardAction>
    </Card>
  );
}

const CONTENT = [
  {
    title: 'First',
    content: FIRST(),
  },
  {
    title: 'Second',
    content: FIRST(),
  },
  {
    title: 'Third',
    content: FIRST(),
  },
  {
    title: 'Fourth',
    content: FIRST(),
  },
  {
    title: 'Fifth',
    content: FIRST(),
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
    value: false,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    paddingTop : 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

export default class MoviesAndTV extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => <Icon size={24} name="home" color="white" />
  }

  state = {
  activeSection: false,
  collapsed: true,
};

  _toggleExpanded = () => {
  this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
  this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
  return (
    <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
      <Text style={styles.headerText}>{section.title}</Text>
    </Animatable.View>
  );
  }

  _renderContent(section, i, isActive) {
  return (
    <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
      {section.content}
      {/* <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text> */}
    </Animatable.View>
  );
  }

  // render() {
  //   return <View><Text>Home</Text></View>
  // }
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>Your Progress</Text>

        {/* <View style={styles.selectors}>
          <Text style={styles.selectTitle}>Select:</Text>
          {SELECTORS.map(selector => (
            <TouchableHighlight key={selector.title} onPress={this._setSection.bind(this, selector.value)}>
              <View style={styles.selector}>
                <Text style={selector.value === this.state.activeSection && styles.activeSelector}>
                  {selector.title}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View> */}

        {/* item 1 */}
        {/* <TouchableHighlight onPress={this._toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Single Collapsible</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.content}>
            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
          </View>
        </Collapsible> */}


        <Accordion
          activeSection={this.state.activeSection}
          sections={CONTENT}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._setSection.bind(this)}
        />

      </View>
    );
  }
}
