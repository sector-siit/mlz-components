import type { Preview } from "@storybook/react";
import "./preview.css"; // Fuentes solo para Storybook
import "../src/globalStyles.css";
import "../src/styles.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			toc: true,
		},
		backgrounds: {
			default: "light",
			values: [
				{
					name: "light",
					value: "#ffffff",
				},
				{
					name: "dark",
					value: "#333333",
				},
			],
		},
		layout: "centered",
	},
};

export default preview;
