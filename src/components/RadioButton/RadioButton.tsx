"use client";

export interface RadioButtonOption {
	label: string;
	value: string;
	disabled?: boolean;
}

export interface RadioButtonProps {
	name: string;
	value: string;
	label: string;
	checked: boolean;
	onChange: (value: string) => void;
	className?: string;
	labelSize?: "sm" | "base" | "lg" | "xl";
	labelWeight?: "normal" | "medium" | "bold";
	disabled?: boolean;
}

const radioButtonClasses = (hasError?: boolean) => {
	return {
		containerStyle: "flex items-center",
		inputStyle: [
			"w-6 h-6",
			"text-primary-600",
			"bg-gray-100",
			"border-gray-300",
			"focus:ring-0",
			"focus:outline-none",
			"flex-none",
			"order-0",
			"flex-grow-0",
			"checked:bg-primary-600",
			"checked:border-primary-600",
			"rounded-full",
			"cursor-pointer",
			"disabled:opacity-50 disabled:cursor-not-allowed",
		].join(" "),
	};
};

export const RadioButton: React.FC<RadioButtonProps> = ({
	name,
	value,
	label,
	checked,
	onChange,
	className = "",
	labelSize = "base",
	labelWeight = "medium",
	disabled = false,
}) => {
	const classes = radioButtonClasses();

	const sizeClasses = {
		sm: "text-sm",
		base: "text-base",
		lg: "text-lg",
		xl: "text-xl",
	};

	const weightClasses = {
		normal: "font-normal",
		medium: "font-medium",
		bold: "font-bold",
	};

	return (
		<div className={`${classes.containerStyle} ${className}`}>
			<input
				type="radio"
				id={`${name}-${value}`}
				name={name}
				value={value}
				checked={checked}
				onChange={() => onChange(value)}
				disabled={disabled}
				className={classes.inputStyle}
				style={{
					accentColor: "#236999",
				}}
			/>
			<label
				htmlFor={`${name}-${value}`}
				className={`ml-2 h-5 ${sizeClasses[labelSize]} ${weightClasses[labelWeight]} leading-5 flex items-center cursor-pointer whitespace-nowrap text-primary-600 ${
					disabled ? "opacity-50 cursor-not-allowed" : ""
				}`}
			>
				{label}
			</label>
		</div>
	);
};

export interface RadioButtonGroupProps {
	name: string;
	label?: string;
	options: RadioButtonOption[];
	value?: string;
	onChange?: (value: string) => void;
	hasError?: boolean;
	errorText?: string;
	helperText?: string;
	className?: string;
	direction?: "row" | "col";
	labelSize?: "sm" | "base" | "lg" | "xl";
	labelWeight?: "normal" | "medium" | "bold";
	radioLabelWeight?: "normal" | "medium" | "bold";
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
	helperTextProps?: React.HTMLAttributes<HTMLParagraphElement>;
}

const radioButtonGroupClasses = (hasError?: boolean) => {
	const labelColorClass = hasError ? "mlz-error-color" : "text-primary-600";
	const textColorClass = hasError ? "mlz-error-color" : "text-primary-600";

	return {
		containerStyle: "flex flex-col gap-2",
		labelStyle: `mlz-label-textarea block ${labelColorClass}`,
		helperTextStyle: `mt-1 text-base ${textColorClass}`,
	};
};

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
	name,
	label,
	options,
	value,
	onChange,
	hasError = false,
	errorText,
	helperText,
	className = "",
	direction = "row",
	labelSize = "base",
	labelWeight = "medium",
	radioLabelWeight = "bold",
	containerProps,
	labelProps,
	helperTextProps,
}) => {
	const classes = radioButtonGroupClasses(hasError);

	const sizeClasses = {
		sm: "text-sm",
		base: "text-base",
		lg: "text-lg",
		xl: "text-xl",
	};

	const weightClasses = {
		normal: "font-normal",
		medium: "font-medium",
		bold: "font-bold",
	};

	return (
		<div {...containerProps} className={`${classes.containerStyle} ${className}`}>
			{label && (
				<label
					{...labelProps}
					className={`${classes.labelStyle} ${sizeClasses[labelSize]} ${weightClasses[labelWeight]}`}
				>
					{label}
				</label>
			)}
			<div
				className={`flex gap-4 ${
					direction === "col" ? "flex-col" : "flex-row"
				}`}
			>
				{options.map((option) => (
					<RadioButton
						key={option.value}
						name={name}
						value={option.value}
						label={option.label}
						checked={value === option.value}
						onChange={(val) => onChange?.(val)}
						labelSize={labelSize}
						labelWeight={radioLabelWeight}
						disabled={option.disabled}
					/>
				))}
			</div>
			{(errorText || helperText) && (
				<p {...helperTextProps} className={classes.helperTextStyle}>
					{errorText ? errorText : helperText}
				</p>
			)}
		</div>
	);
};

