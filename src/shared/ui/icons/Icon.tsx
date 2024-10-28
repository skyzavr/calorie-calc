import { iconVariant } from '@type/type';

import { icons } from './icons';
import css from './icon.module.css';

type iconsProp = { sign: iconVariant };

export const Icons = ({ sign }: iconsProp) => (
  <span className={css.wrapper}>{icons[sign]}</span>
);
