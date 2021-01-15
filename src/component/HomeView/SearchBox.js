import React from 'react'
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native'
import styles from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CalendarComponent from './CalendarComponent'

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

            <CalendarComponent 
                flightType={props.flightType}

                currentDate={props.currentDate}
                fromDate={props.fromDate}
                setFromDate={props.setFromDate}
                toDate={props.toDate} 
                setToDate={props.setToDate} 
                fromDateText={props.fromDateText}
                toDateText={props.toDateText} 
                maxDate={props.maxDate}
                onDayPress={props.onDayPress}
                
                visible={props.visible} 
                setVisible={props.setVisible} 
            />

            <TouchableOpacity 
                style={[styles.searchButton, props.visible ? stylesDos.searchButtonDos : null ]}
                onPress={() => props.pressButton()}
            >
                <Text style={{color: 'white', fontSize: 24, fontWeight: '500'}}>{props.buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
};

const stylesDos = StyleSheet.create({
    searchButtonDos: {
        backgroundColor: 'red',
        shadowColor: 'red', 
    }
})

export default SearchBox;



