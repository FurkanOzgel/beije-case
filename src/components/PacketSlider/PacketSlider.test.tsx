import React from 'react'
import {render, screen} from '@testing-library/react-native'
import { Provider } from 'react-redux';
import configureStore from '../../context/store';
import PacketSlider from './PacketSlider'

const store = configureStore();

const comp = 
    <Provider store={store}>
        <PacketSlider title="Test"
            minValue={0}
            maxValue={100}
            step={10}
            categoryID= {1}/>
    </Provider>


test('renders correctly', () => {
    render(comp)
    expect(comp).toMatchSnapshot()
})

test('renders minValue prop', () => {
    render(comp)
    expect(screen.getByTestId("min-value").children[0]).toBe("0")
})

test('renders maxValue prop', () => {
    render(comp)
    expect(screen.getByTestId("max-value").children[0]).toBe("100")
})

test('renders title prop', () => {
    render(comp)
    expect(screen.getByTestId("title").children[0]).toBe("Test")
})
