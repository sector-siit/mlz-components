import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un componente de botón personalizable con diferentes variantes y tamaños. Utiliza variables CSS para permitir personalización desde el proyecto consumidor.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline-solid', 'ghost'],
      description: 'Variante visual del botón',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado del botón',
    },
    children: {
      control: { type: 'text' },
      description: 'Contenido del botón',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Botón Primario',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Botón Secundario',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Botón Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Botón Ghost',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Botón Pequeño',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Botón Mediano',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Botón Grande',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Botón Deshabilitado',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex gap-4">
        <Button disabled>Disabled</Button>
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h3 className="text-lg font-medium mb-4">Colores por defecto</h3>
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Colores customizados</h3>
        <div 
          className="flex gap-4"
          style={{
            '--mlz-primary-600': '#10b981',
            '--mlz-primary-700': '#059669',
            '--mlz-secondary-600': '#7c3aed',
            '--mlz-secondary-700': '#6d28d9'
          } as React.CSSProperties}
        >
          <Button variant="primary">Primary Verde</Button>
          <Button variant="secondary">Secondary Morado</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </div>
  ),
};
