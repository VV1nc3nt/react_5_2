/**
 * Returns visited widget item
 * @returns (
 *  <VisitedItem visitedSection={} visitedSectionLink={} visitedTitle={} visitedLink={} />
 * )
 */

interface Props {
  visitedSection: string;
  visitedSectionLink: string;
  visitedTitle: string;
  visitedLink: string;
}

export default function VisitedItem({ visitedSection, visitedSectionLink, visitedTitle, visitedLink }: Props) {
  return (
    <div className="visited-item">
      <a href={ visitedSectionLink }>{ visitedSection }</a>
      <span> - </span>
      <a href={ visitedLink }>{ visitedTitle }</a>
    </div>
  )
}
