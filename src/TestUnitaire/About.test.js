import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import About from "../pages/About";


describe('About component', () => {
    test('renders about section', () => {
      render(<About />);
      const aboutSection = screen.getByTestId('about-section');
      expect(aboutSection).toBeInTheDocument();
    });
  
    test('renders image', () => {
      render(<About />);
      const image = screen.getByTestId('img');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src');
      expect(image).toHaveAttribute('alt', 'About Img');
    });
  
    test('renders expertise section', () => {
      render(<About />);
      const expertiseSection = screen.getByTestId('div02');
      expect(expertiseSection).toBeInTheDocument();
    });
  
    test('renders expertise items', () => {
      render(<About />);
      const html = screen.getByTestId('html');
      const css = screen.getByTestId('css');
      const javaScript = screen.getByTestId('java script');
      const react = screen.getByTestId('react');
  
      expect(html).toBeInTheDocument();
      expect(html).toHaveTextContent('HTML');
      
      expect(css).toBeInTheDocument();
      expect(css).toHaveTextContent('CSS');
  
      expect(javaScript).toBeInTheDocument();
      expect(javaScript).toHaveTextContent('Java Script');
  
      expect(react).toBeInTheDocument();
      expect(react).toHaveTextContent('React Js');
    });
  });