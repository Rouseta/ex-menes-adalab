//Aquí quiero pintar la lista de usuarios completa
import '../styles/App.scss';

import User from "./User";

function UsersList(props) {
    const userElements = props.users.map((user) => {
        return (
            <li key={user.id}>
                <User user={user} />
            </li>
        );
    });

    return (
        <>
            <section>
                <ul className="cards">
                    {userElements}
                </ul>
            </section>
        </>
    );
}

export default UsersList;
