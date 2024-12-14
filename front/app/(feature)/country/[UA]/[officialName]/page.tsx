"use server";
import { Card } from "@/components/ui/card";
import { getCountryInfo } from "./actions";
import Image from "next/image";
import PopulationChart from "./components/chart/chart";
import Borders from "./components/borders/borders";

export default async function Page({ params }: { params: { UA: string; officialName: string } }) {
  const { UA, officialName } = params;

  try {
    const response = await getCountryInfo({
      countryCode: UA,
      name: officialName,
    });

    if (!response || !response.data) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <h1 className="text-3xl font-bold text-red-500">Country data not found.</h1>
        </div>
      );
    }

    const { data } = response;

    const hasFlag = data?.flag?.data?.flag;
    const hasPopulationData = data?.population?.data?.populationCounts?.length > 0;
    const hasBorders = data?.borders?.length > 0;

    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-50 p-6">
  
        <div className="flex flex-col items-center gap-6 p-6 md:flex-row bg-white shadow-lg rounded-lg">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-800">
              {data.commonName || "Unknown Country"}
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Explore detailed information about this country.</p>
          </div>
          {hasFlag ? (
            <Image
              src={data.flag.data.flag}
              alt={data.name || "Country flag"}
              width={160}
              height={160}
              className="rounded-full shadow-md border border-gray-200"
            />
          ) : (
            <div className="text-gray-500">No flag available</div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
        
          <Card className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
              Population Growth
            </h2>
            {hasPopulationData ? (
              <PopulationChart populationData={data.population.data.populationCounts} />
            ) : (
              <div className="text-center text-gray-500">Population data not available.</div>
            )}
          </Card>

          <Card className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Borders</h2>
            {hasBorders ? (
             <Borders borders={data.borders}/>
            ) : (
              <div className="text-center text-gray-500">No borders available.</div>
            )}
          </Card>

          <Card className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
              About {data.commonName}
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Official Name: <span className="font-medium">{data.officialName || "Unknown"}</span>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Region: <span className="font-medium">{data.region || "Unknown"}</span>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Subregion: <span className="font-medium">{data.subregion || "Unknown"}</span>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Population:{" "}
              <span className="font-medium">
                {hasPopulationData
                  ? data.population.data.populationCounts[
                      data.population.data.populationCounts.length - 1
                    ].value.toLocaleString()
                  : "Unknown"}
              </span>
            </p>
          </Card>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500">An error occurred. Please try again later.</h1>
      </div>
    );
  }
}
