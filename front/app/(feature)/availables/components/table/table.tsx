"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { redirect, useRouter } from "next/navigation"

  
type CountryTableProps = {
    data: {
      countryCode: string
      name: string
    }[]
}

  export default function CountryTable({ data }: CountryTableProps) {
    const router = useRouter();
    return (
      <div className="container mx-auto p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Code</TableHead>
              <TableHead>Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((country) => (
              <TableRow key={country.countryCode} onClick={async () => {
               await  router.push(`/country/${country.countryCode}/${country.name}`)
              }} className="hover:cursor-pointer">
                <TableCell className="font-medium">{country.countryCode}</TableCell>
                <TableCell>{country.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  