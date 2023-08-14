// React imports
import React from 'react'

// React Native imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ animation: 'fade', headerShown: false }}>
            <Stack.Group>
            </Stack.Group>
            <Stack.Group>
            </Stack.Group>
        </Stack.Navigator>
    )
}