import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state() {
        return {
        skills: [],
        }
    },
    getters() {

    },
    mutations: {
        getSkill(state, items) {
            state.skills = items
        },
    },
    actions: {
        getSkills({commit}) {
            axios.get("https://portfolio-bakcend.herokuapp.com/api/v1/skills").then((res) => {
                const items = res.data.data;
                commit("getSkill", items)
                console.log(res.data.data)
            });
        },
    },
    modules: {},
})
