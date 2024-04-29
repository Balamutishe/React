import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Account } from './components/Account/Account';
import { FetchNotesListView } from './components/NotesListView/FetchNotesListView';
import { queryClient } from './api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <Account />

        <FetchNotesListView />
      </div>
    </QueryClientProvider>
  );
}

export default App;
