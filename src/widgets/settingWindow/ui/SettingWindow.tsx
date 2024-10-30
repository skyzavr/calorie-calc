import { ChangeTheme } from '@features/theme';
import { ChangeLang } from '@features/language';
import { ChangeMeasure } from '@features/measureSystem';
import { IconButton, Text } from '@shared/ui';

import css from './settings.module.css';

type settingWindowProp = { handleModal: () => void };

export const SettingsWindow = ({ handleModal }: settingWindowProp) => {
  return (
    <div className={css.modalWrapper}>
      <IconButton sign="deleteSign" handleClick={handleModal} />
      <Text weight="bold" option="h1" type="h1">
        Settings
      </Text>
      <div className={css.toggleWrapper}>
        <ChangeTheme />
        <ChangeLang />
        <ChangeMeasure />
      </div>
      <Text weight="light" option="p" type="text">
        We have auto save here
      </Text>
    </div>
  );
};
