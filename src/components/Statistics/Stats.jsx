import PropTypes from 'prop-types';
import styles from "./Stats.module.css"

const {statistics} = styles

export const Statistics = ({title, stats}) => {
return (
<div className={statistics}>
  {title? (<h2 class="title">{title}</h2>) : null}

  <ul class="stat-list">
    {stats.map(stat =>(
        <li class="item">
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
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