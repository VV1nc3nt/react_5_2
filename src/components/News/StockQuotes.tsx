/**
 * Returns stock quotes
 * @returns (
 *  <StockQuotes>
 *    <StockQuote name={} value={} increase={} />
 *  </StockQuotes>
 * )
 */

import StockQuote from "./StockQuote";

export default function StockQuotes() {
  return (
    <div className="quotes">
      <StockQuote name="TestQuote1" value="65" increase="+1" />
      <StockQuote name="TestQuote2" value="64" increase="+2" />
      <StockQuote name="TestQuote3" value="63" increase="+3" />
    </div>
  )
}
