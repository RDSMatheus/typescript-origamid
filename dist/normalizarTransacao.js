import moedaParaNumero from './currencyToNumber.js';
export default function normalizarTransacao(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: transacao.Data,
        status: transacao.Status,
        moeda: transacao['Valor (R$)'],
        pagamento: transacao['Forma de Pagamento'],
        valor: moedaParaNumero(transacao['Valor (R$)']),
        novo: Boolean(transacao['Cliente Novo']),
        email: transacao.Email,
    };
}
//# sourceMappingURL=normalizarTransacao.js.map