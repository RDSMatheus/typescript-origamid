import moedaParaNumero from './currencyToNumber.js';
import stringToDate from './stringToDate.js';
export default function normalizeTransaction(transaction) {
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
//# sourceMappingURL=normalizeTransaction.js.map