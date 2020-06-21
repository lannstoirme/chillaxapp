/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 <script type="text/javascript">
  !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
  (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
  f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
  h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
  e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
</script>
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

import Header from './header';
import SwipeCards from './swipecards';

function Activities() {

  // on IOS the window draws over the stats bar
  const windowMarginTop = (Platform.OS === 'ios') ? 24 : 0;

  class ReactNativeTinderSwipe extends Component {
    render() {
      return (
        <View style={styles.viewPortContainer}>
          <Header/>
          <SwipeCards/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    viewPortContainer: {
      marginTop: windowMarginTop,
      flex: 1,
    },
  });

  AppRegistry.registerComponent('ReactNativeTinderSwipe', () => ReactNativeTinderSwipe);
}

module.exports = Activities
