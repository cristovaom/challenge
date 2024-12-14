"use server";

import { GetAvailables } from "./actions";
import CountryTable from "./components/table/table";


export default async function getAvailable() {
  try {
 
    const response = await GetAvailables();

    const data = JSON.parse(response);

    return (
      <div>
        <CountryTable data={data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div>
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }
}
