"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Total",
        count: 106,
        fill: "white",
      },
  {
    name: "Girls",
    count: 57,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 49,
    fill: "#C3EBFA",
  },
  
];


const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image
          src="/moreDark.png"
          alt="count chart of students"
          width={20}
          height={20}
        />
      </div>
      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="Gender classification image" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-sandytraumaSky rounded-full" />
          <h1 className="font-bold">1,500</h1>
          <h2 className="text-xs text-gray-300">Boys (50%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-sandytraumaYellow rounded-full" />
          <h1 className="font-bold">1,500</h1>
          <h2 className="text-xs text-gray-300">Girls (50%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
