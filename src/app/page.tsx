import { CitiesWeatherInfo, PageShell } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "City Weather Information",
  description:
    "Check what the current weather conditions are in different cities",
};

export default function Home() {
  return (
    <PageShell
      title="Cities weather info"
      description="Click on a city to see more information about the current weather
        conditions."
    >
      <CitiesWeatherInfo />
    </PageShell>
  );
}
