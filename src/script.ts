import Stats from './Stats.js';
import { CountList } from './countBy.js';
import fetchData from './fetchData.js';
import normalizarTransacao from './normalizeTransaction.js';

async function handleData() {
  const data = await fetchData<TransactionAPI[]>(
    'https://api.origamid.dev/json/transacoes.json?',
  );
  if (!data) return;
  console.log(data);
  const transactions = data.map(normalizarTransacao);
  fillTables(transactions);
  fillStats(transactions);
}

function fillList(list: CountList, containderId: string): void {
  const element = document.getElementById(containderId);
  if (element) {
    Object.keys(list).forEach((key) => {
      element.innerHTML += `<p>${key}:${list[key]}</p>`;
    });
  }
}

function fillStats(transactions: Transaction[]): void {
  const data = new Stats(transactions);
  console.log(data);

  fillList(data.payment, 'payment');
  fillList(data.status, 'status');

  const totalElement = document.querySelector<HTMLElement>('#total span');
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  const dayElement = document.querySelector<HTMLElement>('#day span');
  if (dayElement) {
    dayElement.innerText = data.bestDay[0];
  }
}

function fillTables(transactions: Transaction[]): void {
  const tabela = document.querySelector('#transactions tbody');
  if (!tabela) return;
  transactions.forEach((transaction) => {
    tabela.innerHTML += `
    <tr>
      <td>${transaction.nome}</td>
      <td>${transaction.email}</td>
      <td>R$ ${transaction.valor}</td>
      <td>${transaction.pagamento}</td>
      <td>${transaction.status}</td>
    </tr>
    `;
  });
}

handleData();
