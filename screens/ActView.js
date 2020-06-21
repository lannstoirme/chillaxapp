import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

 
// ...
class ActTherapy extends Component {
  render() {
    return <WebView source={{ uri: 'https://positivepsychology.com/act-acceptance-and-commitment-therapy/' }} />;
  }
}

export default ActTherapy;