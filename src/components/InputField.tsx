import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  min?: string | number;
  max?: string | number;
  step?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  Icon?: LucideIcon;
}

export function InputField({
  label,
  name,
  type = 'number',
  min,
  max,
  step,
  value,
  onChange,
  required = true,
  Icon
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-sky-800 mb-1">
        <span className="flex items-center gap-2">
          {Icon && <Icon size={16} className="text-sky-600" />}
          {label}
        </span>
      </label>
      <input
        type={type}
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg border border-sky-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 hover:border-sky-300"
        required={required}
      />
    </div>
  );
}