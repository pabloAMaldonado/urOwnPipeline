/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../src/App'

describe('App', () => {
    it('should have input for number number and name', () => {
        render(<App />)

        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Number')).toBeInTheDocument()
    })

    it('should have a button to add a phone', () => {
        render(<App />)
        
        expect(screen.getByText('Add Phone')).toBeInTheDocument()
    })
})