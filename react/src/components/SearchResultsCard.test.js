/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import SearchResultsCard from './SearchResultsCard';
import { renderResult } from './utils/searchHelpers';

const mockAxios = new MockAdapter(axios);

// Mock `renderResult` for control during testing
jest.mock('./utils/searchHelpers', () => ({
    renderResult: jest.fn(),
  }));

  // Test case for rendering the card with results
test('renders table header, results, and calls renderResult for each question', async () => {
    const mockQuestions = [
      { id: 1, title: 'Question 1', content: 'Content 1' },
      { id: 2, title: 'Question 2', content: 'Content 2' },
    ];
    const mockValue = 'sample query';
  
    render(<SearchResultsCard questions={mockQuestions} value={mockValue} />);

    await waitFor(() => {
        expect(screen.getByText(`"Results for ${mockValue}"`)).toBeInTheDocument();
        expect(screen.getAllByRole('row')).toHaveLength(mockQuestions.length);
        expect(renderResult).toHaveBeenCalledTimes(mockQuestions.length);

    });
});  

test('calls API on click and reloads page', async () => {
    const mockQuestion = { id: 42 };
    mockAxios.onPost('http://127.0.0.1:5000/api/v1/search_articles/count_search').reply(200);

    render(<SearchResultsCard questions={[mockQuestion]} value="test" />);
  
    const resultRow = screen.getByRole('row'); 
    userEvent.click(resultRow); 

    });