// Expo imports
import * as WebBrowser from 'expo-web-browser'

// Components imports
import { DataItem } from '../dealFinderItem'

export default function ViewModel() {

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

    async function handlePress(url: string) {
        return await WebBrowser.openBrowserAsync(url)
    }

    return {
        DATA,
        handlePress
    }
}