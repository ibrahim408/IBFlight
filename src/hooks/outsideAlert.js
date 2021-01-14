import { useEffect, useRef, useState } from 'react'
import { AppState } from 'react-native'

export const useOutsideAlerter = (initialValue) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(initialValue);
    const [childrenIds, setChildrenIds] = useState([]);

    const handleClickOutside = (event) => {
        console.log('hellllof');
        console.log('bloood');
        console.log(ref.current);
        if (ref.current && !ref.current.contains(event.target)){
            setVisible(false);
        }
    }
    
    useEffect(() => {
        console.log('added addEventListener');
        console.log('current ref :',ref.current);
        AppState.addEventListener('change',handleClickOutside,true)
        return(() => {
            console.log('removed addEventListener');
            AppState.removeEventListener('change', handleClickOutside,true);
        })
    }, [ref])

    return {visible, ref, childrenIds, setChildrenIds, setVisible}
}


