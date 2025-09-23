import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      language: 'en',
      changeLanguage: jest.fn(),
    },
  }),
  Trans: ({ children }) => <>{children}</>,
}));

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }) => <>{children}</>,
}));

jest.mock('rehype-raw', () => ({
  __esModule: true,
  default: () => () => null,
}));

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByText('navbar.home')).toBeInTheDocument();
  expect(screen.getByText('navbar.region')).toBeInTheDocument();
  expect(screen.getByText('navbar.guide')).toBeInTheDocument();
});
