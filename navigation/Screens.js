import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import MeditationApp from "../musicsrc/MeditationApp";
import Activities from "../swiper/swiperindex";
import JoeChat from "../screens/JoeChat";
import Blog from "../screens/Blog";
import SuicideHotline from "../screens/SuicideHotline";



// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="SuicideHotline"
        component={SuicideHotline}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
    


export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function MeditationStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="MeditationApp"
        component={MeditationApp}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="MeditationApp" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      </Stack.Navigator>
  );
}

function ActivitiesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
       name="Activities"
       component={Activities}
       options={{
         header: ({ navigation, scene }) => (
          <Header title="Activities" navigation={navigation} scene={scene} />
        ),
        cardStyle: { backgroundColor: "#F8F9FE" }
       }}
       />
    </Stack.Navigator>
  );
}


function JoeChatStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
       name="JoeChat"
       component={JoeChat}
       options={{
         header: ({ navigation, scene }) => (
           <Header title="JoeChat" navigation={navigation} scene={scene} />
         ),
         cardStyle: { backgroundColor: "#F8F9FE"}
       }}
       />
    </Stack.Navigator>
  );
}

function BlogStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
       name="Blog"
       component={Blog}
       options={{
         header: ({ navigation, scene }) => (
           <Header title="Blog" navigation={navigation} scene={scene} />
         ),
         cardStyle: { backgroundColor: "#F8F9FE"}
       }}
       />
      </Stack.Navigator>
  );
}

function SuicideHotlineStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
       name={SuicideHotline}
       options={{
         header: ({ navigation, scene }) => (
           <Header title="SuicideHotline" navigation={navigation} scene={scene} />
         ),
         cardStyle: { backgroundColor: "#F8F9FE" }
       }}
       />
    </Stack.Navigator>
  );
}
    
function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="MeditationApp" component={MeditationStack} />
      <Drawer.Screen name="Activities" component={ActivitiesStack} />
      <Drawer.Screen name="JoeChat" component={JoeChatStack} />
      <Drawer.Screen name="Blog" component={BlogStack} />
      <Drawer.Screen name="SuicideHotline" component={SuicideHotlineStack} />
    </Drawer.Navigator>
  );
}

