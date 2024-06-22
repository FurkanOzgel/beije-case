import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react-native'
import TextButton from './TextButton'

test('renders correctly', () => {
    const comp = render(<TextButton text="" onPress={() => {}}/>)
    expect(comp).toMatchSnapshot()
})

test('calls the onPress handler', () => {
    const onPress = jest.fn()
    render(<TextButton text="" onPress={onPress}/>)
    fireEvent.press(screen.getByTestId('text-button'))
    expect(onPress).toHaveBeenCalledTimes(1)
})

test('renders the text prop', () => {
    render(<TextButton text="Hello" onPress={() => {}}/>)
    expect(screen.getByText('Hello')).not.toBeNull()
})

test('renders the containerStyle prop', () => {
    const containerStyle = {backgroundColor: 'red', opacity: 0.5}
    render(<TextButton text="" onPress={() => {}} containerStyle={containerStyle}/>)

    const container = screen.getByTestId('text-button')
    expect(container.props.style).toStrictEqual(containerStyle)
})

test('renders the textStyle prop', () => {
    const textStyle = {color: 'red', fontSize: 20}
    render(<TextButton text="" onPress={() => {}} textStyle={textStyle}/>)

    const text = screen.getByText('')
    expect(text.props.style).toStrictEqual(textStyle)
})