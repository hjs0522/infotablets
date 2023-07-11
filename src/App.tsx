import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Table from './Table';

const queryClient = new QueryClient();

function App() {
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Table></Table>
      </QueryClientProvider>
    </div>
  );
}

export default App;
