"use client";

import Image from "next/image";
import { DEFAULT_CITIES } from "../../constants";
import { useWeatherInfo } from "../services";
import { City } from "../../types";

type WeatherInfoProps = { city: City };

export function CitiesWeatherInfo() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-4 sm:px-0 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cities weather info
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Click on a city to see more information about the current weather
            conditions.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {DEFAULT_CITIES.map((city) => (
            <WeatherInfo key={city.name} city={city} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function WeatherInfo(props: WeatherInfoProps) {
  const { city } = props;
  const { isPending, error, data } = useWeatherInfo(city.name);

  if (isPending) {
    return (
      <div className="py-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-stone-200 h-16 w-16"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-stone-200 rounded w-32"></div>
            <div className="space-y-3">
              <div className="h-2 bg-stone-200 rounded w-48"></div>
              <div className="h-2 bg-stone-200 rounded w-40"></div>
              <div className="h-2 bg-stone-200 rounded w-36"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <li>
        <div className="flex items-center gap-x-6">
          <p className="text-red-600 font-bold">
            Error retrieving {city.name} info: {error.message}
          </p>
        </div>
      </li>
    );
  }

  return (
    <li>
      <div className="flex items-center gap-x-6">
        <Image
          className="h-16 w-16 rounded-full"
          src={city.imageUrl}
          alt={city.name}
          height={64}
          width={64}
          priority
        />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {data.name}
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            Temperature: {data.main.temp.toFixed(1)} °C
          </p>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            Feels like: {data.main.feels_like.toFixed(1)} °C
          </p>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            Humidity: {data.main.humidity}
          </p>
        </div>
      </div>
    </li>
  );
}
