import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';
import App from './App';
import React from "react";
import ReactDOM from "react-dom";

// test створений автоматично create-react-app  в 2021 р.; test не проходить
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test створений автоматично create-react-app  в 2019 р. за прикладом Дімича
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
})
