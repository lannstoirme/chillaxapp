import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

 
// ...
class Blog extends React.Component {
  render() {
    return <View><Text>Visit Our Blog</Text><Button
    title="Go to Details"
    onPress={() => WebBrowser.openBrowserAsync('https://sites.google.com/view/chillaxapp/home')} 
   />
   </View>
  }
}

export default Blog;