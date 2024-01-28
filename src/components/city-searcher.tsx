"use client";

import { useWeatherInfo } from "@/services";
import { ChangeEvent, useState } from "react";
import { CitySearchResult } from "./city-search-result";
import { Spinner } from "./spinner";
import { AxiosError } from "axios";

export function CitySearcher() {
  const [city, setCity] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const {
    isLoading,
    error,
    data: cityWeatherResult,
  } = useWeatherInfo(citySearch);
  const searchInputIsDsabled = Boolean(isLoading);
  const searchButtonIsDisabled = Boolean(!city);
  const clearButtonIsDsabled = Boolean(!citySearch);

  const handleCityInputOnChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCity(event.target.value);

  const searchCity = () => {
    if (city) {
      setCitySearch(city);
    } else {
      alert("Please enter a valid city name");
    }
  };

  const clearCity = () => {
    setCity("");
    setCitySearch("");
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={handleCityInputOnChange}
              disabled={searchInputIsDsabled}
              placeholder="Berlin"
              className={`block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6${
                error ? " ring-red-600" : ""
              }`}
            />
            {isLoading && (
              <div
                className="absolute inset-y-0 right-1 flex items-center cursor-pointer"
                onClick={clearCity}
              >
                <Spinner />
              </div>
            )}
            {city && (
              <div
                className="absolute inset-y-0 right-1 flex items-center cursor-pointer"
                onClick={clearCity}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
          {error && (
            <p className="text-red-600">
              {
                (error as AxiosError<{ message: string }>).response?.data
                  ?.message
              }
            </p>
          )}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-x-6">
        <button
          onClick={searchCity}
          disabled={searchButtonIsDisabled}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Search
        </button>
        {cityWeatherResult && (
          <button
            onClick={clearCity}
            disabled={clearButtonIsDsabled}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Clear
          </button>
        )}
      </div>
      {cityWeatherResult && (
        <CitySearchResult cityWeather={cityWeatherResult} />
      )}
    </div>
  );
}
