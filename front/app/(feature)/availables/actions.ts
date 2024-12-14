"use server";

import { api } from "@/lib/api";



export async function GetAvailables() {
    try{
        const response = await api.get("/countries/available");
        
        return JSON.stringify(response.data.data)
    }
    catch(error){
        throw error;
    }
}