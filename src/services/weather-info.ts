import { useQuery } from "@tanstack/react-query";
import { OpenWeatherMapResponse } from "../../types";
import axios from "axios";

async function fetchWeatherInfo(city: string) {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_MAPS_API_KEY}`
  );

  return data;
}

export function useWeatherInfo(city: string) {
  const query = useQuery<OpenWeatherMapResponse>({
    queryKey: ["weather-info", city],
    queryFn: () => fetchWeatherInfo(city),
    enabled: Boolean(city),
    retry: false,
  });

  return query;
}
