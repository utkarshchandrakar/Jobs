import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import { YellowBox } from 'react-native';
import ReviewScreen from './screens/ReviewScreen'
import SettingScreen from './screens/SettingScreen'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

   export default createBottomTabNavigator({
       welcome: WelcomeScreen,
       auth: AuthScreen,
       main: {
         screen: createBottomTabNavigator({
           map: MapScreen,
           deck: DeckScreen,
           review1: {
             screen: createStackNavigator({
               review: {
                 screen: ReviewScreen,
                 path: './screens/ReviewScreen',
                 navigationOptions: () => ({
                   title: 'Review Jobs',
                   headerRight: ('Settings'),
                 }),
               },
               settings: {
                 screen: SettingScreen,
                 path: './screens/SettingScreen'
               }
             })
           }
         })
       }
    });
