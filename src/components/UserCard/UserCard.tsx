export interface UserCardProps {
	name: string;
	email: string;
	changeUser: () => void;
	editUser: () => void;
}

export function UserCard({ name, email, changeUser, editUser }: UserCardProps) {
	return (
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
			<button type="button" onClick={changeUser}>
				Change User
			</button>
			<button type="button" onClick={editUser}>
				Edit User
			</button>
		</div>
	);
}
