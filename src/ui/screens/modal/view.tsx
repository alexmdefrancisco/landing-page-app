// React import
import React from 'react'

// React Native imports
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Types imports
import { RootStackParamList } from '../../navigation/RootNavigator'

type ModalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Modal'>

interface ModalScreenProps {
  navigation: ModalScreenNavigationProp
}

export default function ModalScreen({ navigation }: ModalScreenProps) {

    const handleGoBack = () => navigation.goBack()

    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.text}>{'When pressed, a modal with information should appear. As per this example.'}</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleGoBack}>
                    <Text style={styles.buttonText}>{'Dismiss'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#43b3fd',
        borderRadius: 16,
        marginTop: 8,
        paddingHorizontal: 20,
        paddingVertical: 2
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modalContainer: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center'
    },
    modalContent: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        height: '15%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '55%'
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'justify'
    }
})