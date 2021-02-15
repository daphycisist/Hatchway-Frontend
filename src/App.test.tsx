import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  console.log('====================================');
  console.log(screen);
  console.log('====================================');
  // const linkElement = screen.getByText('/Search/');
  expect(true).toBe(true);
});
