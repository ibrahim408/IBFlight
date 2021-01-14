import React from 'react'
import {View, TouchableOpacity, Text, TextInput} from 'react-native'
import styles from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Calendar from './CalendarView'

const SearchBox = (props) => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.fromContainer}>   
                <IconFontAwesome name="map-marker" size={25}/>
                <TextInput
                    style={styles.textBoxStyle}
                    placeholder="From"
                    value={props.fromText}
                    onChangeText={text => props.setFromText(text)}
                />               
            </View>
            <View style={styles.toContainer}>
                <View style={styles.toSearchBox}>
                    <IconFontAwesome name="map-marker" size={25}/>
                    <TextInput
                        style={styles.textBoxStyle}
                        placeholder="To"
                        value={props.toText}
                        onChangeText={text => props.setToText(text)}
                    />
                </View>
                <IconFontAwesome5 
                    name="exchange-alt" 
                    size={25}
                    style={styles.roundTripIcon}
                />
            </View>

            <Calendar ref={props.refProp}  visible={props.visible} setVisible={props.setVisible} />

            <TouchableOpacity style={styles.searchButton}>
                <Text style={{color: 'white', fontSize: 24, fontWeight: '500'}}>Search</Text>
            </TouchableOpacity>
        </View>
    )
};
export default SearchBox;



