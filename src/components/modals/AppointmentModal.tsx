import { Nanny } from "../../types/types";
import AppointmentForm from "../forms/appointmentForm/AppointmentForm";
import Modal from "../modals/Modal";

type ModalProps = {
  nanny: Nanny;
  isOpen: boolean;
  onClose: () => void;
};

const AppointmentModal: React.FC<ModalProps> = ({ isOpen, onClose, nanny }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AppointmentForm nanny={nanny} onClose={onClose} />
    </Modal>
  );
};

export default AppointmentModal;
