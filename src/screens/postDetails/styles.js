import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: 370,
        justifyContent: 'flex-end'
    },
    container: {
        backgroundColor: '#BCCBCD',
        flex: 1
    },
    Tagline: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginVertical: 6,
        marginTop: -150
    },
    Placename: {
        color: 'white',
        fontSize: 24,
        paddingHorizontal: 14,
        marginBottom: 30
    },
    btn: {
        position: 'absolute',
        left: 20,
        top: 40,
        backgroundColor: '#ff6200',
        padding: 10,
        borderRadius: 40
    },
    btn2: {
        position: 'absolute',
        right: 20,
        top: 40,
        backgroundColor: '#ff6200',
        padding: 10,
        borderRadius: 40
    },
    btnText: {
        position: 'absolute',
        right: 12,
        top: 10,
        backgroundColor: '#ff6200',
        padding: 16,
        borderRadius: 40
    },
    bookTicketText:{
        color: 'white',
        fontSize: 14
    },
    description: {
        paddingHorizontal: 14, 
        fontSize: 14, 
        fontWeight: 'normal',
        justifyContent: 'flex-start',
        textAlign: 'justify',
        opacity: 0.3,
        lineHeight: 26
    }
});

export default styles;