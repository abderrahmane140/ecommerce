import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../pages/Contact';
import '@testing-library/jest-dom';

describe('Contact component', () => {
  test('renders contact form', () => {
    render(<Contact />);
    
    // Vérifie si le formulaire de contact est rendu
    expect(screen.getByTestId('form')).toBeInTheDocument();

    // Simule la saisie dans les champs
    fireEvent.change(screen.getByTestId('nom'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByTestId('text'), { target: { value: 'This is a test message.' } });
    fireEvent.click(screen.getByTestId('checked'));

    // Vérifie si les valeurs saisies sont correctes
    expect(screen.getByTestId('nom')).toHaveValue('John Doe');
    expect(screen.getByTestId('email')).toHaveValue('john.doe@example.com');
    expect(screen.getByTestId('text')).toHaveValue('This is a test message.');
    expect(screen.getByTestId('checked')).toBeChecked();

    // Soumet le formulaire
    fireEvent.submit(screen.getByTestId('form'));

  });
});