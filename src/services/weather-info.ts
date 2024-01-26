import { useQuery } from "@tanstack/react-query";
import { OpenWeatherMapResponse } from "../../types";

async function fetchWeatherInfo(city: string) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_MAPS_API_KEY}`
  ).then((res) => res.json());
}

export function useWeatherInfo(city: string) {
  const query = useQuery<OpenWeatherMapResponse>({
    queryKey: ["weather-info", city],
    queryFn: () => fetchWeatherInfo(city),
  });

  return query;
}
