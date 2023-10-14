/**
 * Returns news ad
 * @returns (
 *  <NewsAd image={} link={} linkText={} adText={} />
 * )
 */

interface Props {
  image: string;
  link: string;
  linkText: string;
  adText: string;
}

export default function NewsAd({ image, link, linkText, adText }: Props) {
  return (
    <div className="news-ad">
      <img src={ image } alt="" className="news-ad-img" />
      <a href={ link } className="news-ad-title">{ linkText }</a>
      <p className="news-ad-text">{ adText }</p>
    </div>
  )
}
