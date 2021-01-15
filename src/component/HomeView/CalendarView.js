import React from 'react'
import {View} from 'react-native'
import styles from './styles';
import {Calendar} from 'react-native-calendars';

// set minDate for today
// set maxDate for 6 months ahead

// if fromDate is selected than enter to date

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

const CalendarView = (props) => {
    const {currentDate, fromDate, toDate, maxDate, flightType} = props;
    // console.log('current date: ', currentDate);
    // console.log('from date: ', fromDate);
    // console.log('from maxDate: ', maxDate);
    // console.log('flight type: ', flightType);
    return (
        <View style={styles.calendarPickContainer} >
        <Calendar
          current={currentDate}
          minDate={currentDate}
          maxDate={maxDate}
          style={styles.calendar}
          markedDates={markDate(flightType,fromDate,toDate)}
          markingType={'period'}  
          onDayPress={(day) => props.onDayPress(day)}
          hideExtraDays={true}
        />
      </View>
    )
}

export default CalendarView;

// if round trip:
// markedDates={{
//     [fromDate]: fromDate ? {startingDay: true, selected: true, color: 'lightblue'} : null,
//     '2021-01-27': {endingDay: true, selected: true, color: 'lightblue'},
//   }}


// if oneway:
// markedDates={{
//     [fromDate]: fromDate ? {selected: true, marked: true, selectedColor: 'blue'} : null
//   }}


