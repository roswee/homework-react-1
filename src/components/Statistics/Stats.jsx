import PropTypes from 'prop-types';
import styles from "./Stats.module.css"

const {statistics, statlist__title, statlist__label, statlist__percentage, statlist__name, statlist} = styles

export const Statistics = ({title, stats}) => {
return (
<div className={statistics}>
  {title? (<h2 className={statlist__title}>{title}</h2>) : null}

  <ul className={statlist}>
    {stats.map(stat =>(
        <li key={stat.id} className={statlist__name}>
            <span className={statlist__label}>{stat.label}</span>
            <span className={statlist__percentage}>{stat.percentage}</span>
        </li>
    ))}
  </ul>
</div>
);
}

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  };