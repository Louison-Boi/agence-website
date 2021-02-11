import React, { useEffect } from 'react';
import studyCase from 'data/studyCase';

import { useParams } from 'react-router-dom';

const StudyCase = () => {
  const { slug } = useParams();
  console.log(studyCase.filter((e) => e.slug === slug));
  const filterData = () => {
    const curentData = studyCase.filter((e) => e.slug === slug);
    return curentData;
  };
  useEffect(() => filterData(), []);

  return (
    <div>
      <h1>{slug}</h1>
      <h2>{filterData()[0].title}</h2>
      <h3>{filterData()[0].text}</h3>
    </div>
  );
};

export default StudyCase;
