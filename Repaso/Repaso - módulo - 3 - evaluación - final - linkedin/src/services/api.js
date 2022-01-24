// Fichero src/services/api.js
const callToApi = () => {
    // Llamamos al API
    return fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then((data) => {
            // Cuando responde el API podemos limpiar los datos aquí
            const cleanData = data.results.map((user) => {
                return {
                    id: user.login.uuid,
                    name: `${user.name.first}  ${user.name.last}`,
                    age: user.dob.age,
                    city: user.location.city,
                    image: user.picture.large,
                    email: user.email,
                    gender: user.gender,




                }
            })


            return cleanData;
        });
};

export default callToApi;