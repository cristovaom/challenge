"use client"
import dynamic from "next/dynamic";
import React from "react";

type PopulationChartProps = {
  populationData: {
    year: number;
    value: number;
  }[];
};

export default function PopulationChart({ populationData }: PopulationChartProps) {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

  const chartData = {
    series: [
      {
        name: "Population",
        data: populationData.map((data) => ({
          x: data.year,
          y: data.value,
        })),
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      xaxis: {
        type: "category",
        title: {
          text: "Year",
        },
      },
      yaxis: {
        title: {
          text: "Population",
        },
        labels: {
          formatter: (val: number) => val.toLocaleString(), 
        },
      },
      tooltip: {
        y: {
          formatter: (val: number) => val.toLocaleString(), 
        },
      },
      stroke: {
        curve: "smooth", 
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Population Growth Over the Years",
        align: "center",
      },
    } as any,
  };

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
}
