import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


class Depression extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.helpguide.org/articles/depression/coping-with-depression.htm'}} />;
  }
}

export default Depression;