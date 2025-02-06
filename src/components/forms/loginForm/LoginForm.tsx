import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppDispatch } from "../../../store/tools/hooks";
import { loginUser } from "../../../store/state/auth/operations";
import { loginValidationSchema } from "../../../schemas/schemas";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    dispatch(loginUser(data));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" bg-white rounded-3xl w-[566px]">
      <form onSubmit={handleSubmit(onSubmit)} className="p-16">
        <div>
          <p className="text-4xl font-medium text-[#11101c] mb-5">Log in</p>
        </div>

        <div>
          <p className="text-base leading-[125%] text-[rgba(17,16,28,0.5)] mb-10">
            Welcome back! Please enter your credentials to access your account
            and continue your babysitter search.
          </p>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Email"
                className="border w-[438px] h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5  placeholder:text-black"
              />
            )}
          />
          {errors.email && (
            <p className="text-sm text-orange-700 mt-[-15px] mb-3">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border w-[438px] h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5  placeholder:text-black"
              />
            )}
          />
          <button
            type="button"
            className="absolute right-3 top-[35%] transform -translate-y-1/2 text-sm text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
          {errors.password && (
            <p className="text-sm text-orange-700 mt-[-15px] mb-3">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="w-full py-4 px-[190px] bg-[var(--color)]  text-white rounded-2xl  disabled:bg-gray-400 disabled:cursor-not-allowed hover:text-[var(--color)] hover:bg-white hover:border hover:border-[var(--color)] transition-colors ease-in duration-300"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
