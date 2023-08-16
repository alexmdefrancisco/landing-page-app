// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, TextInput, View } from 'react-native'

// Expo imports
import { Feather } from '@expo/vector-icons'

// View Model imports
import useViewModel from './viewModel'

// Components imports
import DealFinderItem from '../dealFinderItem'

export default function DealFinder() {

    const viewModel = useViewModel()

    const DATA = viewModel.DATA
    const handlePress = viewModel.handlePress

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{'Find Naked Prices'}</Text>
            <View style={styles.searchBar}>
                <Feather name='search' style={styles.searchIcon}/>
                <TextInput placeholder={'Search Hotel'} style={styles.textInput}/>
            </View>
            <View style={styles.dataContainer}>
                {DATA.map(item => <DealFinderItem item={item} key={item.name} onPress={async() => handlePress(item.url)}/>)}
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