import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
return (
<Statistics class="statistics">
  {title? (<h2 class="title">{title}</h2>) : null}

  <ul class="stat-list">
    {stats.map(stat =>(
        <li class="item">
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
        </li>
    ))}
  </ul>
</Statistics>
);
}

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  };