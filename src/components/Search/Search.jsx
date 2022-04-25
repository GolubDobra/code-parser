import React from 'react';

import { readFile } from '../../scripts/Parser';

export const Search = () => {
  const handleChangeFile = (event) => {
    readFile(event.target);
  };

  return (
    <React.Fragment>
      <p>Выберите файл, который хотите проверить</p>
      <input type="file" onChange={handleChangeFile.bind(this)} />
    </React.Fragment>
  );
};
