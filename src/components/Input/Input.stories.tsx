import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Input básico con diferentes variantes, tamaños y estados. Personalizable mediante CSS variables.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Variante visual del input'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del input'
    },
    label: {
      control: { type: 'text' },
      description: 'Texto del label'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Texto placeholder'
    },
    helperText: {
      control: { type: 'text' },
      description: 'Texto de ayuda'
    },
    errorText: {
      control: { type: 'text' },
      description: 'Texto de error (sobrescribe helperText)'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Si el input ocupa todo el ancho disponible'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Si el input está deshabilitado'
    }
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const Default: Story = {
  args: {
    placeholder: 'Ingresa tu texto aquí...',
  },
};

// Input con label
export const WithLabel: Story = {
  args: {
    label: 'Nombre completo',
    placeholder: 'Ingresa tu nombre',
  },
};

// Input con texto de ayuda
export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'usuario@ejemplo.com',
    helperText: 'Usaremos tu email para enviarte notificaciones',
  },
};

// Input con error
export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'usuario@ejemplo.com',
    value: 'email-invalido',
    errorText: 'Por favor ingresa un email válido',
  },
};

// Input de éxito
export const Success: Story = {
  args: {
    label: 'Email',
    placeholder: 'usuario@ejemplo.com',
    value: 'usuario@ejemplo.com',
    variant: 'success',
    helperText: 'Email válido',
  },
};

// Tamaños
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Input pequeño',
    placeholder: 'Tamaño pequeño',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Input mediano',
    placeholder: 'Tamaño mediano',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Input grande',
    placeholder: 'Tamaño grande',
  },
};

// Input deshabilitado
export const Disabled: Story = {
  args: {
    label: 'Campo deshabilitado',
    placeholder: 'Este campo está deshabilitado',
    disabled: true,
    helperText: 'Este campo no se puede editar',
  },
};

// Input de ancho completo
export const FullWidth: Story = {
  args: {
    label: 'Comentarios',
    placeholder: 'Escribe tus comentarios aquí...',
    fullWidth: true,
    helperText: 'Este input ocupa todo el ancho disponible',
  },
  parameters: {
    layout: 'padded',
  },
};

// Tipos de input
export const Password: Story = {
  args: {
    type: 'password',
    label: 'Contraseña',
    placeholder: 'Ingresa tu contraseña',
    helperText: 'Mínimo 8 caracteres',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Correo electrónico',
    placeholder: 'usuario@ejemplo.com',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    label: 'Edad',
    placeholder: '25',
    min: 0,
    max: 120,
  },
};

// Demostración de variantes
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Default"
        placeholder="Variante por defecto"
        variant="default"
      />
      <Input
        label="Error"
        placeholder="Campo con error"
        variant="error"
        errorText="Este campo tiene un error"
      />
      <Input
        label="Success"
        placeholder="Campo válido"
        variant="success"
        helperText="Campo completado correctamente"
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

// Demostración de tamaños
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        size="sm"
        label="Pequeño"
        placeholder="Input pequeño"
      />
      <Input
        size="md"
        label="Mediano"
        placeholder="Input mediano"
      />
      <Input
        size="lg"
        label="Grande"
        placeholder="Input grande"
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};
