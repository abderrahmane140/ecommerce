import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../pages/Contact';

describe('Contact component', () => {
  test('renders Contact form with correct elements', () => {
    render(<Contact />);

    expect(screen.getByTestId('div2')).toBeInTheDocument(); 
    expect(screen.getByTestId('div3')).toBeInTheDocument(); 
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('nom')).toBeInTheDocument(); 
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('text')).toBeInTheDocument(); 
    expect(screen.getByTestId('checked')).toBeInTheDocument(); 
    expect(screen.getByTestId('submit')).toBeInTheDocument(); 
});

test('displays success message after form submission', () => {
    render(<Contact />);

    
    fireEvent.change(screen.getByTestId('nom'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByTestId('text'), { target: { value: 'This is a test message.' } });
    fireEvent.click(screen.getByTestId('checked'));
    fireEvent.click(screen.getByTestId('submit'));

  });

});
test('validates form fields and displays errors', () => {
    render(<Contact />);
  
    // Simulate form submission without filling in required fields
    fireEvent.click(screen.getByTestId('submit'));

    // Simulate form submission
    fireEvent.click(screen.getByTestId('submit'));
  
    // Check if form fields are reset
    expect(screen.getByTestId('nom').value).toBe('');
    expect(screen.getByTestId('email').value).toBe('');
    expect(screen.getByTestId('text').value).toBe('');
    expect(screen.getByTestId('checked').checked).toBeFalsy();
});


test('displays individual field errors when they occur', () => {
    render(<Contact />);
  
    // Fill in incorrect email format
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'invalidEmail' } });
  
    // Simulate form submission
    fireEvent.click(screen.getByTestId('submit'));
  
    // Check if specific email error is displayed
    expect(screen.getByText('email incorrect !')).toBeInTheDocument();
  });
  