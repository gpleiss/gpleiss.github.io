import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import { unregister } from './registerServiceWorker';

unregister();
render(<App />, document.getElementById('root'));
