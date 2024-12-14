"use server";

import { api } from "@/lib/api";



type Country = {
    countryCode: string
    name: string
}

export async function getCountryInfo({countryCode, name}: Country) {
    try{
        console.log(`/countries/country/${countryCode}/${name}`)
        const response = await api.get(`/countries/country/${countryCode}/${name}`);
        
        return response.data
    }
    catch(error){
        throw error;
    }
}