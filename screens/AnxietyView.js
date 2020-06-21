import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

 
// ...
class Anxiety extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.healthline.com/health/how-to-stop-a-panic-attack' }} />;
  }
}

export default Anxiety;