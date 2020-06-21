import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

 
// ...
class SuicideHotline extends Component {
  render() {
    return <WebView source={{ uri: 'http://www.suicide.org/international-suicide-hotlines.html' }} />;
  }
}

export default SuicideHotline;