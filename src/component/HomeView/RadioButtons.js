import React from 'react'
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../styles'

const renderOption = (props,type,typeText) => {
    return (
        <View style={styles.optionContainer}>
            <TouchableOpacity
                onPress={ () => props.setFlightType(type)} 
                style={[styles.radioButton, props.flightType == type ? stylesDos.radioShadow : null]}
            >
                {props.flightType == type ? 
                    <LinearGradient 
                        colors={[Colors.GREEN, Colors.GREENBLUEMIX, Colors.BLUE]}
                        style={stylesDos.innerRadioButton}
                    >

                    </LinearGradient> : 
                    null
                }
            </TouchableOpacity>
            <Text>{typeText}</Text>
        </View>
    )    
}

const RadioButtons = (props) => {
    return (
        <View style={styles.radioButtonsContainer}>
            {renderOption(props,'oneWay', 'One way')}
            {renderOption(props,'roundTrip', 'Round trip')}
        </View>
    )
}
const stylesDos = StyleSheet.create({
    innerRadioButton: {
        width: '55%',
        height: '55%',
        borderRadius: 50,
    },
    radioShadow: {
        shadowOffset: { height: 5, width: 5 }, 
        shadowOpacity: .8, 
        shadowColor: '#29F698', 
        shadowRadius: 20 
    }
})
export default RadioButtons;

