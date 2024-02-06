import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Product from '../pages/Product';
import '@testing-library/jest-dom';

describe('YourComponent', () => {
  test('renders the search and filter component correctly', () => {
    render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    );

    // Vérifiez que les éléments du formulaire sont rendus correctement
    expect(screen.getByTestId('select')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('text')).toBeInTheDocument();

    // Simulez une saisie dans le champ de recherche
    fireEvent.change(screen.getByTestId('text'), { target: { value: 'search query' } });
    expect(screen.getByDisplayValue('search query')).toBeInTheDocument();

    // Vérifiez le rendu de la liste des résultats
    expect(screen.getByTestId('div1')).toBeInTheDocument();
    expect(screen.queryByText('no item')).toBeNull();

  });
});