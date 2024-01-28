"use client";

import { useWeatherInfo } from "@/services";
import { capitalizeAllWords } from "@/utils";
import { useParams, useRouter } from "next/navigation";

function WeatherDetailsLoader() {
  return (
    <div className="flex flex-col-reverse">
      <dt className="text-base leading-7">
        <div className="h-4 bg-stone-200 rounded w-24"></div>
      </dt>
      <dd className="text-2xl font-bold leading-9 tracking-tight">
        <div className="h-7 bg-stone-200 rounded w-16 mb-2 sm:mb-4"></div>
      </dd>
    </div>
  );
}

export function CityWeatherDetails() {
  const router = useRouter();
  const params = useParams<{ cityName: string }>();
  const { cityName } = params;
  const { isPending, error, data } = useWeatherInfo(cityName);

  const returnToPreviousPage = () => router.back();

  if (isPending) {
    return (
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="animate-pulse mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="h-5 bg-stone-200 rounded w-14 mb-4 sm:mb-8"></div>
            <div className="h-10 sm:h-16 bg-stone-200 rounded w-48"></div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <WeatherDetailsLoader />
              <WeatherDetailsLoader />
              <WeatherDetailsLoader />
              <WeatherDetailsLoader />
            </dl>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-x-6">
        <p className="text-red-600 font-bold">
          Error retrieving {cityName} info: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <button
            onClick={returnToPreviousPage}
            className="text-sm font-semibold leading-6 text-gray-900 mb-4 sm:mb-8"
          >
            Go back
          </button>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {data.name}
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7">Temperature</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight">
                {data.main.temp.toFixed(1)} °C
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7">Feels like</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight">
                {data.main.feels_like.toFixed(1)} °C
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7">Humidity</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight">
                {data.main.humidity}
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7">Currently</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight">
                {capitalizeAllWords(data.weather[0].description)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
