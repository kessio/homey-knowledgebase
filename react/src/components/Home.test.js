import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders the Home component with title and SearchBar', () => {
    render(<Home />);
  
    const title = screen.getByRole('heading', { name: /Homey Knowledge Base/i });
    expect(title).toBeInTheDocument();
  
    const searchBar = screen.getByRole('textbox', { placeholder: /How can I help you?/i });
    expect(searchBar).toBeInTheDocument();
  });
  