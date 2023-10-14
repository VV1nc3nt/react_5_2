/**
 * Returns live widget
 * @returns (
 *  <Live liveLink={}>
 *    <LiveItem liveProgramLink={} liveName={} liveChanelLink={} liveChanel={} />
 *  </Live>
 * )
 */

import LiveItem from "./LiveItem";

interface Props {
  liveLink: string;
}

export default function Live({ liveLink }: Props) {
  return (
    <div className="live">
      <a href={ liveLink } className="live-header">Эфир</a>
      <LiveItem liveProgramLink="" liveName="Test Live Name 1" liveChanelLink="" liveChanel="Test Live Chanel 1" />
      <LiveItem liveProgramLink="" liveName="Test Live Name 2" liveChanelLink="" liveChanel="Test Live Chanel 2" />
      <LiveItem liveProgramLink="" liveName="Test Live Name 3" liveChanelLink="" liveChanel="Test Live Chanel 3" />
    </div>
  )
}
