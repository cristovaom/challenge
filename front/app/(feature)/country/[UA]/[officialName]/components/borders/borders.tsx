"use client"

import { useRouter } from "next/navigation";


type BordersProps = {
    borders: {
        countryCode: string;
        commonName: string;
        officialName: string;
        region: string;
    }[]
}

export default function Borders(data : BordersProps) {
    const router = useRouter();
    return (
        <ul className="list-disc pl-6 space-y-4">
                {data.borders.map((border: any) => (
                  <li key={border.countryCode} className="hover:cursor-pointer" onClick={() => {
                    router.push(`/country/${border.countryCode}/${border.commonName}`);
                  }}>
                    <p className="font-semibold text-lg text-gray-700">
                      {border.commonName || "Unknown"} - {border.countryCode || "N/A"}
                    </p>
                    <p className="text-sm text-gray-500">
                      Official Name: {border.officialName || "Not available"}
                    </p>
                    <p className="text-sm text-gray-500">Region: {border.region || "Unknown"}</p>
                  </li>
                ))}
              </ul>
    )
}