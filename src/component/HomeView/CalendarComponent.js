import React, { useRef } from 'react'
import {View, Text, TouchableOpacity, Touchablew} from 'react-native'
import styles from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import {Calendar} from 'react-native-calendars';
import CalendarView from './CalendarView'


const renderCalendarWithSelectableDate = () => {
  return (
    <View style={styles.calendarPickContainer} >
      <Calendar
        current={'2020-02-02'}
        style={styles.calendar}
      />
    </View>

  );
};

const CalendarComponent = (props) => {
  const {fromDate,toDate, fromDateText, toDateText} = props;

    return (
        <View style={styles.calendarContainer}>
            <TouchableOpacity onPress={() => props.setVisible(true)} style={styles.calendarBoxContainer}>
                <IconFontAwesome name="calendar-check-o" size={25} style={{marginRight: 10}} />
                <Text>{fromDateText}</Text>
            </TouchableOpacity>
            <IconFontAwesome name="long-arrow-right" size={25} style={{marginLeft: 25}}/>
            <TouchableOpacity onPress={() => props.setVisible(true)} style={styles.calendarBoxContainer}>
                <IconFontAwesome name="calendar-check-o" size={25} style={{marginRight: 10}} />
                <Text>{toDateText}</Text>
            </TouchableOpacity>

            {props.visible ? 
            <CalendarView  
              flightType={props.flightType}

              currentDate={props.currentDate} 
              fromDate={props.fromDate} 
              setFromDate={props.setFromDate}
              toDate={props.toDate}
              setToDate={props.setToDate}  
              maxDate={props.maxDate}
              onDayPress={props.onDayPress}
              /> : null}

        </View>
    )
}


export default CalendarComponent;


