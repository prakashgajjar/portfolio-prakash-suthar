import axios from "axios";
import apiRoutes from "../lib/apis";
const getAllProject = async () => {
    try {
        const res = await axios.get(apiRoutes.getAllProject);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default getAllProject;