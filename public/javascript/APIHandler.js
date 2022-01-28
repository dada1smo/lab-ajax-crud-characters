class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axios = axios.create({ baseURL: this.BASE_URL });
  }

  getFullList = async () => {
    const { data } = await this.axios.get('/characters');
    return data;
  };

  getOneRegister = async (id) => {
    const { data } = await this.axios.get(`/characters/${id}`);
    console.log(data);
  };

  createOneRegister = async (characterInfo) => {
    const { data } = await this.axios.post('/characters/', characterInfo);
    console.log(data);
  };

  updateOneRegister = async (id, characterInfo) => {
    const { data } = await this.axios.put(`/characters/${id}`, characterInfo);
    console.log(data);
  };

  deleteOneRegister = async (id) => {
    const { data } = await this.axios.delete(`/characters/${id}`);
    console.log(data);
  };
}
