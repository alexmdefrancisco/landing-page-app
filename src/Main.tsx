// React imports
import React from 'react'

// React Native imports
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

// Components
import RootNavigator from './ui/navigation/RootNavigator'

export default function Main() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootNavigator/>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}