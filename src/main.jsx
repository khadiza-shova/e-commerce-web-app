
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes/Route.jsx'
import AuthProvider from './Provider/AuthProvider.jsx';
import AddedProvider from './Provider/AddedProvider.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AddedProvider>

        <RouterProvider router={Router} />
      </AddedProvider>
    </AuthProvider>
  </React.StrictMode>
)
