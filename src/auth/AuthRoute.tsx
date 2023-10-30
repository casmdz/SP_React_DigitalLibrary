// Reference: https://youtu.be/b_52NmIfDr8?si=HUGVS2ePmHFcd88F 

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
    children: React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                console.log('unauthorized attempt')
                navigate('/login');
            }
        })
        return () => AuthCheck();
    }, [auth]);

    if (loading) return <p>loading....</p>;

    return <>{children}</>;
};
export default AuthRoute;
// You should call navigate() in a React.useEffect(), not when your component is first rendered. history.ts:501:48
