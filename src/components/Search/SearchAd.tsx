/**
 * Returns search ad
 * @returns (
 *  <SearchAd adText={} adLink={} />
 * )
 */

interface Props {
  adText: string;
  adLink: string;
}

export default function SearchAd({ adText, adLink }: Props) {
  return (
    <a className="search-ad" href={ adLink }>{ adText }</a>
  )
}
