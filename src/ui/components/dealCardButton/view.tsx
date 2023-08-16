// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// Expo imports
import { MaterialIcons } from '@expo/vector-icons'

interface DealCardButtonProps {
    onPress?: () => void
}

export default function DealCardButton({ onPress }: DealCardButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{'View Deal'}</Text>
            <MaterialIcons name={'arrow-forward-ios'} size={16} style={styles.icon}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#43b3fd',
        borderRadius: 8,
        flexDirection: 'row',
        height: 48,
        justifyContent: 'center',
        marginBottom: 16,
        width: 328
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700'
    },
    icon: {
        color: '#ffffff',
        marginLeft: 8
    }
})