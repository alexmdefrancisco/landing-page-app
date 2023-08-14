// React imports
import React from 'react'

// React Native imports
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

// Expo import
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons'

// Components imports
import DealCard from '../../components/dealCard'
import DealFinder from '../../components/dealFinder'

export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.header}>
                <Image 
                    source={require('../../assets/background/logo.png')}
                    style={{ height: 24, width: 94 }}
                />
                <View style={{ flexDirection: 'row', width: 60, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ height: 28, width: 28 }}>
                        <Feather name='bell' size={24} color='#000000' style={{ position: 'absolute', right: 0 }}/>
                        <View style={{ backgroundColor: '#ff6969', borderRadius: 8, height: 16, width: 16, position: 'absolute', bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: '600' }}>{'10'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 28, width: 28 }}>
                        <Image contentFit={'cover'} source={require('../../assets/images/profile-icon.png')} style={{ position: 'absolute', right: 0, width: 22, height: 22 }}/>
                        <View style={{ backgroundColor: '#ff6969', borderRadius: 8, height: 16, width: 16, position: 'absolute', bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: '600' }}>{'5'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: '5%' }}/>
            <ScrollView style={{ width: '100%' }}>
                <DealFinder/>
                <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 24, width: '100%', paddingHorizontal: 16, marginTop: 32, marginBottom: 16 }}>{'Recent Naked Deals'}</Text>
                <View style={{ width: '100%', alignItems: 'center'}}>
                    <DealCard/>
                    <View style={{ height: 160 }}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '6.5%',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        width: '100%'
    }
})