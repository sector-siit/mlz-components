import { CheckBlueIcon } from "../Icons/CheckBlue";

export interface CheckboxOption {
	label: string;
	value: string;
	disabled?: boolean;
}

export interface CheckboxProps {
	label?: string;
	options: CheckboxOption[];
	value?: string[];
	onChange?: (values: string[]) => void;
	hasError?: boolean;
	errorText?: string;
	helperText?: string;
	direction?: "vertical" | "horizontal";
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
	helperTextProps?: React.HTMLAttributes<HTMLParagraphElement>;
}

const checkboxClasses = (hasError?: boolean) => {
	const labelColorClass = hasError ? "mlz-error-color" : "text-primary-600";
	const optionLabelColorClass = "text-primary-600";
	const borderColorClass = hasError
		? "mlz-error-border"
		: "border-primary-400";
	const textColorClass = hasError ? "mlz-error-color" : "text-primary-600";

	return {
		containerStyle: "flex flex-col relative font-geometria gap-1",
		labelStyle: `mlz-label-textarea block ${labelColorClass}`,
		checkboxContainerStyle: "flex items-center gap-1",
		checkboxStyle: [
			"relative flex items-center justify-center",
			"border border-solid rounded",
			"cursor-pointer",
			"w-[22.67px] h-[22.67px]",
			"disabled:opacity-50 disabled:cursor-not-allowed",
			borderColorClass,
			"focus-within:outline-none focus-within:ring-2",
			hasError
				? "focus-within:ring-semantic-error-600"
				: "focus-within:ring-primary-600",
		].join(" "),
		checkboxInputStyle: "sr-only",
		checkboxLabelStyle: `${optionLabelColorClass} cursor-pointer`,
		helperTextStyle: `mt-1 text-base ${textColorClass}`,
	};
};

export const Checkbox: React.FC<CheckboxProps> = ({
	label,
	options,
	value = [],
	onChange,
	hasError = false,
	errorText,
	helperText,
	direction = "vertical",
	containerProps,
	labelProps,
	helperTextProps,
}) => {
	const classes = checkboxClasses(hasError);

	const handleChange = (optionValue: string, checked: boolean) => {
		if (onChange) {
			if (checked) {
				onChange([...value, optionValue]);
			} else {
				onChange(value.filter((v) => v !== optionValue));
			}
		}
	};

	const flexDirection = direction === "horizontal" ? "flex-row" : "flex-col";
	const gap = direction === "horizontal" ? "gap-4" : "gap-1";

	return (
		<div {...containerProps} className={classes.containerStyle}>
			{label && (
				<label {...labelProps} className={classes.labelStyle}>
					{label}
				</label>
			)}
			<div className={`flex ${flexDirection} ${gap}`}>
				{options.map((option) => {
					const isChecked = value.includes(option.value);
					return (
						<div
							key={option.value}
							className={classes.checkboxContainerStyle}
						>
							<label className={classes.checkboxStyle}>
								<input
									type="checkbox"
									checked={isChecked}
									onChange={(e) =>
										handleChange(option.value, e.target.checked)
									}
									disabled={option.disabled}
									className={classes.checkboxInputStyle}
								/>
								{isChecked && (
									<CheckBlueIcon className="text-primary-600" />
								)}
							</label>
							<span className={classes.checkboxLabelStyle}>
								{option.label}
							</span>
						</div>
					);
				})}
			</div>
			{(errorText || helperText) && (
				<p {...helperTextProps} className={classes.helperTextStyle}>
					{errorText ? errorText : helperText}
				</p>
			)}
		</div>
	);
};

