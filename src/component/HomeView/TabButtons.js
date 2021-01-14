import React from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import styles from './styles';
import IconFontisto from 'react-native-vector-icons/Fontisto'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'


const TabButtons = (props) => {
    return (
        <View style={styles.buttonListContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={ () => props.setTabNumber(0)} 
                    style={[styles.touchableButton, props.tabNumber == 0 ? stylesDos.selectedTab : null]}
                >
                    <IconFontisto name="plane" size={35}/>
                </TouchableOpacity>
                <Text>Flight</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={ () => props.setTabNumber(1)} 
                    style={[styles.touchableButton, props.tabNumber == 1 ? stylesDos.selectedTab : null]}
                >
                    <IconFontAwesome name="bed" size={35}/>
                </TouchableOpacity>
                <Text>Hotels</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={ () => props.setTabNumber(2)} 
                    style={[styles.touchableButton, props.tabNumber == 2 ? stylesDos.selectedTab : null]}
                >
                    <IconFontAwesome name="subway" size={35}/>
                </TouchableOpacity>
                <Text>Trains</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={ () => props.setTabNumber(3)} 
                    style={[styles.touchableButton, props.tabNumber == 3 ? stylesDos.selectedTab : null]}
                >
                    <IconFontAwesome name="bus" size={35}/>
                </TouchableOpacity>
                <Text>Buses</Text>
            </View>
        </View>
    )
}
const stylesDos = StyleSheet.create({
    selectedTab: {
        backgroundColor: '#29F698',
        shadowOffset: { height: 5, width: 5 }, 
        shadowOpacity: .8, 
        shadowColor: '#29F698', 
        shadowRadius: 20 
    }
})

export default TabButtons;
