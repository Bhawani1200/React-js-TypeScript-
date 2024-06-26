import RegisterForm from "../components/RegisterForm";


const Register = () => {


  return (
    <div className="mx-5">
      <div className="w-full shadow xl:w-6/12 lg:w-7/12 md:w-5/6 mx-auto p-10 rounded-3xl bg-gray-50">
        <div className="py-5">
          <h1 className="text-4xl font-semibold text-center text-slate-700">
            Register
          </h1>
        </div>
        <RegisterForm />
      </div>
    </div>
    
  );
};

export default Register;
