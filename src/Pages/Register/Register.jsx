import {  TextField } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/userAxios";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleRegister = e => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value



        createUser(email, password)
            .then(result => {
                if (result.user) {

                    const userInfo = {
                        uEmail: email,
                        uName: name,
                    }

                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.__v === 0) {
                                toast.success('Successfully Register!')
                                navigate('/login')
                            }
                        }).catch(err => {
                            toast.error("Something was wrong");
                        })

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
                    onSubmit={handleRegister}
                    className=" py-8 px-10 rounded-lg transparent">
                    <p className=' text-[#922f02] text-4xl text-center font-bold mb-7'>Register In now!</p>
                    <div className="">
                        <TextField required name="name" type="text" id="outlined-basic" sx={{ width: "100%", marginBottom: '20px' }} label="Name" variant="outlined" />
                    </div>
                    <div className="">
                        <TextField required name="email" type="email" id="outlined-basic" sx={{ width: "100%", marginBottom: '20px' }} label="Email" variant="outlined" />
                    </div>
                    <div className="">
                        <TextField required name="password" type="password" id="outlined-basic" sx={{ width: "100%" }} label="Password" variant="outlined" />
                    </div>
                    <div>
                        <input className='btn border-none bg-[#922f02] text-[#fff] hover:bg-[#922e00eb] py-3 rounded-lg text-xl font-bold w-full my-4 cursor-pointer' type="submit" value="Register" />
                    </div>
                    <p className='text-[#9CA3AF] text-base font-semibold text-center mt-4'>Already have an account? Please <Link to='/login' className='text-[#922f02] underline'>Login</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Register;