import * as React from "react";

/* @example: (min-width: 768px) */
export const useMediaQuery = (query: string) => {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
};
