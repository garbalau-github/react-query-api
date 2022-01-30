import React from 'react';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import Characters from './components/Characters';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className='App'>
      <div className='container'>
        <h1>Rick and Morty Characters</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
