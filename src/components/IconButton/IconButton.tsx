import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

interface IconButtonProps {
    onPress: () => void;
    svg: string;
}

function IconButton({ onPress, svg }: IconButtonProps): React.JSX.Element {
    return (
        <TouchableOpacity testID='icon-button' onPress={onPress}>
            <SvgXml testID='svg' xml={svg}/>
        </TouchableOpacity>
    );
}

export default IconButton;