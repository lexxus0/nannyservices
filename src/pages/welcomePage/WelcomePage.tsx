import img from "../../images/img.png";
import { GoArrowUpRight } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import ThemeSwitcher from "../../components/themeSwitcher/ThemeSwitcher";
import { RiCursorLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="flex h-[850px] relative">
      <div className="flex-1 bg-[var(--color)]  rounded-l-3xl  flex items-center justify-center text-white">
        <div className="px-[96px]">
          <h1 className="text-[72px] leading-none font-medium pb-7">
            Make Life Easier for the Family:
          </h1>
          <h3 className="text-3xl pb-[64px]">
            Find babysitters Online For All Occasions
          </h3>
          <NavLink
            to="/nannies"
            className="border w-[230px] h-[60px] px-[50px] py-[18px] rounded-[30px] border-solid border-[rgba(251,251,251,0.4)] font-medium text-[18px] flex justify-center items-center gap-2 group hover:text-[var(--color)] hover:bg-white transition-colors ease-in duration-300"
          >
            Get started
            <GoArrowUpRight className="text-2xl transition-transform group-hover:rotate-[45deg]" />
          </NavLink>
        </div>
      </div>
      <div
        className="flex-1 bg-cover bg-center rounded-r-3xl"
        style={{ backgroundImage: `url(${img})` }}
      >
        <RiCursorLine className="w-16 absolute right-3 top-[110px] text-white animate-cursorMove" />
        <div className="absolute top-24 right-3">
          <ThemeSwitcher />
        </div>

        <style>
          {`
            @keyframes cursorMove {
              0% {
                transform: translateY(0); 
              }
              50% {
                transform: translateY(10px);
              }
              100% {
                transform: translateY(0); 
              }
            }

            .animate-cursorMove {
              animation: cursorMove 1s ease-in-out infinite; 
            }
          `}
        </style>
        <div className="bg-white absolute bottom-12 right-12 flex p-9 justify-center items-center gap-4 rounded-[20px]">
          <div className="bg-[var(--color)]  flex justify-center items-center text-white text-xl  w-14 h-14 rounded-xl">
            <FaCheck />
          </div>
          <div className="flex-col">
            <p className="text-[rgba(17,16,28,0.5)] text-[16px]">
              Experiences nannies
            </p>
            <p className="font-bold text-2xl text-[#11101c]">15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
