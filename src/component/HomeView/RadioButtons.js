import React, {useContext} from 'react'
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../styles'
import {Context} from '../../utility/context'

const renderOption = (flightType,setFlightType,type,typeText) => {
    return (
        <View style={styles.optionContainer}>
            <TouchableOpacity
                onPress={ () => setFlightType(type)} 
                style={[styles.radioButton, flightType == type ? stylesDos.radioShadow : null]}
            >
                {flightType == type ? 
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

const RadioButtons = () => {
    const {state} = useContext(Context);
    const {flightType,setFlightType} = state;
    
    return (
        <View style={styles.radioButtonsContainer}>
            {renderOption(flightType,setFlightType,'oneWay', 'One way')}
            {renderOption(flightType,setFlightType,'roundTrip', 'Round trip')}
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

