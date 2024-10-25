import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';


export const AuthContext = createContext(); 
const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const { employee:any, admin:any } = getLocalStorage();
  return (
    <div>
        <AuthContext.Provider value={"Stavya"}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider