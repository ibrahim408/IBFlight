import React from 'react'
import {View} from 'react-native'
import styles from './styles';
import Tabs from './TabButtons';
import RadioButtons from './RadioButtons'
import SearchBox from './SearchBox'

const HomeView = (props) => {
    return (
        <View style={styles.container}>
            <Tabs 
                setTabNumber={props.setTabNumber} 
                tabNumber={props.tabNumber}
            />
            <RadioButtons 
                flightType={props.flightType} 
                setFlightType={props.setFlightType} 
            />
            <SearchBox 
                flightType={props.flightType} 

                fromText={props.fromText} 
                setFromText={props.setFromText}   
                toText={props.toText} 
                setToText={props.setToText} 

                visible={props.visible} 
                setVisible={props.setVisible}
                
                currentDate={props.currentDate}
                fromDate={props.fromDate}
                setFromDate={props.setFromDate}
                toDate={props.toDate}
                setToDate={props.setToDate} 
                fromDateText={props.fromDateText}
                toDateText={props.toDateText} 
                maxDate={props.maxDate}
                onDayPress={props.onDayPress} 
                
                buttonText={props.buttonText}
                pressButton={props.pressButton}
            />
        </View>
    );
  };

  export default HomeView;

  