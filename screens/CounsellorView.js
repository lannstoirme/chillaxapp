import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

 
// ...
class Counsellor extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.psychologytoday.com/au/blog/freudian-sip/201102/how-find-the-best-therapist-you' }} />;
  }
}

export default Counsellor;