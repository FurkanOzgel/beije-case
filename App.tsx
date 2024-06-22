import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CustomPacketStack from './src/navigation/CustomPacketStack';
import configureStore from './src/context/store';
import {Provider} from 'react-redux';

const store = configureStore();

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <CustomPacketStack/>
            </NavigationContainer>
        </Provider>
        
    );
}

export default App;
