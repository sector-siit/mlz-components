import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "react-hot-toast";
import { Toast } from "./Toast";
import { toastSuccess, toastInfo, toastWarning, toastError, showToast } from "./toastHelpers";

const meta: Meta<typeof Toast> = {
	title: "Components/Toast",
	component: Toast,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component:
					"Componente Toast para mostrar notificaciones con diferentes variantes (success, info, warning, error). Incluye iconos, títulos y descripciones opcionales.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		title: {
			control: { type: "text" },
			description: "Título del toast",
			table: {
				type: { summary: "string" },
			},
		},
		description: {
			control: { type: "text" },
			description: "Descripción opcional del toast",
			table: {
				type: { summary: "string" },
			},
		},
		variant: {
			control: { type: "select" },
			options: ["success", "info", "warning", "error"],
			description: "Variante del toast",
			table: {
				type: { summary: '"success" | "info" | "warning" | "error"' },
				defaultValue: { summary: '"info"' },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
	args: {
		title: "Propuesta enviada",
		description: "La propuesta fue enviada con éxito.",
		variant: "success",
	},
};

export const Info: Story = {
	args: {
		title: "Info",
		description: "Info",
		variant: "info",
	},
};

export const Warning: Story = {
	args: {
		title: "Warning",
		description: "Warning",
		variant: "warning",
	},
};

export const Error: Story = {
	args: {
		title: "No se pudieron obtener los datos de RENAPER",
		description: "Por favor, verificá el DNI y el sexo ingresados.",
		variant: "error",
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4 p-4 w-[400px]">
			<Toast
				title="Propuesta enviada"
				description="La propuesta fue enviada con éxito."
				variant="success"
			/>
			<Toast
				title="Info"
				description="Info"
				variant="info"
			/>
			<Toast
				title="Warning"
				description="Warning"
				variant="warning"
			/>
			<Toast
				title="No se pudieron obtener los datos de RENAPER"
				description="Por favor, verificá el DNI y el sexo ingresados."
				variant="error"
			/>
		</div>
	),
};

export const WithReactHotToast: Story = {
	render: () => {
		return (
			<>
				<Toaster />
				<div className="flex flex-col gap-4 p-4">
					<button
						type="button"
						onClick={() =>
							toastSuccess(
								"Propuesta enviada",
								"La propuesta fue enviada con éxito."
							)
						}
						className="px-4 py-2 bg-green-500 text-white rounded"
					>
						Mostrar Success
					</button>
					<button
						type="button"
						onClick={() =>
							toastInfo("Info", "Esta es una notificación informativa.")
						}
						className="px-4 py-2 bg-blue-500 text-white rounded"
					>
						Mostrar Info
					</button>
					<button
						type="button"
						onClick={() =>
							toastWarning("Warning", "Esta es una advertencia.")
						}
						className="px-4 py-2 bg-yellow-500 text-white rounded"
					>
						Mostrar Warning
					</button>
					<button
						type="button"
						onClick={() =>
							toastError(
								"Error",
								"Ocurrió un error al procesar la solicitud."
							)
						}
						className="px-4 py-2 bg-red-500 text-white rounded"
					>
						Mostrar Error
					</button>
					<button
						type="button"
						onClick={() =>
							showToast({
								title: "No se pudieron obtener los datos de RENAPER",
								description: "Por favor, verificá el DNI y el sexo ingresados.",
								variant: "error",
							})
						}
						className="px-4 py-2 bg-red-600 text-white rounded"
					>
						Mostrar Error Completo
					</button>
				</div>
			</>
		);
	},
};

