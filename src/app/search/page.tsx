import { CitySearcher, PageShell } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search City Weather Information",
  description:
    "Search for a specific city and see what the current weather conditions are",
};

export default function Home() {
  return (
    <PageShell
      title="Search city"
      description="Search for any city to find the current weather conditions there, it can be in any language but must be correctly spelled."
    >
      <CitySearcher />
    </PageShell>
  );
}
