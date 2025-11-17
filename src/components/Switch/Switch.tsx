"use client";
export interface SwitchProps {
	label?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	variant?: "default" | "error";
	disabled?: boolean;
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

const switchClasses = (checked: boolean, variant: "default" | "error") => {
	const isError = variant === "error";
	
	// Background color del switch - siempre es #E5F0F9
	const bgColor = "bg-[#E5F0F9]";

	// Color del thumb (círculo) - cambia según el estado
	const thumbColor = checked
		? isError
			? "bg-[#EF284C]"
			: "bg-[#006EFF]"
		: "bg-[#C6DFF1]";

	// Color del texto
	const textColor = checked
		? isError
			? "text-[#EF284C]"
			: "text-[#006EFF]"
		: "text-[#236999]";

	return {
		containerStyle: "flex items-center gap-2",
		switchStyle: [
			"relative flex items-center",
			"w-[44px] h-[24px]",
			"rounded-[16px]",
			"p-[2px]",
			"cursor-pointer",
			"transition-all duration-200",
			"disabled:opacity-50 disabled:cursor-not-allowed",
			bgColor,
		].join(" "),
		thumbStyle: [
			"absolute left-[2px]",
			"w-[20px] h-[20px]",
			"rounded-full",
			"transition-all duration-200",
			"flex items-center justify-center",
			checked ? "translate-x-[20px]" : "translate-x-0",
			thumbColor,
		].join(" "),
		labelStyle: [
			"text-base",
			"leading-[20px]",
			"font-normal",
			"flex items-center",
			"flex-1",
			textColor,
		].join(" "),
	};
};

export const Switch: React.FC<SwitchProps> = ({
	label,
	checked = false,
	onChange,
	variant = "default",
	disabled = false,
	containerProps,
	labelProps,
}) => {
	const classes = switchClasses(checked, variant);

	const handleToggle = () => {
		if (!disabled && onChange) {
			onChange(!checked);
		}
	};

	return (
		<div {...containerProps} className={classes.containerStyle}>
			<button
				type="button"
				role="switch"
				aria-checked={checked}
				onClick={handleToggle}
				disabled={disabled}
				className={classes.switchStyle}
			>
				<span className={classes.thumbStyle} />
			</button>
			{label && (
				<label {...labelProps} className={classes.labelStyle}>
					{label}
				</label>
			)}
		</div>
	);
};

