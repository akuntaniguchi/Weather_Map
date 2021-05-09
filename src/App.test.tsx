import { render, screen } from '@testing-library/react';
import App from './App';

/*
  Writing Unit Tests - The Three As
  Arrange -> Set up the test data, test conditions and test environment
  Act -> Run logic that should be tested
  Assert -> Compare execution results with expected results
*/

describe('App Component', () => {
  test('renders Enter a Zip Code: as a text', () => {
    // Arrange
    render(<App />);
    
    // Act
    // ... Nothing
  
    // Assert
    const locationElement = screen.getByText('Enter a Zip Code:');
    expect(locationElement).toBeInTheDocument();
  });
});
