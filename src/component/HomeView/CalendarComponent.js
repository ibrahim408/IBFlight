import React, {useContext} from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import CalendarView from './CalendarView'
import {Context} from '../../utility/context'

const CalendarComponent = () => {
    const {state} = useContext(Context);
    const {visible,setVisible,fromDateText,toDateText} = state;

    return (
        <View style={styles.calendarContainer}>
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.calendarBoxContainer}>
                <IconFontAwesome name="calendar-check-o" size={25} style={{marginRight: 10}} />
                <Text>{fromDateText}</Text>
            </TouchableOpacity>
            <IconFontAwesome name="long-arrow-right" size={25} style={{marginLeft: 25}}/>
            <TouchableOpacity onPress={() => setVisible(true)} style={styles.calendarBoxContainer}>
                <IconFontAwesome name="calendar-check-o" size={25} style={{marginRight: 10}} />
                <Text>{toDateText}</Text>
            </TouchableOpacity>

            {visible ? <CalendarView  /> : null}

        </View>
    )
}

export default CalendarComponent;


