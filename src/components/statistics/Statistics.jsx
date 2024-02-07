import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  // Función para sumar los porcentajes de los elementos con la etiqueta ".pdf"
  const sumarPorcentajePDF = stats => {
    let suma = 0;
    stats.forEach(item => {
      if (item.label === '.pdf') {
        suma += item.percentage;
      }
    });
    return suma;
  };

  // Llama a la función para sumar los porcentajes de los elementos con la etiqueta ".pdf"
  const totalPdf = sumarPorcentajePDF(stats);

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.slice(0, 4).map(stat =>
          stat.label !== '.pdf' ? (
            <li key={stat.id} className={styles.item}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage} %</span>
            </li>
          ) : (
            <li key={stat.id} className={styles.item}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{totalPdf} %</span>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

// Definir PropTypes para el componente Statistics
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
