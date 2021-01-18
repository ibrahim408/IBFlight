import { StyleSheet} from 'react-native';
import {Buttons, Colors, Spacing, Typography} from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.GREY,
    },
    cardContainer: {
        alignSelf: 'center',
        width: '80%',
        height: 300,
        marginBottom: 20,
        borderRadius: 30,
        overflow: 'hidden',
        shadowOffset: { height: 1, width: 1 }, 
        shadowColor: Colors.GREY, 
        shadowOpacity: 0.5, 
        position: 'relative',
    },
    goingContainer: {
        flex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: Colors.WHITE
    }, 
    returningContainer: {
        flex: 1,
    },
    image: {
        width: 60,
        height: 60
    },
    airlineText: {
        fontSize: 16
    },
    priceText: {
        fontSize: 26
    },
    timeText: {
        fontSize: 18
    },
    airportName: {
        fontSize: 18,
        fontWeight: '700'
    },
    timeLengthText: {
        fontSize: 14,
        color: 'grey'
    }
})

export default styles;


// shadowRadius: 2,
// shadowOffset: {
//   width: 0,
//   height: 3,
// },
// shadowColor: '#000000',
// elevation: 4,
// shadowOpacity: 1.0