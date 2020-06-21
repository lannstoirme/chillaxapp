import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

 
// ...
class Blog extends Component {
  render() {
    return <WebView source={{ uri: 'https://sites.google.com/view/chillaxapp/home' }} />;
  }
}

export default Blog;