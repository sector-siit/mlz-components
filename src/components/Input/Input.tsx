"use client";
import { CheckIcon } from "../Icons/Check";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	errorText?: string;
	hasError?: boolean;
	helperText?: string;
	label?: string;
	disabled?: boolean;
	placeholder?: string;
	fullWidth?: boolean;
	containerProps?: ContainerProp;
	labelProps?: LabelProp;
	helperTextProps?: HelperTextProp;
	checkedIcon?: React.ReactNode;
}

interface ContainerProp extends React.HTMLAttributes<HTMLDivElement> {}

interface LabelProp extends React.LabelHTMLAttributes<HTMLLabelElement> {}

interface HelperTextProp extends React.HTMLAttributes<HTMLParagraphElement> {}

const inputClasses = (hasError?: boolean, fullWidth?: boolean) => {
	const colorClass = hasError ? "semantic-error-600" : "primary-600";
	const borderColorClass = hasError ? "semantic-error-600" : "primary-400";

	return {
		containerStyle:
			"flex flex-col relative " + (fullWidth ? " w-full" : ""),
		labelStyle: `block text-base font-bold text-${colorClass}`,
		inputStyle: [
			"disabled:bg-primary-100 disabled:cursor-not-allowed disabled:text-primary-300",
			"text-primary-600",
			"block w-full rounded border px-4 py-2",
			"placeholder:text-base",
			"focus:outline-none focus:ring-2",
			"active:ring-2",
			`border-${borderColorClass}`,
			`placeholder:text-${borderColorClass}`,
			`focus:border-${colorClass} focus:ring-${colorClass}`,
			`active:border-${colorClass}`,
		].join(" "),
		helperTextStyle: `mt-1 text-base text-${colorClass}`,
	};
};

export const Input: React.FC<InputProps> = ({
	labelProps,
	helperTextProps,
	containerProps,
	errorText,
	helperText,
	hasError = false,
	disabled,
	value = '',
	label,
	placeholder,
	fullWidth,
	checkedIcon,
	...props
}) => {
	const classes = inputClasses(hasError, fullWidth);
	return (
		<div className={classes.containerStyle}>
			<label {...labelProps} className={classes.labelStyle}>
				{label}
			</label>
			<input
				{...props}
				disabled={disabled}
				placeholder={placeholder}
				className={classes.inputStyle}
			/>
			{checkedIcon && (
				<div className="absolute right-4 top-1/2 -translate-y-1/2">
					<CheckIcon />
				</div>
			)}
			<p {...helperTextProps} className={classes.helperTextStyle}>
				{errorText ? errorText : helperText}
			</p>
		</div>
	);
};
