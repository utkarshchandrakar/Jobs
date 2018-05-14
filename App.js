import React from 'react';
import Expo, { Notifications } from 'expo';
import { StyleSheet, Text, View, Platform, Alert } from 'react-native';
import store from './store';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigationState from "./AppNavigator";
import registerForNotifications from './services/push_notifications';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class App extends React.Component{
    componentDidMount() {
       registerForNotifications();
       Notifications.addListener((notification) => {
           const { data: { text }, origin } = notification;
           if(origin === 'recieved' && text ) {
               Alert.alert(
                   'New Push Notification',
                   text,
                   [{text: 'OK.'}]
               );
           }
       });
    }

    render() {
        return(
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }
}
export default App;
