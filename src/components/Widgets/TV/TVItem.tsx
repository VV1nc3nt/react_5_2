/**
 * Returns TV widgets item
 * @returns (
 *  <TVItem tvTime={} tvName={} tvProgramName={} />
 * )
 */

interface Props {
  tvTime: string;
  tvName: string;
  tvProgramName: string;
}

export default function TVItem({ tvTime, tvName, tvProgramName }: Props) {
  return (
    <a href="" className="tv-item">
      <span className="tv-time">{ tvTime }</span>
      <span className="tv-name">{ tvName }</span>
      <span className="tv-program">{ tvProgramName }</span>
    </a>
  )
}
