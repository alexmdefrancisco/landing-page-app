// React imports
import React from 'react'

// React Native imports
import { ScrollView, StyleSheet, Text, View } from 'react-native'

// Expo import
import { Image } from 'expo-image'

// Components imports
import DealCard from '../../components/dealCard'
import DealFinder from '../../components/dealFinder'
import NotificationButton from '../../components/notificationButton'

export default function HomeScreen() {
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
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
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
        backgroundColor: '#fcf8fc',
        flex: 1
    },
    dealSection: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: 16,
        width: '100%'
    },
    dealSectionText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 16,
        paddingHorizontal: 16,
        textAlign: 'left',
        width: '100%'
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
        justifyContent: 'space-between',
        width: 60
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
    }
})