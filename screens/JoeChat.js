import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

 
// ...
class JoeChat extends Component {
  render() {
    return <WebView source={{ uri: 'https://guarded-dusk-82018.herokuapp.com/' }} />;
  }
}

export default JoeChat;