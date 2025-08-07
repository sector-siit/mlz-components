import React, { useState } from 'react';

export interface DateTimeRangeProps {
  /** Variante visual del componente */
  variant?: 'default' | 'error' | 'success';
  /** Tamaño del componente */
  size?: 'sm' | 'md' | 'lg';
  /** Label del campo */
  label?: string;
  /** Texto de ayuda */
  helperText?: string;
  /** Texto de error */
  errorText?: string;
  /** Si el componente es de ancho completo */
  fullWidth?: boolean;
  /** Fecha y hora inicial por defecto */
  defaultStartDate?: string;
  /** Fecha y hora final por defecto */
  defaultEndDate?: string;
  /** Callback cuando cambia la fecha inicial */
  onStartDateChange?: (date: string) => void;
  /** Callback cuando cambia la fecha final */
  onEndDateChange?: (date: string) => void;
  /** Callback cuando cambia el rango completo */
  onRangeChange?: (startDate: string, endDate: string) => void;
  /** Si el componente está deshabilitado */
  disabled?: boolean;
  /** Placeholder para fecha inicial */
  startPlaceholder?: string;
  /** Placeholder para fecha final */
  endPlaceholder?: string;
  /** Tipo de input (date, datetime-local, time) */
  type?: 'date' | 'datetime-local' | 'time';
}

/**
 * Componente para seleccionar un rango de fecha y hora con estilo consistente
 */
export const DateTimeRange: React.FC<DateTimeRangeProps> = ({
  variant = 'default',
  size = 'md',
  label,
  helperText,
  errorText,
  fullWidth = false,
  defaultStartDate = '',
  defaultEndDate = '',
  onStartDateChange,
  onEndDateChange,
  onRangeChange,
  disabled = false,
  startPlaceholder = 'Fecha inicial',
  endPlaceholder = 'Fecha final',
  type = 'datetime-local',
}) => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  // Clases base consistentes con Input
  const baseClasses = [
    'border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2',
    'bg-white dark:bg-gray-800',
    'text-gray-900 dark:text-gray-100',
  ];

  // Clases de tamaño consistentes con Input
  const sizeClasses = {
    sm: [
      'px-3 py-1.5 text-sm',
      'h-8',
      // CSS Variables con fallbacks
      `h-[var(--mlz-input-height-sm,2rem)]`,
      `px-[var(--mlz-input-padding-x-sm,0.75rem)]`,
      `py-[var(--mlz-input-padding-y-sm,0.375rem)]`,
      `text-[var(--mlz-input-font-size-sm,0.875rem)]`
    ],
    md: [
      'px-4 py-2 text-base',
      'h-10',
      // CSS Variables con fallbacks
      `h-[var(--mlz-input-height-md,2.5rem)]`,
      `px-[var(--mlz-input-padding-x-md,1rem)]`,
      `py-[var(--mlz-input-padding-y-md,0.5rem)]`,
      `text-[var(--mlz-input-font-size-md,1rem)]`
    ],
    lg: [
      'px-5 py-3 text-lg',
      'h-12',
      // CSS Variables con fallbacks
      `h-[var(--mlz-input-height-lg,3rem)]`,
      `px-[var(--mlz-input-padding-x-lg,1.25rem)]`,
      `py-[var(--mlz-input-padding-y-lg,0.75rem)]`,
      `text-[var(--mlz-input-font-size-lg,1.125rem)]`
    ]
  };

  // Clases de variante consistentes con Input
  const variantClasses = {
    default: [
      'border-gray-300 dark:border-gray-600',
      'focus:border-blue-500 focus:ring-blue-500/20',
      // CSS Variables con fallbacks
      `border-[var(--mlz-input-border-color,rgb(209,213,219))]`,
      `focus:border-[var(--mlz-primary-500,rgb(59,130,246))]`,
      `focus:ring-[var(--mlz-primary-500,rgb(59,130,246))]`
    ],
    error: [
      'border-red-500 dark:border-red-400',
      'focus:border-red-500 focus:ring-red-500/20',
      // CSS Variables con fallbacks
      `border-[var(--mlz-error-500,rgb(239,68,68))]`,
      `focus:border-[var(--mlz-error-500,rgb(239,68,68))]`,
      `focus:ring-[var(--mlz-error-500,rgb(239,68,68))]`
    ],
    success: [
      'border-green-500 dark:border-green-400',
      'focus:border-green-500 focus:ring-green-500/20',
      // CSS Variables con fallbacks
      `border-[var(--mlz-success-500,rgb(34,197,94))]`,
      `focus:border-[var(--mlz-success-500,rgb(34,197,94))]`,
      `focus:ring-[var(--mlz-success-500,rgb(34,197,94))]`
    ]
  };

  // Clases de ancho
  const widthClasses = fullWidth ? 'w-full' : 'w-auto';

  // Combinar todas las clases para los inputs
  const inputClasses = [
    ...baseClasses,
    ...sizeClasses[size],
    ...variantClasses[variant],
    'flex-1',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  ].join(' ');

  // Determinar el texto de ayuda efectivo
  const effectiveHelperText = errorText || helperText;
  const effectiveVariant = errorText ? 'error' : variant;

  // Manejar cambios en las fechas
  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    onStartDateChange?.(value);
    onRangeChange?.(value, endDate);
  };

  const handleEndDateChange = (value: string) => {
    setEndDate(value);
    onEndDateChange?.(value);
    onRangeChange?.(startDate, value);
  };

  return (
    <div className={`flex flex-col ${fullWidth ? 'w-full' : 'w-auto'}`}>
      {label && (
        <label className={`mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 text-[var(--mlz-input-label-color,rgb(55,65,81))]`}>
          {label}
        </label>
      )}
      
      <div className={`flex gap-3 ${widthClasses}`}>
        {/* Input de fecha inicial */}
        <div className="flex flex-col flex-1">
          <input
            type={type}
            value={startDate}
            onChange={(e) => handleStartDateChange(e.target.value)}
            disabled={disabled}
            placeholder={startPlaceholder}
            className={inputClasses}
            max={endDate || undefined} // No permitir fecha inicial mayor a la final
          />
          <span className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-[var(--mlz-input-helper-color,rgb(107,114,128))]">
            Desde
          </span>
        </div>

        {/* Separador visual */}
        <div className="flex items-center justify-center pt-2">
          <div className="w-6 h-0.5 bg-gray-300 dark:bg-gray-600 bg-[var(--mlz-input-border-color,rgb(209,213,219))]"></div>
        </div>

        {/* Input de fecha final */}
        <div className="flex flex-col flex-1">
          <input
            type={type}
            value={endDate}
            onChange={(e) => handleEndDateChange(e.target.value)}
            disabled={disabled}
            placeholder={endPlaceholder}
            className={inputClasses}
            min={startDate || undefined} // No permitir fecha final menor a la inicial
          />
          <span className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-[var(--mlz-input-helper-color,rgb(107,114,128))]">
            Hasta
          </span>
        </div>
      </div>
      
      {effectiveHelperText && (
        <p 
          className={`mt-1.5 text-sm ${
            effectiveVariant === 'error' 
              ? 'text-red-600 dark:text-red-400 text-[var(--mlz-error-600,rgb(220,38,38))]' 
              : effectiveVariant === 'success'
              ? 'text-green-600 dark:text-green-400 text-[var(--mlz-success-600,rgb(22,163,74))]'
              : 'text-gray-500 dark:text-gray-400 text-[var(--mlz-input-helper-color,rgb(107,114,128))]'
          }`}
        >
          {effectiveHelperText}
        </p>
      )}
    </div>
  );
};

export default DateTimeRange;
