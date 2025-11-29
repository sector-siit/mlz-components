import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton, RadioButtonGroup } from "./RadioButton";
import { useState } from "react";

const meta: Meta<typeof RadioButtonGroup> = {
	title: "Components/RadioButton",
	component: RadioButtonGroup,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Componente RadioButton personalizable con soporte para múltiples opciones, layout vertical u horizontal, validación de errores y textos de ayuda.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		name: {
			control: { type: "text" },
			description: "Nombre del grupo de radio buttons",
			table: {
				type: { summary: "string" },
			},
		},
		label: {
			control: { type: "text" },
			description: "Etiqueta del grupo de radio buttons",
			table: {
				type: { summary: "string" },
			},
		},
		options: {
			control: { type: "object" },
			description: "Array de opciones para los radio buttons",
			table: {
				type: { summary: "RadioButtonOption[]" },
			},
		},
		value: {
			control: { type: "text" },
			description: "Valor seleccionado",
			table: {
				type: { summary: "string" },
			},
		},
		hasError: {
			control: { type: "boolean" },
			description: "Indica si el radio button tiene un error de validación",
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
			description: "Texto de ayuda que se muestra debajo de los radio buttons",
			table: {
				type: { summary: "string" },
			},
		},
		direction: {
			control: { type: "select" },
			options: ["row", "col"],
			description: "Dirección de los radio buttons (row o col)",
			table: {
				type: { summary: '"row" | "col"' },
				defaultValue: { summary: '"row"' },
			},
		},
		labelSize: {
			control: { type: "select" },
			options: ["sm", "base", "lg", "xl"],
			description: "Tamaño de la etiqueta",
			table: {
				type: { summary: '"sm" | "base" | "lg" | "xl"' },
				defaultValue: { summary: '"base"' },
			},
		},
		labelWeight: {
			control: { type: "select" },
			options: ["normal", "medium", "bold"],
			description: "Peso de la etiqueta del grupo",
			table: {
				type: { summary: '"normal" | "medium" | "bold"' },
				defaultValue: { summary: '"medium"' },
			},
		},
		radioLabelWeight: {
			control: { type: "select" },
			options: ["normal", "medium", "bold"],
			description: "Peso de la etiqueta de cada radio button",
			table: {
				type: { summary: '"normal" | "medium" | "bold"' },
				defaultValue: { summary: '"bold"' },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof RadioButtonGroup>;

const InteractiveRadioButtonGroup = (args: any) => {
	const [value, setValue] = useState(args.value || "");

	return (
		<RadioButtonGroup
			{...args}
			value={value}
			onChange={(val) => setValue(val)}
		/>
	);
};

export const Horizontal: Story = {
	render: (args) => <InteractiveRadioButtonGroup {...args} />,
	args: {
		name: "example",
		label: "Selecciona una opción",
		options: [
			{ label: "Opción 1", value: "opcion1" },
			{ label: "Opción 2", value: "opcion2" },
			{ label: "Opción 3", value: "opcion3" },
		],
		value: "opcion1",
		direction: "row",
	},
};

export const Vertical: Story = {
	render: (args) => <InteractiveRadioButtonGroup {...args} />,
	args: {
		name: "example",
		label: "Selecciona una opción",
		options: [
			{ label: "Opción 1", value: "opcion1" },
			{ label: "Opción 2", value: "opcion2" },
			{ label: "Opción 3", value: "opcion3" },
		],
		value: "opcion2",
		direction: "col",
	},
};

export const WithError: Story = {
	render: (args) => <InteractiveRadioButtonGroup {...args} />,
	args: {
		name: "example",
		label: "Selecciona una opción",
		options: [
			{ label: "Opción 1", value: "opcion1" },
			{ label: "Opción 2", value: "opcion2" },
		],
		hasError: true,
		errorText: "Este campo es obligatorio",
		direction: "row",
	},
};

export const WithHelperText: Story = {
	render: (args) => <InteractiveRadioButtonGroup {...args} />,
	args: {
		name: "example",
		label: "Selecciona una opción",
		options: [
			{ label: "Opción 1", value: "opcion1" },
			{ label: "Opción 2", value: "opcion2" },
		],
		helperText: "Selecciona la opción que mejor se adapte a tus necesidades",
		direction: "row",
	},
};

export const Disabled: Story = {
	render: (args) => <InteractiveRadioButtonGroup {...args} />,
	args: {
		name: "example",
		label: "Selecciona una opción",
		options: [
			{ label: "Opción 1", value: "opcion1" },
			{ label: "Opción 2", value: "opcion2", disabled: true },
			{ label: "Opción 3", value: "opcion3" },
		],
		value: "opcion1",
		direction: "row",
	},
};

export const AllStates: Story = {
	render: () => {
		const [value1, setValue1] = useState("opcion1");
		const [value2, setValue2] = useState("opcion2");
		const [value3, setValue3] = useState("");

		return (
			<div className="flex flex-col gap-6 p-4 w-[400px]">
				<RadioButtonGroup
					name="example1"
					label="Horizontal"
					options={[
						{ label: "Opción 1", value: "opcion1" },
						{ label: "Opción 2", value: "opcion2" },
					]}
					value={value1}
					onChange={(val) => setValue1(val)}
					direction="row"
				/>
				<RadioButtonGroup
					name="example2"
					label="Vertical"
					options={[
						{ label: "Opción 1", value: "opcion1" },
						{ label: "Opción 2", value: "opcion2" },
					]}
					value={value2}
					onChange={(val) => setValue2(val)}
					direction="col"
				/>
				<RadioButtonGroup
					name="example3"
					label="Con Error"
					options={[
						{ label: "Opción 1", value: "opcion1" },
						{ label: "Opción 2", value: "opcion2" },
					]}
					value={value3}
					onChange={(val) => setValue3(val)}
					hasError={true}
					errorText="Este campo es obligatorio"
					direction="row"
				/>
				<RadioButtonGroup
					name="example4"
					label="Con Texto de Ayuda"
					options={[
						{ label: "Opción 1", value: "opcion1" },
						{ label: "Opción 2", value: "opcion2" },
					]}
					value={value1}
					onChange={(val) => setValue1(val)}
					helperText="Selecciona la opción que mejor se adapte"
					direction="row"
				/>
			</div>
		);
	},
};

