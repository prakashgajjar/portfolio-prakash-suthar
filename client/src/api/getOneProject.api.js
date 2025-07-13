import axios from "axios";
import apiRoutes from "../lib/apis";
const getOneProject = async () => {
    try {
        const res = await axios.get(apiRoutes.getOneProject);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default getOneProject;