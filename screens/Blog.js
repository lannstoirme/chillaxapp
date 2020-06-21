<script type="text/javascript">
  !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
  (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
  f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
  h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
  e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
</script>
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