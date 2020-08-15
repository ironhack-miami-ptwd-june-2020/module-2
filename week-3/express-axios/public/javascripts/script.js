console.log({ location });
const getCharacters = () => {
    axios
        .get(`${location.origin}/allCharacters`)
        .then((response) => {
            console.log("Response from the API: ", response);
            const data = response.data;
            console.log("The array of characters: ", data);

            let str = "";

            data.forEach((character) => {
                str += `
                <li class="list-group-item">
                    ID: ${character.id} - ${character.name}
                    <span class="float-right">
                        <button class="btn btn-success"><a href="${location.origin}/details/${character.id}">Update</a></button>
                        <form action="/delete/${character.id}" method="POST" id="delete-character-form"><input type="hidden" name="character-id" id="char-id" hidden value="${character.id}" /><button class="btn btn-danger">Delete</button></form>
                    </span>
                </li>`;
            });

            // insert characters in the list in the html
            document.getElementById("characters-list").innerHTML = str;
        })
        .catch((err) => console.log(`Error finding all characters: ${err}`));
};

if (document.getElementById("new-character-form")) {
    document
        .getElementById("new-character-form")
        .addEventListener("submit", (event) => {
            event.preventDefault(); // <= !!! Prevent the refresh
            console.log("form submit");
            const name = document.getElementById("name-input").value;
            const occupation = document.getElementById("occupation-input")
                .value;
            const weapon = document.getElementById("weapon-input").value;

            const newCharacterInfo = {
                // name: name
                name,
                occupation,
                weapon,
            };

            console.log("New character: ", newCharacterInfo);

            axios
                .post(`${location.origin}/addCharacter`, newCharacterInfo)
                .then(() => {
                    getCharacters();
                })
                .catch((err) =>
                    console.log(`Error creating new character: ${err}`)
                );
        });
}

if (document.getElementById("update-character-form")) {
    document
        .getElementById("update-character-form")
        .addEventListener("submit", (event) => {
            console.log({ event });
            event.preventDefault(); // <= !!! Prevent the refresh
            const charName = document.getElementById("update-name-input").value;
            const charOccupation = document.getElementById(
                "update-occupation-input"
            ).value;
            const charWeapon = document.getElementById("update-weapon-input")
                .value;
            const charId = document.getElementById("char-id").value;

            const updatedCharInfo = {
                name: charName,
                occupation: charOccupation,
                weapon: charWeapon,
            };

            console.log({ updatedCharInfo });

            console.log({ formLocation: location });

            axios
                .patch(`${location.origin}/update/${charId}`, updatedCharInfo)
                .then((response) => {
                    console.log({ response });
                    window.location = location.href;
                })
                .catch((error) => {
                    error.response.status === 404
                        ? alert(`The id ${charId} doesn't exist.`)
                        : alert("Server error! Sorry.");

                    console.log(
                        "The error while getting a single character is: ",
                        error.response
                    );
                });
        });
}

// can't have 2 event listeners set up on same page in this format

// if (document.getElementById("delete-character-form")) {
//     document
//         .getElementById("delete-character-form")
//         .addEventListener("submit", (event) => {
//             console.log({ event });
//             event.preventDefault(); // <= !!! Prevent the refresh

//             const charId = document.getElementById("char-id").value;

//             axios
//                 .delete(`${location.origin}/update/${charId}`)
//                 .then(() => {
//                     window.location = location.origin;
//                 })
//                 .catch((error) => {
//                     error.response.status === 404
//                         ? alert(`The id ${charId} doesn't exist.`)
//                         : alert("Server error! Sorry.");

//                     console.log(
//                         "The error while getting a single character is: ",
//                         error.response
//                     );
//                 });
//         });
// }
