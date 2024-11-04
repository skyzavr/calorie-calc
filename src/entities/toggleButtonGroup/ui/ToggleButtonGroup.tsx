import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { Text } from '@shared/ui';
import css from './tbg.module.css';

type optionsParams = { key: string; buttonValue: string };

type toggleBGProps = {
  value: string;
  onSetValue: (value: string) => void;
  title: string;
  params: optionsParams[];
};

type handleChange = (_event: React.MouseEvent, newValue: string) => void;

export const ToggleButtonGroupComponent = (props: toggleBGProps) => {
  const { value, onSetValue, title, params } = props;

  const [currentValue, setCurrentValue] = useState(value);

  const onChangeHandler: handleChange = (_event, newValue) => {
    if (newValue === currentValue || newValue === null) return;
    setCurrentValue(newValue);
    onSetValue(newValue);
  };

  return (
    <div className={css.wrapper}>
      <Text weight="bold" option="p" type="body">
        {title}
      </Text>
      <ToggleButtonGroup
        className={css.toggleGroup}
        value={value}
        onChange={onChangeHandler}
        color="primary"
        exclusive
      >
        {params.map(({ key, buttonValue }) => (
          <ToggleButton value={key} key={key} className={css.btnGroup}>
            {buttonValue}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};
