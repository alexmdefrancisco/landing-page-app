// React imports
import React from 'react'

// React Native imports
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

// Expo imports
import { Image } from 'expo-image'
import { MaterialIcons } from '@expo/vector-icons'

export default function DealCard() {
    return (
        <View style={styles.container}>
            <View style={[styles.container, { backgroundColor: '#ffffff', shadowRadius: 8, shadowOpacity: 0.3, shadowColor: '#000000', shadowOffset: { width: 1, height: 1 } }]}/>
            <View style={[styles.container, { position: 'absolute' }]}>
                <View style={{ height: 200, backgroundColor: 'blue', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                    <Image contentFit={'cover'} source={require('../../assets/images/royal-uno.jpg')} style={{ flex: 1, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}/>
                    <View style={{ backgroundColor: '#35de8e', height: 32, width: 136, position: 'absolute', borderRadius: 8, marginLeft: 16, marginTop: 16, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{'SAVINGS $1,128'}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal: 16, marginVertical: 16 }}>{'Royal UNO - All Inclusive Resort & Spa'}</Text>
                <View style={{ paddingHorizontal: 16, flexDirection: 'row' }}>
                    <MaterialIcons name='location-on' size={16} color={'#666666'}/>
                    <Text style={{ marginLeft: 8, fontSize: 14, color: '#666666' }}>{'Cancun, Mexico · 100 m from beach'}</Text>
                </View>
                <View style={{ paddingHorizontal: 16, flexDirection: 'row', marginTop: 16 }}>
                    <Text style={{ fontSize: 20, color: '#6d7a80', textDecorationLine: 'line-through', textDecorationColor: '#666666' }}>{'$487'}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 4, color: '#ff6969' }}>{'$299'}</Text>
                    <Text style={{ fontSize: 20, marginLeft: 4, color: '#ff6969' }}>{'/'}</Text>
                    <Text style={{ fontSize: 20, color: '#ff6969' }}>{'night'}</Text>
                    <View style={{ backgroundColor: '#fff0f0', height: 24, width: 66, borderRadius: 8, marginLeft: 12, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#ff6969', fontWeight: 'bold', fontSize: 12 }}>{'38% OFF'}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 16, flexDirection: 'row', marginTop: 8 }}>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold' }}>{'$1,794'}</Text>
                    <Text style={{ fontSize: 14, marginLeft: 4, color: '#000000' }}>{'for 6 nights'}</Text>
                    <Text style={{ fontSize: 14, marginLeft: 4, color: '#666666' }}>{'(taxes & fees incl.)'}</Text>
                </View>
                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ backgroundColor: '#43b3fd', height: 48, width: 328, alignItems: 'center', justifyContent: 'center', borderRadius: 8, flexDirection: 'row', marginBottom: 16 }}>
                        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700' }}>{'View Deal'}</Text>
                        <MaterialIcons name="arrow-forward-ios" size={16} color='#ffffff' style={{ marginLeft: 8 }}/>
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