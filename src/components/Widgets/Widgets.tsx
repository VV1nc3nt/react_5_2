/**
 * Returns widgets block (Bottom of the page)
 * @returns (
 *  <Widgets>
 *    <Banner bannerLink={} banner={} />
 *    <Wheather wheatherImg={} wheatherValue={} wheatherDay={} wheatherNight={} />
 *    <Map mapLink={} mapCountry={} />
 *    <TV tvProgramLink={} tvBroadcast={} />
 *  </Widgets>
 * )
 */

import Banner from "./Banners/Banner"
import Visited from "./Visited/Visited"
import Wheather from "./Wheather/Wheather"
import Map from "./Map/Map"
import TV from "./TV/TV"
import Live from "./Live/Live"

export default function Widgets() {
  return (
    <>
      <Banner bannerLink="" banner="../../../public/vite.svg" />
      <div className="widgets">
        <Wheather wheatherLink="" wheatherImg="../../../public/vite.svg" wheatherValue="+23" wheatherDay="+25" wheatherNight="+18" />
        <Visited visitedBlockLink="" />
        <Map mapLink="" mapCountry="России" />
        <TV tvProgramLink="" tvBroadcast="" />
        <Live liveLink="" />
      </div>
    </>
  )
}
