import { Metadata } from "next";
import { CitiesWeatherInfo } from "../components";

export const metadata: Metadata = {
  title: "City Weather Information",
  description:
    "Check what the current weather conditions are in different cities",
};

export default function Home() {
  return <CitiesWeatherInfo />;
}
