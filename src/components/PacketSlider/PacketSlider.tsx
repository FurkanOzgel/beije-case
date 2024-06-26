export {}
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

function PacketSlider(props: PacketSliderProps): React.JSX.Element {

    const oldValue = useSelector((state: RootState) =>
        (state.cart.products.filter((product: Product) => 
        product.name == props.title)[0]?.oldQuantity || 0));
    const cart = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch();

    return (
        <View>
            <Text testID='title' style={styles.title}>{props.title}</Text>
            <View style={{padding: 10}}>
                <Slider
                    testID='slider'
                    value={cart.products.filter((product: Product) => product.name == props.title)[0]?.quantity || 0}
                    minimumValue={0}                  
                    maximumValue={props.maxValue}                 
                    step={props.step}                       
                    minimumTrackTintColor='rgb(52, 49, 49)'      
                    maximumTrackTintColor='rgb(174,171,169)' 
                    thumbStyle={{backgroundColor:'black'}} 
                    trackHeight={4}                   
                    thumbSize={15}                 
                    onValueChange={(value) => {

                        if (value > oldValue) {
                            dispatch({type: 'ADD_PRODUCT', payload: {name: props.title,categoryID: props.categoryID ,quantity: value - oldValue}})
                        } else { 
                            dispatch({type: 'DELETE_PRODUCT', payload: {name: props.title, categoryID: props.categoryID, quantity: oldValue - value}})
                        }
                        
                        dispatch({type: 'UPDATE_OLD_QUANTITY', payload: {name: props.title, oldQuantity: value}})
                        }} 
                    CustomMark={({value}) => {
                        return(
                            <View>
                                {(value > oldValue) ? <View style={styles.blackPoint}/> : <View style={styles.whitePoint}/>}
                            </View>
                        )
                    }}
                    CustomThumb={({value}) => {
                        return(
                            <View>
                                {(value != props.maxValue && value != props.minValue) ? 
                                <View style={{display:'flex', alignItems:'center'}}>
                                    <View style={styles.sliderValue}>
                                        <Text style={styles.sliderValueText}>{value}</Text>
                                    </View>
                                    <View style={styles.notch}></View>
                                    <View style={styles.thumb}/>
                                </View>
                                :
                                <View style={styles.thumb}/>
                                }
                            
                            </View>
                        )
                    }}/>
            </View>
            <View style={styles.intervalContainer}>
                <Text testID='min-value' style={styles.intervalText}>{props.minValue}</Text>
                <Text testID='max-value' style={styles.intervalText}>{props.maxValue}</Text>
            </View>
        </View>
            
    );
}

export default PacketSlider;
