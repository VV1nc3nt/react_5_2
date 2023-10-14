/**
 * Returns map widget
 * @returns (
 *  <Map mapLink={} mapCountry={}>
 *    <MapItem mapItemLink={} mapItemTitle={} />
 *  </Map>
 * )
 */

import MapItem from "./MapItem";

interface Props {
  mapLink: string;
  mapCountry: string;
}

export default function Map({ mapLink, mapCountry }: Props) {
  return (
    <div className="map">
      <a href={ mapLink } className="map-header">Карта { mapCountry }</a>
      <MapItem mapItemLink="" mapItemTitle="Расписания" />
    </div>
  )
}
