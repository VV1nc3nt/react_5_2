/**
 * Returns search form
 * @returns (
 *  <SearchForm logo={} />
 * )
 */

interface Props {
  logo: string;
}

export default function SearchForm({ logo }: Props) {
  return (
    <div className="search-form">
      <img src={ logo } alt="" className="search-logo" />
      <form action="">
        <input type="text" name="search" id="search" className="search-input" />
        <button className="search-button">Найти</button>
      </form>
    </div>
  )
}
