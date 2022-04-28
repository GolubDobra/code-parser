import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { AddSource } from '../AddSource';
import { Source } from '../Source';

import './style.css';
import { NumberOfLine } from '../NumberOfLine';

export const MainPage = () => {
  const [sourse, setSource] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(!!sourse);
  }, [sourse]);

  return (
    <div className="root">
      <Header />
      <AddSource onChange={setSource} />
      {isLoaded && (
        <div className="styled-code">
          <NumberOfLine code={sourse.code} />
          <Source data={sourse} />
        </div>
      )}
    </div>
  );
};
