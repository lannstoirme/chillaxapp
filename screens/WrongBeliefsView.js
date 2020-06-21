import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

 
// ...
class WrongBeliefs extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral' }} />;
  }
}

export default WrongBeliefs;