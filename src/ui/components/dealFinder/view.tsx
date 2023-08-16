// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

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
            key={item.name}
            style={styles.itemContainer}
            onPress={onPress}
        >
            <View style={isMore ? [styles.imageContainer, { backgroundColor: '#f2f2f2', borderRadius: 8 }] : styles.imageContainer}>
                <Image
                    contentFit={isMore ? 'contain' : 'cover'}
                    source={item.source}
                    style={isMore ? { height: 6, width: 24 } : styles.image}
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
                <Feather name='search' style={styles.searchIcon}/>
                <TextInput placeholder={'Search Hotel'} style={styles.textInput}/>
            </View>
            <View style={styles.dataContainer}>
                {DATA.map(item => <DealFinderItem item={item} key={item.name} onPress={async() => handlePress(item.url)}/> )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 360
    },
    dataContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
        width: '100%'
    },
    image: {
        height: 40,
        width: 40
    },
    imageContainer: {
        alignItems: 'center',
        height: 64,
        justifyContent: 'center',
        marginBottom: 8,
        width: 64
    },
    itemContainer: {
        alignItems: 'center',
        height: 92,
        marginBottom: 8,
        marginHorizontal: '2.5%',
        marginTop: 8,
        width: '20%'
    },
    searchBar: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        flexDirection: 'row',
        height: 48,
        justifyContent: 'flex-start',
        marginTop: 16,
        paddingHorizontal: 16,
        width: '100%'
    },
    searchIcon: {
        color: '#43b3fd',
        fontSize: 18
    },
    textInput: {
        fontSize: 16,
        height: 24,
        marginLeft: 16
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})