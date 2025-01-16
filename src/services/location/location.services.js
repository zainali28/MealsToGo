import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchItem) => {
  return new Promise((resolve, reject) => {
    const mockLocation = camelize(locations)[camelize(searchItem)];
    if (!mockLocation) reject("not found");
    resolve(mockLocation);
  });
};

export const locationTransform = ({ results = [] }) => {
  const {
    geometry: {
      location: { lat, lng },
      viewport,
    },
  } = camelize(results)[0];
  return { lat, lng, viewport };
};
