import { Divider, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log(email, password)
    }

    return (
        <div className="">
           <div className='w-96 mx-auto border mt-40 rounded-md'>
                <form 
                onSubmit={handleRegister}
                 className=" py-8 px-10 rounded-lg transparent">
                    <p className=' text-[#922f02] text-4xl text-center font-bold mb-7'>Register In now!</p>
                    <div className="">
                        <TextField required name="email" type="email" id="outlined-basic" sx={{width: "100%",marginBottom: '20px'}} label="Email" variant="outlined" />
                    </div>
                    <div className="">
                    <TextField required name="password" type="password" id="outlined-basic" sx={{width: "100%"}} label="Password" variant="outlined" />
                    </div>
                    <div>
                        <input className='btn border-none bg-[#922f02] text-[#fff] hover:bg-[#922e00eb] py-3 rounded-lg text-xl font-bold w-full my-4 cursor-pointer' type="submit" value="Register" />
                    </div>
                    <Divider>or</Divider>
                    <div //onClick={loginWithGoogle}
                     className='flex items-center mt-4 justify-center rounded-lg cursor-pointer border hover:bg-gray-100'>
                        <img className='w-10 h-10 ' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                        <span className='text-[#922f02] text-sm font-semibold'>Continue With Google</span>
                    </div>

                    <p className='text-[#9CA3AF] text-base font-semibold text-center mt-4'>Already have an account? Please <Link to='/login' className='text-[#922f02] underline'>Login</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Register;