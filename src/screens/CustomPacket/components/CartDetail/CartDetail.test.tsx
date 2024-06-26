import React from 'react'
import {render} from '@testing-library/react-native'
import { Provider } from 'react-redux';
import configureStore from '../../../../context/store';
import CartDetail from './CartDetail';

const store = configureStore();

const renderComp = () => {
    render( 
    <Provider store={store}>
        <CartDetail/>        
    </Provider>)}

test('renders correctly', () => {
    expect(renderComp).toMatchSnapshot()
})