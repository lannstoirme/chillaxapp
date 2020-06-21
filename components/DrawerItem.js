<script type="text/javascript">
  !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
  (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
  f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
  h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
  e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
</script>
import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import argonTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            name="shop"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Getting Started":
        return (
          <Icon
          name="spaceship"
          family="ArgonExtra"
          size={14}
          color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Meditation":
        return (
        <Icon
          name="spaceship"
          family="ArgonExtra"
          size={14}
          color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />);
      case "Resources":
        return (
        <Icon
          name="spaceship"
          family="ArgonExtra"
          size={14}
          color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />);
      case "JoeChat":
        return (
        <Icon
          name="spaceship"
          family="ArgonExtra"
          size={14}
          color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />);
      case "Activities":
        return (
        <Icon
          name="spaceship"
          family="ArgonExtra"
          size={14}
          color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />);
      case "Blog":
        return (
        <Icon
          name="spaceship"
          family="ArgonExtra"
          size={14}
          color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />);
      case "SuicideHotline":
        return (
        <Icon
            name="spaceship"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />);
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          title == "Getting Started"
            ? Linking.openURL(
                "https://demos.creative-tim.com/argon-pro-react-native/docs/"
              ).catch(err => console.error("An error occurred", err))
            : navigation.navigate(title)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
