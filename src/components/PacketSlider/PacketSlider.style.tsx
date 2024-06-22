import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    blackPoint: {
        backgroundColor: "rgb(52, 49, 49)",
        width:3,
        height:3,
        borderRadius: 3,
        marginTop:-1.5
    },
    whitePoint: {
        backgroundColor: "#F5F5F2",
        width:3,
        height:3,
        borderRadius: 5,
        marginTop:-1.5
    },
    title: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight:26,
        height: 42,
        color: "rgba(0, 0, 0, 0.9)",
        letterSpacing: -0.16
    },
    intervalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    intervalText: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight:22,
        height: 42,
        color: "rgba(0, 0, 0, 0.9)",
        paddingHorizontal: 5
    },
    sliderValue: {
        borderRadius:2,
        backgroundColor: 'rgb(117,117,117)',
        paddingHorizontal:12,
        paddingVertical: 4,
        marginTop: -45,
        marginLeft:-5,
        position: "absolute"
    },
    sliderValueText: {
        color: "white",
        fontWeight: '500',
        fontSize: 14,
        letterSpacing: -0.48,
        
    },
    thumb: {
        height:18,
        width:18,
        backgroundColor: "rgb(52, 49, 49)",
        borderRadius: 9,
        position: "absolute",
        marginTop: -9,
        marginLeft: -9
    },
    notch: {
        backgroundColor:'rgb(117,117,117)',
        height:15,
        width:15, 
        top: -30, 
        transform: [{ rotate: '45deg' }], 
        zIndex: -1 
    }

});

export default styles;