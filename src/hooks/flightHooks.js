import { useEffect, useRef, useState } from 'react'
import helpers from '../utility/helpers';

export const flightHooks = () => {
    const [tabNumber, setTabNumber] = useState(0);
    const [flightType, setFlightType] = useState('oneWay');
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [visible, setVisible] = useState(false);
    const [buttonText, setButtonText] = useState('Search');
    const [currentDate, setCurrentDate] = useState('2012-03-01');
    const [fromDate,setFromDate] = useState(null);
    const [toDate,setToDate] = useState(null);
    const [fromDateText,setFromDayText] = useState('');
    const [toDateText,setToDayText] = useState('');
    const [maxDate,setMaxDate] = useState('');
    
    useEffect(()  => {
        let today = new Date();
        let tomorrow = new Date();
        let maxDateToBook = new Date();

        tomorrow.setDate(tomorrow.getDate() + 1);
        maxDateToBook.setDate(maxDateToBook.getDate() + 365);

        let todayInfo = helpers.getDateInfo(today);
        let tomorrowInfo = helpers.getDateInfo(tomorrow);
        let maxDateToBookInfo = helpers.getDateInfo(maxDateToBook);

        setCurrentDate(todayInfo.date)
        setFromDayText(todayInfo.dateText);
        setToDayText(tomorrowInfo.dateText);
        setMaxDate(maxDateToBookInfo.date);
    },[]);

    useEffect(() => {
        if (visible){
            setButtonText('Close');
        } else {
            setButtonText('Search');
        }
    },[visible]);

    useEffect(() => {
        if (fromDate){
            let dateText = helpers.formateDate(fromDate);
            setFromDayText(dateText);
        }
    },[fromDate])

    useEffect(() => {
        if (toDate){
            let dateText = helpers.formateDate(toDate);
            setToDayText(dateText);
        }
    },[toDate])

    return {
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
    }
}






// const ref = useRef(null);
// const [visible, setVisible] = useState(initialValue);
// const [childrenIds, setChildrenIds] = useState([]);

// const handleClickOutside = (event) => {
//     console.log(ref.current);
//     if (ref.current && !ref.current.contains(event.target)){
//         setVisible(false);
//     }
// }

// useEffect(() => {
//     console.log('added addEventListener');
//     console.log('current ref :',ref.current);
//     AppState.addEventListener('change',handleClickOutside,true)
//     return(() => {
//         console.log('removed addEventListener');
//         AppState.removeEventListener('change', handleClickOutside,true);
//     })
// }, [ref])


