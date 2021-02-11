// eslint-disable-next-line import/no-unresolved
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import studyCase from '../../data/studyCase';

const Work = () => {
  const studyCaseList = studyCase.map((study) => (
    <li key={study.slug}>
      <Link to={`/work/${study.slug}`}>{study.title}</Link>
    </li>
  ));

  return (
    <div>
      <h3>
        Au fil des années, nous avons pu accompagner les meilleurs.

        Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
      </h3>

      <ul>{studyCaseList}</ul>
    </div>
  );
};
export default Work;
