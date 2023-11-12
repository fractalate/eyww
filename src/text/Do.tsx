import { PropsWithChildren, useContext } from "react";
import { ColorDo } from "../Contexts";

export default function Do({ children }: PropsWithChildren) {
  const actorTextColor = useContext(ColorDo);

  return <span className={ actorTextColor }>
    { children }
  </span>
}
