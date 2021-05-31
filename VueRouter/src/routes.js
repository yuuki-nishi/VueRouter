import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue"
import Axios from "./pages/Axios.vue";
import Login from "./pages/login.vue";
import City from "./pages/City.vue";
import Cities from "./pages/Cities.vue";
import Countries from "./pages/Countries.vue";
import signup from "./pages/signup.vue";

export const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/axios",
      name: "axios",
      component: Axios,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: signup,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/city/:cityName",
      name: "City",
      component: City,
      props: true,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/citiesfromcountry/:CountryID",
      name: "Cities",
      component: Cities,
      props: true,
      meta: {
        isPublic: true
      }
    },
    {
      path: "/allcountry",
      name: "Countries",
      component: Countries,
      props: true,
      meta: {
        isPublic: true
      }
    },
    { path: "/:path(.*)",
        component: NotFound,
        meta: {
            isPublic: true
        }
    },
]
