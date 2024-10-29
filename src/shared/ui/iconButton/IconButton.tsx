import { iconVariant } from '@type/type';

import { Icons } from '../icons/Icon';
import css from './iconBtn.module.css';

type iconBtnProps = {
  sign: iconVariant;
  handleClick: () => void;
};

export const IconButton = (props: iconBtnProps) => {
  const { sign, handleClick } = props;
  return (
    <button className={css.wrapper} onClick={handleClick}>
      <Icons sign={sign} />
    </button>
  );
};
