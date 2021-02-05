import React, {useContext} from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import styles from './styles';
import IconFontisto from 'react-native-vector-icons/Fontisto'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../styles'
import {Context} from '../../utility/context'

const renderButton = (tabNumber,setTabNumber,index,type,name) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                onPress={ () => setTabNumber(index)} 
                style={[styles.touchableButtonContainer, tabNumber == index ? stylesDos.selectedTab : null]}
            >
                <LinearGradient 
                    colors={tabNumber == index ? [Colors.GREEN, Colors.GREENBLUEMIX, Colors.BLUE] : ['#ffffff','#ffffff','#ffffff']}
                    style={styles.touchableButtonStyle}
                >
                    {type == 'plane' ? <IconFontisto name={type} size={35}/> : <IconFontAwesome name={type} size={35}/> }
                </LinearGradient>
            </TouchableOpacity>
            <Text>{name}</Text>
        </View>      
    )
}

const TabButtons = () => {
    const {state} = useContext(Context);
    const {tabNumber,setTabNumber} = state;

    return (
        <View style={styles.buttonListContainer}>
            {renderButton(tabNumber,setTabNumber,0,'plane','Flights')}
            {renderButton(tabNumber,setTabNumber,1,'bed','Hotels')}
            {renderButton(tabNumber,setTabNumber,2,'subway','Trains')}
            {renderButton(tabNumber,setTabNumber,3,'bus','Buses')}
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
