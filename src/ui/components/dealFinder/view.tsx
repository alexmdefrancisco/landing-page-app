// React imports
import React from 'react'

// React Native imports
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

// Expo imports
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'

interface DataItem {
    name: string
    source: any
    url: string
}

const DATA: DataItem[] = [
    { name: 'Booking', source: require('../../assets/images/booking.png'), url: 'https://www.booking.com/' },
    { name: 'Expedia', source: require('../../assets/images/expedia.png'), url: 'https://www.expedia.com/' },
    { name: 'Hotels', source: require('../../assets/images/hotels.png'), url: 'https://www.hotels.com/' },
    { name: 'Priceline', source: require('../../assets/images/priceline.png'), url: 'https://www.priceline.com/' },
    { name: 'Agoda', source: require('../../assets/images/agoda.png'), url: 'https://www.agoda.com/' },
    { name: 'Airbnb', source: require('../../assets/images/airbnb.png'), url: 'https://www.airbnb.com/' },
    { name: 'Marriott', source: require('../../assets/images/marriott.png'), url: 'https://www.marriott.com/' },
    { name: 'More', source: require('../../assets/images/threeDots.png'), url: 'https://www.google.com/' }
]

function DealFinderItem({ item, onPress }: { item: DataItem, onPress: () => void }) {

    const isMore = item.name === 'More'

    return (
        <TouchableOpacity 
            style={styles.itemContainer} 
            key={item.name} 
            onPress={onPress}
        >
            <View style={isMore ? [styles.imageContainer, { backgroundColor: '#f2f2f2', borderRadius: 8 }] : styles.imageContainer}>
                <Image 
                    contentFit={isMore ? 'contain' : 'cover'} 
                    source={item.source} 
                    style={isMore ? { width: 24, height: 6 } : styles.image}
                />
            </View>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default function DealFinder() {

    async function handlePress(url: string) { return await WebBrowser.openBrowserAsync(url) }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{'Find Naked Prices'}</Text>
            <View style={styles.searchBar}>
                <Feather name="search" style={styles.searchIcon}/>
                <TextInput style={styles.textInput} placeholder={'Search Hotel'}/>
            </View>
            <View style={styles.dataContainer}> 
                {DATA.map(item => <DealFinderItem key={item.name} item={item} onPress={async() => handlePress(item.url)}/> )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 36
    },
    searchBar: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        flexDirection: 'row',
        marginTop: 16
    },
    searchIcon: {
        fontSize: 18,
        color: '#43b3fd'
    },
    textInput: {
        height: 24,
        marginLeft: 16,
        fontSize: 16
    },
    dataContainer: {
        backgroundColor: '#ffffff',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 8,
        marginTop: 16
    },
    itemContainer: {
        height: 92,
        width: '20%',
        marginHorizontal: '2.5%',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8
    },
    imageContainer: {
        height: 64,
        width: 64,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },
    image: {
        width: 40,
        height: 40
    }
})