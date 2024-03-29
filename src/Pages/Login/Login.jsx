/* eslint-disable react/no-unescaped-entities */
import {  TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            if (result.user) {
                toast.success('Successfully Register!')
                navigate('/')
            }
            console.log(result.user)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="">
            <div className='w-96 mx-auto border mt-40 rounded-md'>
                <form
                    onSubmit={handleLogin}
                    className=" py-8 px-10 rounded-lg transparent">
                    <p className=' text-[#922f02] text-4xl text-center font-bold mb-7'>Log In now!</p>
                    <div className="">
                        <TextField required type="email" name="email" id="outlined-basic" sx={{ width: "100%", marginBottom: '20px' }} label="Email" variant="outlined" />
                    </div>
                    <div className="">
                        <TextField required type="password" name="password" id="outlined-basic" sx={{ width: "100%" }} label="Password" variant="outlined" />
                    </div>
                    <div>
                        <input className='btn border-none bg-[#922f02] text-[#fff] hover:bg-[#922e00eb] py-3 rounded-lg text-xl font-bold w-full my-4 cursor-pointer' type="submit" value="Login" />
                    </div>

                    <p className='text-[#9CA3AF] text-base font-semibold text-center mt-4'>Don't have an account? Please <Link to='/register' className='text-[#922f02] underline'>Register</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Login;