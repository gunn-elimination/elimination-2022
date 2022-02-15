import { useEffect, useState } from "react";
import { User } from "./types";

export const useCurrentUser = () => {
    const [user, setuser] = useState(null as null | User);
    useEffect(() => {
       const data = localStorage
        .getItem("currentUser")
        if (data) setuser(JSON.parse(data) as User);
      fetch('https://api.gunnelimination.com/users/me').then((response) => {
          response.json().then(e=>{
              setuser(e)
              localStorage.setItem("currentUser", JSON.stringify(e));
            })
        
      });
    }, []);
    return user;
  };