import React from 'react';
import {View, FlatList} from 'react-native'
import styles from './styles'
import FlightCard from './FlightCard'
import {Colors} from '../../styles'
import LinearGradient from 'react-native-linear-gradient';


const DetailView = (props) => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={[Colors.GREEN, Colors.GREENBLUEMIX, Colors.BLUE]} style={styles.svgBackground} />
            <FlatList 
                data={props.flights}
                renderItem={({item}) =>  <FlightCard flightDetail={item} />}
            />
        </View>
    )
}

export default DetailView;