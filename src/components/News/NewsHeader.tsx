/**
 * Returns news header
 * @returns (
 *  <NewsHeader main={} extra={} extraLink={} recommendations={} recLink={} />
 * )
 */

interface Props {
  main: string;
  mainLink: string;
  extra: string;
  extraLink: string;
  recommendations: string;
  recLink: string;
}

export default function NewsHeader({ main, mainLink, extra, extraLink, recommendations, recLink }: Props) {
  return (
    <div className="news-header">
      <a href={ mainLink } className="news-header-main">{ main }</a>
      <a href={ extraLink } className="news-header-extra">{ extra }</a>
      <a href={ recLink } className="news-header-extra">{ recommendations }</a>
    </div>
  )
}
