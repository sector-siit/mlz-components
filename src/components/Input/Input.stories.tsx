import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Componente Input personalizable con soporte para etiquetas, textos de ayuda, validación de errores e iconos. Utiliza variables CSS para permitir personalización desde el proyecto consumidor. Incluye estados de error, deshabilitado y ancho completo.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			control: { type: "text" },
			description: "Etiqueta del campo de entrada",
			table: {
				type: { summary: "string" },
			},
		},
		placeholder: {
			control: { type: "text" },
			description: "Texto de marcador de posición",
			table: {
				type: { summary: "string" },
			},
		},
		hasError: {
			control: { type: "boolean" },
			description: "Indica si el input tiene un error de validación",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		errorText: {
			control: { type: "text" },
			description: "Mensaje de error a mostrar cuando hasError es true",
			table: {
				type: { summary: "string" },
			},
		},
		helperText: {
			control: { type: "text" },
			description: "Texto de ayuda que se muestra debajo del input",
			table: {
				type: { summary: "string" },
			},
		},
		disabled: {
			control: { type: "boolean" },
			description: "Estado deshabilitado del input",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		fullWidth: {
			control: { type: "boolean" },
			description: "Si el input debe ocupar el 100% del ancho del contenedor",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		checkedIcon: {
			control: { type: "boolean" },
			description:
				"Muestra un icono de verificación en el lado derecho del input",
			table: {
				type: { summary: "React.ReactNode | boolean" },
				defaultValue: { summary: "false" },
			},
		},
		containerProps: {
			control: { type: "object" },
			description: "Props adicionales para el contenedor div del input",
			table: {
				type: { summary: "React.HTMLAttributes<HTMLDivElement>" },
			},
		},
		labelProps: {
			control: { type: "object" },
			description: "Props adicionales para el elemento label",
			table: {
				type: { summary: "React.LabelHTMLAttributes<HTMLLabelElement>" },
			},
		},
		helperTextProps: {
			control: { type: "object" },
			description: "Props adicionales para el texto de ayuda",
			table: {
				type: { summary: "React.HTMLAttributes<HTMLParagraphElement>" },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		label: "Nombre",
		placeholder: "Ingresa tu nombre",
		helperText: "Este campo es requerido",
		containerProps: {},
		labelProps: {},
		helperTextProps: {},
	},
};

export const WithError: Story = {
	args: {
		hasError: true,
		label: "Correo electrónico",
		placeholder: "usuario@ejemplo.com",
		errorText: "El formato del correo no es válido",
		containerProps: {},
		labelProps: {},
		helperTextProps: {},
	},
};

export const WithHelperText: Story = {
	args: {
		label: "Contraseña",
		placeholder: "••••••••",
		helperText: "Debe tener al menos 8 caracteres",
		containerProps: {},
		labelProps: {},
		helperTextProps: {},
	},
};

export const Disabled: Story = {
	args: {
		label: "Campo deshabilitado",
		placeholder: "No se puede editar",
		disabled: true,
		helperText: "Este campo está deshabilitado",
		containerProps: {},
		labelProps: {},
		helperTextProps: {},
	},
};

export const WithCheckedIcon: Story = {
	args: {
		label: "Usuario verificado",
		placeholder: "Ingresa tu usuario",
		checkedIcon: true,
		helperText: "Usuario disponible",
		containerProps: {},
		labelProps: {},
		helperTextProps: {},
	},
};

export const FullWidth: Story = {
	args: {
		fullWidth: true,
		label: "Campo de ancho completo",
		placeholder: "Ocupa todo el ancho disponible",
		helperText: "Este input ocupa el 100% del ancho del contenedor",
		containerProps: {
			className: "w-[400px]",
		},
		labelProps: {},
		helperTextProps: {},
	},
};

export const AllStates: Story = {
	render: () => (
		<div className="flex flex-col gap-6 p-4 w-[400px]">
			<Input
				label="Estado normal"
				placeholder="Ingresa texto"
				helperText="Texto de ayuda normal"
				containerProps={{}}
				labelProps={{}}
				helperTextProps={{}}
			/>
			<Input
				label="Con error"
				placeholder="Ingresa texto"
				hasError={true}
				errorText="Este campo es requerido"
				containerProps={{}}
				labelProps={{}}
				helperTextProps={{}}
			/>
			<Input
				label="Deshabilitado"
				placeholder="Campo deshabilitado"
				disabled={true}
				helperText="No se puede editar"
				containerProps={{}}
				labelProps={{}}
				helperTextProps={{}}
			/>
			<Input
				label="Con icono de verificación"
				placeholder="Campo verificado"
				checkedIcon={true}
				helperText="Campo válido"
				containerProps={{}}
				labelProps={{}}
				helperTextProps={{}}
			/>
		</div>
	),
};
