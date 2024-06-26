import React from 'react'
import {render} from '@testing-library/react-native'
import Footer from './Footer'

test('renders correctly', () => {
    const comp = render(<Footer/>)
    expect(comp).toMatchSnapshot()
})