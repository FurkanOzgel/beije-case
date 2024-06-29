import React from 'react';
import { Text, View } from 'react-native';
import { Slider } from '@react-native-assets/slider';

import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../context/cart/models';

import styles from './PacketSlider.style';
import { RootState } from '../../context/store';

interface PacketSliderProps {
    title: string;
    minValue: number;
    maxValue: number;
    step: number;
    categoryID: number;
}

function PacketSlider({ title, minValue, maxValue, step, categoryID }: PacketSliderProps): React.JSX.Element {

    const oldValue = useSelector((state: RootState) =>
        (state.cart.products.filter((product: Product) => 
        product.name == title)[0]?.oldQuantity || 0));
    const cart = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch();

    const handleValueChange = (value: number) => {
        if (value > oldValue) {
            dispatch({ type: 'ADD_PRODUCT', payload: { name: title, categoryID, quantity: value - oldValue } });
        } else {
            dispatch({ type: 'DELETE_PRODUCT', payload: { name: title, categoryID, quantity: oldValue - value } });
        }
        dispatch({ type: 'UPDATE_OLD_QUANTITY', payload: { name: title, oldQuantity: value } });
    };

    const renderTrackMark = (value: number) => (
        <View style={value > oldValue ? styles.blackPoint : styles.whitePoint} />
    );

    const renderThumb = (value: number) => (
        <View>
            {(value !== maxValue && value !== minValue) ? (
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <View style={styles.sliderValue}>
                        <Text style={styles.sliderValueText}>{value}</Text>
                    </View>
                    <View style={styles.notch}></View>
                    <View style={styles.thumb} />
                </View>
            ) : (
                <View style={styles.thumb} />
            )}
        </View>
    );

    return (
        <View>
            <Text testID='title' style={styles.title}>{title}</Text>
            <View style={{padding: 10}}>
                <Slider
                    testID='slider'
                    value={cart.products.filter((product: Product) => product.name == title)[0]?.quantity || 0}
                    minimumValue={0}                  
                    maximumValue={maxValue}                 
                    step={step}                       
                    minimumTrackTintColor='rgb(52, 49, 49)'      
                    maximumTrackTintColor='rgb(174,171,169)' 
                    thumbStyle={{backgroundColor:'black'}} 
                    trackHeight={4}                   
                    thumbSize={15}                 
                    onValueChange={handleValueChange} 
                    CustomMark={({value}) => renderTrackMark(value)}
                    CustomThumb={({value}) => renderThumb(value)}/>
            </View>
            <View style={styles.intervalContainer}>
                <Text testID='min-value' style={styles.intervalText}>{minValue}</Text>
                <Text testID='max-value' style={styles.intervalText}>{maxValue}</Text>
            </View>
        </View>
            
    );
}

export default PacketSlider;
