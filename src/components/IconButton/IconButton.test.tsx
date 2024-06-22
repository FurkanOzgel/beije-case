import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react-native'
import IconButton from './IconButton'
import icons from '../../assets/svg'

test('renders correctly', () => {
    const comp = render(<IconButton svg={icons.logo} onPress={() => {}}/>)
    expect(comp).toMatchSnapshot()
})

test('calls the onPress handler', () => {
    const onPress = jest.fn()
    render(<IconButton svg={icons.logo} onPress={onPress}/>)
    fireEvent.press(screen.getByTestId('icon-button'))
    expect(onPress).toHaveBeenCalledTimes(1)
})

test('renders the icon prop', () => {
    render(<IconButton svg={icons.logo} onPress={() => {}}/>)
    expect(screen.getByTestId("svg").props.xml).toBe(icons.logo)
})

