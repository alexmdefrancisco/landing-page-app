// React import
import React from 'react'

// React Native imports
import { Button, Text, View } from 'react-native'

export default function ModalScreen({ navigation }) {

    const handleGoBack = () => navigation.goBack()

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    flex: 1,
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        elevation: 5,
                        height: '15%',
                        padding: 20,
                        shadowColor: '#000',
                        shadowOffset: {
                            height: 2,
                            width: 0
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        width: '55%'
                    }}
                >

                    <Text>
                        {'This is a modal!'}
                    </Text>
                    <Button title='Dismiss' onPress={handleGoBack} />
                </View>
            </View>
        </View>
    )
}