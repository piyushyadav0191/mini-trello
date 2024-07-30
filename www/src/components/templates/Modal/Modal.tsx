import { Dialog, Transition } from '@headlessui/react';
import { Fragment, type FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ onCloseModal, isOpen, children }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={onCloseModal} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 overflow-y-auto">{children}</div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
