//alias for clb for toggleButtonGroup
export type toggleBGClb = (
  event: React.MouseEvent<HTMLElement>,
  value: string
) => void;

//form update handler
export type initValue = number | string;
export type onHandler = (data: { [name: string]: initValue }) => void;
