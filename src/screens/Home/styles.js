import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    DarkOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 0,
        backgroundColor: '#000',
        opacity: 0.2,
        borderBottomRightRadius: 65
    },
    searchContainer: {
        paddingTop: 100,
        paddingLeft: 16
    },
    UserGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white'
    },
    UserText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white'
    },
    searchBox: {
        marginTop: 16,
        backgroundColor: '#fff',
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: '90%'
    },
    ImageOverlay: {
        width: 150,
        height: 170,
        marginRight: 8,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.2
    },
    imageLocation: {
        position: 'absolute',
        marginTop: 4,
        left: 10,
        bottom: 10
    },
    ImageText: {
        position: 'absolute',
        color: 'white',
        marginTop: 4,
        fontSize: 14,
        left: 30,
        bottom: 10,
        color: "black",
        fontWeight: "bold"
    },
    recents: {
        width: '93%',
        height: 250,
        borderRadius: 10,
        alignSelf: 'center'
    },
    icon: {
        marginRight: 10,
        position: 'relative',
        top: 4
    },
    iconText:{
        fontSize: 22,
        color: 'white',
        fontWeight: 'normal',
        marginBottom: 10
    },
    container: {
        position: 'absolute',
        bottom: 0,
        padding: 16
    },
    description: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'normal',
        marginBottom: 10,
        opacity: 0.9,
        marginLeft: 16
    }
})

export default styles;