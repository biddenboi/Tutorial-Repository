import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../AuthContext";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const {session, signUpNewUser} = UserAuth() ?? {};

    console.log(session);
    
    return <div>
        <form action="" className="max-w-md m-auto pt-24">
            <h2 className="font-bold pb-2">Sign up today!</h2>
            <p>
                Already have an account? <Link to='/signin'>Sign in!</Link>
            </p>
            <div className="flex flex-col py-4">
                <input placeholder="email" className="p-3 mt-2" type="email" />
                <input placeholder="password" className="p-3 mt-2" type="password" name="" id="" />
                <button type="submit" disabled={loading} className="mt-4">
                    Signup
                </button>
            </div>
        </form>
    </div>
}