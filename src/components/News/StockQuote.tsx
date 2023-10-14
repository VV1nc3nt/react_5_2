/**
 * Returns stock quote
 * @returns (
 *  <StockQuote name={} value={} increase={} />
 * )
 */

interface Props {
  name: string;
  value: string;
  increase: string;
}

export default function StockQuote({ name, value, increase }: Props) {
  return (
    <div className="stock-quote">
      <p className="stock-quote-name">{ name }</p>
      <p className="stock-quote-value">{ value }</p>
      <p className="stock-quote-increase">{ increase }</p>
    </div>
  )
}
