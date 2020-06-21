<script type="text/javascript">
  !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
  (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
  f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
  h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
  e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
</script>
'use strict';
import React, {
  StyleSheet,
  Component,
  Text,
  View,
} from 'react-native';

class Header extends Component {
    constructor(props) {
      super(props); 
    }

    render() {

      return (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Swipe Me!</Text>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'black',
      flexDirection: 'row',
      padding: 10,
    },
    headerTitle: {
      flex: 1,
      color: 'white',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: '700',
    },
  });

module.exports = Header