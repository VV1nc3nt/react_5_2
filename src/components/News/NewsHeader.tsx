/**
 * Returns news header
 * @returns (
 *  <NewsHeader main={} extra={} extraLink={} recommendations={} recLink={} />
 * )
 */

interface Props {
  main: string;
  extra: string;
  extraLink: string;
  recommendations: string;
  recLink: string;
}

export default function NewsHeader({ main, extra, extraLink, recommendations, recLink }: Props) {
  return (
    <div className="news-header">
      <h2 className="news-header-main">{ main }</h2>
      <a href={ extraLink } className="news-header-extra">{ extra }</a>
      <a href={ recLink } className="news-header-extra">{ recommendations }</a>
    </div>
  )
}
