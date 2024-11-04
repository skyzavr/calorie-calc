import { useTranslation } from 'react-i18next';

export const useTranslate = (value: string) => {
  const { t } = useTranslation(undefined, { keyPrefix: value });
  return { t };
};
