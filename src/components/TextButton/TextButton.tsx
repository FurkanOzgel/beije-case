import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface TextButtonProps {
    text: string;
    containerStyle?: object;
    textStyle?: object;
    onPress: () => void;
}

function TextButton({ text, onPress, containerStyle, textStyle }: TextButtonProps): React.JSX.Element {
    return (
        <TouchableOpacity testID='text-button' style={containerStyle} onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

export default TextButton;
export type { TextButtonProps };