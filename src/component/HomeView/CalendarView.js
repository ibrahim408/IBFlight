import React, { useRef } from 'react'
import {View, Text, TouchableOpacity, Touchablew} from 'react-native'
import styles from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import {Calendar} from 'react-native-calendars';



const renderCalendarWithSelectableDate = (ref) => {
  return (
    <View ref={ref} style={styles.calendarPickContainer} >
      <Calendar
        current={'2020-02-02'}
        style={styles.calendar}
      />
    </View>

  );
};

const CalendarView = (props,ref) => {
    return (
        <View style={styles.calendarContainer}>
            <TouchableOpacity onPress={() => props.setVisible(true)} style={styles.calendarBoxContainer}>
                <IconFontAwesome name="calendar-check-o" size={25} style={{marginRight: 10}} />
                <Text>Fri 11/20</Text>
            </TouchableOpacity>
            <IconFontAwesome name="long-arrow-right" size={25} style={{marginLeft: 25}}/>
            <TouchableOpacity onPress={() => props.setVisible(true)} style={styles.calendarBoxContainer}>
                <IconFontAwesome name="calendar-check-o" size={25} style={{marginRight: 10}} />
                <Text>Fri 11/20</Text>
            </TouchableOpacity>
            {props.visible ? renderCalendarWithSelectableDate(ref) : null}
        </View>
    )
}


export default React.forwardRef(CalendarView);


