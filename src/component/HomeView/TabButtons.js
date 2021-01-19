import React from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import styles from './styles';
import IconFontisto from 'react-native-vector-icons/Fontisto'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../styles'
const renderButton = (props,index,type,name) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                onPress={ () => props.setTabNumber(index)} 
                style={[styles.touchableButtonContainer, props.tabNumber == index ? stylesDos.selectedTab : null]}
            >
                <LinearGradient 
                    colors={props.tabNumber == index ? [Colors.GREEN, Colors.GREENBLUEMIX, Colors.BLUE] : ['#ffffff','#ffffff','#ffffff']}
                    style={styles.touchableButtonStyle}
                >
                    {type == 'plane' ? <IconFontisto name={type} size={35}/> : <IconFontAwesome name={type} size={35}/> }
                </LinearGradient>
            </TouchableOpacity>
            <Text>{name}</Text>
        </View>      
    )
}
const TabButtons = (props) => {
    return (
        <View style={styles.buttonListContainer}>
            {renderButton(props,0,'plane','Flights')}
            {renderButton(props,1,'bed','Hotels')}
            {renderButton(props,2,'subway','Trains')}
            {renderButton(props,3,'bus','Buses')}
        </View>
    )
}
const stylesDos = StyleSheet.create({
    selectedTab: {
        shadowOffset: { height: 5, width: 5 }, 
        shadowOpacity: .8, 
        shadowColor: Colors.GREENBLUEMIX, 
        shadowRadius: 20 
    }
})

export default TabButtons;
