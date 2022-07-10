import { MouseEvent } from "react";

export const onClickNewTobAnchor = (
  e: MouseEvent<HTMLAnchorElement>,
  link: string
) => {
  e.preventDefault();
  window.open(link);
};
