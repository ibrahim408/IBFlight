import React, { useEffect, useState } from 'react'
import HomeView from '../../component/HomeView'
import {useOutsideAlerter} from '../../hooks/outsideAlert'

const Home = ({navigation}) => {
    const [tabNumber, setTabNumber] = useState(0);
    const [flightType, setFlightType] = useState('oneWay');
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    
    // const [visible, setVisible] = useState(false);
    const {visible, ref, childrenIds, setChildrenId, setVisible} = useOutsideAlerter(false);
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
            childrenIds={childrenIds} 
            setChildrenId={setChildrenId}
            refProp={ref}   
            navigation={navigation}
        />
    )
}

export default Home;
//