import { createElement } from 'react';
import classNames from 'classnames';

import { textOption, textType, textWeight } from '@type/type';
import css from './text.module.css';

type textProps = {
  children: string;
  type: textType;
  weight?: textWeight;
  option?: textOption;
};

export const Text = (props: textProps) => {
  const { children, type, weight = 'regular', option = 'p' } = props;
  const clName = classNames(
    css[type],
    css[weight],
    option === 'p' ? css.lineHeight : '',
    css.typo
  );

  return createElement(option, { className: clName }, children);
};
