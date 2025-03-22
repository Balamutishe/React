import './App.css';
import { SearchableList } from './SearchableList';

const list = [
  {
    id: '1',
    title: 'Арбуз',
  },

  {
    id: '2',
    title: 'Огурец',
  },

  {
    id: '3',
    title: 'Помидор',
  },
];

function App() {
  return <SearchableList list={list} />;
}

export default App;
