import React, { useEffect, useState } from 'react'
import HomeView from '../../component/HomeView'
import {flightHooks} from '../../hooks/flightHooks';

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
        setButtonText,
        currentDate, 
        setCurrentDate,
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        fromDateText,
        setFromDayText,
        toDateText,
        setToDayText,
        maxDate,
        setMaxDate
    } = flightHooks();

    const pressButton = () => {
        if (visible){
            setVisible(false);
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
        <HomeView 
            tabNumber={tabNumber} 
            setTabNumber={setTabNumber} 

            flightType={flightType} 
            setFlightType={setFlightType}  

            fromText={fromText} 
            setFromText={setFromText}   
            toText={toText} 
            setToText={setToText}   
            
            visible={visible} 
            setVisible={setVisible}
            
            currentDate={currentDate}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate} 
            setToDate={setToDate}
            fromDateText={fromDateText}
            maxDate={maxDate}
            toDateText={toDateText}
            onDayPress={onDayPress} 
            
            pressButton ={pressButton}
            buttonText={buttonText}
            navigation={navigation}
        />
    )
}

export default Home;
