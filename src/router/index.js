import PortfolioPageVue from "@/views/portfolios/PortfolioPage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "register",
        component: () => import("@/views/auth/RegisterPage")
    }
    ,
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/auth/LoginPage")
    },

    {
        path: "/",
        name: "Portfolio",
        component: () => import("@/Layout/AuthorizedLayout/AuthorizedLayout"),
        meta: {requiresAuth: true},
        children: [
            {
                path: "/portfolio",
                name: "portfolio",
                component: PortfolioPageVue,
                meta: {requiresAuth: true}
            },
            {
                path: "/skills",
                name: "skills",
                component: () => import("@/views/Skills/MySkills"),
                meta: {requiresAuth: true}
            }
        ]
    }


];

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes,
    })

;
router.beforeEach((to, from, next) => {

    let token = localStorage.getItem("token")

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (token) {
            next()
        } else {
            router.replace("/")
        }
    } else {
        next()
    }
})


//
// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem("token");
//     const register = to.name = "register"
//     const name = to.name === "login";
//
//     if (!token && !name && !register) {
//         return next({name: "register"})
//     } else {
//         if (token && register) {
//             return next({name: "login"})
//         } else if (token && name) {
//             return next({name: "portfolio"})
//
//         } else {
//             next()
//         }
//     }
// })

export default router;
