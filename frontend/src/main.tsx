import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter } from "react-router-dom";
import App from './App'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={ queryClient }>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
