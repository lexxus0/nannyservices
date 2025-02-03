import { CiUser } from "react-icons/ci";
import { selectUser } from "../../../store/state/auth/selectors";
import { useAppDispatch, useAppSelector } from "../../../store/tools/hooks";
import { logoutUser } from "../../../store/state/auth/operations";

const AuthorizedHeaderMenu = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const onClick = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="flex items-end justify-center">
      <div className="size-10 bg-white flex items-center justify-center rounded-xl mb-1.5">
        <CiUser className="text-black fill-red-700" />
      </div>
      <p className="mb-4 ml-2.5 ">{user.name}</p>
      <button
        className="font-medium ml-3.5 border px-[39px] py-3.5 rounded-[30px] border-solid border-[rgba(251,251,251,0.4)] hover:text-[var(--color)] hover:bg-white transition-colors ease-in duration-300"
        onClick={onClick}
      >
        Log out
      </button>
    </div>
  );
};

export default AuthorizedHeaderMenu;
