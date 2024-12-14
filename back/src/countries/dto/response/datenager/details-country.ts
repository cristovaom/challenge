export type CountryDetails = {
    commonName: string; 
    officialName: string;
    countryCode: string; 
    region: string; 
    borders: BorderCountry[] | null; 
  };
  
  export type BorderCountry = {
    commonName: string; 
    officialName: string; 
    countryCode: string; 
    region: string; 
    borders: null; 
  };
  