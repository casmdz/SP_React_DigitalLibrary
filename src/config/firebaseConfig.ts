import 'firebase/auth'
// databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,

export const config = {
    firebaseConfig: {
        apiKey: "AIzaSyBIXUPxEu3JPYM94095arTwxGUllXf2Wvc",
        authDomain: "sp-r-checkmeowt.firebaseapp.com",
        projectId: "sp-r-checkmeowt",
        storageBucket: "sp-r-checkmeowt.appspot.com",
        messagingSenderId: "126971853970",
        appId: "1:126971853970:web:4c29c83072134801267a4b"
    }
};



// export const config = {
//     firebaseConfig: {
//         apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
//         authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//         projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//         storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//         messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//         appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
//     }
// };
// Uncaught ReferenceError: process is not defined TODO

// const firebaseConfig = {
// }

// export default firebaseConfig
// export const auth = app.auth()
// export const app = initializeApp(firebaseConfig)