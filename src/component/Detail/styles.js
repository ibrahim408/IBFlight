import { StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.GREY,
        paddingTop: 150,
        position: 'relative'
    },
    svgBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '55%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
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
        width: 50,
        height: 50,
        marginLeft: 5,
        marginRight: 10
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

