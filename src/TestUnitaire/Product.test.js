import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Product from '../pages/Product';

describe('Product component', () => {
  test('renders product list correctly', () => {
    render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    );

    // Vérifiez que les éléments de recherche sont présents
    expect(screen.getByTestId('select')).toBeInTheDocument();
    expect(screen.getByTestId('div0')).toBeInTheDocument();
    expect(screen.getByTestId('div1')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search for anything...')).toBeInTheDocument();

   
  });
});