export type CityPopulation = {
    error: boolean; 
    msg: string; 
    data: CityPopulationData; 
  };
  
  export type CityPopulationData = {
    city: string; 
    country: string; 
    populationCounts: PopulationCount[]; 
  };
  
  export type PopulationCount = {
    year: string;
    value: string; 
    sex: string; 
    reliability: string; 
  };
  