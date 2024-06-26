import React from 'react'
import {render} from '@testing-library/react-native'
import Header from './Header'

test('renders correctly', () => {
    const comp = render(<Header/>)
    expect(comp).toMatchSnapshot()
})