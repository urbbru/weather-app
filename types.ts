export type City = {
  name: string;
  imageUrl: string;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type OpenWeatherMapResponse = {
  weather: Weather[];
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
};

export type MenuItem = { label: string; href: string };
