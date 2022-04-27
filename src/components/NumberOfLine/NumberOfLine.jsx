import React from 'react';
import { getAllLines } from '../../scripts/getNumOfLines';

import './style.css';

export const NumberOfLine = ({ code }) => {
  return (
    <div className="number-of-line">
      {code &&
        Array.from(new Array(getAllLines(code))).map(
          (_, index) =>
            index !== 0 && (
              <div key={index} className="line">
                {index}
              </div>
            ),
        )}
    </div>
  );
};
