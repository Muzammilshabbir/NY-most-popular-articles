import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react'; // Update this line
import ArticleList from '../components/ArticleList';
import { fetchMostPopularArticles } from '../services/nytimesApi.api';

jest.mock('../services/nytimesApi.api');

describe('ArticleList', () => {
  it('renders article list', async () => {
    const articles = [
      {
        id: 1,
        title: 'Article 1',
        byline: 'Author 1',
        abstract: 'Summary 1',
        published_date: '2023-01-01',
        url: 'https://example.com/1',
      },
      {
        id: 2,
        title: 'Article 2',
        byline: 'Author 2',
        abstract: 'Summary 2',
        published_date: '2023-01-02',
        url: 'https://example.com/2',
      },
    ];

    fetchMostPopularArticles.mockResolvedValueOnce(articles);

    await act(async () => {
      render(<ArticleList />);
    });

    await waitFor(() => {
      expect(screen.getByText('Article 1')).toBeInTheDocument();
      expect(screen.getByText('Article 2')).toBeInTheDocument();
    });
  });

  it('calls onArticleClick when article is clicked', async () => {
    const articles = [
      {
        id: 1,
        title: 'Article 1',
        byline: 'Author 1',
        abstract: 'Summary 1',
        published_date: '2023-01-01',
        url: 'https://example.com/1',
      },
    ];

    fetchMostPopularArticles.mockResolvedValueOnce(articles);

    await act(async () => {
      render(<ArticleList />);
    });

    const articleLink = screen.getByText('Article 1');
    fireEvent.click(articleLink);

    expect(articleLink).toHaveAttribute('href', 'https://example.com/1');
  });
});
