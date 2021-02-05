import React from 'react'
import HomeView from '../../component/HomeView'
import {flightHooks} from '../../hooks/flightHooks';
import {Context} from '../../utility/context';

const Home = ({navigation}) => {

    const {
        tabNumber, 
        setTabNumber,
        flightType, 
        setFlightType,
        fromText, 
        setFromText,
        toText, 
        setToText,
        visible, 
        setVisible,
        buttonText, 
        currentDate, 
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        fromDateText,
        toDateText,
        maxDate,
    } = flightHooks();

    const state = {
        tabNumber, 
        setTabNumber,
        flightType, 
        setFlightType,
        fromText, 
        setFromText,
        toText, 
        setToText,
        visible, 
        setVisible,
        buttonText, 
        currentDate, 
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        fromDateText,
        toDateText,
        maxDate,    
    };

    const pressButton = () => {
        if (visible){
            setVisible(false);
        } else {
            if ((flightType == 'oneWay' && fromDate) || (fromDate && toDate))
                navigation.navigate('Detail');
        }
    };
    const onDayPress = (day) => {
        if (flightType == 'oneWay'){
            setFromDate(day.dateString);
          } else {       
              if (!fromDate){
                  setFromDate(day.dateString);
              } else if (!toDate){
                  setToDate(day.dateString)
              } else if (day.dateString < toDate){
                  setFromDate(day.dateString)
              } else {
                setFromDate(null);
                setToDate(null);
              }
          }
    };

    return (
        <Context.Provider value={{state,pressButton,onDayPress,navigation}}>
            <HomeView />
        </Context.Provider>
    )
}

export default Home;
