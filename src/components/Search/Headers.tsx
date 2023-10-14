/**
 * Return headers list
 * @returns (
 *  <Headers>
 *    <Header title={} titleLink={} />
 *    ...
 *  </Headers>
 * )
 */

import Header from "./Header";

export default function Headers() {
  return (
    <div className="headers-list">
      <Header title="Test header 1" titleLink="" />
      <Header title="Test header 2" titleLink="" />
      <Header title="Test header 3" titleLink="" />
      <Header title="Test header 4" titleLink="" />
      <Header title="Test header 5" titleLink="" />
      <Header title="Test header 6" titleLink="" />
      <Header title="Test header 7" titleLink="" />
      <Header title="Test header 8" titleLink="" />
    </div>
  )
}
