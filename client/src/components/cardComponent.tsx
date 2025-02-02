'use client';

import React from 'react';

interface CardProps {
  stat: {
    title: string;
    value: string;
    change: string;
    negative: boolean;
  };
}

const CardComponent: React.FC<CardProps> = ({ stat }) => {
  function handleDefaulters(name: string) {
    if (name === "Defaulters") {
      window.location.href = "/defaulters";
    }
  }

  return (
    <div onClick={() => handleDefaulters(stat.title)} className="cursor-pointer p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="text-sm font-medium">{stat.title}</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{stat.value}</div>
        <p className={`text-xs ${stat.negative ? "text-red-500" : "text-muted-foreground"}`}>
          {stat.change} from last month
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
