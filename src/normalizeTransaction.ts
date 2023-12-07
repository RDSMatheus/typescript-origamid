import moedaParaNumero from './currencyToNumber.js';
import stringToDate from './stringToDate.js';

declare global {
  type TransactionPayment = 'Boleto' | 'Cartão de Crédito';
  type TransactionStatus =
    | 'Paga'
    | 'Recusada pela operadora de cartão'
    | 'Aguardando pagamento'
    | 'Estornada';

  interface TransactionAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransactionStatus;
    ['Forma de Pagamento']: TransactionPayment;
    ['Valor (R$)']: string;
    ['Cliente Novo']: number;
    Email: string;
  }

  interface Transaction {
    nome: string;
    id: number;
    data: Date;
    status: TransactionStatus;
    moeda: string;
    pagamento: TransactionPayment;
    valor: number | null;
    novo: boolean;
    email: string;
  }
}

export default function normalizeTransaction(transaction: TransactionAPI): Transaction {
  return {
    nome: transaction.Nome,
    id: transaction.ID,
    data: stringToDate(transaction.Data),
    status: transaction.Status,
    moeda: transaction['Valor (R$)'],
    pagamento: transaction['Forma de Pagamento'],
    valor: moedaParaNumero(transaction['Valor (R$)']),
    novo: Boolean(transaction['Cliente Novo']),
    email: transaction.Email,
  };
}
