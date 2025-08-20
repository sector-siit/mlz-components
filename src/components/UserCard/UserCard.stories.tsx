import type { Meta, StoryObj } from "@storybook/react";
import { UserCard, type UserCardProps } from "./UserCard";

const meta: Meta<UserCardProps> = {
	title: "Components/UserCard",
	component: UserCard,
	tags: ["autodocs"],
	argTypes: {
		name: { control: "text" },
		email: { control: "text" },
		changeUser: { action: "changeUser" },
		editUser: { action: "editUser" },
	},
};

export default meta;

type Story = StoryObj<UserCardProps>;

export const Default: Story = {
	args: {
		name: "Jane Doe",
		email: "jane.doe@example.com",
		changeUser: () => {},
		editUser: () => {},
	},
};
