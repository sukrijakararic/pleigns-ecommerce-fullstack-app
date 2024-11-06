import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const fetchUser = async () => {
        const data = await getUser();
        setUser(data);
        console.log(data);
      };

    useEffect(() => {
        fetchUser();
    })    

  return (
    <div>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}
