import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('YourComponent', () => {
  test('renders login form by default', () => {
    render(<Login />);
    
    // Assert elements of login form are present
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('nom')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('submit')).toBeInTheDocument();
  });
});

  test('renders sign up form when "I dont have account" is clicked', () => {
    render(<Login />);
    
    // Click on "I dont have account ?" to switch to sign up form
    fireEvent.click(screen.getByText('I dont have account ?'));
    
    // Assert elements of sign up form are present
    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('mail')).toBeInTheDocument();
    expect(screen.getByTestId('motDePass')).toBeInTheDocument();
    expect(screen.getByTestId('entrer')).toBeInTheDocument();
  });

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));

test('votre test', () => {
    render(
        <Router>
            <Login />
        </Router>
    );
});