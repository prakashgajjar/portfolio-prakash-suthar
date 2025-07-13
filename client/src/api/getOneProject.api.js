import axios from "axios";
import apiRoutes from "../lib/apis";
const getOneProject = async (slug) => {
    console.log(slug);
    try {
        const res = await axios.post(apiRoutes.getOneProject , {slug : slug.name});
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default getOneProject;