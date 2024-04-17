import { createRoot } from 'react-dom/client';
import './index.css';
import { DealList } from './DealList';

const data = restoreDealList('dealList');
let dealList = [...data];

function saveDealList(array) {
  localStorage.setItem('dealList', JSON.stringify(array));
}

function restoreDealList(nameArr) {
  const rawDealList = localStorage.getItem(nameArr);

  if (rawDealList.length === 0) {
    return [];
  } else {
    return JSON.parse(rawDealList);
  }
}

function syncDealList(array) {
  saveDealList(array);
  root.render(
    <DealList
      dealList={array}
      dealAdd={dealAdd}
      onDone={onDone}
      onDelete={onDelete}
      filterDealList={filterDealList}
    />
  );
}

const root = createRoot(document.getElementById('deal'));

const buttonAdd = document.getElementById('button-add');

buttonAdd.addEventListener('click', () => {
  dealList = dealList.concat({
    id: crypto.randomUUID(),
    title: '',
    done: false,
  });

  syncDealList(dealList);
});

function dealAdd(deal, input) {
  deal.title = input.value;

  syncDealList(dealList);
}

function onDone(deal) {
  deal.done = !deal.done;

  syncDealList(dealList);
}

function onDelete(id) {
  dealList = dealList.filter((deal) => deal.id !== id);

  syncDealList(dealList);
}

function filterDealList() {
  dealList = dealList.filter((deal) => deal.title !== '');

  syncDealList(dealList);
}

syncDealList(dealList);
