import './App.css';
import { Account } from './components/Account/Account';
import { NotesListView } from './components/NotesListView';

function App() {
  return (
    <div className='app'>
      <Account />

      <NotesListView />
    </div>
  );
}

export default App;
