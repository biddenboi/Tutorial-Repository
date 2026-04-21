import { SupabaseClient } from "@supabase/supabase-js";
import { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext<{session: string} | null>(null);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider = (({children} : AuthContextProviderProps) => {
    const [session, setSession] = useState("");

    //Sign up
    const signUpNewUser = async () => {
        const {data, error} = await SupabaseClient.auth.signUp({
            email: email,
            password: password,
        })

        if (error) {
            console.error("There was a problem signing up", error);
            return {success: false, error};
        }
        return { success:true, data };
    }

    useEffect(() => {
        SupabaseClient.auth.getSession().then(({data: {session}})) => {
            setSession(session);
        }
    }, [])

    return (
        <AuthContext.Provider value={{session, signUpNewUser}}>
            {children}
        </AuthContext.Provider>
    )
})


export const UserAuth = () => {
    return useContext(AuthContext);
}