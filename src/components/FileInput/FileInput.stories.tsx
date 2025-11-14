import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FileInput } from "./FileInput";

const meta: Meta<typeof FileInput> = {
	title: "Components/FileInput",
	component: FileInput,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Componente FileInput para adjuntar archivos con soporte para etiquetas, textos de ayuda, validación de errores. Incluye un botón para seleccionar archivos y un campo que muestra el nombre del archivo seleccionado.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			control: { type: "text" },
			description: "Etiqueta del campo de archivo",
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
		accept: {
			control: { type: "text" },
			description: "Tipos de archivo aceptados (ej: '.pdf,.jpg,.png')",
			table: {
				type: { summary: "string" },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
	render: () => {
		const [file, setFile] = useState<File | null>(null);
		return (
			<FileInput
				label="Atach"
				value={file}
				onChange={setFile}
				helperText="PDF, JPEG, PNG de hasta 10Mb"
			/>
		);
	},
};

export const WithError: Story = {
	render: () => {
		const [file, setFile] = useState<File | null>(null);
		return (
			<FileInput
				label="Atach"
				value={file}
				onChange={setFile}
				hasError={true}
				errorText="El documento pesa mas de 10Mb"
			/>
		);
	},
};

export const WithFile: Story = {
	render: () => {
		const [file, setFile] = useState<File | null>(
			new File([], "documento.pdf", { type: "application/pdf" })
		);
		return (
			<FileInput
				label="Atach"
				value={file}
				onChange={setFile}
				helperText="PDF, JPEG, PNG de hasta 10Mb"
			/>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const [file, setFile] = useState<File | null>(null);
		return (
			<FileInput
				label="Atach"
				value={file}
				onChange={setFile}
				disabled={true}
				helperText="Este campo está deshabilitado"
			/>
		);
	},
};

export const AllStates: Story = {
	render: () => {
		const [file1, setFile1] = useState<File | null>(null);
		const [file2, setFile2] = useState<File | null>(null);
		return (
			<div className="flex flex-col gap-6 p-4 w-[500px]">
				<FileInput
					label="Atach"
					value={file1}
					onChange={setFile1}
					helperText="PDF, JPEG, PNG de hasta 10Mb"
				/>
				<FileInput
					label="Atach"
					value={file2}
					onChange={setFile2}
					hasError={true}
					errorText="El documento pesa mas de 10Mb"
				/>
			</div>
		);
	},
};

