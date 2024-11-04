//alias for clb for toggleButtonGroup
export type toggleBGClb = (
  event: React.MouseEvent<HTMLElement>,
  value: string
) => void;

//form update handler
export type userData = { [key: string]: string | number };
export type initValue = number | string;
export type onHandler = (data: userData) => void;
