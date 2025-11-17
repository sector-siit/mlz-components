"use client";
import React from "react";
import { PaperclipIcon } from "../Icons/Paperclip";

export interface FileInputProps {
	label?: string;
	value?: File | null;
	onChange?: (file: File | null) => void;
	hasError?: boolean;
	errorText?: string;
	helperText?: string;
	disabled?: boolean;
	accept?: string;
	multiple?: boolean;
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
	helperTextProps?: React.HTMLAttributes<HTMLParagraphElement>;
}

interface ContainerProp extends React.HTMLAttributes<HTMLDivElement> {}

interface LabelProp extends React.LabelHTMLAttributes<HTMLLabelElement> {}

interface HelperTextProp extends React.HTMLAttributes<HTMLParagraphElement> {}

const fileInputClasses = (hasError?: boolean) => {
	const labelColorClass = hasError ? "mlz-error-color" : "text-primary-600";
	const textColorClass = hasError ? "mlz-error-color" : "text-primary-600";
	const fieldTextColor = hasError ? "text-red-400" : "text-primary-400";
	const containerBgColor = hasError ? "bg-red-50" : "bg-[#E5F0F9]";

	return {
		containerStyle: "flex flex-col relative gap-1",
		labelStyle: `mlz-label-textarea block ${labelColorClass}`,
		inputContainerStyle: [
			"flex flex-row items-center",
			"w-[498px] h-[48px]",
			"rounded-[4px]",
			"pt-4 pr-4 pb-4 pl-[6px]",
			"gap-2",
			containerBgColor,
		].join(" "),
		buttonStyle: [
			"flex items-center gap-2",
			"bg-primary-600 text-white",
			"px-4 py-2",
			"rounded",
			"cursor-pointer",
			"hover:bg-primary-700",
			"disabled:opacity-50 disabled:cursor-not-allowed",
			"transition-colors duration-200",
			"flex-none",
			"font-normal",
			"text-base",
			"leading-[100%]",
			"tracking-normal",
		].join(" "),
		fieldStyle: [
			"flex-1",
			"text-base",
			fieldTextColor,
		].join(" "),
		helperTextStyle: `mt-1 text-base ${textColorClass}`,
	};
};

export const FileInput: React.FC<FileInputProps> = ({
	label,
	value,
	onChange,
	hasError = false,
	errorText,
	helperText,
	disabled,
	accept,
	multiple,
	containerProps,
	labelProps,
	helperTextProps,
}) => {
	const classes = fileInputClasses(hasError);
	const fileInputRef = React.useRef<HTMLInputElement>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] || null;
		if (onChange) {
			onChange(file);
		}
	};

	const handleButtonClick = () => {
		if (!disabled && fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const fileName = value?.name || "No hay archivo";

	return (
		<div {...containerProps} className={classes.containerStyle}>
			{label && (
				<label {...labelProps} className={classes.labelStyle}>
					{label}
				</label>
			)}
			<div className={classes.inputContainerStyle}>
				<button
					type="button"
					onClick={handleButtonClick}
					disabled={disabled}
					className={classes.buttonStyle}
				>
					<PaperclipIcon className="w-[10.33px] h-[13.33px] text-white" />
					<span>Seleccionar archivo</span>
				</button>
				<div className={classes.fieldStyle}>{fileName}</div>
			</div>
			<input
				ref={fileInputRef}
				type="file"
				accept={accept}
				multiple={multiple}
				onChange={handleFileChange}
				disabled={disabled}
				className="hidden"
			/>
			{(errorText || helperText) && (
				<p {...helperTextProps} className={classes.helperTextStyle}>
					{errorText ? errorText : helperText}
				</p>
			)}
		</div>
	);
};

