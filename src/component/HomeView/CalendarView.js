import React, {useContext} from 'react'
import {View} from 'react-native'
import styles from './styles';
import {Calendar} from 'react-native-calendars';
import { Context } from '../../utility/context'

const markDate = (flightType,fromDate,toDate) => {
    if (flightType == 'oneWay'){
        return {
            [fromDate]: fromDate ? {selected: true, color: 'blue'} : null
        }
    } else {
        return {
            [fromDate]: fromDate ? {startingDay: true, selected: true, color: 'lightblue'} : null,
            [toDate]: toDate ? {endingDay: true, selected: true, color: 'lightblue'} : null,
        }
    }
}

const CalendarView = () => {
    const {state, onDayPress} = useContext(Context);
    const {currentDate, fromDate, toDate, maxDate, flightType} = state;

    return (
        <View style={styles.calendarPickContainer} >
        <Calendar
          current={currentDate}
          minDate={currentDate}
          maxDate={maxDate}
          style={styles.calendar}
          markedDates={markDate(flightType,fromDate,toDate)}
          markingType={'period'}  
          onDayPress={(day) => onDayPress(day)}
          hideExtraDays={true}
        />
      </View>
    )
}

export default CalendarView;


