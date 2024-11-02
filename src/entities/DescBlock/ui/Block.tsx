import { Text } from '@shared/ui';
import css from './block.module.css';

type blockProps = {
  value: number;
  text: string;
  title: string;
};
export const Block = (props: blockProps) => {
  const { title, value, text } = props;
  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <Text type="h4">{title}</Text>
        <Text weight="bold" type="h4">
          {value.toString()}
        </Text>
      </div>
      <Text type="body">{text}</Text>
    </div>
  );
};
