import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountriesService } from './countries.service';


@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  

  @Get('/available')
  fetchAvaliableContriesContoller() {
    return this.countriesService.fetchAvaliableContries();
  }

  @Get('/country/:UA/:officialName')
    fetchCountryInfo(
      @Param('UA') UA: string,
      @Param('officialName') officialName: string
    ) {
      return this.countriesService.fetchCountryInfo(UA, officialName);
    }

  
}
