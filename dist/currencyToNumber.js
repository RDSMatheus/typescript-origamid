export default function currencyToNumber(moeda) {
    const normalizedNumber = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(normalizedNumber) ? null : normalizedNumber;
}
//# sourceMappingURL=currencyToNumber.js.map