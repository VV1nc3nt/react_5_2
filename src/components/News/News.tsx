/**
 * Returns news block (Top of the page)
 * @returns (
 *  <News>
 *    <NewsHeader main={} extra={} extraLink={} recommendations={} recLink={} />
 *    <NewsList />
 *    <StockQuotes />
 *    <NewsAd image={} link={} linkText={} adText={} />
 *  </News>
 * )
 */

import NewsAd from "./NewsAd";
import NewsHeader from "./NewsHeader";
import NewsList from "./NewsList";
import StockQuotes from "./StockQuotes";

export default function News() {
  return (
    <div className="news">
      <div className="news-block">
        <NewsHeader main="Сейчас в СМИ" extra="в России" extraLink="" recommendations="Рекомендуем" recLink="" />
        <NewsList />
        <StockQuotes />
      </div>
      <NewsAd image="../../../public/vite.svg" link="" linkText="News Ad Test" adText="News Ad Test Text" />
    </div>
  )
}
