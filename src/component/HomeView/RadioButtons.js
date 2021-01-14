import React from 'react'
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import styles from './styles';


const RadioButtons = (props) => {
    return (
        <View style={styles.radioButtonsContainer}>
            <View style={styles.optionContainer}>
                <TouchableOpacity
                    onPress={ () => props.setFlightType('oneWay')} 
                    style={[styles.radioButton, props.flightType == 'oneWay' ? stylesDos.radioShadow : null]}
                >
                    <View style={props.flightType == 'oneWay' ? stylesDos.innerRadioButton : null}/>
                </TouchableOpacity>
                <Text>One way</Text>
            </View>
            <View style={styles.optionContainer}>
                <TouchableOpacity
                    onPress={ () => props.setFlightType('roundTrip')}  
                    style={[styles.radioButton, props.flightType == 'roundTrip' ? stylesDos.radioShadow : null]}
                >
                    <View style={props.flightType == 'roundTrip' ? stylesDos.innerRadioButton : null}/>
                </TouchableOpacity>
                <Text>Round trip</Text>
            </View>
        </View>
    )
}
const stylesDos = StyleSheet.create({
    innerRadioButton: {
        width: '55%',
        height: '55%',
        borderRadius: 50,
        backgroundColor: '#29F698'
    },
    radioShadow: {
        shadowOffset: { height: 5, width: 5 }, 
        shadowOpacity: .8, 
        shadowColor: '#29F698', 
        shadowRadius: 20 
    }
})
export default RadioButtons;

