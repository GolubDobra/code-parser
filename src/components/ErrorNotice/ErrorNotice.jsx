import React from 'react';

import './style.css';

export const ErrorNotice = ({ notice, numOfLineWithDefect }) => {
  const warnings = notice.warnings;
  const error = notice.error;
  const possibleError = notice.possibleError;

  const numOfErrorfLines = Array.from(new Set(numOfLineWithDefect.error)).join(', ');
  const numOfWarningsfLines = Array.from(new Set(numOfLineWithDefect.warnings)).join(', ');
  const numOfPpossibleErrorfLines = Array.from(new Set(numOfLineWithDefect.possibleError)).join(
    ', ',
  );

  return (
    <div className="error">
      {numOfErrorfLines && (
        <div className="error-notice">
          {error} Line(s): {numOfErrorfLines}
        </div>
      )}
      {numOfWarningsfLines && (
        <div className="warnings-notice">
          {warnings} Line(s): {numOfWarningsfLines}
        </div>
      )}
      {numOfPpossibleErrorfLines && (
        <div className="possible-error-notice">
          {possibleError} Line(s): {numOfPpossibleErrorfLines}
        </div>
      )}
      {!numOfErrorfLines && !numOfWarningsfLines && !numOfPpossibleErrorfLines && (
        <div className="success-notice">Congratulations! Your code has no vulnerabilities.</div>
      )}
    </div>
  );
};
