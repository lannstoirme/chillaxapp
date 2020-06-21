import * as React from 'react';
import { Button, View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Card } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');
import ActTherapy from '../screens/ActView';
import Despair from '../screens/DespairView';
import WrongBeliefs from '../screens/WrongBeliefsView';
import Anxiety from '../screens/AnxietyView';
import Depression from '../screens/DepressionView';
import Counsellor from '../screens/CounsellorView';



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
            onPress={() => navigation.navigate(ActTherapy)}
            />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Button
            title="Go to Details"
            onPress={() => navigation.navigate(Despair)}
            />
            <Card item={articles[2]} />
            <Button
            title="Go to Details"
            onPress={() => navigation.navigate(WrongBeliefs)}
            />
          </Block>
          <Card item={articles[3]} horizontal />
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate(Anxiety)}
            />
          <Card item={articles[4]} full />
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate(Depression)}
            />
        </Block>
        <Block flex row>
          <Card item={articles[5]} style={{ marginRight: theme.SIZES.BASE }} />
          <Button
           title="Go to Details"
           onPress={() => navigation.navigate(Counsellor)} 
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
