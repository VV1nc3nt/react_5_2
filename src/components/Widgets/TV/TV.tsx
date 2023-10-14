/**
 * Returns TV widget
 * @returns (
 *  <TV tvProgramLink={} tvBroadcast={} >
 *    <TVItem tvTime={} tvName={} tvProgramName={} />
 *  </TV>
 * )
 */

import TVItem from "./TVItem"

interface Props {
  tvProgramLink: string;
  tvBroadcast: string;
}

export default function TV({ tvProgramLink, tvBroadcast }: Props) {
  return (
    <div className="tv">
      <div className="tv-header">
        <a href={ tvProgramLink } className="tv-header-title">Телепрограмма - </a>
        <a href={ tvBroadcast } className="tv-header-btn">Эфир</a>
      </div>
      <TVItem tvName="Test TV name 1" tvProgramName="Test TV program name 1" tvTime="00:00" />
      <TVItem tvName="Test TV name 2" tvProgramName="Test TV program name 2" tvTime="00:00" />
      <TVItem tvName="Test TV name 3" tvProgramName="Test TV program name 3" tvTime="00:00" />
    </div>
  )
}
