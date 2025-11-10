import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
	title: "Components/TextArea",
	component: TextArea,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Componente TextArea personalizable con soporte para etiquetas, textos de ayuda, validación de errores. Utiliza variables CSS para permitir personalización desde el proyecto consumidor. Incluye estados de error, deshabilitado y ancho completo.",
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
			description: "Indica si el textarea tiene un error de validación",
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
			description: "Texto de ayuda que se muestra debajo del textarea",
			table: {
				type: { summary: "string" },
			},
		},
		disabled: {
			control: { type: "boolean" },
			description: "Estado deshabilitado del textarea",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		fullWidth: {
			control: { type: "boolean" },
			description:
				"Si el textarea debe ocupar el 100% del ancho del contenedor",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		containerProps: {
			control: { type: "object" },
			description: "Props adicionales para el contenedor div del textarea",
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

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
	args: {
		label: "Default + Placeholder",
		placeholder: "Escribí un nombre de usuario",
		helperText: "Tipo de documento",
		containerProps: {},
		labelProps: {},
		helperTextProps: {},
	},
};

export const WithError: Story = {
	args: {
		hasError: true,
		label: "Default + Placeholder",
		placeholder: "Escribí un nombre de usuario",
		errorText: "Tipo de documento",
		containerProps: {},
		labelProps: {},
		helperTextProps: {},
	},
};

export const WithHelperText: Story = {
	args: {
		label: "Descripción",
		placeholder: "Escribe una descripción detallada",
		helperText: "Máximo 500 caracteres",
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

export const FullWidth: Story = {
	args: {
		fullWidth: true,
		label: "Campo de ancho completo",
		placeholder: "Ocupa todo el ancho disponible",
		helperText: "Este textarea ocupa el 100% del ancho del contenedor",
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
			<TextArea
				label="Default + Placeholder"
				placeholder="Escribí un nombre de usuario"
				helperText="Tipo de documento"
				containerProps={{}}
				labelProps={{}}
				helperTextProps={{}}
			/>
			<TextArea
				label="Default + Placeholder"
				placeholder="Escribí un nombre de usuario"
				hasError={true}
				errorText="Tipo de documento"
				containerProps={{}}
				labelProps={{}}
				helperTextProps={{}}
			/>
			<TextArea
				label="Deshabilitado"
				placeholder="Campo deshabilitado"
				disabled={true}
				helperText="No se puede editar"
				containerProps={{}}
				labelProps={{}}
				helperTextProps={{}}
			/>
		</div>
	),
};

