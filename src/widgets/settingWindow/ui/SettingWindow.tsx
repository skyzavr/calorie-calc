import { ChangeTheme } from '@features/theme';
import { ChangeLang } from '@features/language';
import { ChangeMeasure } from '@features/measureSystem';
import { IconButton, Text } from '@shared/ui';
import { useTranslate } from '@shared/lib/useTranslate';

import css from './settings.module.css';

type settingWindowProp = { handleModal: () => void };

export const SettingsWindow = ({ handleModal }: settingWindowProp) => {
  const { t } = useTranslate('settings');
  return (
    <div className={css.modalWrapper}>
      <IconButton sign="deleteSign" handleClick={handleModal} />
      <Text weight="bold" option="h1" type="h1">
        {t('header')}
      </Text>
      <div className={css.toggleWrapper}>
        <ChangeTheme />
        <ChangeLang />
        <ChangeMeasure />
      </div>
      <Text weight="light" option="p" type="text">
        {t('autosave')}
      </Text>
    </div>
  );
};
