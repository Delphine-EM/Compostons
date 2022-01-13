// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : components
import App from './components/App/app';

// == Import : local
import { UserContextProvider } from './context/userContext';
import './styles/index.scss';

const rootReactElement = (
    <React.StrictMode>
        <UserContextProvider>
            <Router>
                <App />
            </Router>
        </UserContextProvider>
    </React.StrictMode>
);
const target = document.getElementById('root');

render(rootReactElement, target);
