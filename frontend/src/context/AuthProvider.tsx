import { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';

interface UserDataType{
    employees: {    
      "id": number,
      "email": string,
      "password": string,
      "tasks": [
        {
          "active": boolean,
          "new": boolean,
          "completed": boolean,
          "failed": boolean,
          "taskTitle": string,
          "taskDescription": string,
          "taskDate": string,
          "category": string}
        ]}

    admin: {
      "id": number,
      "email": string,
      "password": string
    };
  }

export const AuthContext = createContext<UserDataType | null>(null); 
const AuthProvider = ({ children }: any) => {

  


    const [userData, setUserData] = useState<UserDataType | null>();
    
    
    useEffect(() => {
      const { employees, admin } = getLocalStorage();
      setUserData({employees,admin});
    }, []);

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider