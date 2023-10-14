/**
 * Returns visited widget
 * @returns (
 *  <Visited visitedBlockLink={}>
 *    <VisitedItem visitedSection={} visitedSectionLink={} visitedTitle={} visitedLink={} />
 *    ...
 *  </Visited>
 * )
 */

import VisitedItem from "./VisitedItem"

interface Props {
  visitedBlockLink: string;
}

export default function Visited({ visitedBlockLink }: Props) {
  return (
    <div className="visited">
      <a href={ visitedBlockLink } className="visited-header">Посещаемое</a>
      <VisitedItem visitedSection="Visited Section 1" visitedSectionLink="" visitedTitle="Visited title 1" visitedLink="" />
      <VisitedItem visitedSection="Visited Section 2" visitedSectionLink="" visitedTitle="Visited title 2" visitedLink="" />
      <VisitedItem visitedSection="Visited Section 3" visitedSectionLink="" visitedTitle="Visited title 3" visitedLink="" />
    </div>
  )
}
