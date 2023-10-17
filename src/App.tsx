import './index.css'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
// import About from './pages/About/About'
// import Home from './pages/Home/Home'
// import LoginPage from './pages/Auth/LoginPage'
// import RegisterPage from './pages/Auth/RegisterPage'
// import ProfilePage from './pages/Auth/ProfilePage'

import { Route, Routes } from 'react-router-dom'
import routes from './config/routes'
import BookshelfPage from './pages/Bookshelf/BookshelfPage'


function App() {
  // console.log(window.location)
  return (
    <>
      <Navbar />
        <Routes>
          {routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
            />
          ))}
        <Route path="/bookshelf" element={<BookshelfPage />} />
          {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        </Routes>
      <br style={{ marginTop: '70px'}}/>
      <Footer/>
    </>
  )
}

export default App
