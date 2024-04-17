import './index.css';
import { createRoot } from 'react-dom/client';
import { TermList } from './TermList';

function saveTermList(terms) {
  localStorage.setItem('termList', JSON.stringify(terms));
}

function restoreTermList() {
  const rawTermList = localStorage.getItem('termList');

  if (!rawTermList) {
    return [];
  } else {
    return JSON.parse(rawTermList);
  }
}

let terms = restoreTermList();

function syncTermList() {
  saveTermList(terms);
  reactRoot.render(<TermList terms={terms} onDelete={deleteItem} />);
}

function addTerm(title, description) {
  terms.push({
    id: crypto.randomUUID(),
    title,
    description,
  });

  terms.sort((terms1, terms2) => (terms1.title < terms2.title ? -1 : 1));

  syncTermList();
}

function deleteItem(id) {
  terms = terms.filter((term) => term.id !== id);

  syncTermList();
}

const descriptionList = document.getElementById('description-list');

const reactRoot = createRoot(descriptionList);

syncTermList();

const form = document.getElementById('add-description');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  form.reset();

  addTerm(title, description);
});
