import React from 'react';
import { View } from 'react-native';
import PacketSlider from '../../../../components/PacketSlider';

const PadRoute = () => (
    <View>
        <PacketSlider title={'Standart Ped'} categoryID={1} minValue={0} maxValue={60} step={10}/>
        <PacketSlider title={'Süper Ped'} categoryID={1} minValue={0} maxValue={60} step={10}/>
        <PacketSlider title={'Süper+ Ped'} categoryID={1} minValue={0} maxValue={60} step={10}/>
    </View>
);

const DailyPadRoute = () => (
    <View>
        <PacketSlider title={'Günlük Ped'} categoryID={2} minValue={0} maxValue={100} step={10}/>
        <PacketSlider title={'Süper Günlük Ped'} categoryID={2} minValue={0} maxValue={100} step={10}/>
    </View>
);

const TamponRoute = () => (
    <View>
        <PacketSlider title={'Mini Tampon'} categoryID={3}minValue={0} maxValue={60} step={10}/>
        <PacketSlider title={'Standart Tampon'} categoryID={3} minValue={0} maxValue={60} step={10}/>
        <PacketSlider title={'Süper Tampon'} categoryID={3} minValue={0} maxValue={60} step={10}/>
    </View>
);
export default { PadRoute, DailyPadRoute, TamponRoute };
