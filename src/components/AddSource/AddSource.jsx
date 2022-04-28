import React, { useEffect, useState } from 'react';

import { readFile } from '../../scripts/ReadFile';

import './style.css';

export const AddSource = ({ onChange }) => {
  const [sourseInfo, setSourseInfo] = useState(null);

  useEffect(() => {
    if (sourseInfo) {
      onChange(sourseInfo);
    }
  }, [onChange, sourseInfo]);

  const handleChangeFile = async (event) => {
    setSourseInfo(await readFile(event.target));
  };

  return (
    <React.Fragment>
      <p>Выберите файл (HTML/JavaScript), который хотите проверить</p>
      <input className="code-input" type="file" onChange={handleChangeFile.bind(this)} />
    </React.Fragment>
  );
};
