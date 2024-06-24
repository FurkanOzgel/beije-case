import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    animatedView: {
        backgroundColor:'rgb(247, 246, 245)',
        padding: 12,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderTopWidth: 1
    },
    addCartBtn: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:64,
        paddingVertical: 12,
        paddingHorizontal: 22,
    },
    addCartBtnText: {
        fontWeight: '500',
        fontSize: 18
    },
    activeAddCartBtn: {
        backgroundColor: '#343131'
    },
    inactiveAddCartBtn: {
        backgroundColor: '#D9D8D7'
    },
    activeAddCartBtnText: {
        color: '#F6F6F6'
    },
    inactiveAddCartBtnText: {
        color: '#A4A3A2'
    },
    totalInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 8
    },
    infoText: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: 'rgba(0, 0, 0, 0.54)'
    },
    frequency: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        gap: 10,
        alignItems: 'center',
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 2
    },
    frequencyText: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.6)'
    },
    bottomFixedContainer: {
        padding:10,
        backgroundColor: '#F7F6F5'
    },
    totalTextContainer: {
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems: 'center'
    }
});

export default styles;