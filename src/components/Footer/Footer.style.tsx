import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    footerContainer: {
        backgroundColor: 'rgb(38, 38, 38)',
        paddingHorizontal:27,
        paddingVertical:40,
        display: 'flex',
        alignItems: 'center',
        gap: 24
    },
    navContainer:{
        flexDirection:'row',
        justifyContent: 'center', 
        width: '100%', 
        gap:16
    },
    navColumn: {
        gap:16
    },
    navBtn: {
        height: 32
    },
    navBtnText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: 'white'
    },
    agreementContainer: {
        borderColor: 'rgba(265, 265, 265, 0.12)',
        borderTopWidth: 1,
        width: '100%',
        marginTop: 24,
        alignItems: 'center',
        gap:24,
        paddingTop: 24
    },
    agreementBtnText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color:'#FFFFFF7F'
    },
    languageSelection: {
        flexDirection:'row',
        gap: 5,
        marginTop: 24,
        marginBottom: 20
    }
})