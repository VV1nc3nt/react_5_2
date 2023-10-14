/**
 * Returns all blocks together
 * @returns (
 *  <Page>
 *    <News />
      <Search />
      <Widgets />
    </Page>
 * )
 */

import News from "./News/News";
import Search from "./Search/Search";
import Widgets from "./Widgets/Widgets";

export default function Page() {
  return (
    <>
      <News />
      <Search />
      <Widgets />
    </>
  )
}
