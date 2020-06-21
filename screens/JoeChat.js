import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

class JoeChat extends React.Component {
  render() {
    return <View><Text>Talk to Joe</Text><Button
    title="Go to Details"
    onPress={() => WebBrowser.openBrowserAsync('https://guarded-dusk-82018.herokuapp.com/')} 
   />
   </View>
  }
}

export default JoeChat;