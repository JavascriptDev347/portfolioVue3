import axios from "axios";
import authHeader from "@/services/auth-header";
import API_URL from "@/const/const";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + "portfolios")
    }

    getModeratorBoard() {
        return axios.get(API_URL + "skills", {headers: authHeader()})
    }
}

export default new UserService()

