// React imports
import React from 'react'

// React Native imports
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

// Expo imports
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'

const DATA = [
    { name: 'Booking', source: require('../../assets/images/booking.png'), url: 'https://www.booking.com/' },
    { name: 'Expedia', source: require('../../assets/images/expedia.png'), url: 'https://www.expedia.com/' },
    { name: 'Hotels', source: require('../../assets/images/hotels.png'), url: 'https://www.hotels.com/' },
    { name: 'Priceline', source: require('../../assets/images/priceline.png'), url: 'https://www.priceline.com/' },
    { name: 'Agoda', source: require('../../assets/images/agoda.png'), url: 'https://www.agoda.com/' },
    { name: 'Airbnb', source: require('../../assets/images/airbnb.png'), url: 'https://www.airbnb.com/' },
    { name: 'Marriott', source: require('../../assets/images/marriott.png'), url: 'https://www.marriott.com/' },
    { name: 'More', source: require('../../assets/images/threeDots.png'), url: 'https://www.google.com/' }
]

export default function DealFinder() {

    async function handlePress(url: string) { return await WebBrowser.openBrowserAsync(url) }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 36 }}>{'Find Naked Prices'}</Text>
            <View style={{ backgroundColor: '#ffffff', width: '100%', height: 48, borderRadius: 8, alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 16, flexDirection: 'row', marginTop: 16 }}>
                <Feather name="search" size={18} color='#43b3fd'/>
                <TextInput style={{ height: 24, marginLeft: 16, fontSize: 16 }} placeholder={'Search Hotel'}/>
            </View>
            <View style={{ backgroundColor: '#ffffff', width: '100%', flexDirection: 'row', flexWrap: 'wrap', borderRadius: 8, marginTop: 16 }}>
                {DATA.map(item => (
                    item.name === 'More' ? 
                        <TouchableOpacity style={{ height: 92, width: '20%', marginHorizontal: '2.5%', alignItems: 'center', marginTop: 8, marginBottom: 8 }} key={item.name} onPress={async() => handlePress(item.url)}>
                            <View style={{ backgroundColor: '#f2f2f2', height: 64, width: 64, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                                <Image contentFit={'contain'} source={item.source} style={{ width: 24, height: 6 }}/>
                            </View>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>  :
                        <TouchableOpacity style={{ height: 92, width: '20%', marginHorizontal: '2.5%', alignItems: 'center', marginTop: 8, marginBottom: 8 }} key={item.name} onPress={async() => handlePress(item.url)}>
                            <View style={{ height: 64, width: 64, alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                                <Image source={item.source} style={{ width: 40, height: 40 }}/>
                            </View>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        alignItems: 'center'
    }
})