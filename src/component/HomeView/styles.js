import { StyleSheet }  from 'react-native';
import {Buttons, Colors} from '../../styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 80,
        backgroundColor: Colors.GREY,
        position: 'relative'
    },
    svgBackground: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: '-5%',
        width: '120%',
        height: '55%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    buttonListContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    touchableButtonContainer: {
        ...Buttons.smallRounded,
        marginBottom: 10,
    },
    touchableButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    radioButtonsContainer: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30
    },
    radioButton: {
        justifyContent: 'center',
        alignItems: 'center',
        ...Buttons.radioButton,
        marginRight: 10,
    },
    searchContainer: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 70,
        marginBottom: 20,
        borderRadius: 30,
        shadowOffset: { height: 1, width: 1 }, 
        shadowColor: '#000000', 
        shadowOpacity: 0.1, 
        shadowRadius: 5
    },
    fromContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
        marginTop: 40,
        paddingLeft: 20,
        width: '80%',
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.GREY
    },
    toContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
        width: '100%',
    },
    toSearchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
        width: '60%',
        height: 60,
        paddingLeft: 20,
        borderRadius: 30,
        backgroundColor: Colors.GREY
    },
    roundTripIcon: {
        color: Colors.GREEN,
        marginLeft: 20,
        transform: [{ rotate: '90deg'}]
    },
    textBoxStyle: {
        width: "80%",
        marginLeft: 20
    },
    calendarContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    calendarBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 50,
        marginLeft: 30,
        backgroundColor: Colors.GREY,
        borderRadius: 10
    },
    calendarPickContainer: {
        position: 'absolute',
        top: -180,
        left: 0,
        height: 20,
        width: '100%',
    },
    calendar: {

    },
    searchButtonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 30,
        width: '90%',
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        shadowOffset: { height: 5, width: 5 }, 
        shadowOpacity: .8, 
        shadowColor: 'red', 
        shadowRadius: 20 
    },
    searchButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;