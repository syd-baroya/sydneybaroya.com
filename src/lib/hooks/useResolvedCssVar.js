import { useState, useEffect } from 'react';

export function useResolvedCssVar(variableName, deps = []) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const val = getComputedStyle(document.body)
        .getPropertyValue(variableName)
        .trim();
      setValue(val);
    }, 0);

    return () => clearTimeout(timeout);
  }, [variableName, ...deps]); // eslint-disable-line react-hooks/exhaustive-deps

  return value;
}
