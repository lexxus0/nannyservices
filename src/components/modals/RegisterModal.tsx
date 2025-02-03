import RegisterForm from "../forms/registerForm/RegisterForm";
import Modal from "./Modal";

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <RegisterForm />
    </Modal>
  );
};

export default RegisterModal;
