import React from 'react';

import { ErrorNotice } from '../ErrorNotice';

import './style.css';

export const Source = ({ data }) => {
  let numOfLineWithDefect = {};
  if (data) {
    for (let key in data) {
      if (key !== 'code' && key !== 'errorNotice') {
        numOfLineWithDefect = {
          ...numOfLineWithDefect,
          ...{
            [key]: Object.values(data[key].allNumOfLine).flat(),
          },
        };
      }
    }
  }

  const allNumOfLineWithDefect = Object.values(numOfLineWithDefect).flat();
  const styledWarningElement = { backgroundColor: '#efe842bd' };
  const styledErrorElement = { backgroundColor: '#ef4242ab' };
  const styledPossibleErrorElement = { backgroundColor: '#ff7834bf' };

  const styledCode = (code) => {
    const separateCode = code.split(/[\n]/);
    const result = [];
    result.push(
      ...separateCode.map((cur, index) => {
        if (allNumOfLineWithDefect.includes(index + 1)) {
          return (
            <pre
              key={index}
              style={
                !numOfLineWithDefect.warnings ||
                !numOfLineWithDefect.error ||
                !numOfLineWithDefect.possibleError
                  ? {}
                  : numOfLineWithDefect.error.includes(index + 1)
                  ? styledErrorElement
                  : numOfLineWithDefect.warnings.includes(index + 1)
                  ? styledWarningElement
                  : numOfLineWithDefect.possibleError.includes(index + 1)
                  ? styledPossibleErrorElement
                  : {}
              }>
              {cur}
            </pre>
          );
        }
        return <pre key={index}>{cur}</pre>;
      }),
    );

    return result && result.length > 0 ? result : null;
  };

  return (
    <div className={!data.requestError ? 'source source_success' : 'source source_error'}>
      {!data.requestError ? (
        <React.Fragment>
          <pre className="source">{styledCode(data.code).map((element) => element)}</pre>
          <ErrorNotice notice={data.errorNotice} numOfLineWithDefect={numOfLineWithDefect} />
        </React.Fragment>
      ) : (
        <div className="error">{data.requestError}</div>
      )}
    </div>
  );
};
