/**
 * Returns banner
 * @returns (
 *  <Banner bannerLink={} banner={} />
 * )
 */

interface Props {
  bannerLink: string;
  banner: string
}

export default function Banner({ bannerLink, banner }: Props) {
  return (
    <a href={ bannerLink } className="banner">
      <img src={ banner } alt="" className="banner-img" />
    </a>
  )
}
