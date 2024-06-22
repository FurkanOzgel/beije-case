import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        paddingHorizontal: 27
    },
    scrollContainer: {
        paddingTop: 40,
        backgroundColor: "#f9f5f2"
    },
    title: {
        fontWeight: "500",
        fontSize: 28,
        color: "rgba(0, 0, 0, 0.9)",
        lineHeight: 36.4
    },
    text: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 26,
        color: "rgba(0, 0, 0, 0.6)"
    },
    descriptionContainer: {
        gap: 24
    },
    scene: {
        height: 150,
        flex: 1
    },
    tabBar: {
        backgroundColor: "#f9f5f2",
        elevation: 0,
        shadowOpacity: 0
    },
    tabBarLabel: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: -0.48,
        textAlign: 'center',
        textTransform: 'none'
    },
    tabBarIndicator: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
    },
    tabView: {
        gap:40
    }
});