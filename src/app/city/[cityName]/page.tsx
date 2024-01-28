import { CityWeatherDetails } from "@/components";
import { capitalizeAllWords } from "@/utils";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { cityName: string };
}): Promise<Metadata> {
  const cityName = decodeURIComponent(params.cityName);
  const title = `${capitalizeAllWords(cityName)} Weather Details`;
  const description = `See what the current weather conditions are for ${cityName}, valid for 3 hours.`;

  return {
    title,
    description,
  };
}

export default function Page() {
  return <CityWeatherDetails />;
}
