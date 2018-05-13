import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, Platform } from 'react-native';
import store from './store';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigationState from "./AppNavigator";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class App extends React.Component{
    render() {
        return(
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }
}
export default App;
