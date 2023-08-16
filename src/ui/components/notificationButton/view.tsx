// React imports
import React from 'react'

// React Native imports
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

// Expo imports
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons'

interface NotificationButtonProps {
    iconName?: keyof typeof Feather.glyphMap
    count: number
    imageSource?: any
    onPress?: () => void
}

export default function NotificationButton({ count, iconName, imageSource, onPress }: NotificationButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {iconName ? 
                <Feather name={iconName} size={24} color='#000000' style={styles.iconStyle}/> :
                <Image contentFit={'cover'} source={imageSource} style={styles.imageStyle}/>
            }
            <View style={styles.count}>
                <Text style={styles.text}>{count}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 28,
        width: 28
    },
    count: {
        backgroundColor: '#ff6969', 
        borderRadius: 8, 
        height: 16, 
        width: 16, 
        position: 'absolute', 
        bottom: 0, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    iconStyle: {
        position: 'absolute',
        right: 0
    },
    imageStyle: {
        position: 'absolute', 
        right: 0, 
        width: 22, 
        height: 22 
    },
    text: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '600'
    }
})