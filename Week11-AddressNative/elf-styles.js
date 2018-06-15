import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
        flex: 1,
        //marginBottom: 1,
        backgroundColor: 'coral'
    },
    addressContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
    },
    nav: {
        flexDirection: 'row',
        //justifyContent: 'space-around',
        backgroundColor: 'skyblue'
    },
    displayArea: {
      flexDirection: 'column',
      backgroundColor: 'yellow'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    textAlign: {
        textAlign: 'center',
        fontSize: 10,
        padding: 10,
        marginBottom: 5
    },
    subNavItem: {
        padding: 5,
    },
    topic: {
        textAlign: 'center',
        fontSize: 10,
    },
    buttonView: {
        flexDirection: 'row',
        //justifyContent: 'center',
        justifyContent: 'space-around',
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'burlywood',
        width: "100%"
    }
});