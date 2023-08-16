// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Expo imports
import { Image } from 'expo-image'
import { MaterialIcons } from '@expo/vector-icons'

export default function DealCard() {
    return (
        <View style={styles.container}>
            <View style={[styles.container, { backgroundColor: '#ffffff', shadowColor: '#000000', shadowOffset: { height: 1, width: 1 }, shadowOpacity: 0.3, shadowRadius: 8 }]}/>
            <View style={[styles.container, { position: 'absolute' }]}>
                <View style={{ backgroundColor: 'blue', borderTopLeftRadius: 16, borderTopRightRadius: 16, height: 200 }}>
                    <Image contentFit={'cover'} source={require('../../assets/images/royal-uno.jpg')} style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, flex: 1 }}/>
                    <View style={{ alignItems: 'center', backgroundColor: '#35de8e', borderRadius: 8, height: 32, justifyContent: 'center', marginLeft: 16, marginTop: 16, position: 'absolute', width: 136 }}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{'SAVINGS $1,128'}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 16, paddingHorizontal: 16 }}>{'Royal UNO - All Inclusive Resort & Spa'}</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                    <MaterialIcons color={'#666666'} name='location-on' size={16}/>
                    <Text style={{ color: '#666666', fontSize: 14, marginLeft: 8 }}>{'Cancun, Mexico · 100 m from beach'}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16, paddingHorizontal: 16 }}>
                    <Text style={{ color: '#6d7a80', fontSize: 20, textDecorationColor: '#666666', textDecorationLine: 'line-through' }}>{'$487'}</Text>
                    <Text style={{ color: '#ff6969', fontSize: 20, fontWeight: 'bold', marginLeft: 4 }}>{'$299'}</Text>
                    <Text style={{ color: '#ff6969', fontSize: 20, marginLeft: 4 }}>{'/'}</Text>
                    <Text style={{ color: '#ff6969', fontSize: 20 }}>{'night'}</Text>
                    <View style={{ alignItems: 'center', backgroundColor: '#fff0f0', borderRadius: 8, height: 24, justifyContent: 'center', marginLeft: 12, width: 66 }}>
                        <Text style={{ color: '#ff6969', fontSize: 12, fontWeight: 'bold' }}>{'38% OFF'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 8, paddingHorizontal: 16 }}>
                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>{'$1,794'}</Text>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 4 }}>{'for 6 nights'}</Text>
                    <Text style={{ color: '#666666', fontSize: 14, marginLeft: 4 }}>{'(taxes & fees incl.)'}</Text>
                </View>
                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#43b3fd', borderRadius: 8, flexDirection: 'row', height: 48, justifyContent: 'center', marginBottom: 16, width: 328 }}>
                        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700' }}>{'View Deal'}</Text>
                        <MaterialIcons color='#ffffff' name='arrow-forward-ios' size={16} style={{ marginLeft: 8 }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        height: 456,
        width: 360
    }
})