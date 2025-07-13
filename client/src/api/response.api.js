import axios from "axios";
import apiRoutes from "../lib/apis";
const response = async () => {
    try {
        const res = await axios.get(apiRoutes.responseSend);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default response;