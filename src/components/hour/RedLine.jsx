import React, { useEffect, useState } from 'react';

function RedLine() {
  const [redLine, setRedLine] = useState(new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setRedLine(new Date().getMinutes());
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, [redLine]);

  const style = {
    top: redLine,
  };

  return <div className="red-line" style={style}></div>;
}

export default RedLine;
