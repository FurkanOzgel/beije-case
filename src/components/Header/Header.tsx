import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import icons from '../../assets/svg';
import styles from './Header.style';

import IconButton from '../IconButton';



function Header(): React.JSX.Element {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <SvgXml xml={icons.logo} height={32}/>
            <View style={styles.rightIconsContainer}>
                <IconButton svg={icons.shoppingCart} onPress={() => {}}/>
                <IconButton svg={icons.person} onPress={() => {}}/>
                <IconButton svg={icons.menu} onPress={() => {}}/>
            </View>
        </SafeAreaView>
    );
}

export default Header;
