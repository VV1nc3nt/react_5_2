/**
 * Returns map widgets item
 * @returns (
 *  <MapItem mapItemLink={} mapItemTitle={} />
 * )
 */

interface Props {
  mapItemLink: string;
  mapItemTitle: string;
}

export default function MapItem({ mapItemLink, mapItemTitle }: Props) {
  return (
    <div className="map-item">
      <a href={ mapItemLink }>{ mapItemTitle }</a>
    </div>
  )
}
