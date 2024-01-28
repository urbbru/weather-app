import { CitiesWeatherInfo, PageShell } from "@/components";
import { fetchWeatherInfo } from "@/services";
import { Metadata } from "next";
import { DEFAULT_CITIES } from "../../constants";

export const metadata: Metadata = {
  title: "City Weather Information",
  description:
    "Check what the current weather conditions are in different cities",
};

export default async function Home() {
  const citiesPromises = DEFAULT_CITIES.map((city) =>
    fetchWeatherInfo(city.name)
  );
  const initialData = await Promise.all(citiesPromises);

  return (
    <PageShell
      title="Cities weather info"
      description="Click on a city to see more information about the current weather
        conditions."
    >
      <CitiesWeatherInfo initialData={initialData} />
    </PageShell>
  );
}
