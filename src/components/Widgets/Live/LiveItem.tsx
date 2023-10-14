/**
 * Returns live widgets item
 * @returns (
 *  <LiveItem liveProgramLink={} liveName={} liveChanelLink={} liveChanel={} />
 * )
 */

interface Props {
  liveProgramLink: string;
  liveName: string;
  liveChanelLink: string;
  liveChanel: string;
}

export default function LiveItem({ liveProgramLink, liveName, liveChanelLink, liveChanel }: Props) {
  return (
    <div className="live-item">
      <img src="../../../public/vite.svg" alt="" className="live-icon"/>
      <a href={ liveProgramLink } className="live-name">{ liveName + ' - '}</a>
      <a href={ liveChanelLink } className="live-chanel"> { liveChanel }</a>
    </div>
  )
}
