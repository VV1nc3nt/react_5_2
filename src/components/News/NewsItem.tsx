/**
 * Returns news item
 * @returns (
 *  <NewsItem logo={} title={} url={} />
 * )
 */

interface Props {
  logo: string;
  title: string;
  url: string;
}

export default function NewsItem({ logo, title, url }: Props) {
  return (
    <div className="news-item">
      <img src={ logo } alt="" className="news-logo" />
      <a href={ url } className="news-link">{ title }</a>
    </div>
  )
}
