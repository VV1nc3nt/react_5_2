/**
 * Returns header
 * @returns (
 *  <Header title={} titleLink={} />
 * )
 */

interface Props {
  title: string;
  titleLink: string;
}

export default function Header({ title, titleLink }: Props) {
  return (
    <a href={titleLink}>{ title }</a>
  )
}
