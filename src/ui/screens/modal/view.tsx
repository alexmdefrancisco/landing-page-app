// React import
import React from 'react'

// React Native imports
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// Types imports
import { RootStackParamList } from '../../navigation/RootNavigator'

type ModalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CustomModal'>

interface ModalScreenProps {
  navigation: ModalScreenNavigationProp
}

export default function ModalScreen({ navigation }: ModalScreenProps) {

    const handleGoBack = () => navigation.goBack()

    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>{'This is a modal!'}</Text>
                    <Button title='Dismiss' onPress={handleGoBack}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalContainer: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center'
    },
    modalContent: {
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
    }
})