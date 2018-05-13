import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import { YellowBox } from 'react-native';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingScreen';
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
                   navigationOptions: ({ navigation }) => ({
                   title: 'Review Jobs',
                   headerRight: (
                       <Button
                           title="Settings"
                           onPress={() => navigation.navigate('settings') }
                           backgroundColor="rgba(0,0,0,0)"
                           color="rgba(0,122,255,1)"
                       />
                   ),
                   headerStyle: {
                       marginTop: Platform.OS === 'android' ? 24 : 0,
                   }
                 }),
               },
               settings: {
                 screen: SettingScreen,
               }
             })
           }
         })
       }
    });
