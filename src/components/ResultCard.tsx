import React from 'react';

interface ResultCardProps {
  title: string;
  value: string | number;
  normal?: string;
  isNormal?: boolean;
}

export function ResultCard({ title, value, normal, isNormal }: ResultCardProps) {
  return (
    <div className="p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg border border-sky-100 transition-all duration-200 hover:shadow-md">
      <h3 className="font-medium text-sky-900 mb-2">{title}</h3>
      <p className="text-sky-700 text-lg font-semibold">{value}</p>
      {normal && (
        <p className={`text-sm mt-1 ${isNormal ? 'text-green-600' : 'text-amber-600'}`}>
          {normal}
        </p>
      )}
    </div>
  );
}