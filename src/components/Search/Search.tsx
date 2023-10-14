/**
 * Returns search block (Middle of the page)
 * @returns (
 *  <Search>
 *    <Headers />
 *    <SearchForm logo={} />
 *    <SearchAd adText={} adLink={} />
 *  </Search>
 * )
 */

import Headers from "./Headers"
import SearchAd from "./SearchAd"
import SearchForm from "./SearchForm"

export default function Search() {
  return (
    <>
      <Headers />
      <SearchForm logo="../../../public/vite.svg" />
      <SearchAd adText="Test search ad" adLink="" />
    </>
  )
}
