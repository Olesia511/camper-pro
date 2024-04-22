export const flattenObjectInArray = (obj) => {
  const flattened = [];

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        flattened.push({ [nestedKey]: nestedValue });
      });
    } else {
      flattened.push({ [key]: value });
    }
  });
  return flattened;
};
