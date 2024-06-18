import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../constants/Regex";
import { Link } from "react-router-dom";
import { login } from "../api/auth";
import {useState} from 'react';
type LoginFormType={
    email:string;
    password:string;
}
const LoginForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading,setLoading]=useState(false)
  const { register,handleSubmit,formState ,setError}=useForm<LoginFormType>({
    mode:"all"
  });
  const { errors } =formState;
  // const {name,ref,onChange,onBlur}=register('email')
    const onSubmit=async (data:LoginFormType)=>{
      setLoading(true);
      try {
        await login(data)
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     } catch (error:any) {
       setError("root",{message:error.response.data})
      }finally{
       setLoading(false);

     }
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="py-2">
     <label className="text-lg font-semibold ml-1" htmlFor="email">Email</label>
     <input className="w-full rounded-md py-2 px-3 mt-2"  
     type="email" 
     id="email" 
     {...register('email',{
      required:{
        value:true,
        message:"Email is required"
      },
      pattern:{
        value:EMAIL_REGEX,
        message:"Invalid email address"
      }
     })}
     //spread operator
    // ref={ref}
    // name={name}
    // onChange={onChange}
    // onBlur={onBlur}
     />
     <p className="text-red-600 mt-2 font-2xl ml-2">
      {errors.email?.message}
      </p>
    </div>
    <div className="py-2">
     <label className="text-lg font-semibold ml-1" htmlFor="password">Password</label>
     <input className="w-full rounded-md py-2 px-3 mt-2"  
     type="password" 
     id="password" 
     {...register('password',{
      required:{
      value:true,
      message:"password is required"
      }
      // pattern:{
      //   value:PASSWORD_REGEX,
      //   message:"Invalid email address"
      // }
     })}
     />
      <p className="text-red-600 mt-2 font-2xl ml-2">
      {errors.password?.message}
      </p>
    </div>
    <div className="mt-4 ml-1">
    <input type="submit" value={loading?"Submitting...":"login"} className=" cursor-pointer text-white font-semibold w-full py-2 bg-red-500 rounded-md hover:bg-red-600" />
    </div>
    <div className="text-center">
      <p className="text-red-500 mt-2 text-sm ml-1">
      {errors.root?.message}
      </p>
    </div>
    <div className="mt-6 text-sm text-center">
      <span className="mr-1">Don't have an account?</span>
      <Link to="/register" className="text-blue-500">
      Register
      </Link>
      </div> 
    </form>
  )
}

export default LoginForm
