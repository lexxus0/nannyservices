import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppDispatch } from "../../../store/tools/hooks";
import { registerUser } from "../../../store/state/auth/operations";
import { registerValidationSchema } from "../../../schemas/schemas";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    dispatch(registerUser(data));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" bg-white rounded-3xl w-[566px]">
      <form onSubmit={handleSubmit(onSubmit)} className="p-16">
        <div>
          <p className="text-4xl font-medium text-[#11101c] mb-5">
            Registration
          </p>
        </div>
        <div>
          <p className="text-base leading-[125%] text-[rgba(17,16,28,0.5)] mb-10">
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </p>

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="name"
                className="border w-[438px] h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5  placeholder:text-black"
                placeholder="Name"
              />
            )}
          />
          {errors.name && (
            <p className="text-sm text-orange-700 mt-[-15px] mb-3">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                id="email"
                className="border w-[438px] h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5 placeholder:text-black"
                placeholder="Email"
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
                id="password"
                className="border w-[438px] h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-10  placeholder:text-black"
                placeholder="Password"
              />
            )}
          />
          <button
            type="button"
            className="absolute right-3 top-[27%] transform -translate-y-1/2 text-sm text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
          {errors.password && (
            <p className="text-sm text-orange-700 mt-[-35px] mb-3">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="w-full py-4 px-[190px] bg-[var(--color)]  text-white rounded-2xl disabled:bg-gray-400 disabled:cursor-not-allowed hover:text-[var(--color)] hover:bg-white hover:border hover:border-[var(--color)] transition-colors ease-in duration-300"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
