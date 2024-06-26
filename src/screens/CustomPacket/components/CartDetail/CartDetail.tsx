import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { SvgXml } from 'react-native-svg';

import icons from '../../../../assets/svg';
import styles from './CartDetail.style';

import {getTotalPrice} from '../../../../utils/helpers';
import CartCategoryItem from  '../CartCategoryItem'

function CartDetail(): React.JSX.Element {
    const [height, setHeight] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const [pressedDetail, setPressedDetail] = useState(false);

    const dispatch = useDispatch();

    const animatedHeight = new Animated.Value(height);
    const cart = useSelector((state: any) => state.cart);
    const productsLength = cart.products.length
    
    useEffect(() => {
        animatedHeight.setValue(height);
    }, [height]);

    const animateView = () => {
        const newHeight = height === 0 ? 140 : 0;
        setHeight(newHeight);

        Animated.timing(animatedHeight, {
            toValue: newHeight, 
            duration: 300,
            useNativeDriver: false,
        }).start();
        
        setPressedDetail(!pressedDetail);
    };

    const onDeleteCategory = (categoryID: number) => {
        const uniqueCategoryIDs = new Set(cart.products.map((product: any) => product.categoryID));
        dispatch({type: 'DELETE_CATEGORY', payload: categoryID});
        
        if (uniqueCategoryIDs.size == 1) {
            setHeight(0);
            setPressedDetail(false);
        }
    };

    const onContentSizeChange = (event: any) => {
        const { height } = event.nativeEvent.layout;
        setContentHeight(height);
        animatedHeight.setValue(height);
    };

    return (
        <View>
            <View style={!pressedDetail ? {display: "none"} : {display:'flex'}}>
                <Animated.View style={[styles.animatedView, { height: animatedHeight }]}>
                    <View onLayout={onContentSizeChange}>
                        <View style={styles.frequency}>
                            <SvgXml xml={icons.loop}/>
                            <Text style={styles.frequencyText}>2 ayda 1 gönderim</Text>
                        </View>
                        <View>
                            <CartCategoryItem cart={cart} categoryID={1} onDeleteCategory={onDeleteCategory}/>
                            <CartCategoryItem cart={cart} categoryID={2} onDeleteCategory={onDeleteCategory}/>
                            <CartCategoryItem cart={cart} categoryID={3} onDeleteCategory={onDeleteCategory}/>
                        </View>
                    </View>
                </Animated.View>
            </View>
            <View style={[styles.totalInfoContainer, productsLength === 0 ? {display: "none"} : {}]} onTouchStart={animateView}>
                <View style={styles.totalTextContainer}>
                    <Text style={styles.infoText}>Toplam </Text>
                    <SvgXml xml={icons.arrow} transform={pressedDetail ? [{rotate:'-90deg'}]:[{rotate:'90deg'}] }/>
                </View>
                <Text style={styles.infoText}>₺{getTotalPrice(cart)}</Text>
            </View>
        </View>

    );
}

export default CartDetail;