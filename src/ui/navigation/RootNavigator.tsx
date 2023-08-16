// React imports
import React from 'react'

// React Native imports
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Expo imports
import { StatusBar } from 'expo-status-bar'

// Screen imports
import HomeScreen from '../screens/home'
import ModalScreen from '../screens/modal'

export type RootStackParamList = {
    Home: undefined
    CustomModal: undefined
}

const Stack = createNativeStackNavigator()

export default function RootNavigator() {

    const insets = useSafeAreaInsets()

    const safeStyle = { paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, paddingTop: insets.top }

    return (
        <View style={[styles.container, safeStyle]}>
            <Stack.Navigator screenOptions={{ animation: 'fade', headerShown: false }}>
                <Stack.Group>
                    <Stack.Screen component={HomeScreen} name='Home'/>
                </Stack.Group>
                <Stack.Group screenOptions={{ contentStyle: { backgroundColor: '#00000050' }, presentation: 'transparentModal' }}>
                    <Stack.Screen component={ModalScreen} name='CustomModal'/>
                </Stack.Group>
            </Stack.Navigator>
            <StatusBar style={'auto'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fcf8fc',
        flex: 1
    }
})