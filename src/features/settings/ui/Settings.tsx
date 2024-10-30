import { useState } from 'react';

import { SettingsWindow } from '@widgets/settingWindow';
import { CustomModal, IconButton } from '@shared/ui';

export const Settings = () => {
  const [isShowSettings, setIsShowSettings] = useState<boolean>(false);

  const handleModal = () => setIsShowSettings((prev) => !prev);

  return (
    <>
      <IconButton sign="settingSign" handleClick={handleModal} />
      <CustomModal open={isShowSettings} onHandleOpen={handleModal}>
        <SettingsWindow handleModal={handleModal} />
      </CustomModal>
    </>
  );
};
