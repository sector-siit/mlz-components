import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
	title: "Components/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Componente Switch (toggle) personalizable con soporte para estados on/off, variantes de color (default y error), y etiquetas de texto.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			control: { type: "text" },
			description: "Etiqueta de texto que se muestra junto al switch",
			table: {
				type: { summary: "string" },
			},
		},
		checked: {
			control: { type: "boolean" },
			description: "Estado del switch (on/off)",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		variant: {
			control: { type: "select" },
			options: ["default", "error"],
			description: "Variante de color del switch cuando está activo",
			table: {
				type: { summary: '"default" | "error"' },
				defaultValue: { summary: '"default"' },
			},
		},
		disabled: {
			control: { type: "boolean" },
			description: "Estado deshabilitado del switch",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Off: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);
		return (
			<Switch
				label="¿Solo para Lomas de Zamora?"
				checked={checked}
				onChange={setChecked}
			/>
		);
	},
};

export const On: Story = {
	render: () => {
		const [checked, setChecked] = useState(true);
		return (
			<Switch
				label="¿Solo para Lomas de Zamora?"
				checked={checked}
				onChange={setChecked}
			/>
		);
	},
};

export const OnError: Story = {
	render: () => {
		const [checked, setChecked] = useState(true);
		return (
			<Switch
				label="¿Solo para Lomas de Zamora?"
				checked={checked}
				onChange={setChecked}
				variant="error"
			/>
		);
	},
};

export const AllStates: Story = {
	render: () => {
		const [checked1, setChecked1] = useState(false);
		const [checked2, setChecked2] = useState(true);
		const [checked3, setChecked3] = useState(true);
		return (
			<div className="flex flex-col gap-6 p-4">
				<Switch
					label="¿Solo para Lomas de Zamora?"
					checked={checked1}
					onChange={setChecked1}
				/>
				<Switch
					label="¿Solo para Lomas de Zamora?"
					checked={checked2}
					onChange={setChecked2}
				/>
				<Switch
					label="¿Solo para Lomas de Zamora?"
					checked={checked3}
					onChange={setChecked3}
					variant="error"
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);
		return (
			<Switch
				label="¿Solo para Lomas de Zamora?"
				checked={checked}
				onChange={setChecked}
				disabled={true}
			/>
		);
	},
};

