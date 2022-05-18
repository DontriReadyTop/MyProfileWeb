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

const ProtectedRoutes = () => {
    const [auth, setAuth] = useState(true)
    const client = axios.create({
      baseURL: "http://localhost:5500",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });


    useEffect(async () => {
      const response = await client.get(`/login/authen`);
      // console.log(response.data)
      if (response.data.status == 'ok') {
        setAuth(true)
      } else if(response.data.status == 'error') {
        setAuth(false)
      } else {
        setAuth(false)
      }
      
    }, [])

    console.log(auth)
    return auth ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoutes;