import React from 'react';

import './style.css';

export const ErrorNotice = ({ notice, allLineDefects }) => {
  const stringOfDefect = Array.from(new Set(allLineDefects)).join(', ');

  return (
    <div className="error">
      <div className="warnings">
        {notice.error} Line(s): {stringOfDefect}
      </div>
    </div>
  );
};
