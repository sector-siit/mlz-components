"use client";
import React from "react";
import { CheckCircleIcon } from "../Icons/CheckCircle";
import { ErrorCircleIcon } from "../Icons/ErrorCircle";
import { InfoCircleIcon } from "../Icons/InfoCircle";
import { WarningTriangleIcon } from "../Icons/WarningTriangle";

export type ToastVariant = "success" | "info" | "warning" | "error";

export interface ToastProps {
	title: string;
	description?: string;
	variant?: ToastVariant;
	onClose?: () => void;
}

const toastClasses = (variant: ToastVariant) => {
	const variants = {
		success: {
			bg: "mlz-toast-success-bg",
			border: "mlz-toast-success-border",
			icon: "mlz-toast-success-text",
			text: "mlz-toast-success-text",
			iconBg: "mlz-toast-success-icon-bg",
			iconComponent: CheckCircleIcon,
		},
		info: {
			bg: "mlz-toast-info-bg",
			border: "mlz-toast-info-border",
			icon: "mlz-toast-info-text",
			text: "mlz-toast-info-text",
			iconBg: "mlz-toast-info-icon-bg",
			iconComponent: InfoCircleIcon,
		},
		warning: {
			bg: "mlz-toast-warning-bg",
			border: "mlz-toast-warning-border",
			icon: "mlz-toast-warning-text",
			text: "mlz-toast-warning-text",
			iconBg: "mlz-toast-warning-icon-bg",
			iconComponent: WarningTriangleIcon,
		},
		error: {
			bg: "mlz-toast-error-bg",
			border: "mlz-toast-error-border",
			icon: "mlz-toast-error-text",
			text: "mlz-toast-error-text",
			iconBg: "mlz-toast-error-icon-bg",
			iconComponent: ErrorCircleIcon,
		},
	};

	return variants[variant];
};

export const Toast: React.FC<ToastProps> = ({
	title,
	description,
	variant = "info",
	onClose,
}) => {
	const classes = toastClasses(variant);
	const IconComponent = classes.iconComponent;

	return (
		<div
			className={[
				"flex items-start",
				"w-[400px] min-h-[88px]",
				"rounded-lg",
				"border border-solid",
				"p-4",
				"gap-4",
				"shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)]",
				classes.bg,
				classes.border,
			].join(" ")}
		>
			<div
				className={[
					"flex items-center justify-center",
					"w-10 h-10",
					"rounded-lg",
					"p-2",
					"flex-none",
					classes.iconBg,
				].join(" ")}
			>
				<div className={classes.icon}>
					<IconComponent />
				</div>
			</div>
			<div className="flex-1 flex flex-col gap-2">
				<div
					className={[
						"font-bold",
						"text-[20px]",
						"leading-[100%]",
						"tracking-normal",
						classes.text,
					].join(" ")}
				>
					{title}
				</div>
				{description && (
					<div
						className={[
							"font-normal",
							"text-[18px]",
							"leading-[100%]",
							"tracking-normal",
							classes.text,
						].join(" ")}
					>
						{description}
					</div>
				)}
			</div>
			{onClose && (
				<button
					type="button"
					onClick={onClose}
					className="text-gray-400 hover:text-gray-600"
					aria-label="Cerrar"
				>
					×
				</button>
			)}
		</div>
	);
};
