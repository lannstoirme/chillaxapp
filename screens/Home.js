import * as React from 'react';
import { Button, View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as WebBrowser from 'expo-web-browser';
import { RectButton } from 'react-native-gesture-handler';//

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

//change code to WebBrowser

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Card item={articles[0]} horizontal  />
          <Button
            title="Go to Details"
            onPress={() => WebBrowser.openBrowserAsync('https://positivepsychology.com/act-acceptance-and-commitment-therapy/')}
            />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Button
            title="Go to Details"
            onPress={() => WebBrowser.openBrowserAsync('https://sites.google.com/view/chillaxapp/despair')}
            />
            <Card item={articles[2]} />
            <Button
            title="Go to Details"
            onPress={() => WebBrowser.openBrowserAsync('https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral')}
            />
          </Block>
          <Card item={articles[3]} horizontal />
          <Button
            title="Go to Details"
            onPress={() => WebBrowser.openBrowserAsync('https://www.healthline.com/health/how-to-stop-a-panic-attack')}
            />
          <Card item={articles[4]} full />
          <Button
            title="Go to Details"
            onPress={() => WebBrowser.openBrowserAsync('https://www.helpguide.org/articles/depression/coping-with-depression.htm')}
            />
        </Block>
        <Block flex row>
          <Card item={articles[5]} style={{ marginRight: theme.SIZES.BASE }} />
          <Button
           title="Go to Details"
           onPress={() => WebBrowser.openBrowserAsync('https://www.psychologytoday.com/au/blog/freudian-sip/201102/how-find-the-best-therapist-you')} 
          />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
