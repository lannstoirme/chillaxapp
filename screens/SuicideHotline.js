import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

class SuicideHotline extends Component {
  render() {
    return <View><Text>Talk to Joe</Text><Button
    title="Go to Details"
    onPress={() => WebBrowser.openBrowserAsync('http://www.suicide.org/international-suicide-hotlines.html')} 
   />
   </View>
  }
}

export default SuicideHotline;