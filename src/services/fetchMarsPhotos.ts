import { formatDate } from "../shared/utils/formDate";

const apiKey = "JlZa9OOF3gCpE92rvoPvbs1YiO5X9V5GeJf0TS1S";

export const fetchMarsPhotos = async ({
  camera,
  earthDate,
}: {
  camera: string;
  earthDate: Date;
}) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formatDate(earthDate)}&camera=${camera}&page=1&api_key=${apiKey}`;
  const options = {
    method: "GET",
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const json = await res.json();

  return json;
};
