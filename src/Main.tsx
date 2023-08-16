// React imports
import React from 'react'

// React Native imports
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

// Expo imports
import { StatusBar } from 'expo-status-bar'

// Components
import RootNavigator from './ui/navigation/RootNavigator'
// import Home from './ui/screens/home'

export default function Main() {

    // const insets = useSafeAreaInsets()

    // const safeStyle = { paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, paddingTop: insets.top }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {/* <View style={[styles.container, safeStyle]}> */}
                <RootNavigator/>
                {/* <StatusBar style='auto'/>
                </View> */}
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fcf8fc',
        flex: 1
    }
})