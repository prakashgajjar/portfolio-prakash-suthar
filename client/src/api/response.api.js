import axios from "axios";
import apiRoutes from "../lib/apis";
const responseSend = async (name , message) => {
    try {
        const res = await axios.post(apiRoutes.responseSend , {
            name : name,
            message : message
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default responseSend;