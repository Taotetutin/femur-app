import React from 'react';
import { Info } from 'lucide-react';

export function Note() {
  return (
    <div className="mt-8 p-4 bg-sky-50 border border-sky-100 rounded-lg">
      <div className="flex items-start gap-3">
        <Info size={20} className="text-sky-600 mt-0.5 flex-shrink-0" />
        <p className="text-sky-700 text-sm">
          Si la Edad Gestacional es segura, basta con el valor de la longitud del Fémur "Bajo Pc 1"
        </p>
      </div>
    </div>
  );
}