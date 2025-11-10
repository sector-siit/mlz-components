import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Componente Checkbox personalizable con soporte para múltiples opciones, layout vertical u horizontal, validación de errores y textos de ayuda.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			control: { type: "text" },
			description: "Etiqueta del grupo de checkboxes",
			table: {
				type: { summary: "string" },
			},
		},
		options: {
			control: { type: "object" },
			description: "Array de opciones para los checkboxes",
			table: {
				type: { summary: "CheckboxOption[]" },
			},
		},
		value: {
			control: { type: "object" },
			description: "Array de valores seleccionados",
			table: {
				type: { summary: "string[]" },
			},
		},
		hasError: {
			control: { type: "boolean" },
			description: "Indica si el checkbox tiene un error de validación",
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
			description: "Texto de ayuda que se muestra debajo de los checkboxes",
			table: {
				type: { summary: "string" },
			},
		},
		direction: {
			control: { type: "select" },
			options: ["vertical", "horizontal"],
			description: "Dirección de los checkboxes (vertical u horizontal)",
			table: {
				type: { summary: '"vertical" | "horizontal"' },
				defaultValue: { summary: '"vertical"' },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Vertical: Story = {
	args: {
		label: "Desde",
		options: [
			{ label: "Si", value: "si" },
			{ label: "No", value: "no" },
		],
		value: ["no"],
		direction: "vertical",
	},
};

export const Horizontal: Story = {
	args: {
		label: "Desde",
		options: [
			{ label: "Opcion 1", value: "opcion1" },
			{ label: "Opcion 1", value: "opcion2" },
		],
		value: [],
		direction: "horizontal",
	},
};

export const WithError: Story = {
	args: {
		label: "Desde",
		options: [
			{ label: "Si", value: "si" },
			{ label: "No", value: "no" },
		],
		value: [],
		hasError: true,
		errorText: "Este campo es obligatorio",
		direction: "horizontal",
	},
};

export const AllStates: Story = {
	render: () => (
		<div className="flex flex-col gap-6 p-4 w-[400px]">
			<Checkbox
				label="Desde"
				options={[
					{ label: "Si", value: "si" },
					{ label: "No", value: "no" },
				]}
				value={["no"]}
				direction="vertical"
			/>
			<Checkbox
				label="Desde"
				options={[
					{ label: "Opcion 1", value: "opcion1" },
					{ label: "Opcion 1", value: "opcion2" },
				]}
				value={[]}
				direction="horizontal"
			/>
			<Checkbox
				label="Desde"
				options={[
					{ label: "Si", value: "si" },
					{ label: "No", value: "no" },
				]}
				value={[]}
				hasError={true}
				errorText="Este campo es obligatorio"
				direction="horizontal"
			/>
		</div>
	),
};

