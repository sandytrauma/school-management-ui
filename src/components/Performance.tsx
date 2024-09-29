"use client";
import Image from 'next/image';
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Group A', value: 92, fill: "#C3EBFA" },
    { name: 'Group B', value: 8, fill: "#FAE27C" },
  ];
  

const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Performance</h1>
            <Image src="/moreDark.png" alt='performance image' width={16} height={16}/>
        </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
         </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance
