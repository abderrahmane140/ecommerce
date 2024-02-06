import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import About from "../pages/About";


describe('About component', () => {
  test('renders about section with correct content', () => {
    render(<About />);
    
    // Vérifie si la section about est rendue
    expect(screen.getByTestId('about-section')).toBeInTheDocument();

    // Vérifie si l'image est rendue avec la source correcte
    const imgElement = screen.getByTestId('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src');

    // Vérifie si le titre "About" est rendu
    expect(screen.getByTestId('abt')).toHaveTextContent('About');

    // Vérifie si l'adresse est rendue avec les informations correctes
    expect(screen.getByTestId('div01')).toBeInTheDocument();
    expect(screen.getByText('Safi, Salame, Morroco')).toBeInTheDocument();
    expect(screen.getByText('+91 987-654-4321')).toBeInTheDocument();
    expect(screen.getByText('crowncoder@gmail.com')).toBeInTheDocument();

    // Vérifie si l'expertise est rendue avec les icônes et les textes corrects
    expect(screen.getByTestId('div02')).toBeInTheDocument();
    expect(screen.getByTestId('html')).toHaveTextContent('HTML');
    expect(screen.getByTestId('css')).toHaveTextContent('CSS');
    expect(screen.getByTestId('java script')).toHaveTextContent('Java Script');
    expect(screen.getByTestId('react')).toHaveTextContent('React Js');
  });
});