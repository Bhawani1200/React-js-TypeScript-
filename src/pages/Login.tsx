import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
   <div className="mx-5">
     <div className="w-full shadow xl:w-6/12 lg:w-7/12 md:w-5/6 mx-auto bg-slate-100 p-10 rounded-3xl">
        <div className="py-5">
        <h1 className="text-3xl text-center font-semibold text-slate-600">Login </h1>
        </div>
        <LoginForm/>
    </div>
   </div>
    
  )
}; 
  


export default Login



