import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
// main.jsx

import { HelmetProvider } from 'react-helmet-async'
// Function to set the title
function setTitle(title) {
  document.title = title;
}


// Call the function to set the title
setTitle('Axle Tech');

// The rest of your React application code follows...

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <App/>
    </HelmetProvider>
  </React.StrictMode>

)

reportWebVitals();
