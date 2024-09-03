import { useParams } from "react-router-dom";

export function UserProfile() {
    const { id } = useParams();

    return (
        <>
            <h2>User's Profile</h2>
            <p>ID: {id}</p>
        </>
    );
}
