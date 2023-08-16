// React imports
import React from 'react'

// React Native imports
import { Text, View, StyleSheet, ScrollView } from 'react-native'

// Expo import
import { Image } from 'expo-image'

// Components imports
import DealCard from '../../components/dealCard'
import DealFinder from '../../components/dealFinder'
import NotificationButton from '../../components/notificationButton'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../../assets/background/logo.png')}
                    style={styles.logo}
                />
                <View style={styles.headerIcons}>
                    <NotificationButton count={10} iconName={'bell'}/>
                    <NotificationButton count={5} imageSource={require('../../assets/images/profile-icon.png')}/>
                </View>
            </View>
            <View style={styles.spacing}/>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer}>
                <DealFinder/>
                <View style={styles.dealSection}>
                    <Text style={styles.dealSectionText}>{'Recent Naked Deals'}</Text>
                    <DealCard/>
                    <View style={styles.bottomSpacing}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomSpacing: {
        height: 160
    },
    container: {
        alignItems: 'center',
        flex: 1
    },
    dealSection: {
        backgroundColor: '#ffffff',
        width: '100%',
        alignItems: 'center',
        marginTop: 16
    },
    dealSectionText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 24,
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 16,
        marginBottom: 16
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '6.5%',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        width: '100%'
    },
    headerIcons: {
        flexDirection: 'row',
        width: 60,
        justifyContent: 'space-between'
    },
    logo: {
        height: 24,
        width: 94
    },
    scrollContainer: {
        width: '100%'
    },
    scrollContentContainer: {
        alignItems: 'center'
    },
    spacing: {
        height: '5%'
    },
})