import API_URL from "@/const/const";
import axios from "axios";

class AuthService {
    login(user) {
        return axios.post(API_URL + "login", {
            username: user.username,
            password: user.password
        }).then(res => {
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data))
            }
            return res.data;
        })
    }
    logout() {
        localStorage.removeItem("user")
    }
    register(user) {
        return axios.post(API_URL + "register", {
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            password: user.password

        })
    }
}
export default new AuthService();