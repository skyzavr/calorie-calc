import { ReactElement } from 'react';

import { Modal } from '@mui/material';
import css from './modal.module.css';

type modalProps = {
  children: ReactElement;
  open: boolean;
  onHandleOpen: () => void;
};

export const CustomModal = (props: modalProps) => {
  const { children, open, onHandleOpen } = props;

  if (!open) return null;

  return (
    <Modal open={open} onClose={onHandleOpen} className={css.wrapper}>
      <div>{children}</div>
    </Modal>
  );
};
