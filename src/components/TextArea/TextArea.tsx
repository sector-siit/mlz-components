"use client";
export interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
}

interface ContainerProp extends React.HTMLAttributes<HTMLDivElement> {}

interface LabelProp extends React.LabelHTMLAttributes<HTMLLabelElement> {}

interface HelperTextProp extends React.HTMLAttributes<HTMLParagraphElement> {}

const textAreaClasses = (hasError?: boolean, fullWidth?: boolean) => {
	const labelColorClass = hasError ? "mlz-error-color" : "text-primary-600";
	const borderClass = hasError ? "mlz-error-border" : "border-primary-400";
	const textColorClass = hasError ? "mlz-error-color" : "text-primary-600";
	const focusBorderClass = hasError ? "focus:border-semantic-error-600" : "focus:border-primary-600";
	const focusRingClass = hasError ? "focus:ring-semantic-error-600" : "focus:ring-primary-600";
	const activeBorderClass = hasError ? "active:border-semantic-error-600" : "active:border-primary-600";
	const placeholderClass = hasError ? "placeholder:text-semantic-error-600" : "placeholder:text-primary-400";

	return {
		containerStyle:
			"flex flex-col relative gap-1" + (fullWidth ? " w-full" : ""),
		labelStyle: `mlz-label-textarea block ${labelColorClass}`,
		textAreaStyle: [
			"disabled:bg-primary-100 disabled:cursor-not-allowed disabled:text-primary-300",
			"text-primary-600",
			"block w-full border border-solid",
			"rounded-[4px]",
			"px-4 py-2",
			"placeholder:text-base",
			"focus:outline-none focus:ring-2",
			"active:ring-2",
			"resize-y",
			"min-w-[498px] min-h-[123px]",
			borderClass,
			placeholderClass,
			focusBorderClass,
			focusRingClass,
			activeBorderClass,
		].join(" "),
		helperTextStyle: `mt-1 text-base ${textColorClass}`,
	};
};

export const TextArea: React.FC<TextAreaProps> = ({
	labelProps,
	helperTextProps,
	containerProps,
	errorText,
	helperText,
	hasError = false,
	disabled,
	label,
	placeholder,
	fullWidth,
	...props
}) => {
	const classes = textAreaClasses(hasError, fullWidth);
	return (
		<div {...containerProps} className={classes.containerStyle}>
			<label {...labelProps} className={classes.labelStyle}>
				{label}
			</label>
			<textarea
				{...props}
				disabled={disabled}
				placeholder={placeholder}
				className={classes.textAreaStyle}
			/>
			<p {...helperTextProps} className={classes.helperTextStyle}>
				{errorText ? errorText : helperText}
			</p>
		</div>
	);
};

