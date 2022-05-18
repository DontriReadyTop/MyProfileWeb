import axios from "axios";
import { useEffect, useState } from "react";

const { Navigate, Outlet } = require("react-router-dom");

// async function fetchAuth(token) {
//     const client = axios.create({
//         baseURL: "http://localhost:5000",
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//     let response = await client.post('/sign-in/authentications')
//     if(response.data.status == 'ok') {
//         return true;
//     }
//     return false
// }

// const ProtectedRoutes = () => {
//     const token = localStorage.getItem('token')
//     // console.log(await fetchAuth(token))
//     return fetchAuth(token) ? <Outlet /> : <Redirect to={'/login'} />
// }

const AuthenWeb = () => {

    const [authen, setAuthen] = useState(true)

    useEffect(async () => {
        try {
            const response = await axios.get(
                "http://localhost:5500/login/authen",
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                }
            )
        } catch (error) {
            setAuthen(false);
        }
    }, []);

    return authen ? <Outlet /> : <Navigate to='/login' />;
}

export default AuthenWeb;