import App from './components/App';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './fonts/Comic_Sans_MS.woff';
import './fonts/Comic_Sans_MS.woff2';
import './styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
