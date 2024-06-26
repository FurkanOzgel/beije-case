import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mailInfoTitle: {
        color: 'rgba(255, 255, 255, 0.698)',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 25.6,
        letterSpacing: -0.16,
        textAlign:'center'
    },
    mailInfoText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18,
        color: 'rgba(255, 255, 255, 0.698)',
        textAlign:'center'
    },
    mailInput: {
        paddingHorizontal:14,
        paddingVertical: 8.5,
        borderWidth:1,
        borderColor: 'rgba(255, 255, 255, 0.23)',
        borderRadius: 8,
        fontSize: 16,
        fontWeight: '400'
    },
    sendButton: {
        minWidth: 64,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        opacity: 0.87,
        paddingTop: 12,
        paddingBottom:10,
        borderRadius: 64
    },
    sendBtnText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: -0.5,
        lineHeight: 26,
    },
    gdprInfo: {
        marginTop: 16,
        fontWeight: '400',
        opacity: 0.7,
        lineHeight: 20,
        fontSize: 12,
        color: 'white'
    }
})