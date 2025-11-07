import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
	title: "Components/NewInput",
	component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		containerProps: {
			className: "w-80",
		},
		disabled: false,
		errorText: "Error text",
		helperText: "Helper text",
		label: "Label",
		placeholder: "Placeholder",
		fullWidth: false,
		hasError: false,
		labelProps: {
			htmlFor: "input-1",
			children: "Label",
		},
		helperTextProps: {
			children: "Helper text",
		},
		checkedIcon: false,
	},
};

export const WithError: Story = {
	args: {
		hasError: true,
		label: "Label",
		errorText: "Error text",
	},
};

export const WithHelperText: Story = {
	args: {
		label: "Label",
		helperText: "Helper text",
	},
};

export const WithLabel: Story = {
	args: {
		label: "Label",
	},
};

export const WithPlaceholder: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
	},
};

export const FullWidth: Story = {
	args: {
		fullWidth: true,
		label: "Full Width Input",
		placeholder: "Full width placeholder",
		helperText: "This input should fill the 250px container",
		containerProps: {
			className: "w-[250px]",
		},
		labelProps: {
			htmlFor: "input-fullwidth",
			children: "Full Width Input",
		},
		helperTextProps: {
			children: "This input should fill the 250px container",
		},
	},
};
