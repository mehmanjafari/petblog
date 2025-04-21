import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './style/style.css';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
