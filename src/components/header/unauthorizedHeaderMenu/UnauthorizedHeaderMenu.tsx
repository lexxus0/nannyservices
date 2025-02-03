import { useState } from "react";
import RegisterModal from "../../modals/RegisterModal";
import LoginModal from "../../modals/LoginModal";

const UnauthorizedHeaderMenu = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <>
      <div className="flex gap-4">
        <button
          className="border border-solid border-[rgba(251,251,251,0.4)] rounded-[30px] px-[39px] py-3 bg-inherit hover:text-[var(--color)] hover:bg-white transition-colors ease-in duration-300"
          onClick={openLoginModal}
        >
          Log In
        </button>
        <button
          className="border border-solid border-[rgba(251,251,251,0.4)] rounded-[30px] px-[39px] py-3 bg-[var(--color)] hover:text-[var(--color)] hover:bg-white transition-colors ease-in duration-300"
          onClick={openRegisterModal}
        >
          Registration
        </button>
      </div>
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
      />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default UnauthorizedHeaderMenu;
