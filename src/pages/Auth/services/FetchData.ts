// // import { server_calls } from '../../../api/server';
// // import { User } from './usertype'

// // https://www.stackhawk.com/blog/react-csrf-protection-guide-examples-and-how-to-enable-it/

// import axios from 'axios';
// import { useState, useEffect } from 'react'
// const [ , setUserData ] = useState();


// const getCSRFToken = async () => {
//     const response = await axios.get('/getCSRFToken');
//     axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
//  };

// export const getUsers = async() => {
//     const response = await fetch(`https://check-meowt.onrender.com`);
//     const data = await response.json();
//     console.log(data.results[0]);
//     setUserData(data.results[0]);
// }
// useEffect(() => {
//     getUsers();
//     getCSRFToken()
// }, [])










// // import { useState, useEffect } from 'react'
// // import { server_calls } from '../../../api/server';
// // import { User } from './usertype'

// // export const useGetUser = () => {
// //     const [ userData, setUserData ] = useState<User[]>([])

// //     async function fetchData(){
// //         const result = await server_calls.get();
// //         setUserData(result)
// //     }
    
// //     useEffect( () => {
// //         fetchData();
// //     }, [])

// //     return { userData, getData:fetchData,  getUserById: server_calls.get}
// // }
