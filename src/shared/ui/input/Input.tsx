import { ChangeEvent, useEffect, useState } from 'react';
import { TFunction } from 'i18next';

import { initValue, onHandler } from '@type/functions';
import css from './input.module.css';

type inputProps = {
  name: string;
  min: number;
  title: string[];
  init: initValue;
  onHandler: onHandler;
  t: TFunction;
};

export const Input = (props: inputProps) => {
  const { name, min, title, init = '', onHandler, t } = props;

  const [value, setValue] = useState<initValue>(init);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [error, setError] = useState({ error: '', isError: false });
  const onSetError = (error: boolean, errorText: string) =>
    setError({ isError: error, error: errorText });

  const errorHandler = () => {
    if (value === null) return;
    if (Number(value) < min) {
      onSetError(true, t('inputValidation.errorMessage', { min }));
      onHandler({ [name]: '' });
      return;
    }
    return onHandler({ [name]: Number(value) });
  };

  const onBlurHandler = () => errorHandler();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onSetError(false, '');
    setValue(e.target.value);
  };

  const label = (value: initValue) => {
    const [startSent, endSent] = title;
    return !value ? `${startSent}...` : `${startSent} ${value} ${endSent}`;
  };

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (!isFirstRender) errorHandler();
  }, [min]);

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        {!error.isError ? (
          label(value)
        ) : (
          <span className={css.error}>{error.error}</span>
        )}
      </label>
      <div className={css.inputWrapper}>
        <input
          type="number"
          value={value}
          onChange={onChangeHandler}
          className={css.input}
          onBlur={onBlurHandler}
        />
      </div>
    </div>
  );
};
