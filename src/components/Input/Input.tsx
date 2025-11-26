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
	return {
		containerStyle:
			"flex flex-col relative " + (fullWidth ? " w-full" : ""),
	 
		labelStyle: hasError
			? "block text-base font-bold text-semantic-error-600"
			: "block text-base font-bold text-primary-600",
		inputStyle: [
			"disabled:bg-primary-100 disabled:cursor-not-allowed disabled:text-primary-300",
			"text-primary-600",
			"block w-full rounded border px-4 py-2",
			"placeholder:text-base",
			"focus:outline-none focus:ring-2",
			"active:ring-2",
			hasError
				? "border-semantic-error-600 placeholder:text-semantic-error-600 focus:border-semantic-error-600 focus:ring-semantic-error-600 active:border-semantic-error-600"
				: "border-primary-400 placeholder:text-primary-400 focus:border-primary-600 focus:ring-primary-600 active:border-primary-600",
		].join(" "),
		helperTextStyle: hasError
			? "mt-1 text-base text-semantic-error-600"
			: "mt-1 text-base text-primary-600",
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
	autoComplete, 
	className, 
	...props
}) => {
	const classes = inputClasses(hasError, fullWidth);
	
	const inputValue = value ?? '';
	
	const finalClassName = className 
		? `${classes.inputStyle} ${className}` 
		: classes.inputStyle;
	
	return (
		<div {...containerProps} className={classes.containerStyle}>
			<label {...labelProps} className={classes.labelStyle}>
				{label}
			</label>
			<input
				{...props}
				disabled={disabled}
				placeholder={placeholder}
				value={inputValue}
				autoComplete={autoComplete} 
				className={finalClassName} 
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