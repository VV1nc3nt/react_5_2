/**
 * Returns wheather widget
 * @returns (
 *  <Wheather wheatherImg={} wheatherValue={} wheatherDay={} wheatherNight={} />
 * )
 */

interface Props {
  wheatherLink: string;
  wheatherImg: string;
  wheatherValue: string;
  wheatherDay: string;
  wheatherNight: string;
}

export default function Wheather({ wheatherLink ,wheatherImg, wheatherValue, wheatherDay, wheatherNight }: Props) {
  return (
    <div className="wheather">
      <a href={ wheatherLink } className="wheather-header">Погода</a>
      <div className="wheather-body">
        <img className="wheather-img" src={ wheatherImg } alt="" />
        <p className="wheather-value">{ wheatherValue }</p>
        <div className="wheather-details">
          <p className="wheather-details-item">Днем { wheatherDay }</p>
          <p className="wheather-details-item">Ночью { wheatherNight }</p>
        </div>
      </div>
    </div>
  )
}
