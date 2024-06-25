import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { EMAIL_REGEX } from "../constants/Regex";
import { registerUserData } from "../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const RegisterForm = () => {
  const { register, handleSubmit, formState, watch } =
    useForm<RegisterFormType>({
      mode: "all",
    });
  const { errors } = formState;
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const password = watch("password");
  const onSubmit = async (data: RegisterFormType) => {
    dispatch(registerUserData(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-2">
        <label htmlFor="name" className="ml-2 text-sm font-semibold">
          Name
        </label>
        <input
          className="w-full border rounded-md py-2 px-3 mt-3"
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required.",
            },
          })}
        />
        <p className="text-red-600 mt-2 text-sm ml-1">{errors.name?.message}</p>
      </div>
      <div className="py-2">
        <label htmlFor="email" className="ml-2 text-sm font-semibold">
          Email
        </label>
        <input
          className="w-full border rounded-md py-2 px-3 mt-3"
          type="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required.",
            },
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address.",
            },
          })}
        />
        <p className="text-red-600 mt-2 text-sm ml-1">
          {errors.email?.message}
        </p>
      </div>
      <div className="py-2">
        <label htmlFor="password" className="ml-2 text-sm font-semibold">
          Password
        </label>
        <input
          className="w-full border rounded-md py-2 px-3 mt-3"
          type="password"
          id="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required.",
            },
          })}
        />
        <p className="text-red-600 mt-2 text-sm ml-1">
          {errors.password?.message}
        </p>
      </div>
      <div className="py-2">
        <label htmlFor="password" className="ml-2 text-sm font-semibold">
          Confirm Password
        </label>
        <input
          className="w-full border rounded-md py-2 px-3 mt-3"
          type="password"
          id="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm password is required.",
            },
            validate: (value) => {
              return value === password || "password does not match";
            },
          })}
        />
        <p className="text-red-600 mt-2 text-sm ml-1">
          {errors.confirmPassword?.message}
        </p>
      </div>
      <div className="mt-5">
        <input
          type="submit"
          value={loading ? "Submitting..." : "register"}
          className="bg-blue-500 w-full py-2 rounded-lg hover:bg-blue-600 text-white cursor-pointer"
        />
      </div>
      <div className="text-center">
        <p className="text-red-500 mt-2 text-sm ml-1">{error}</p>
      </div>
      <div className="mt-8 text-sm text-center">
        <span className="mr-1">Already have an account?</span>
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
