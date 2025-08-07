import type { Meta, StoryObj } from '@storybook/react';
import { DateTimeRange } from './DateTimeRange';

const meta: Meta<typeof DateTimeRange> = {
  title: 'Components/DateTimeRange',
  component: DateTimeRange,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente para seleccionar un rango de fecha y hora. Permite seleccionar desde y hasta con validación automática.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Variante visual del componente',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del componente',
    },
    type: {
      control: { type: 'select' },
      options: ['date', 'datetime-local', 'time'],
      description: 'Tipo de input para fecha/hora',
    },
    label: {
      control: 'text',
      description: 'Etiqueta del campo',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda',
    },
    errorText: {
      control: 'text',
      description: 'Texto de error (sobrescribe helperText)',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Si el componente ocupa todo el ancho disponible',
    },
    disabled: {
      control: 'boolean',
      description: 'Si el componente está deshabilitado',
    },
    startPlaceholder: {
      control: 'text',
      description: 'Placeholder para fecha inicial',
    },
    endPlaceholder: {
      control: 'text',
      description: 'Placeholder para fecha final',
    },
    onRangeChange: {
      action: 'rangeChanged',
      description: 'Callback cuando cambia el rango',
    },
    onStartDateChange: {
      action: 'startDateChanged',
      description: 'Callback cuando cambia la fecha inicial',
    },
    onEndDateChange: {
      action: 'endDateChanged',
      description: 'Callback cuando cambia la fecha final',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const Default: Story = {
  args: {
    label: 'Seleccionar período',
    helperText: 'Selecciona las fechas de inicio y fin',
  },
};

// Variantes
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <DateTimeRange 
        label="Default" 
        helperText="Variante por defecto"
        variant="default"
      />
      <DateTimeRange 
        label="Success" 
        helperText="Fechas válidas seleccionadas"
        variant="success"
      />
      <DateTimeRange 
        label="Error" 
        errorText="Las fechas son requeridas"
        variant="error"
      />
    </div>
  ),
};

// Tamaños
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <DateTimeRange 
        label="Small" 
        helperText="Tamaño pequeño"
        size="sm"
      />
      <DateTimeRange 
        label="Medium" 
        helperText="Tamaño mediano"
        size="md"
      />
      <DateTimeRange 
        label="Large" 
        helperText="Tamaño grande"
        size="lg"
      />
    </div>
  ),
};

// Tipos de input
export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <DateTimeRange 
        label="Solo fecha" 
        helperText="Selecciona solo la fecha"
        type="date"
      />
      <DateTimeRange 
        label="Fecha y hora" 
        helperText="Selecciona fecha y hora completa"
        type="datetime-local"
      />
      <DateTimeRange 
        label="Solo hora" 
        helperText="Selecciona solo la hora"
        type="time"
      />
    </div>
  ),
};

// Con valores por defecto
export const WithDefaults: Story = {
  args: {
    label: 'Período de trabajo',
    helperText: 'Horario laboral de hoy',
    type: 'datetime-local',
    defaultStartDate: '2024-01-15T09:00',
    defaultEndDate: '2024-01-15T17:00',
  },
};

// Ancho completo
export const FullWidth: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <DateTimeRange 
        label="Período completo" 
        helperText="Componente de ancho completo"
        fullWidth
        type="datetime-local"
      />
    </div>
  ),
};

// Deshabilitado
export const Disabled: Story = {
  args: {
    label: 'Período bloqueado',
    helperText: 'Este campo está deshabilitado',
    disabled: true,
    defaultStartDate: '2024-01-15T09:00',
    defaultEndDate: '2024-01-15T17:00',
    type: 'datetime-local',
  },
};

// Con validación de error
export const WithError: Story = {
  args: {
    label: 'Reserva de sala',
    errorText: 'La fecha de inicio debe ser anterior a la fecha de fin',
    variant: 'error',
    type: 'datetime-local',
  },
};

// Con éxito
export const WithSuccess: Story = {
  args: {
    label: 'Período seleccionado',
    helperText: 'Fechas válidas y disponibles',
    variant: 'success',
    defaultStartDate: '2024-01-15T09:00',
    defaultEndDate: '2024-01-15T17:00',
    type: 'datetime-local',
  },
};

// Personalización con placeholders
export const CustomPlaceholders: Story = {
  args: {
    label: 'Viaje programado',
    helperText: 'Selecciona las fechas de tu viaje',
    startPlaceholder: 'Fecha de salida',
    endPlaceholder: 'Fecha de regreso',
    type: 'date',
  },
};

// Modo interactivo
export const Interactive: Story = {
  render: () => {
    const handleRangeChange = (start: string, end: string) => {
      // Callback para manejar cambios en el rango
      alert(`Rango seleccionado: ${start} - ${end}`);
    };

    return (
      <div className="w-96">
        <DateTimeRange 
          label="Selección interactiva" 
          helperText="Selecciona fechas para ver el resultado"
          onRangeChange={handleRangeChange}
          type="datetime-local"
        />
      </div>
    );
  },
};
