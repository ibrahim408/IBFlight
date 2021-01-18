import React from 'react';
import {View, FlatList} from 'react-native'
import styles from './styles'
import FlightCard from './FlightCard'



const DetailView = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={props.flights}
                renderItem={({item}) =>  <FlightCard flightDetail={item} />}
            />
        </View>
    )
}

export default DetailView;