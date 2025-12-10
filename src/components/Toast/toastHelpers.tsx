"use client";
import React from "react";
import toast, { Toast as ToastType } from "react-hot-toast";
import { CheckCircleIcon } from "../Icons/CheckCircle";
import { ErrorCircleIcon } from "../Icons/ErrorCircle";
import { InfoCircleIcon } from "../Icons/InfoCircle";
import { WarningTriangleIcon } from "../Icons/WarningTriangle";

export type ToastVariant = "success" | "info" | "warning" | "error";

export interface ToastOptions {
	title: string;
	description?: string;
	variant?: ToastVariant;
	duration?: number;
}

const toastClasses = (variant: ToastVariant) => {
	const variants = {
		success: {
			bg: "bg-[#EAF9EF]",
			border: "border-[var(--mlz-semantic-success)]",
			icon: "text-[var(--mlz-semantic-success)]",
			text: "text-[var(--mlz-semantic-success)]",
			iconBg: "bg-[#C5F5D5]",
			iconComponent: CheckCircleIcon,
		},
		info: {
			bg: "bg-blue-50",
			border: "border-[#0058CC]",
			icon: "text-[#0058CC]",
			text: "text-[#0058CC]",
			iconBg: "bg-blue-100",
			iconComponent: InfoCircleIcon,
		},
		warning: {
			bg: "bg-yellow-50",
			border: "border-[#C49E0A]",
			icon: "text-[#C49E0A]",
			text: "text-[#C49E0A]",
			iconBg: "bg-yellow-100",
			iconComponent: WarningTriangleIcon,
		},
		error: {
			bg: "bg-red-50",
			border: "border-[#EF284C]",
			icon: "text-[#EF284C]",
			text: "text-[#EF284C]",
			iconBg: "bg-red-100",
			iconComponent: ErrorCircleIcon,
		},
	};

	return variants[variant];
};

const CustomToast: React.FC<{
	t: ToastType;
	title: string;
	description?: string;
	variant?: ToastVariant;
}> = ({ t, title, description, variant = "info" }) => {
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
			<button
				type="button"
				onClick={() => toast.dismiss(t.id)}
				className="text-gray-400 hover:text-gray-600"
				aria-label="Cerrar"
			>
				×
			</button>
		</div>
	);
};

export const showToast = ({
	title,
	description,
	variant = "info",
	duration = 5000,
}: ToastOptions): string => {
	return toast.custom(
		(t) => (
			<CustomToast
				t={t}
				title={title}
				description={description}
				variant={variant}
			/>
		),
		{
			duration,
			position: "top-right",
		},
	);
};

export const toastSuccess = (
	title: string,
	description?: string,
	duration?: number,
) => showToast({ title, description, variant: "success", duration });

export const toastInfo = (
	title: string,
	description?: string,
	duration?: number,
) => showToast({ title, description, variant: "info", duration });

export const toastWarning = (
	title: string,
	description?: string,
	duration?: number,
) => showToast({ title, description, variant: "warning", duration });

export const toastError = (
	title: string,
	description?: string,
	duration?: number,
) => showToast({ title, description, variant: "error", duration });

export { Toaster, toast } from "react-hot-toast";
