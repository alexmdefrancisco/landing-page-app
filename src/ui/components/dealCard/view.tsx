// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, View } from 'react-native'

// Expo imports
import { Image } from 'expo-image'
import { MaterialIcons } from '@expo/vector-icons'

// Components imports
import DealCardButton from '../dealCardButton'

interface DealCardProps {
    onPress?: () => void
}

export default function DealCard({ onPress }: DealCardProps) {
    return (
        <View>
            <View style={[styles.container, styles.cardContainer]}/>
            <View style={[styles.container, { position: 'absolute' }]}>
                <View style={styles.imageContainer}>
                    <Image contentFit={'cover'} source={require('../../assets/images/royal-uno.jpg')} style={styles.image}/>
                    <View style={styles.savingsBadge}>
                        <Text style={styles.savingsText}>{'SAVINGS $1,128'}</Text>
                    </View>
                </View>
                <Text style={styles.titleText}>{'Royal UNO - All Inclusive Resort & Spa'}</Text>
                <View style={styles.location}>
                    <MaterialIcons color={'#666666'} name='location-on' size={16}/>
                    <Text style={styles.locationText}>{'Cancun, Mexico · 100 m from beach'}</Text>
                </View>
                <View style={styles.priceSection}>
                    <Text style={styles.strikedPrice}>{'$487'}</Text>
                    <Text style={styles.discountedPrice}>{'$299'}</Text>
                    <Text style={[styles.textNight, { marginLeft: 4 }]}>{'/'}</Text>
                    <Text style={styles.textNight}>{'night'}</Text>
                    <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{'38% OFF'}</Text>
                    </View>
                </View>
                <View style={styles.totalPriceSection}>
                    <Text style={styles.totalPrice}>{'$1,794'}</Text>
                    <Text style={styles.totalText}>{'for 6 nights'}</Text>
                    <Text style={styles.feesText}>{'(taxes & fees incl.)'}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <DealCardButton onPress={onPress}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    },
    cardContainer: {
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 8
    },
    container: {
        borderRadius: 16,
        height: 456,
        width: 360
    },
    discountBadge: {
        alignItems: 'center',
        backgroundColor: '#fff0f0',
        borderRadius: 8,
        height: 24,
        justifyContent: 'center',
        marginLeft: 12,
        width: 66
    },
    discountText: {
        color: '#ff6969',
        fontSize: 12,
        fontWeight: 'bold'
    },
    discountedPrice: {
        color: '#ff6969',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 4
    },
    feesText: {
        color: '#666666',
        fontSize: 14,
        marginLeft: 4
    },
    image: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flex: 1
    },
    imageContainer: {
        backgroundColor: 'blue',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 200
    },
    location: {
        flexDirection: 'row',
        paddingHorizontal: 16
    },
    locationText: {
        color: '#666666',
        fontSize: 14,
        marginLeft: 8
    },
    priceSection: {
        flexDirection: 'row',
        marginTop: 16,
        paddingHorizontal: 16
    },
    savingsBadge: {
        alignItems: 'center',
        backgroundColor: '#35de8e',
        borderRadius: 8,
        height: 32,
        justifyContent: 'center',
        marginLeft: 16,
        marginTop: 16,
        position: 'absolute',
        width: 136
    },
    savingsText: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    strikedPrice: {
        color: '#6d7a80',
        fontSize: 20,
        textDecorationColor: '#666666',
        textDecorationLine: 'line-through'
    },
    textNight: {
        color: '#ff6969',
        fontSize: 20
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 16,
        paddingHorizontal: 16
    },
    totalPrice: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold'
    },
    totalPriceSection: {
        flexDirection: 'row',
        marginTop: 8,
        paddingHorizontal: 16
    },
    totalText: {
        color: '#000000',
        fontSize: 14,
        marginLeft: 4
    }
})