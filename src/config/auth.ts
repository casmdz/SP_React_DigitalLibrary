/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };
  
  export { fakeAuthProvider };


//  import { useEffect } from "react" 
// import { useNavigate } from "react-router-dom" 
// import { signInWithPopup } from 'firebase/auth'
// import { auth, Providers } from '../config/firebase'

// interface Props {
//     children: React.ReactNode;
// }

// const AuthChecker = ({ children}: Props) => {
//     const navigate = useNavigate();
//     // will check if the user is logged in, if so, returns the children (which are passed as props)
//     //otherwise it sends them to the login route

//     useEffect(() => {
//         if (!auth.currentUser) {
//             navigate("../")
//             signInWithPopup(auth, Providers.google);
//         }
//     }, [])
//     return (
//         <>{children}</>
//     )
// }

// export default AuthChecker