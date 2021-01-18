import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles'
import Feather from 'react-native-vector-icons/Feather'

const SectionDetail = ({flightDetail, isReturnFlight}) => {
    const price = `$${flightDetail.price}`

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1,flexDirection: 'row'}}>
                <View style={{flex: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.image} source={require('../../assests/images/americanAirlines.png')} ></Image>
                    <View>
                        <Text style={styles.airlineText}>{flightDetail.airline}</Text>
                    </View>
                </View>
                <View style={{flex: 4, justifyContent: 'center'}}>
                    {isReturnFlight ? <Text style={styles.priceText}> {price}</Text> : null}
                </View>
            </View>
            <View style={{flex: 1, paddingLeft: 20, flexDirection: 'row'}}>
                <View style={{flex: 10}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                        <Text style={styles.timeText}>{flightDetail.departureTime}</Text>
                        <View style={{paddingRight: 25}}>
                            <Text style={styles.timeText}>{flightDetail.arrivalTime}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1,  flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                        <Text style={styles.airportName}>{flightDetail.flyingFrom}</Text>
                        <View style={{paddingRight: 20}}>
                            <Text style={styles.airportName}>{flightDetail.flyingTo}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 4}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Feather name="clock" size={20}/>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text>{flightDetail.flightLength}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SectionDetail;