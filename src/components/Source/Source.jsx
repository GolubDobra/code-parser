import React from 'react';

import { ErrorNotice } from '../ErrorNotice';

import './style.css';

export const Source = ({ data }) => {
  console.log('data', data);
  const numOfLineWithDefect = data.allNumOfLine;
  const numOfLatterWithDefect = data.numOfLatter;
  const styledRef = React.createRef();
  // console.log('numOfLineWithDefect: ', numOfLineWithDefect);
  // console.log('numOfLatterWithDefect: ', numOfLatterWithDefect);
  const styledElement = { backgroundColor: '#fad5d5' };
  const allLineDefects = [];
  for (let key in numOfLineWithDefect) {
    allLineDefects.push(...numOfLineWithDefect[key]);
  }

  const styledCode = (code) => {
    const separateCode = code.split(/[\n]/);
    // console.log('separateCode', separateCode);
    // const numOfLine = 0;

    const result = separateCode.map((cur, index) => {
      if (allLineDefects.includes(index + 1)) {
        return (
          <pre key={index} style={styledElement}>
            {cur}
          </pre>
        );
      }
      return <pre key={index}>{cur}</pre>;
    });

    // console.log('result: ', result);

    return result && result.length > 0 ? result : null;
  };

  // console.log(styledCode(data.code));
  return (
    <div className={!data.error ? 'root root_source' : 'root root_error'}>
      {!data.error ? (
        <React.Fragment>
          <pre className="source" ref={styledRef}>
            {styledCode(data.code).map((element) => element)}
          </pre>
          <ErrorNotice notice={numOfLatterWithDefect} allLineDefects={allLineDefects} />
        </React.Fragment>
      ) : (
        <div className="error">{data.error}</div>
      )}
    </div>
  );
};
