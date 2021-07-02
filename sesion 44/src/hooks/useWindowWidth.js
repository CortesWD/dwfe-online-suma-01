/**
 * Dependencies
 */
import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    function reSizer() {
      setWidth(window.innerWidth)
    };

    // on event resize
    window.addEventListener("resize", reSizer);
    // ejecuto una vez para hacer el set del valor
    reSizer();

    return () => window.removeEventListener("resize", reSizer);

  }, []);

  return width;
}