import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
    const ctx = useAuth(AuthContext);
    if (!ctx) {
        throw new Error("useAuth must be used inside authProvider")
    }
    return ctx;
};

export const authProvider = ( {children }) => {
   const [user, setUser] = useState( () => {
    // Load once from localStorage - avoids double parsing
    try {
        const data = localStorage.getItem("user");
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
   });

   const [loading, setLoading] = useState(true);

   useEffect(() => {
    // Delay needed to prevent layout flicker
    const timeout = setTimeout(() => {
        setLoading(false)
    }, 100);
    
    return clearTimeout(timeout)
   }, []);

   const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData))
   };

   const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user")
   };

   return (
    <AuthContext.Provider 
    value={{
        user,
        isAuthenticated: !!user,
        loginUser,
        logoutUser,
        loading,
    }}
    >
       {children}
    </AuthContext.Provider>
   )
}