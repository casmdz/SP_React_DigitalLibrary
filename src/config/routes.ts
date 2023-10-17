// examples : https://github.com/remix-run/react-router/tree/dev/examples
// from phonebook: 
// auth : https://github.com/remix-run/react-router/tree/dev/examples/auth uses useNavigate() hook
import HomePage from "../pages/Home/Home"
import AboutPage from "../pages/About/About"
// import BookshelfPage from "../pages/Bookshelf/Bookshelf"


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: HomePage,
      name: "Home Page",
      protected: false
    },
    {
      path: "/home",
      component: HomePage,
      name: "Home Page",
      protected: false
    },
    {
      path: "/about",
      component: AboutPage,
      name: "About Page",
      protected: false
    }
  ];
  
export default routes