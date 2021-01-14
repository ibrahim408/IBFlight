import React from 'react'
import {View} from 'react-native'
import styles from './styles';
import Tabs from './TabButtons';
import RadioButtons from './RadioButtons'
import SearchBox from './SearchBox'

const HomeView = (props) => {
    return (
        <View 
            style={styles.container}
            onStartShouldSetResponder={evt => {
                evt.persist();
                console.log('evt.target', evt.target);
            }} 
        >
            <Tabs 
                setTabNumber={props.setTabNumber} 
                tabNumber={props.tabNumber}
            />
            <RadioButtons 
                flightType={props.flightType} 
                setFlightType={props.setFlightType} 
            />
            <SearchBox 
                fromText={props.fromText} 
                setFromText={props.setFromText}   
                toText={props.toText} 
                setToText={props.setToText}  
                visible={props.visible} 
                setVisible={props.setVisible}
                setChildrenId={props.setChildrenId}  
                refProp={props.refProp}   
            />
        </View>
    );
  };

  export default HomeView;

  