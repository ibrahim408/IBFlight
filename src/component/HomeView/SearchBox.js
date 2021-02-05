import React, {useContext} from 'react'
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native'
import styles from './styles';
import {Colors} from '../../styles'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CalendarComponent from './CalendarComponent'
import LinearGradient from 'react-native-linear-gradient';
import {Context} from '../../utility/context'

const SearchBox = () => {
    const {state, pressButton} = useContext(Context);
    const {fromText,setFromText,toText,setToText,visible,buttonText} = state;
    
    return (
        <View style={styles.searchContainer}>
            <View style={styles.fromContainer}>   
                <IconFontAwesome name="map-marker" size={25}/>
                <TextInput
                    style={styles.textBoxStyle}
                    placeholder="From"
                    value={fromText}
                    onChangeText={text => setFromText(text)}
                />               
            </View>
            <View style={styles.toContainer}>
                <View style={styles.toSearchBox}>
                    <IconFontAwesome name="map-marker" size={25}/>
                    <TextInput
                        style={styles.textBoxStyle}
                        placeholder="To"
                        value={toText}
                        onChangeText={text => setToText(text)}
                    />
                </View>
                <IconFontAwesome5 
                    name="exchange-alt" 
                    size={25}
                    style={styles.roundTripIcon}
                />
            </View>
            <CalendarComponent />
            <TouchableOpacity style={[styles.searchButtonContainer]} onPress={() => pressButton()}>
                <LinearGradient 
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                    colors={visible ? [Colors.REDONE, Colors.REDTWO, Colors.REDTHREE] : [Colors.BLUE, Colors.GREENBLUEMIX, Colors.GREEN]}
                    style={[styles.searchButtonStyle]}
                >
                    <Text style={{color: 'white', fontSize: 24, fontWeight: '500'}}>{buttonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
};

export default SearchBox;



