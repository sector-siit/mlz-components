export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	/** Variante visual del input */
	variant?: "default" | "error" | "success";
	/** Tamaño del input */
	size?: "sm" | "md" | "lg";
	/** Si el input tiene un label */
	label?: string;
	/** Texto de ayuda debajo del input */
	helperText?: string;
	/** Texto de error */
	errorText?: string;
	/** Si el input es de ancho completo */
	fullWidth?: boolean;
}

/**
 * Componente Input básico con diferentes variantes y tamaños
 */
export const Input: React.FC<InputProps> = ({
	variant = "default",
	size = "md",
	label,
	helperText,
	errorText,
	fullWidth = false,
	className = "",
	...props
}) => {
	// Clases base del input
	const baseClasses = [
		"border rounded-md transition-colors duration-200 focus:outline-hidden focus:ring-2",
		"bg-white dark:bg-gray-800",
		"text-gray-900 dark:text-gray-100",
		"placeholder-gray-500 dark:placeholder-gray-400",
	];

	// Clases de tamaño
	const sizeClasses = {
		sm: [
			"px-3 py-1.5 text-sm",
			"h-8",
			// CSS Variables con fallbacks
			`h-(--mlz-input-height-sm,2rem)`,
			`px-(--mlz-input-padding-x-sm,0.75rem)`,
			`py-(--mlz-input-padding-y-sm,0.375rem)`,
			`text-(--mlz-input-font-size-sm,0.875rem)`,
		],
		md: [
			"px-4 py-2 text-base",
			"h-10",
			// CSS Variables con fallbacks
			`h-(--mlz-input-height-md,2.5rem)`,
			`px-(--mlz-input-padding-x-md,1rem)`,
			`py-(--mlz-input-padding-y-md,0.5rem)`,
			`text-(--mlz-input-font-size-md,1rem)`,
		],
		lg: [
			"px-5 py-3 text-lg",
			"h-12",
			// CSS Variables con fallbacks
			`h-(--mlz-input-height-lg,3rem)`,
			`px-(--mlz-input-padding-x-lg,1.25rem)`,
			`py-(--mlz-input-padding-y-lg,0.75rem)`,
			`text-(--mlz-input-font-size-lg,1.125rem)`,
		],
	};

	// Clases de variante
	const variantClasses = {
		default: [
			"border-gray-300 dark:border-gray-600",
			"focus:border-blue-500 focus:ring-blue-500/20",
			// CSS Variables con fallbacks
			`border-(--mlz-input-border-color,rgb(209,213,219))`,
			`focus:border-(--mlz-primary-500,rgb(59,130,246))`,
			`focus:ring-(--mlz-primary-500,rgb(59,130,246))`,
		],
		error: [
			"border-red-500 dark:border-red-400",
			"focus:border-red-500 focus:ring-red-500/20",
			// CSS Variables con fallbacks
			`border-(--mlz-error-500,rgb(239,68,68))`,
			`focus:border-(--mlz-error-500,rgb(239,68,68))`,
			`focus:ring-(--mlz-error-500,rgb(239,68,68))`,
		],
		success: [
			"border-green-500 dark:border-green-400",
			"focus:border-green-500 focus:ring-green-500/20",
			// CSS Variables con fallbacks
			`border-(--mlz-success-500,rgb(34,197,94))`,
			`focus:border-(--mlz-success-500,rgb(34,197,94))`,
			`focus:ring-(--mlz-success-500,rgb(34,197,94))`,
		],
	};

	// Clases de ancho
	const widthClasses = fullWidth ? "w-full" : "w-auto";

	// Combinar todas las clases
	const inputClasses = [
		...baseClasses,
		...sizeClasses[size],
		...variantClasses[variant],
		widthClasses,
		className,
	].join(" ");

	// Determinar el texto de ayuda efectivo
	const effectiveHelperText = errorText || helperText;
	const effectiveVariant = errorText ? "error" : variant;

	return (
		<div className={`flex flex-col ${fullWidth ? "w-full" : "w-auto"}`}>
			{label && (
				<label
					htmlFor={props.id}
					className={`mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 text-(--mlz-input-label-color,rgb(55,65,81))`}
				>
					{label}
				</label>
			)}

			<input {...props} className={inputClasses} />

			{effectiveHelperText && (
				<p
					className={`mt-1.5 text-sm ${
						effectiveVariant === "error"
							? "text-red-600 dark:text-red-400 text-(--mlz-error-600,rgb(220,38,38))"
							: effectiveVariant === "success"
								? "text-green-600 dark:text-green-400 text-(--mlz-success-600,rgb(22,163,74))"
								: "text-gray-500 dark:text-gray-400 text-(--mlz-input-helper-color,rgb(107,114,128))"
					}`}
				>
					{effectiveHelperText}
				</p>
			)}
		</div>
	);
};

export default Input;
