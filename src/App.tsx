import "./index.css";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
// import ProfilePage from './pages/Auth/ProfilePage'

import { Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import BookshelfPage from "./pages/Bookshelf/BookshelfPage";

import { initializeApp } from "firebase/app";
import { config } from "./config/firebaseConfig"
import Testpage from "./pages/Auth/Testpage";
import AuthRoute from "./auth/AuthRoute";
import ProfilePage from "./pages/Profile/ProfilePage";

export const Firebase = initializeApp(config.firebaseConfig);
// export const Firebase = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route: any, index: any) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
        <Route path="/bookshelf" element={<BookshelfPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/test"
          element={
            <AuthRoute>
              <Testpage />
            </AuthRoute>
          }
        />
      </Routes>
      <br style={{ marginTop: "70px" }} />
      <Footer />
    </>
  );
}

export default App;
