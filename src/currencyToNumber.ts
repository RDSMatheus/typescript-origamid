/**
 * Recebe string "1.200,50" retorna number: 1200.50
 */
export default function currencyToNumber(moeda: string): number | null {
  const normalizedNumber = Number(moeda.replaceAll('.', '').replace(',', '.'));
  return isNaN(normalizedNumber) ? null : normalizedNumber;
}
