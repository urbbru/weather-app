import { capitalizeAllWords, getDynamicCityHref } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { DEFAULT_CITIES } from "../../constants";
import { OpenWeatherMapResponse } from "../../types";

type CityWeatherInfoProps = {
  cityWeather: OpenWeatherMapResponse;
  cityImageUrl: string;
};

export function CitiesWeatherInfo(props: {
  initialData: OpenWeatherMapResponse[];
}) {
  const { initialData } = props;

  return (
    <ul
      role="list"
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
    >
      {DEFAULT_CITIES.map((city, index) => (
        <Link key={city.name} href={getDynamicCityHref(city.name)}>
          <CityWeatherInfo
            cityWeather={initialData[index]}
            cityImageUrl={city.imageUrl}
          />
        </Link>
      ))}
    </ul>
  );
}

function CityWeatherInfo(props: CityWeatherInfoProps) {
  const { cityWeather, cityImageUrl } = props;

  return (
    <li>
      <div className="flex items-center gap-x-6">
        <Image
          className="h-16 w-16 rounded-full"
          src={cityImageUrl}
          alt={cityWeather.name}
          height={64}
          width={64}
          priority
        />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {cityWeather.name}
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            Temperature: {cityWeather.main.temp.toFixed(1)} °C
          </p>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            Currently: {capitalizeAllWords(cityWeather.weather[0].description)}
          </p>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            Humidity: {cityWeather.main.humidity}
          </p>
        </div>
      </div>
    </li>
  );
}
