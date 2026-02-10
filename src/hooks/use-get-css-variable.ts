import { useEffect, useState } from "react";

export function useGetCSSVariable(
  variableName: string,
  defaultValue: string = "",
) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const updateValue = () => {
      const cssValue = getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim();
      setValue(cssValue || defaultValue);
    };

    // Initial value
    updateValue();

    // Listen for class changes on documentElement (when theme changes)
    const observer = new MutationObserver(updateValue);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [variableName, defaultValue]);

  return value;
}
