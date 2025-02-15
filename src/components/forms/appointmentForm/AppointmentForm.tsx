import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Nanny } from "../../../types/types";
import { Bounce, toast } from "react-toastify";
import { appointmentValidationSchema } from "../../../schemas/schemas";

type AppointmentFormProps = {
  nanny: Nanny;
  onClose: () => void;
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  nanny,
  onClose,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentValidationSchema),
    defaultValues: {
      address: "",
      tel: "",
      childAge: undefined,
      time: undefined,
      email: "",
      parentName: "",
      comment: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (_data: {
    address: string;
    tel: string;
    childAge: number;
    time: Date;
    email: string;
    parentName: string;
    comment?: string;
  }) => {
    setTimeout(onClose, 1500);
    toast.success(`Your data has been successfully sent to ${nanny.name}!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className=" bg-white rounded-3xl w-[600px] p-16 overflow-hidden">
      <h2 className="font-medium text-4xl pr-14 mb-5">
        Make an appointment with a babysitter
      </h2>
      <p className="text-[rgba(17,16,28,0.5)] mb-10">
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3.5 items-center mb-10">
          <img
            src={nanny.avatar_url}
            alt={nanny.name}
            width={44}
            height={44}
            className="rounded-2xl"
          />
          <div className="flex flex-col">
            <p className="font-medium text-xs text-[#8a8a89]">Your nanny</p>
            <p className="font-medium text-base text-[#11101c]">{nanny.name}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex flex-col">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Address"
                  className="border w-[232px] h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5 placeholder:text-black"
                />
              )}
            />
            {errors.address && (
              <p className="text-sm text-orange-700 mt-[-15px] mb-3">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <Controller
              name="tel"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  placeholder="+380"
                  className="border w-[232px] h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5 placeholder:text-black"
                />
              )}
            />
            {errors.tel && (
              <p className="text-sm text-orange-700 mt-[-15px] mb-3">
                {errors.tel.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <Controller
              name="childAge"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="string"
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  placeholder="Child age"
                  className="border w-[232px] h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5 placeholder:text-black"
                />
              )}
            />
            {errors.childAge && (
              <p className="text-sm text-orange-700 mt-[-15px] mb-3">
                {errors.childAge.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <ReactDatePicker
                  selected={field.value ? new Date(field.value) : null}
                  onChange={(date: Date | null) => field.onChange(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={10}
                  timeFormat="HH:mm"
                  dateFormat="HH:mm"
                  placeholderText="00:00"
                  className="border w-[232px] h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] placeholder:text-black"
                  ref={field.ref}
                />
              )}
            />
            {errors.time && (
              <p className="text-sm text-orange-700 mt-[5px] mb-3">
                {errors.time.message}
              </p>
            )}
          </div>
        </div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Email"
              className="border w-full h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5 placeholder:text-black"
            />
          )}
        />
        {errors.email && (
          <p className="text-sm text-orange-700 mt-[-15px] mb-3">
            {errors.email.message}
          </p>
        )}
        <Controller
          name="parentName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Father or mother name"
              className="border w-full h-[52px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5 placeholder:text-black"
            />
          )}
        />
        {errors.parentName && (
          <p className="text-sm text-orange-700 mt-[-15px] mb-3">
            {errors.parentName.message}
          </p>
        )}
        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Comment"
              className="border w-full h-[100px] pl-[18px] py-4 rounded-xl border-solid border-[rgba(17,16,28,0.1)] mb-5 placeholder:text-black resize-none"
            />
          )}
        />
        {errors.comment && (
          <p className="text-sm mt-[-15px] mb-3 text-orange-700">
            {errors.comment.message}
          </p>
        )}
        <button
          type="submit"
          className="rounded-[30px] px-7 py-3 bg-[var(--color)]  text-white w-full hover:text-[var(--color)] hover:bg-white hover:border hover:border-[var(--color)] transition-colors ease-in duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
