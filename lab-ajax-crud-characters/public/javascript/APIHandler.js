class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  getOneRegister(id) {
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  createOneRegister(char) {
    axios
      .post(`${this.BASE_URL}/characters`, char)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  updateOneRegister(id, updatedChar) {
    axios
      .put(`${this.BASE_URL}/characters/${id}`, updatedChar)
      .then((response) => {
        console.log(response.data);
      });
  }

  deleteOneRegister() {}
}
