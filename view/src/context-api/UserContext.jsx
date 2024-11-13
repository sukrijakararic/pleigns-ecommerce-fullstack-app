import React, { createContext, useState } from 'react'

export const UserContext = createContext()
export const UserProvider = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState({});

  return (
    <div>
        <UserContext.Provider value={{loggedUser, setLoggedUser}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}
