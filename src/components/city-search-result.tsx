import { OpenWeatherMapResponse } from "../../types";

type CitySearchResultProps = { cityWeather: OpenWeatherMapResponse };

export function CitySearchResult(props: CitySearchResultProps) {
  const { cityWeather } = props;

  return (
    <div className="bg-white mt-6">
      <div className="max-w-7xl">
        <div className="relative isolate overflow-hidden bg-gray-900 shadow-2xl rounded-xl sm:rounded-3xl lg:flex py-2 sm:px-2 sm:py-4 lg:px-4">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {cityWeather.name}
            </h2>
            <p className="mt-6 leading-8 text-gray-300">
              Temperature: {cityWeather.main.temp.toFixed(1)} °C
            </p>
            <p className="leading-8 text-gray-300">
              Feels like: {cityWeather.main.feels_like.toFixed(1)} °C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
