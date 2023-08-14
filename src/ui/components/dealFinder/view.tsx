// React imports
import React from 'react'

// React Native imports
import { View, Text, StyleSheet, TextInput } from 'react-native'

// Expo imports
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons'

const DATA = [
    { name: 'Booking', source: require('../../assets/images/booking.png') },
    { name: 'Expedia', source: require('../../assets/images/expedia.png') },
    { name: 'Hotels', source: require('../../assets/images/hotels.png') },
    { name: 'Priceline', source: require('../../assets/images/priceline.png') },
    { name: 'Agoda', source: require('../../assets/images/agoda.png') },
    { name: 'Airbnb', source: require('../../assets/images/airbnb.png') },
    { name: 'Marriott', source: require('../../assets/images/marriott.png') },
    { name: 'More', source: require('../../assets/images/threeDots.png') }
]

export default function DealFinder() {
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
                        <View style={{ height: 92, width: '20%', marginHorizontal: '2.5%', alignItems: 'center', marginTop: 8, marginBottom: 8 }} key={item.name}>
                            <View style={{ backgroundColor: '#f2f2f2', height: 64, width: 64, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                                <Image contentFit={'contain'} source={item.source} style={{ width: 24, height: 6 }}/>
                            </View>
                            <Text>{item.name}</Text>
                        </View>  :
                        <View style={{ height: 92, width: '20%', marginHorizontal: '2.5%', alignItems: 'center', marginTop: 8, marginBottom: 8 }} key={item.name}>
                            <View style={{ height: 64, width: 64, alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                                <Image source={item.source} style={{ width: 40, height: 40 }}/>
                            </View>
                            <Text>{item.name}</Text>
                        </View>
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