// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Expo imports
import { Image } from 'expo-image'

export interface DataItem {
    name: string
    source: any
    url: string
}

export default function DealFinderItem({ item, onPress }: { item: DataItem, onPress: () => void }) {

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

const styles = StyleSheet.create({
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
    }
})