import RegisterForm from "../components/RegisterForm"
const Register = () => {
  return (
    <div className="mx-5">
     <div className="w-full shadow xl:w-6/12 lg:w-7/12 md:w-5/6 mx-auto bg-slate-100 p-10 rounded-3xl">
        <div className="py-5">
        <h1 className="text-3xl text-center font-semibold text-slate-600">Register </h1>
        </div>
        <RegisterForm />
    </div>
   </div>
  )
}

export default Register
