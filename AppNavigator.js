import React from 'react';
import ReviewScreen from "./screens/ReviewScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import DeckScreen from "./screens/DeckScreen";
import {Platform} from "react-native";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import AuthScreen from "./screens/AuthScreen";
import SettingScreen from "./screens/SettingScreen";
import MapScreen from "./screens/MapScreen";



export const AppNavigator = createBottomTabNavigator({
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