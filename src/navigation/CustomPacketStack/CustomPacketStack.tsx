import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CustomPacket from '../../screens/CustomPacket/CustomPacket';
import Header from '../../components/Header';

const Stack = createStackNavigator();

function CustomPacketStack(): React.JSX.Element {
    return (
        <Stack.Navigator   
            screenOptions={{
                header: () => {
                    return <Header/>;
                }
            }}>
            <Stack.Screen name="CustomPacket" component={CustomPacket}/>
        </Stack.Navigator>
    );
}

export default CustomPacketStack;
