import { useRef, type ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>
  );
}
