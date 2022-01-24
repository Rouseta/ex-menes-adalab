function User(props) {

    const getGender = () => {
        return props.user.gender === "female" ? "Mujer" : "Hombre"
    }
    return (
        <>
            <a href="#/user/473cad77-5d41-45ac-a925-e0dbe1d3e417">
                <img
                    className="card__img"
                    src={props.user.image}
                    alt={`Foto de ${props.user.name}`}
                    title={`Foto de ${props.user.name}`}
                />
                <h4 className="card__title">{props.user.name}</h4>
                <p className="card__description">{props.user.city} / {getGender()}</p>
            </a>
        </>

    )


}
export default User;