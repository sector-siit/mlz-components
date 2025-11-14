import React, { createContext, useContext, useState, useCallback } from "react";
import { Toast, type ToastProps, type ToastVariant } from "./Toast";

interface ToastItem extends Omit<ToastProps, "onClose"> {
	id: string;
	duration?: number;
}

interface ToastContextType {
	toasts: ToastItem[];
	showToast: (toast: Omit<ToastItem, "id">) => string;
	removeToast: (id: string) => void;
	clearToasts: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}
	return context;
};

interface ToastProviderProps {
	children: React.ReactNode;
	position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
	children,
	position = "top-right",
}) => {
	const [toasts, setToasts] = useState<ToastItem[]>([]);

	const showToast = useCallback((toast: Omit<ToastItem, "id">) => {
		const id = Math.random().toString(36).substring(2, 9);
		const newToast: ToastItem = {
			...toast,
			id,
			duration: toast.duration ?? 5000,
		};

		setToasts((prev) => [...prev, newToast]);

		if (newToast.duration && newToast.duration > 0) {
			setTimeout(() => {
				setToasts((prev) => prev.filter((t) => t.id !== id));
			}, newToast.duration);
		}

		return id;
	}, []);

	const removeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}, []);

	const clearToasts = useCallback(() => {
		setToasts([]);
	}, []);

	const positionClasses = {
		"top-right": "top-4 right-4",
		"top-left": "top-4 left-4",
		"bottom-right": "bottom-4 right-4",
		"bottom-left": "bottom-4 left-4",
		"top-center": "top-4 left-1/2 -translate-x-1/2",
		"bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
	};

	return (
		<ToastContext.Provider value={{ toasts, showToast, removeToast, clearToasts }}>
			{children}
			{toasts.length > 0 && (
				<div
					className={`fixed z-50 flex flex-col gap-2 ${positionClasses[position]}`}
				>
					{toasts.map((toast) => (
						<Toast
							key={toast.id}
							{...toast}
							onClose={() => removeToast(toast.id)}
						/>
					))}
				</div>
			)}
		</ToastContext.Provider>
	);
};

