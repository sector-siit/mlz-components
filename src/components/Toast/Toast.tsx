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
			className={`mlz-toast-container ${classes.bg} ${classes.border}`}
		>
			<div className={`mlz-toast-icon-container ${classes.iconBg}`}>
				<div className={classes.icon}>
					<IconComponent />
				</div>
			</div>
			<div className="mlz-toast-content">
				<div className={`mlz-toast-title ${classes.text}`}>
					{title}
				</div>
				{description && (
					<div className={`mlz-toast-description ${classes.text}`}>
						{description}
					</div>
				)}
			</div>
			{onClose && (
				<button
					type="button"
					onClick={onClose}
					className="mlz-toast-close"
					aria-label="Cerrar"
				>
					×
				</button>
			)}
		</div>
	);
};
