interface Props {
    id: string;
    name: string;
    email: string;
}

export function Profile({ id, name, email }: Props) {
    return (
        <div>
            <h1>Profile Component</h1>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    )
}