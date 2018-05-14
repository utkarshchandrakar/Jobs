import React from 'react';
import ReviewScreen from "./screens/ReviewScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import DeckScreen from "./screens/DeckScreen";
import { Platform } from "react-native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import AuthScreen from "./screens/AuthScreen";
import SettingScreen from "./screens/SettingScreen";
import MapScreen from "./screens/MapScreen";
import { Button, Icon } from 'react-native-elements';


export const AppNavigator = createBottomTabNavigator({
    welcome: WelcomeScreen,
    auth: AuthScreen,
    main: {
        screen: createBottomTabNavigator({
            map: {
                screen: MapScreen,
                navigationOptions: {
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ tintColor, focused }) => {
                        return (
                            <Icon name="my-location" size={30} color={tintColor}/>
                        );
                    },
                }
            },
            deck: {
                screen: DeckScreen,
                navigationOptions: {
                    tabBarLabel: 'Deck',
                    tabBarIcon: ({ tintColor, focused }) => {
                        return (
                            <Icon name="description" size={30} color={tintColor}/>
                        );
                    },
                }
            },
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
                        navigationOptions: ({ navigation }) => {
                            header: {
                                style: {
                                    marginTop: Platform.OS === 'android' ? 24 : 0
                                }
                            }
                        }
                    }
                }),
                navigationOptions: {
                    tabBarLabel: 'Review',
                    tabBarIcon: ({ tintColor, focused }) => {
                        return (
                            <Icon name="favorite" size={30} color={tintColor}/>
                        );
                    },
                }
            }
        },{
            tabBarOptions: {
                labelStyle: { fontSize: 12 }
            }
        })
    }
},{
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: false
    }),
    lazy: true
});

class AppWithNavigationState extends React.Component{
    render() {
        return(
            <AppNavigator/>
        );
    }
}
export default AppWithNavigationState;