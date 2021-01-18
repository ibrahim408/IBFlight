import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'
import SectionDetail from './SectionDetail'

const FlightCard = ({flightDetail}) => {
    let goingFlight = flightDetail.going;
    goingFlight.price = flightDetail.price;
    goingFlight.airline = flightDetail.airline;

    let returnFlight = flightDetail.returning;
    returnFlight.price = flightDetail.price;
    returnFlight.airline = flightDetail.airline;

    return (
        <LinearGradient colors={['#e5e5e5', '#f5f5f5', '#FFFFFF']} style={styles.cardContainer}>
            <View style={styles.goingContainer}>
                <SectionDetail flightDetail={goingFlight} isReturnFlight={true}  />
            </View>
            <View style={styles.returningContainer}>
                <SectionDetail flightDetail={returnFlight} isReturnFlight={false} />
            </View>
        </LinearGradient>
    )
}

export default FlightCard;


{/* <View style={{flexDirection: 'row'}}>
<Text>6:00 am</Text>
<Text>9:21 pm</Text>
</View> */}