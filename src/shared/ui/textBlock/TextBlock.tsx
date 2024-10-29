import { Text } from '../text/Text';
import css from './text.module.css';

type textProps = {
  title: string;
  desc: string;
};

export const TextBlock = (props: textProps) => {
  const { title, desc } = props;
  return (
    <div className={css.wrapper}>
      <Text type="body" weight="bold">
        {title}
      </Text>
      <Text type="bodyMed" weight="regular">
        {desc}
      </Text>
    </div>
  );
};
