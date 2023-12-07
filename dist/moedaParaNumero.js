export default function moedaParaNumero(moeda) {
    const numeroNormalizado = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(numeroNormalizado) ? null : numeroNormalizado;
}
//# sourceMappingURL=moedaParaNumero.js.map