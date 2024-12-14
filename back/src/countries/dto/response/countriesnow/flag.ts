export type FlagCountryInfo = {
    error: boolean;
    msg: string; 
    data: CountryData; 
  };
  
  export type CountryData = {
    name: string;
    flag: string; 
    iso2: string; 
    iso3: string; 
  };
  