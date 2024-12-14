import { Injectable } from '@nestjs/common';
import { ResponseAPI } from 'src/utils/ResponseAPI';
import { AvailableCountries } from './dto/response/datenager/available-countries';
import { ExternalAPI } from 'src/utils/apiClient';
import { CountryDetails } from './dto/response/datenager/details-country';
import { FlagCountryInfo } from './dto/response/countriesnow/flag';


@Injectable()
export class CountriesService {

  private apiDateNager: ExternalAPI
  private apiContriesNow: ExternalAPI
  constructor(){
    this.apiDateNager = new ExternalAPI('https://date.nager.at/api/v3/')
    this.apiContriesNow = new ExternalAPI('https://countriesnow.space/api/v0.1/countries/')
  }
  

  async fetchAvaliableContries() {
   try{
    const data = await this.apiDateNager.get<AvailableCountries[]>('AvailableCountries')

    if(data.length === 0){
      return new ResponseAPI(null, 404, 'No data found')
    }
    return new ResponseAPI(data, 200,null)
    
   }catch(err){
    return new ResponseAPI(null, 500, err.message)
   }
  }

  async fetchCountryInfo(countryCode: string, officialName: string) {
    try{
      const listBorderCountries = await this.apiDateNager.get<CountryDetails>(`CountryInfo/${countryCode}`)

      const flagURL = await this.apiContriesNow.post<FlagCountryInfo>(`flag/images`,{
          iso2: countryCode   
      })

      const populationData = await this.apiContriesNow.post<FlagCountryInfo>(`population`,{   
          country: officialName
      })

      const data = {
        ...listBorderCountries,
        flag: flagURL,
        population: populationData
      }

      return new ResponseAPI(data, 200,null)

      
     }catch(err){
      return new ResponseAPI(null, 500, err.message)
     }
  }

 
}
