const BASE_URL = "http://localhost:3000";

const apiRoutes = {
  addOneProject: `${BASE_URL}/projects/add`,
  getAllProject: `${BASE_URL}/projects/get`,
  getOneProject: `${BASE_URL}/projects/getone`,
  responseSend: `${BASE_URL}/api/response`
};

export default apiRoutes
