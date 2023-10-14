/**
 * Returns news items in news list
 * @returns (
 *  <NewsList>
 *    <NewsItem logo={} title={} url={} />
 *    ...
 *  </NewsList>
 * )
 */

import NewsItem from "./NewsItem";

export default function NewsList() {
  return (
    <div className="news-list">
      <NewsItem logo="../../../public/vite.svg" title="Test News 1" url="" />
      <NewsItem logo="../../../public/vite.svg" title="Test News 2" url="" />
      <NewsItem logo="../../../public/vite.svg" title="Test News 3" url="" />
      <NewsItem logo="../../../public/vite.svg" title="Test News 4" url="" />
      <NewsItem logo="../../../public/vite.svg" title="Test News 5" url="" />
    </div>
  )
}
