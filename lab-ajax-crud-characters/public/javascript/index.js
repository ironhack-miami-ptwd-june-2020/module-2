const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {});

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
  // charactersAPI.getFullList();
  // charactersAPI.getOneRegister(1);
  const char = {
    name: "Tom",
    occupation: "constuction",
    cartoon: "Tom & Jerry",
    weapon: "Glock",
  };
  charactersAPI.updateOneRegister(4, char);
});
