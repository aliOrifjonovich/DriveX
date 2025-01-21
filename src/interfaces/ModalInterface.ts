import React from 'react';
export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export interface RegisterProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSignup: React.Dispatch<React.SetStateAction<boolean>>;
}
