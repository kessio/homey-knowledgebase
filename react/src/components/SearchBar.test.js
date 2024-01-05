import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import SearchBar from './SearchBar';

const mockAxios = new MockAdapter(axios);

// Test case for rendering input field and placeholder text
test('renders input field and placeholder', () => {
  render(<SearchBar />);

  const inputField = screen.getByPlaceholderText(/How can I help you?/i);
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue('');
});

// Test case for handling input changes and triggering the search
test('handles input changes and triggers search with a delay', async () => {
  // Mock API response for search results
  const mockResults = [
    { id: 1, title: 'Sample Article 1', content: 'Content 1' },
    { id: 2, title: 'Sample Article 2', content: 'Content 2' },
  ];
  mockAxios.onGet('http://127.0.0.1:5000/api/v1/search_articles/search').reply(200, mockResults);

  render(<SearchBar />);
  userEvent.type(screen.getByPlaceholderText(/How can I help you?/i), 'sample query');

  // Wait for the loading message to appear
  await waitFor(() => {
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

});

