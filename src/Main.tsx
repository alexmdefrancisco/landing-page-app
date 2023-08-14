// React imports
import React from 'react'

// React Native imports
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Expo imports
import { StatusBar } from 'expo-status-bar'

// Components
import Home from './ui/screens/home'

export default function Main() {

    const insets = useSafeAreaInsets()

    const safeStyle = { paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, paddingTop: insets.top }

    return (
          <View style={[styles.container, safeStyle]}>
            <Home/>
            <StatusBar style='auto'/>
          </View>
      )
    }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcf8fc'
    }
})