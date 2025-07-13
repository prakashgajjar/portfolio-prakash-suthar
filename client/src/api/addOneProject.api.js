import axios from "axios";
import apiRoutes from "../lib/apis";
const addOneProject = async () => {
    try {
        const res = await axios.get(apiRoutes.addOneProject);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default addOneProject;