import classNames from 'classnames';

import { btnSize, btnVariants } from '@type/type';
import css from './button.module.css';

type btnProps = {
  children: string;
  onHandler: () => void;
  isDisabled?: boolean;
  btnType?: btnVariants;
  size?: btnSize;
};

export const Button = (props: btnProps) => {
  const {
    children,
    onHandler,
    isDisabled = false,
    btnType = 'none',
    size = 'default',
  } = props;

  const clName = classNames(css.button, css[btnType], css[size]);

  return (
    <button onClick={onHandler} className={clName} disabled={isDisabled}>
      {children}
    </button>
  );
};
