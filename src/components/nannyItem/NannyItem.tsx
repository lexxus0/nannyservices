import React, { useState } from "react";
import { Nanny } from "../../types/types";
import { IoIosStar } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { VscHeart } from "react-icons/vsc";
import { useAppDispatch, useAppSelector } from "../../store/tools/hooks";
import { selectFavorites } from "../../store/state/favourites/selectors";
import { toggleFavorite } from "../../store/state/favourites/slice";
import { selectIsLoggedIn } from "../../store/state/auth/selectors";
import { Bounce, ToastContainer, toast } from "react-toastify";
import AppointmentModal from "../modals/AppointmentModal";

const calculateAge = (birthday: string) => {
  const birthDate = new Date(birthday);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const convertRating = (rating: number): string => {
  return rating % 1 === 0 ? `${rating}.0` : rating.toString();
};

const CommaSeparatedList: React.FC<{ values: string[] }> = ({ values }) => (
  <div className="flex flex-wrap gap-2">
    {values.map((item, index) => (
      <span key={index} className="text-base">
        {item.charAt(0).toUpperCase() + item.slice(1)}
        {index < values.length - 1 && ", "}
      </span>
    ))}
  </div>
);

const InfoWrapper: React.FC<{ label: string; value: string | string[] }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex flex-row gap-[2px] px-[18px] py-3 rounded-[100px] bg-[#f2f4f7] mix-blend-multiply items-center">
      <span className="font-medium text-base text-[#8a8a89]">
        {label}:&nbsp;
      </span>
      {Array.isArray(value) ? (
        <CommaSeparatedList values={value} />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

interface NannyItemProps {
  nanny: Nanny;
}

const NannyItem: React.FC<NannyItemProps> = ({ nanny }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);
  const age = calculateAge(nanny.birthday);

  const dispatch = useAppDispatch();

  const favorites = useAppSelector(selectFavorites);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isFavorite = isLoggedIn && favorites.includes(nanny.name);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(nanny.name));
  };

  return (
    <li
      key={nanny.name}
      className="bg-[#fbfbfb] rounded-3xl p-6 w-[1184px] my-0 mx-auto relative"
    >
      <div className="flex relative">
        <div className="absolute">
          <div className="p-3 rounded-[30px] border-2 border-solid border-[rgba(240,63,59,0.2)] relative">
            <div className="absolute right-3 top-3 border-[3px] rounded-full w-4 h-4 bg-green-500 border-white"></div>
            <img
              src={nanny.avatar_url}
              alt={`${nanny.name}'s picture`}
              width={96}
              height={96}
              className="rounded-2xl"
            />
          </div>
        </div>
        <VscHeart
          className="absolute top-0 right-0 w-6 h-6 cursor-pointer text-red-300"
          onClick={() => {
            if (isLoggedIn) {
              handleFavoriteClick();
            } else {
              toast.warn("You have to login to proceed.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            }
          }}
          style={{ color: isFavorite ? "var(--color)" : "black" }}
        />
        <ToastContainer />

        <div className="ml-[144px] mb-6">
          <p className="font-medium text-base text-[#8a8a89]">Nanny</p>
          <p className="font-medium text-2xl">{nanny.name}</p>
        </div>
        <div className="font-medium flex items-start ml-auto mr-[74px]">
          <div className="flex items-center relative pr-2">
            <SlLocationPin className="mr-2" />
            <p>{nanny.location}</p>
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[16px]  bg-[#11101C] bg-opacity-20"></span>
          </div>
          <div className="flex items-center relative pr-2">
            <IoIosStar className="fill-yellow-300 mx-2" />
            <p>Rating: {nanny.rating}</p>
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[16px] bg-[#11101C] bg-opacity-20"></span>
          </div>
          <p className="ml-2">
            Price / 1 hour:{" "}
            <span className="text-[#38cd3e]">{nanny.price_per_hour}$</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 ml-[144px]">
        <InfoWrapper label="Age" value={age.toString()} />
        <InfoWrapper label="Experience" value={nanny.experience} />
        <InfoWrapper label="Kids Age" value={nanny.kids_age} />
        <InfoWrapper label="Characters" value={nanny.characters} />
        <InfoWrapper label="Education" value={nanny.education} />
        <p className="mt-6 text-[rgba(17,16,28,0.5)]">{nanny.about}</p>
        <button
          type="button"
          onClick={toggleShowMore}
          className={showMore ? "hidden" : "underline"}
        >
          Read more
        </button>
      </div>
      {showMore && (
        <>
          <ul className="my-12  ml-[144px]">
            {nanny.reviews.map((review) => {
              return (
                <li key={review.reviewer}>
                  <div className="flex items-center font-medium mb-4 mt-6">
                    <div className="rounded-full bg-[rgba(9,87,195,0.2)] w-11 h-11 flex items-center justify-center font-medium text-xl text-[#0957c3]">
                      {review.reviewer[0]}
                    </div>
                    <div className="flex flex-col ml-3">
                      <p>{review.reviewer}</p>
                      <div className="flex items-center gap-1">
                        <IoIosStar className="fill-yellow-300" />
                        <p>{convertRating(review.rating)}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[rgba(17,16,28,0.5)]">{review.comment}</p>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={toggleModal}
            className="rounded-[30px]  ml-[144px] px-7 py-3 bg-[var(--color)]  text-white hover:text-[var(--color)] hover:bg-white hover:border hover:border-[var(--color)] transition-colors ease-in duration-300"
          >
            Make an appointment
          </button>
          <AppointmentModal
            isOpen={isOpen}
            onClose={toggleModal}
            nanny={nanny}
          />
        </>
      )}
    </li>
  );
};

export default NannyItem;
